<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';

	// Income tax calculator, FY 2026-27 (AY 2027-28), Income-tax Act, 2025.
	// Budget 2026 changed no slab, rebate or deduction. All maths runs
	// in the browser; nothing is uploaded.

	const inr = (n: number) => '₹' + Math.round(n).toLocaleString('en-IN');
	const num = (n: number) => Math.round(n).toLocaleString('en-IN');

	type Slab = { upTo: number; rate: number };
	type Row = { label: string; rate: number; tax: number };

	const NEW_SLABS: Slab[] = [
		{ upTo: 400000, rate: 0 },
		{ upTo: 800000, rate: 0.05 },
		{ upTo: 1200000, rate: 0.1 },
		{ upTo: 1600000, rate: 0.15 },
		{ upTo: 2000000, rate: 0.2 },
		{ upTo: 2400000, rate: 0.25 },
		{ upTo: Number.POSITIVE_INFINITY, rate: 0.3 }
	];

	const ages = [
		{ id: 'under60', label: 'Under 60', exemption: 250000 },
		{ id: '60to80', label: '60 – 80', exemption: 300000 },
		{ id: 'above80', label: 'Above 80', exemption: 500000 }
	] as const;
	type AgeId = (typeof ages)[number]['id'];

	let gross = $state(1500000);
	let age = $state<AgeId>('under60');
	let d80c = $state(0);
	let d80d = $state(0);
	let hra = $state(0);
	let other = $state(0);

	const g = $derived(Math.max(0, gross || 0));
	const c80c = $derived(Math.min(Math.max(0, d80c || 0), 150000));
	const c80d = $derived(Math.min(Math.max(0, d80d || 0), 100000));
	const cHra = $derived(Math.max(0, hra || 0));
	const cOther = $derived(Math.max(0, other || 0));
	const exemption = $derived(ages.find((a) => a.id === age)?.exemption ?? 250000);

	function slabRows(taxable: number, slabs: Slab[]): Row[] {
		const rows: Row[] = [];
		let prev = 0;
		for (const s of slabs) {
			const slice = Math.min(taxable, s.upTo) - prev;
			if (slice > 0) {
				const label =
					s.upTo === Number.POSITIVE_INFINITY
						? `Above ₹${num(prev)}`
						: `₹${num(prev)} – ₹${num(s.upTo)}`;
				rows.push({ label, rate: s.rate, tax: slice * s.rate });
			}
			prev = s.upTo;
			if (taxable <= s.upTo) break;
		}
		return rows;
	}

	function surchargeRate(taxable: number, regime: 'new' | 'old'): number {
		if (regime === 'new') {
			if (taxable > 20000000) return 0.25;
			if (taxable > 10000000) return 0.15;
			if (taxable > 5000000) return 0.1;
			return 0;
		}
		if (taxable > 50000000) return 0.37;
		if (taxable > 20000000) return 0.25;
		if (taxable > 10000000) return 0.15;
		if (taxable > 5000000) return 0.1;
		return 0;
	}

	type RegimeResult = {
		taxable: number;
		rows: Row[];
		slabTax: number;
		rebate: number;
		marginalRelief: boolean;
		taxAfterRebate: number;
		surchargeRate: number;
		surcharge: number;
		cess: number;
		total: number;
		effectiveRate: number;
	};

	function computeNew(): RegimeResult {
		const taxable = Math.max(0, g - 75000);
		const rows = slabRows(taxable, NEW_SLABS);
		const slabTax = rows.reduce((s, r) => s + r.tax, 0);
		let rebate = 0;
		let marginalRelief = false;
		let taxAfterRebate: number;
		if (taxable <= 1200000) {
			rebate = Math.min(slabTax, 60000);
			taxAfterRebate = slabTax - rebate;
		} else {
			// Marginal relief: tax cannot exceed the amount by which
			// income exceeds ₹12 lakh.
			const cap = taxable - 1200000;
			marginalRelief = slabTax > cap;
			taxAfterRebate = Math.min(slabTax, cap);
		}
		const sr = surchargeRate(taxable, 'new');
		const surcharge = taxAfterRebate * sr;
		const cess = (taxAfterRebate + surcharge) * 0.04;
		const total = taxAfterRebate + surcharge + cess;
		return { taxable, rows, slabTax, rebate, marginalRelief, taxAfterRebate, surchargeRate: sr, surcharge, cess, total, effectiveRate: g > 0 ? (total / g) * 100 : 0 };
	}

	function computeOld(): RegimeResult {
		const taxable = Math.max(0, g - 50000 - c80c - c80d - cHra - cOther);
		const slabs: Slab[] = [
			{ upTo: exemption, rate: 0 },
			{ upTo: 500000, rate: 0.05 },
			{ upTo: 1000000, rate: 0.2 },
			{ upTo: Number.POSITIVE_INFINITY, rate: 0.3 }
		];
		const rows = slabRows(taxable, slabs);
		const slabTax = rows.reduce((s, r) => s + r.tax, 0);
		const rebate = taxable <= 500000 ? Math.min(slabTax, 12500) : 0;
		const taxAfterRebate = slabTax - rebate;
		const sr = surchargeRate(taxable, 'old');
		const surcharge = taxAfterRebate * sr;
		const cess = (taxAfterRebate + surcharge) * 0.04;
		const total = taxAfterRebate + surcharge + cess;
		return { taxable, rows, slabTax, rebate, marginalRelief: false, taxAfterRebate, surchargeRate: sr, surcharge, cess, total, effectiveRate: g > 0 ? (total / g) * 100 : 0 };
	}

	const resultNew = $derived(computeNew());
	const resultOld = $derived(computeOld());

	const verdict = $derived.by(() => {
		const diff = Math.abs(resultNew.total - resultOld.total);
		if (diff < 1) return { text: 'Both regimes give the same result for you.', save: 0, better: '' };
		if (resultNew.total < resultOld.total)
			return { text: `You save ${inr(diff)} with the NEW regime.`, save: diff, better: 'new' };
		return { text: `You save ${inr(diff)} with the OLD regime.`, save: diff, better: 'old' };
	});

	const schema = {
		'@context': 'https://schema.org',
		'@type': 'WebApplication',
		name: 'Income Tax Calculator — MSY Law',
		applicationCategory: 'FinanceApplication',
		operatingSystem: 'Web browser',
		url: 'https://tax-lawyer-landing.pages.dev/tools/income-tax-calculator',
		description:
			'Compare income tax under the old and new regimes for FY 2026-27 (Income-tax Act, 2025): slabs, Section 87A rebate and marginal relief, cess and surcharge.',
		offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' }
	};
</script>


{@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}

<PageHero
	eyebrow="Tax Tools · Income Tax Calculator"
	title="Old regime or new regime? See the exact difference."
	subtitle="Enter your salary and deductions. We show both regimes slab by slab — rebate, cess and surcharge included — so you can see the rupee difference before you choose in your ITR."
	crumb="Income Tax Calculator"
/>

<section class="bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-[380px_1fr]">
			<!-- Inputs -->
			<Reveal>
				<div class="rounded-3xl border border-black/5 bg-cream/50 p-6 sm:p-7 lg:sticky lg:top-28">
					<h2 class="font-serif text-[22px] font-semibold">Your details</h2>
					<p class="mt-1 text-[13.5px] text-muted">FY 2026-27 · Income-tax Act, 2025</p>

					<label class="mt-6 block">
						<span class="mb-1.5 block text-[13px] font-bold">Annual gross salary *</span>
						<input bind:value={gross} type="number" min="0" inputmode="numeric" placeholder="15,00,000" class="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-[15px] outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/30" />
					</label>

					<span class="mt-5 mb-1.5 block text-[13px] font-bold">Age group</span>
					<div class="grid grid-cols-3 gap-2" role="group" aria-label="Age group">
						{#each ages as a}
							<button
								type="button"
								onclick={() => (age = a.id)}
								aria-pressed={age === a.id}
								class="rounded-xl border px-2 py-2.5 text-[13px] font-semibold transition {age === a.id ? 'border-navy bg-navy text-white' : 'border-navy/15 bg-white text-navy hover:border-leaf'}"
							>
								{a.label}
							</button>
						{/each}
					</div>
					<p class="mt-1.5 text-[12.5px] text-muted">Senior basic exemption (₹3 lakh / ₹5 lakh) applies to the old regime only.</p>

					<div class="mt-5 rounded-2xl bg-white p-4 ring-1 ring-black/5">
						<p class="text-[13px] font-bold">Deductions — old regime only</p>
						<p class="mt-0.5 text-[12.5px] text-muted">The new regime does not allow these deductions (only the ₹75,000 standard deduction).</p>
						<label class="mt-4 block">
							<span class="mb-1.5 block text-[13px] font-bold">Section 80C <span class="font-normal text-muted">(max ₹1,50,000)</span></span>
							<input bind:value={d80c} type="number" min="0" max="150000" inputmode="numeric" placeholder="0" class="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-[15px] outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/30" />
						</label>
						<label class="mt-4 block">
							<span class="mb-1.5 block text-[13px] font-bold">Section 80D — health insurance <span class="font-normal text-muted">(max ₹1,00,000)</span></span>
							<input bind:value={d80d} type="number" min="0" max="100000" inputmode="numeric" placeholder="0" class="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-[15px] outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/30" />
							<span class="mt-1 block text-[12px] text-muted">Eligible limit is ₹25,000 (₹50,000 for senior citizens). Enter your eligible amount.</span>
						</label>
						<label class="mt-4 block">
							<span class="mb-1.5 block text-[13px] font-bold">HRA exemption</span>
							<input bind:value={hra} type="number" min="0" inputmode="numeric" placeholder="0" class="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-[15px] outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/30" />
						</label>
						<label class="mt-4 block">
							<span class="mb-1.5 block text-[13px] font-bold">Other deductions <span class="font-normal text-muted">(80TTA, 80G, etc.)</span></span>
							<input bind:value={other} type="number" min="0" inputmode="numeric" placeholder="0" class="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-[15px] outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/30" />
						</label>
					</div>
				</div>
			</Reveal>

			<!-- Results -->
			<div>
				<Reveal>
					<div class="rounded-3xl bg-navy px-6 py-6 text-white sm:px-8">
						<p class="text-[13px] font-semibold tracking-wide text-white/70 uppercase">Your result — FY 2026-27</p>
						<p class="mt-2 font-serif text-[26px] leading-snug font-semibold sm:text-[30px]">{verdict.text}</p>
						<p class="mt-2 text-[14px] text-white/75">
							New regime: <strong class="text-white">{inr(resultNew.total)}</strong>
							<span class="mx-2 text-white/40">·</span>
							Old regime: <strong class="text-white">{inr(resultOld.total)}</strong>
						</p>
					</div>
				</Reveal>

				<div class="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
					{#each [{ key: 'new', title: 'New regime', note: 'Standard deduction ₹75,000 · no 80C / 80D / HRA', r: resultNew }, { key: 'old', title: 'Old regime', note: 'Standard deduction ₹50,000 · deductions applied', r: resultOld }] as reg}
						<Reveal>
							<article class="flex h-full flex-col rounded-3xl border border-black/5 bg-cream/50 p-6 sm:p-7 {verdict.better === reg.key ? 'ring-2 ring-leaf' : ''}">
								<div class="flex items-start justify-between gap-3">
									<div>
										<h3 class="font-serif text-[22px] font-semibold">{reg.title}</h3>
										<p class="mt-1 text-[13px] text-muted">{reg.note}</p>
									</div>
									{#if verdict.better === reg.key}
										<span class="shrink-0 rounded-full bg-leaf px-3 py-1 text-[11px] font-bold tracking-wide text-navy-3 uppercase">Lower tax</span>
									{/if}
								</div>
								<p class="mt-5 font-serif text-[34px] leading-none font-bold text-navy">{inr(reg.r.total)}</p>
								<p class="mt-1.5 text-[13px] text-muted">
									Taxable income {inr(reg.r.taxable)}
									<span class="mx-1.5 text-muted/50">·</span>
									Effective rate {reg.r.effectiveRate.toFixed(2)}%
								</p>
								<table class="mt-5 w-full text-[13.5px]">
									<thead>
										<tr class="border-b border-black/10 text-left text-[12px] tracking-wide text-muted uppercase">
											<th class="py-2 font-semibold">Slab</th>
											<th class="py-2 text-right font-semibold">Rate</th>
											<th class="py-2 text-right font-semibold">Tax</th>
										</tr>
									</thead>
									<tbody>
										{#each reg.r.rows as row}
											<tr class="border-b border-black/5">
												<td class="py-2 pr-2">{row.label}</td>
												<td class="py-2 text-right">{row.rate * 100}%</td>
												<td class="py-2 text-right font-semibold">{inr(row.tax)}</td>
											</tr>
										{/each}
										<tr class="border-b border-black/5">
											<td class="py-2 pr-2">Tax before rebate</td>
											<td></td>
											<td class="py-2 text-right font-semibold">{inr(reg.r.slabTax)}</td>
										</tr>
										{#if reg.r.rebate > 0}
											<tr class="border-b border-black/5 text-leaf-dark">
												<td class="py-2 pr-2">Section 87A rebate</td>
												<td></td>
												<td class="py-2 text-right font-semibold">− {inr(reg.r.rebate)}</td>
											</tr>
										{/if}
										{#if reg.r.marginalRelief}
											<tr class="border-b border-black/5 text-leaf-dark">
												<td class="py-2 pr-2" colspan="2">Marginal relief — tax capped at income above ₹12 lakh</td>
												<td class="py-2 text-right font-semibold">Applied</td>
											</tr>
										{/if}
										{#if reg.r.surcharge > 0}
											<tr class="border-b border-black/5">
												<td class="py-2 pr-2">Surcharge ({reg.r.surchargeRate * 100}%)</td>
												<td></td>
												<td class="py-2 text-right font-semibold">{inr(reg.r.surcharge)}</td>
											</tr>
										{/if}
										<tr class="border-b border-black/5">
											<td class="py-2 pr-2">Health &amp; education cess (4%)</td>
											<td></td>
											<td class="py-2 text-right font-semibold">{inr(reg.r.cess)}</td>
										</tr>
										<tr>
											<td class="py-2.5 pr-2 font-bold">Total tax</td>
											<td></td>
											<td class="py-2.5 text-right font-bold text-navy">{inr(reg.r.total)}</td>
										</tr>
									</tbody>
								</table>
							</article>
						</Reveal>
					{/each}
				</div>

				<Reveal class="mt-6">
					<div class="rounded-2xl border border-black/5 bg-white p-6">
						<h3 class="text-[15px] font-bold">What this does not include</h3>
						<ul class="mt-3 space-y-2 text-[14px] leading-relaxed text-muted">
							<li class="flex items-start gap-2.5"><span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf/20 text-leaf-dark"><Icon name="check" class="h-3 w-3" /></span>Income other than salary — capital gains, business income and special-rate income are taxed separately, and the Section 87A rebate does not apply to them.</li>
							<li class="flex items-start gap-2.5"><span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf/20 text-leaf-dark"><Icon name="check" class="h-3 w-3" /></span>Surcharge marginal relief is not modelled — at very high incomes the surcharge shown may be slightly high.</li>
							<li class="flex items-start gap-2.5"><span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf/20 text-leaf-dark"><Icon name="check" class="h-3 w-3" /></span>Employer deductions such as NPS (80CCD) and professional tax are not included.</li>
						</ul>
					</div>
				</Reveal>

				<Reveal class="mt-6">
					<div class="rounded-2xl border border-gold/40 bg-gold/10 px-6 py-5">
						<p class="text-[14px] leading-relaxed text-ink/85">
							<strong>Estimate only — not tax advice.</strong> Confirm with a professional before acting. Regime choice also depends on your deductions, capital gains and future income — not just this year's salary.
						</p>
						<div class="mt-4 flex flex-col gap-3 sm:flex-row">
							<a href="/free-consultation" class="rounded-full bg-navy px-7 py-3 text-center text-[14px] font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-navy-3">Talk to a lawyer about this result</a>
							<a href="/tools/advance-tax-calculator" class="rounded-full border border-navy/20 bg-white px-7 py-3 text-center text-[14px] font-semibold text-navy transition hover:bg-cream">Work out your advance tax →</a>
						</div>
					</div>
				</Reveal>
			</div>
		</div>
	</div>
</section>

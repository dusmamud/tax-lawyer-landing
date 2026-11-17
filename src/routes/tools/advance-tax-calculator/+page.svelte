<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';

	// Advance tax calculator, FY 2026-27. Instalments are cumulative:
	// 15 Jun 15%, 15 Sep 45%, 15 Dec 75%, 15 Mar 100%. Advance tax is
	// due only when tax after TDS is ₹10,000 or more. Interest is 1%
	// per month on a shortfall or delay.

	const inr = (n: number) => '₹' + Math.round(n).toLocaleString('en-IN');

	let liability = $state(100000);
	let tds = $state(0);

	const total = $derived(Math.max(0, liability || 0));
	const paid = $derived(Math.min(Math.max(0, tds || 0), total));
	const net = $derived(Math.max(0, total - paid));
	const due = $derived(net >= 10000 ? net : 0);

	const dates = [
		{ label: '1st instalment', date: '15 June 2026', pct: 15 },
		{ label: '2nd instalment', date: '15 September 2026', pct: 45 },
		{ label: '3rd instalment', date: '15 December 2026', pct: 75 },
		{ label: '4th instalment', date: '15 March 2027', pct: 100 }
	] as const;

	const instalments = $derived(
		dates.map((d, i) => {
			const cumulative = (due * d.pct) / 100;
			const prev = i === 0 ? 0 : (due * dates[i - 1].pct) / 100;
			return { ...d, cumulative, payable: cumulative - prev };
		})
	);

	const schema = {
		'@context': 'https://schema.org',
		'@type': 'WebApplication',
		name: 'Advance Tax Calculator — MSY Law',
		applicationCategory: 'FinanceApplication',
		operatingSystem: 'Web browser',
		url: 'https://tax-lawyer-landing.pages.dev/tools/advance-tax-calculator',
		description:
			'Work out advance tax for FY 2026-27: the four instalment dates (15 June, 15 September, 15 December, 15 March) and how much is due on each.',
		offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' }
	};
</script>

<svelte:head>
	<title>Advance Tax Calculator FY 2026-27 — Instalment Dates &amp; Amounts | MSY Law</title>
	<meta name="description" content="Work out your advance tax for FY 2026-27: how much is due on 15 June, 15 September, 15 December and 15 March, and whether the ₹10,000 threshold applies. Free, private, instant." />
</svelte:head>

{@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}

<PageHero
	eyebrow="Tax Tools · Advance Tax Calculator"
	title="How much advance tax, and when?"
	subtitle="Enter your estimated tax for the year and what TDS has already covered. We work out the four instalments — and whether advance tax is due at all."
	crumb="Advance Tax Calculator"
/>

<section class="bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-3xl px-4 sm:px-5 lg:px-8">
		<Reveal>
			<div class="rounded-3xl border border-black/5 bg-cream/50 p-6 sm:p-8">
				<div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
					<label class="block">
						<span class="mb-1.5 block text-[13px] font-bold">Estimated total tax for FY 2026-27 *</span>
						<input bind:value={liability} type="number" min="0" inputmode="numeric" placeholder="1,00,000" class="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-[15px] outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/30" />
						<span class="mt-1 block text-[12.5px] text-muted">Your full year's income-tax liability, before TDS.</span>
					</label>
					<label class="block">
						<span class="mb-1.5 block text-[13px] font-bold">Tax already paid via TDS</span>
						<input bind:value={tds} type="number" min="0" inputmode="numeric" placeholder="0" class="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-[15px] outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/30" />
						<span class="mt-1 block text-[12.5px] text-muted">TDS deducted by your employer, clients or bank.</span>
					</label>
				</div>

				{#if due > 0}
					<div class="mt-7 rounded-2xl bg-navy px-6 py-5 text-white">
						<p class="text-[13px] font-semibold tracking-wide text-white/70 uppercase">Advance tax payable</p>
						<p class="mt-1 font-serif text-[32px] leading-none font-bold">{inr(due)}</p>
						<p class="mt-2 text-[14px] text-white/75">Total tax {inr(total)} − TDS {inr(paid)} = {inr(net)} to pay in instalments.</p>
					</div>

					<table class="mt-6 w-full text-[14px]">
						<thead>
							<tr class="border-b border-black/10 text-left text-[12px] tracking-wide text-muted uppercase">
								<th class="py-2.5 font-semibold">Due date</th>
								<th class="py-2.5 text-right font-semibold">Cumulative</th>
								<th class="py-2.5 text-right font-semibold">Pay this time</th>
							</tr>
						</thead>
						<tbody>
							{#each instalments as inst}
								<tr class="border-b border-black/5">
									<td class="py-3 pr-2">
										<span class="block font-semibold">{inst.date}</span>
										<span class="text-[12.5px] text-muted">{inst.label} — {inst.pct}% of the year</span>
									</td>
									<td class="py-3 text-right">{inr(inst.cumulative)}</td>
									<td class="py-3 text-right font-bold text-navy">{inr(inst.payable)}</td>
								</tr>
							{/each}
						</tbody>
					</table>
					<p class="mt-3 text-[13px] leading-relaxed text-muted">
						Instalments are cumulative: by 15 September you should have paid 45% of the year's tax in total, not 45% more.
					</p>
				{:else}
					<div class="mt-7 rounded-2xl bg-leaf/15 px-6 py-5">
						<p class="font-serif text-[22px] font-semibold text-navy-3">No advance tax is due.</p>
						<p class="mt-1.5 text-[14px] leading-relaxed text-ink/80">
							Your net tax after TDS is {inr(net)} — below the ₹10,000 threshold, so advance tax does not apply. You will still pay the balance, if any, when you file your return.
						</p>
					</div>
				{/if}
			</div>
		</Reveal>

		<Reveal class="mt-6">
			<div class="rounded-2xl border border-black/5 bg-white p-6">
				<h2 class="text-[15px] font-bold">What happens if you pay late or short?</h2>
				<ul class="mt-3 space-y-2 text-[14px] leading-relaxed text-muted">
					<li class="flex items-start gap-2.5"><span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf/20 text-leaf-dark"><Icon name="check" class="h-3 w-3" /></span>Interest of 1% per month applies on the shortfall until it is paid.</li>
					<li class="flex items-start gap-2.5"><span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf/20 text-leaf-dark"><Icon name="check" class="h-3 w-3" /></span>Salaried taxpayers whose employer deducts full TDS usually have nothing to pay — this calculator is mainly for business, professional and other non-salary income.</li>
					<li class="flex items-start gap-2.5"><span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf/20 text-leaf-dark"><Icon name="check" class="h-3 w-3" /></span>Presumptive taxpayers (Sections 44AD / 44ADA) pay 100% in one instalment by 15 March.</li>
				</ul>
			</div>
		</Reveal>

		<Reveal class="mt-6">
			<div class="rounded-2xl border border-gold/40 bg-gold/10 px-6 py-5">
				<p class="text-[14px] leading-relaxed text-ink/85">
					<strong>Estimate only — not tax advice.</strong> Confirm with a professional before acting. If your income changes during the year, re-run the numbers — the instalments change with them.
				</p>
				<div class="mt-4 flex flex-col gap-3 sm:flex-row">
					<a href="/free-consultation" class="rounded-full bg-navy px-7 py-3 text-center text-[14px] font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-navy-3">Talk to a lawyer about this result</a>
					<a href="/tools/income-tax-calculator" class="rounded-full border border-navy/20 bg-white px-7 py-3 text-center text-[14px] font-semibold text-navy transition hover:bg-cream">Work out your total tax first →</a>
				</div>
			</div>
		</Reveal>
	</div>
</section>

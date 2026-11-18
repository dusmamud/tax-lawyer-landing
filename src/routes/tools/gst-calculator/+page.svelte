<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';

	// GST calculator. GST 2.0 main slabs are 5% / 18% / 40% from
	// 22 September 2025; 12% and 28% are legacy rates, kept for
	// older invoices. Intra-state GST splits equally into CGST + SGST;
	// inter-state GST is charged as IGST.

	const inr = (n: number) => '₹' + Math.round(n).toLocaleString('en-IN');

	const rates = [5, 12, 18, 28, 40];

	let amount = $state(100000);
	let rate = $state(18);
	let inclusive = $state(false);
	let interState = $state(false);

	const amt = $derived(Math.max(0, amount || 0));
	const result = $derived.by(() => {
		let base: number;
		let gst: number;
		if (inclusive) {
			base = amt / (1 + rate / 100);
			gst = amt - base;
		} else {
			base = amt;
			gst = (amt * rate) / 100;
		}
		const gstRounded = Math.round(gst);
		const cgst = Math.round(gstRounded / 2);
		const sgst = gstRounded - cgst;
		return {
			base: Math.round(base),
			gst: gstRounded,
			total: Math.round(base) + gstRounded,
			cgst,
			sgst,
			igst: gstRounded
		};
	});

	const schema = {
		'@context': 'https://schema.org',
		'@type': 'WebApplication',
		name: 'GST Calculator — MSY Law',
		applicationCategory: 'FinanceApplication',
		operatingSystem: 'Web browser',
		url: 'https://tax-lawyer-landing.pages.dev/tools/gst-calculator',
		description:
			'Add or remove GST from any amount at 5%, 12%, 18%, 28% or 40%, with the CGST + SGST split for intra-state sales or IGST for inter-state sales.',
		offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' }
	};
</script>


{@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}

<PageHero
	eyebrow="Tax Tools · GST Calculator"
	title="Add GST, remove GST, split it correctly."
	subtitle="Enter any amount, pick a rate, and see the GST — split into CGST + SGST for sales within your state, or IGST for sales across states."
	crumb="GST Calculator"
/>

<section class="bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-3xl px-4 sm:px-5 lg:px-8">
		<Reveal>
			<div class="rounded-3xl border border-black/5 bg-cream/50 p-6 sm:p-8">
				<label class="block">
					<span class="mb-1.5 block text-[13px] font-bold">Amount *</span>
					<input bind:value={amount} type="number" min="0" inputmode="numeric" placeholder="1,00,000" class="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-[15px] outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/30" />
				</label>

				<span class="mt-5 mb-1.5 block text-[13px] font-bold">GST rate</span>
				<div class="grid grid-cols-5 gap-2" role="group" aria-label="GST rate">
					{#each rates as r}
						<button
							type="button"
							onclick={() => (rate = r)}
							aria-pressed={rate === r}
							class="rounded-xl border px-2 py-3 text-[14px] font-bold transition {rate === r ? 'border-navy bg-navy text-white' : 'border-navy/15 bg-white text-navy hover:border-leaf'}"
						>
							{r}%
						</button>
					{/each}
				</div>
				<p class="mt-1.5 text-[12.5px] text-muted">GST 2.0 main slabs are 5%, 18% and 40% (from 22 September 2025). 12% and 28% are legacy rates, kept for older invoices.</p>

				<div class="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
					<div>
						<span class="mb-1.5 block text-[13px] font-bold">Amount type</span>
						<div class="grid grid-cols-2 gap-2" role="group" aria-label="Amount type">
							<button
								type="button"
								onclick={() => (inclusive = false)}
								aria-pressed={!inclusive}
								class="rounded-xl border px-2 py-3 text-[13.5px] font-semibold transition {!inclusive ? 'border-navy bg-navy text-white' : 'border-navy/15 bg-white text-navy hover:border-leaf'}"
							>
								Excluding GST
							</button>
							<button
								type="button"
								onclick={() => (inclusive = true)}
								aria-pressed={inclusive}
								class="rounded-xl border px-2 py-3 text-[13.5px] font-semibold transition {inclusive ? 'border-navy bg-navy text-white' : 'border-navy/15 bg-white text-navy hover:border-leaf'}"
							>
								Including GST
							</button>
						</div>
					</div>
					<div>
						<span class="mb-1.5 block text-[13px] font-bold">Supply type</span>
						<div class="grid grid-cols-2 gap-2" role="group" aria-label="Supply type">
							<button
								type="button"
								onclick={() => (interState = false)}
								aria-pressed={!interState}
								class="rounded-xl border px-2 py-3 text-[13.5px] font-semibold transition {!interState ? 'border-navy bg-navy text-white' : 'border-navy/15 bg-white text-navy hover:border-leaf'}"
							>
								Within state
							</button>
							<button
								type="button"
								onclick={() => (interState = true)}
								aria-pressed={interState}
								class="rounded-xl border px-2 py-3 text-[13.5px] font-semibold transition {interState ? 'border-navy bg-navy text-white' : 'border-navy/15 bg-white text-navy hover:border-leaf'}"
							>
								Inter-state
							</button>
						</div>
					</div>
				</div>

				<div class="mt-7 rounded-2xl bg-navy px-6 py-6 text-white">
					<div class="flex flex-wrap items-end justify-between gap-4">
						<div>
							<p class="text-[13px] font-semibold tracking-wide text-white/70 uppercase">GST amount ({rate}%)</p>
							<p class="mt-1 font-serif text-[34px] leading-none font-bold">{inr(result.gst)}</p>
						</div>
						<div class="text-right">
							<p class="text-[13px] font-semibold tracking-wide text-white/70 uppercase">Total {inclusive ? 'amount' : 'payable'}</p>
							<p class="mt-1 font-serif text-[26px] leading-none font-bold">{inr(result.total)}</p>
						</div>
					</div>
					<div class="mt-5 border-t border-white/15 pt-4 text-[14px] leading-relaxed text-white/80">
						<p>Base amount: <strong class="text-white">{inr(result.base)}</strong></p>
						{#if interState}
							<p class="mt-1">IGST ({rate}%): <strong class="text-white">{inr(result.igst)}</strong> — the full GST goes to the Centre on inter-state sales.</p>
						{:else}
							<p class="mt-1">CGST ({rate / 2}%): <strong class="text-white">{inr(result.cgst)}</strong> <span class="mx-1 text-white/40">·</span> SGST ({rate / 2}%): <strong class="text-white">{inr(result.sgst)}</strong> — split equally between Centre and State.</p>
						{/if}
					</div>
				</div>
			</div>
		</Reveal>

		<Reveal class="mt-6">
			<div class="rounded-2xl border border-black/5 bg-white p-6">
				<h2 class="text-[15px] font-bold">How the split works</h2>
				<ul class="mt-3 space-y-2 text-[14px] leading-relaxed text-muted">
					<li class="flex items-start gap-2.5"><span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf/20 text-leaf-dark"><Icon name="check" class="h-3 w-3" /></span>Within a state, GST is shared equally: half CGST (Centre) and half SGST (State).</li>
					<li class="flex items-start gap-2.5"><span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf/20 text-leaf-dark"><Icon name="check" class="h-3 w-3" /></span>Across states, the full GST is charged as IGST and the Centre settles the State's share.</li>
					<li class="flex items-start gap-2.5"><span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf/20 text-leaf-dark"><Icon name="check" class="h-3 w-3" /></span>Amounts are rounded to the nearest rupee; the CGST / SGST split may differ by ₹1 on odd amounts.</li>
				</ul>
			</div>
		</Reveal>

		<Reveal class="mt-6">
			<div class="rounded-2xl border border-gold/40 bg-gold/10 px-6 py-5">
				<p class="text-[14px] leading-relaxed text-ink/85">
					<strong>Estimate only — not tax advice.</strong> Confirm with a professional before acting. The correct rate also depends on the HSN / SAC classification of the goods or service — the rate you pick here is your responsibility.
				</p>
				<div class="mt-4 flex flex-col gap-3 sm:flex-row">
					<a href="/free-consultation" class="rounded-full bg-navy px-7 py-3 text-center text-[14px] font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-navy-3">Talk to a lawyer about this result</a>
					<a href="/practice-areas/gst-disputes" class="rounded-full border border-navy/20 bg-white px-7 py-3 text-center text-[14px] font-semibold text-navy transition hover:bg-cream">GST disputes we handle →</a>
				</div>
			</div>
		</Reveal>
	</div>
</section>

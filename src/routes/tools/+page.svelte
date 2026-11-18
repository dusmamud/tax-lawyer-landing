<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';

	const tools = [
		{
			href: '/tools/income-tax-calculator',
			name: 'Income Tax Calculator',
			tag: 'FY 2026-27',
			desc: 'Compare the new and old regimes side by side on your salary — slab by slab, with rebate, cess and surcharge included.',
			points: ['Old vs new regime, compared instantly', 'Section 87A rebate and marginal relief', 'Senior and super-senior slabs (old regime)'],
			icon: 'calc'
		},
		{
			href: '/tools/advance-tax-calculator',
			name: 'Advance Tax Calculator',
			tag: '4 instalments',
			desc: 'Work out your advance tax for the year and see exactly how much is due on each of the four instalment dates.',
			points: ['15 Jun, 15 Sep, 15 Dec, 15 Mar dates', 'Cumulative and per-instalment amounts', '₹10,000 threshold checked for you'],
			icon: 'calendar'
		},
		{
			href: '/tools/gst-calculator',
			name: 'GST Calculator',
			tag: 'GST 2.0',
			desc: 'Add or remove GST from any amount, at any slab — and see the CGST + SGST split or the IGST for inter-state sales.',
			points: ['5%, 12%, 18%, 28% and 40% rates', 'Exclusive or inclusive amounts', 'CGST + SGST or IGST split'],
			icon: 'percent'
		}
	];

	const helps = [
		{ title: 'Decide your regime', desc: 'See the exact rupee difference between the old and new regimes before you choose in your ITR.' },
		{ title: 'Never miss a date', desc: 'Advance tax instalments and the interest for paying late, worked out in one place.' },
		{ title: 'Quote with confidence', desc: 'Give customers GST-inclusive prices — or strip GST out of an invoice in seconds.' },
		{ title: 'Private by design', desc: 'Every calculation happens in your browser. Nothing you type is sent anywhere.' }
	];

	const schema = {
		'@context': 'https://schema.org',
		'@type': 'WebApplication',
		name: 'MSY Law Tax Tools',
		applicationCategory: 'FinanceApplication',
		operatingSystem: 'Web browser',
		url: 'https://tax-lawyer-landing.pages.dev/tools',
		description:
			'Free Indian tax calculators from MSY Law: income tax (old vs new regime), advance tax instalments and GST — built on FY 2026-27 rules under the Income-tax Act, 2025.',
		offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' }
	};
</script>


{@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}

<PageHero
	eyebrow="Tax Tools"
	title="Free tax calculators, built for India."
	subtitle="Compare regimes, plan advance tax and split GST — in seconds, with FY 2026-27 rules under the Income-tax Act, 2025. No sign-up, and nothing you type ever leaves your browser."
	crumb="Tax Tools"
/>

<section class="bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
		<div class="grid grid-cols-1 gap-5 md:grid-cols-3">
			{#each tools as tool, i}
				<Reveal delay={i * 90}>
					<article class="flex h-full flex-col rounded-3xl border border-black/5 bg-cream/50 p-7 transition hover:-translate-y-1 hover:shadow-xl">
						<span class="flex h-14 w-14 items-center justify-center rounded-full bg-navy text-leaf-2">
							{#if tool.icon === 'calc'}
								<svg viewBox="0 0 24 24" class="h-7 w-7" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M8 7h8M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01" stroke-linecap="round" /></svg>
							{:else if tool.icon === 'calendar'}
								<svg viewBox="0 0 24 24" class="h-7 w-7" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" stroke-linecap="round" /><path d="M7 15l2 2 4-4" stroke-linecap="round" stroke-linejoin="round" /></svg>
							{:else}
								<svg viewBox="0 0 24 24" class="h-7 w-7" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M19 5L5 19" stroke-linecap="round" /><circle cx="7" cy="7" r="2.5" /><circle cx="17" cy="17" r="2.5" /></svg>
							{/if}
						</span>
						<span class="mt-5 inline-block w-fit rounded-full bg-leaf/15 px-3 py-1 text-[11px] font-bold tracking-wide text-leaf-dark uppercase">{tool.tag}</span>
						<h2 class="mt-3 font-serif text-[24px] leading-snug font-semibold">{tool.name}</h2>
						<p class="mt-2 flex-1 text-[14.5px] leading-relaxed text-muted">{tool.desc}</p>
						<ul class="mt-5 space-y-2.5">
							{#each tool.points as point}
								<li class="flex items-start gap-2.5 text-[14px] leading-relaxed text-ink/85">
									<span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf/20 text-leaf-dark"><Icon name="check" class="h-3 w-3" /></span>
									{point}
								</li>
							{/each}
						</ul>
						<a href={tool.href} class="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-[14px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-navy-3">
							Open calculator <Icon name="arrow-right" class="h-4 w-4" />
						</a>
					</article>
				</Reveal>
			{/each}
		</div>

		<Reveal class="mt-16">
			<div class="rounded-3xl bg-cream px-6 py-10 sm:px-10">
				<h2 class="text-center font-serif text-[26px] font-semibold sm:text-[30px]">How these tools help</h2>
				<p class="mx-auto mt-2 max-w-xl text-center text-[15px] text-muted">Quick answers for the questions our clients ask most — before you spend anything on advice.</p>
				<div class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{#each helps as help}
						<div>
							<h3 class="text-[15px] font-bold">{help.title}</h3>
							<p class="mt-1.5 text-[14px] leading-relaxed text-muted">{help.desc}</p>
						</div>
					{/each}
				</div>
			</div>
		</Reveal>

		<Reveal class="mt-10">
			<div class="rounded-2xl border border-gold/40 bg-gold/10 px-6 py-5">
				<p class="text-[14px] leading-relaxed text-ink/85">
					<strong>Built on FY 2026-27 rules.</strong> Budget 2026 changed no slab, rebate or deduction, and the Income-tax Act, 2025 is in force from 1 April 2026. Every calculator shows its working, so you can check the maths yourself. Estimates only — not tax advice. Confirm with a professional before acting.
				</p>
			</div>
		</Reveal>
	</div>
</section>

<CtaBanner />

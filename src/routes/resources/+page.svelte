<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';
	import { posts } from '../../lib/data/posts';

	const deadlines = [
		{ date: '15 Jun 2026', item: 'Advance tax — 1st instalment (15% of total liability)' },
		{ date: '31 Jul 2026', item: 'ITR due — individuals, HUF & salaried (AY 2026-27)' },
		{ date: '31 Aug 2026', item: 'ITR due — non-audit business & professionals' },
		{ date: '15 Sep 2026', item: 'Advance tax — 2nd instalment (45% cumulative)' },
		{ date: '15 Dec 2026', item: 'Advance tax — 3rd instalment (75% cumulative)' },
		{ date: '31 Dec 2026', item: 'Belated ITR (with late fee) · GSTR-9 annual return' },
		{ date: '15 Mar 2027', item: 'Advance tax — final instalment (100% cumulative)' },
		{ date: '31 Mar 2027', item: 'Revised return — last date to correct AY 2026-27' },
		{ date: 'Every month', item: 'GSTR-1 by the 11th · GSTR-3B by the 20th' }
	];

	const glossary = [
		{ term: 'ITR', def: 'Income Tax Return — the return every taxpayer files for a tax year. Due 31 July for most individuals; late filing attracts a fee under Section 234F of up to ₹5,000.' },
		{ term: 'GSTIN', def: 'Your 15-digit GST identification number. Registration is required once turnover crosses ₹40 lakh (goods) or ₹20 lakh (services).' },
		{ term: 'GSTR-1 & GSTR-3B', def: 'Your two monthly GST returns — GSTR-1 (outward supplies) by the 11th, GSTR-3B (summary + payment) by the 20th of the following month.' },
		{ term: 'ITAT', def: 'Income Tax Appellate Tribunal — the second level of appeal after the CIT(A). Most tax disputes that reach a tribunal are decided here.' },
		{ term: 'CIT(A)', def: 'Commissioner of Income Tax (Appeals) — the first appeal authority. You file Form 35 here within 30 days of an assessment order.' },
		{ term: 'DTAA', def: 'Double Taxation Avoidance Agreement — a treaty between India and another country so the same income is not taxed twice. Key for NRIs and cross-border business.' },
		{ term: 'TDS & TCS', def: 'Tax Deducted at Source and Tax Collected at Source — tax collected by the payer before you receive the money. If too much was deducted, claim it back in your ITR.' },
		{ term: 'PAN & TAN', def: 'PAN is your permanent tax identity; TAN is the number a deductor needs to deduct TDS. Both are issued by the Income-tax Department.' },
		{ term: 'Vivad se Vishwas', def: 'The government’s dispute settlement scheme — pay a portion of the disputed tax and close the case, with penalty and interest waived.' },
		{ term: 'Faceless assessment', def: 'Assessment done entirely online, with no meeting and no named officer — your reply is judged on paper alone, so the drafting has to be right.' },
		{ term: 'Section 270A', def: 'The penalty section for under-reporting (50% of the tax) and misreporting (200% of the tax) of income. Most penalty cases we win are fought here.' },
		{ term: 'Advance tax', def: 'Tax paid in instalments through the year — 15% by 15 June, 45% by 15 September, 75% by 15 December, 100% by 15 March. Miss an instalment and interest of 1% per month applies.' }
	];

	let open = $state(0);
</script>

<svelte:head>
	<title>Free Resources — MSY Law | Tax Guides, Deadlines &amp; Glossary</title>
	<meta name="description" content="Free tax resources from MSY Law: the 2026-27 ITR and GST deadline calendar, a plain-English Indian tax glossary, and guides written by our lawyers." />
</svelte:head>

<PageHero
	eyebrow="Resources"
	title="Free tax resources, in plain English"
	subtitle="The deadlines, definitions and guides we wish every taxpayer had before they needed a lawyer. Free — no email required to read them."
	crumb="Resources"
/>

<section class="bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-14">
			<div>
				<Reveal>
					<h2 class="font-serif text-[28px] font-semibold text-ink sm:text-[32px]">2026-27 tax deadline calendar</h2>
					<p class="mt-2 text-[14.5px] text-muted">The dates that matter most. Put them in your calendar now — late filings cost money.</p>
					<div class="mt-6 overflow-hidden rounded-2xl border border-black/5">
						{#each deadlines as d, i}
							<div class="flex items-center gap-4 px-5 py-4 {i % 2 === 0 ? 'bg-cream/50' : 'bg-white'}">
								<span class="w-28 shrink-0 rounded-full bg-navy px-3 py-1.5 text-center text-[12px] font-bold text-white">{d.date}</span>
								<span class="text-[14.5px] font-medium">{d.item}</span>
							</div>
						{/each}
					</div>
					<p class="mt-3 text-[12.5px] text-muted">Dates are for assessment year 2026-27. Always confirm with your lawyer — deadlines move when they fall on weekends or holidays, and the Income-tax Act, 2025 (in force 1 April 2026) may change them.</p>
				</Reveal>
			</div>

			<div>
				<Reveal>
					<h2 class="font-serif text-[28px] font-semibold text-ink sm:text-[32px]">Tax glossary</h2>
					<p class="mt-2 text-[14.5px] text-muted">The twelve terms our clients ask about most — explained without jargon.</p>
					<div class="mt-6 space-y-3">
						{#each glossary as item, i}
							<div class="overflow-hidden rounded-2xl border border-black/5 bg-cream/50 transition {open === i ? 'bg-white shadow-md' : ''}">
								<button onclick={() => (open = open === i ? -1 : i)} aria-expanded={open === i} aria-controls="glossary-panel-{i}" class="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
									<span class="text-[15px] font-bold">{item.term}</span>
									<span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-lg text-white transition-transform duration-300 {open === i ? 'rotate-45' : ''}" aria-hidden="true">+</span>
								</button>
								<div id="glossary-panel-{i}" class="grid transition-all duration-500 ease-in-out {open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}">
									<div class="overflow-hidden">
										<p class="px-5 pb-5 text-[14.5px] leading-relaxed text-muted">{item.def}</p>
									</div>
								</div>
							</div>
						{/each}
					</div>
				</Reveal>
			</div>
		</div>

		<Reveal class="mt-14">
			<h2 class="font-serif text-[28px] font-semibold text-ink sm:text-[32px]">Guides from our lawyers</h2>
			<p class="mt-2 text-[14.5px] text-muted">Longer reads for when you want the full picture.</p>
			<div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
				{#each posts as post, i}
					<a href="/blog/{post.slug}" class="group flex h-full flex-col overflow-hidden rounded-2xl bg-cream/60 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl">
						<div class="relative flex h-36 items-end bg-gradient-to-br {post.grad} p-5">
							<span class="rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-navy">{post.tag}</span>
						</div>
						<div class="flex flex-1 flex-col p-6">
							<h3 class="font-serif text-[20px] leading-snug font-semibold transition group-hover:text-navy">{post.title}</h3>
							<p class="mt-2 flex-1 text-[14px] leading-relaxed text-muted">{post.excerpt}</p>
							<span class="mt-4 text-[13px] font-bold text-navy">Read the guide <Icon name="arrow-right" class="inline h-3.5 w-3.5" /></span>
						</div>
					</a>
				{/each}
			</div>
		</Reveal>
	</div>
</section>

<CtaBanner />

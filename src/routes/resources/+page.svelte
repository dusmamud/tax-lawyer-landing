<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';
	import { posts } from '../../lib/data/posts';

	const deadlines = [
		{ date: 'Jan 15, 2027', item: 'Q4 estimated tax payment due (individuals)' },
		{ date: 'Mar 15, 2027', item: 'S-corp & partnership returns due (or extension)' },
		{ date: 'Apr 15, 2027', item: 'Individual returns due · Q1 estimated tax · IRA contributions' },
		{ date: 'Jun 15, 2027', item: 'Q2 estimated tax payment due · Expat returns due' },
		{ date: 'Sep 15, 2027', item: 'Q3 estimated tax · Extended S-corp & partnership returns' },
		{ date: 'Oct 15, 2027', item: 'Extended individual returns due — final deadline' }
	];

	const glossary = [
		{ term: 'Offer in Compromise (OIC)', def: 'A deal with the IRS to settle your tax debt for less than the full amount, when you genuinely cannot pay it all.' },
		{ term: 'Penalty abatement', def: 'Getting IRS penalties removed — usually for reasonable cause, like illness, a natural disaster, or relying on bad professional advice.' },
		{ term: 'Nexus', def: 'A strong enough connection to a state that the state can require you to collect and pay its taxes. Selling online can create nexus in many states at once.' },
		{ term: 'FBAR', def: 'A report (FinCEN Form 114) you must file if you held foreign bank accounts totalling over $10,000 at any point in the year. The penalties for missing it are severe.' },
		{ term: 'Trust fund recovery penalty', def: 'A penalty the IRS can impose personally on owners and officers when a business fails to pay over payroll taxes it withheld from employees.' },
		{ term: 'Voluntary disclosure', def: 'Coming forward to the IRS about unreported income or unfiled returns before the IRS finds you — usually resulting in far lighter treatment.' }
	];

	let open = $state(0);
</script>

<svelte:head>
	<title>Free Resources — MSY Law | Tax Guides, Deadlines &amp; Glossary</title>
	<meta name="description" content="Free tax resources from MSY Law: 2027 IRS deadline calendar, a plain-English tax glossary, and guides written by our attorneys." />
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
					<h2 class="font-serif text-[28px] font-semibold text-ink sm:text-[32px]">2027 tax deadline calendar</h2>
					<p class="mt-2 text-[14.5px] text-muted">The dates that matter most. Put them in your calendar now — late filings cost money.</p>
					<div class="mt-6 overflow-hidden rounded-2xl border border-black/5">
						{#each deadlines as d, i}
							<div class="flex items-center gap-4 px-5 py-4 {i % 2 === 0 ? 'bg-cream/50' : 'bg-white'}">
								<span class="w-28 shrink-0 rounded-full bg-navy px-3 py-1.5 text-center text-[12px] font-bold text-white">{d.date}</span>
								<span class="text-[14.5px] font-medium">{d.item}</span>
							</div>
						{/each}
					</div>
					<p class="mt-3 text-[12.5px] text-muted">Dates are for the 2026 tax year, filed in 2027. Always confirm with your attorney — deadlines move when they fall on weekends or holidays.</p>
				</Reveal>
			</div>

			<div>
				<Reveal>
					<h2 class="font-serif text-[28px] font-semibold text-ink sm:text-[32px]">Tax glossary</h2>
					<p class="mt-2 text-[14.5px] text-muted">The six terms our clients ask about most — explained without jargon.</p>
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
			<h2 class="font-serif text-[28px] font-semibold text-ink sm:text-[32px]">Guides from our attorneys</h2>
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

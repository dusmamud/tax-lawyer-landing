<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';

	const news = [
		{
			date: 'Nov 12, 2026',
			tag: 'Firm News',
			title: 'MSY Law named a Top Tax Firm in Texas for the third year running',
			text: 'The firm was recognised in the 2026 Texas Legal Awards for client service in tax controversy, based on client reviews and case outcomes. “This one belongs to our clients,” said founding partner Michael Young. “They trusted us with the hardest years of their lives.”'
		},
		{
			date: 'Oct 28, 2026',
			tag: 'Case Win',
			title: '$860k in audit penalties removed for a freelance consultant',
			text: 'After a three-year audit, our team rebuilt the client’s expense records from bank statements and contracts — and had every penalty abated for reasonable cause. The full story is in our case results.'
		},
		{
			date: 'Oct 6, 2026',
			tag: 'Community',
			title: 'Free tax clinic: 120 low-income taxpayers helped this year',
			text: 'Our attorneys and volunteers spent a Saturday at the Austin community centre helping residents resolve IRS debts, set up payment plans and claim credits they had missed. The clinic runs every quarter — the next one is in January.'
		},
		{
			date: 'Sep 18, 2026',
			tag: 'Team',
			title: 'Emily Ross joins MSY Law to lead the audit response team',
			text: 'Emily brings six years of audit defence experience and a simple promise: every audit client gets a named attorney, weekly updates, and plain-English answers. She has already handled more than 200 audits, with penalties abated in full in over 80% of cases.'
		},
		{
			date: 'Aug 22, 2026',
			tag: 'Insights',
			title: 'What the 2026 tax changes mean for your business',
			text: 'Our senior attorney David Carter breaks down bonus depreciation, the QBI deduction and the three mistakes that cost business owners the most this year. Read the full guide on our blog.'
		}
	];
</script>

<svelte:head>
	<title>News — MSY Law | Firm News &amp; Updates</title>
	<meta name="description" content="MSY Law news: awards, case wins, community tax clinics and new team members." />
</svelte:head>

<PageHero
	eyebrow="News"
	title="News from the firm"
	subtitle="Awards, case wins, community work and new faces — what MSY Law has been up to."
	crumb="News"
/>

<section class="bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-4xl px-4 sm:px-5">
		<div class="space-y-6">
			{#each news as item, i}
				<Reveal delay={Math.min(i * 60, 180)}>
					<article class="rounded-3xl border border-black/5 bg-cream/50 p-7 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-lg sm:p-8">
						<div class="flex flex-wrap items-center gap-3">
							<span class="rounded-full bg-navy px-3 py-1 text-[11px] font-bold text-white">{item.tag}</span>
							<span class="text-[13px] font-medium text-muted">{item.date}</span>
						</div>
						<h2 class="mt-3 font-serif text-[23px] leading-snug font-semibold sm:text-[25px]">{item.title}</h2>
						<p class="mt-2 text-[15px] leading-relaxed text-muted">{item.text}</p>
					</article>
				</Reveal>
			{/each}
		</div>
		<Reveal class="mt-10 text-center">
			<p class="text-[14.5px] text-muted">
				Press enquiries: <a href="mailto:hello@msylaw.com" class="font-bold text-navy">hello@msylaw.com</a> · +1 (800) 555-0199
			</p>
		</Reveal>
	</div>
</section>

<CtaBanner />

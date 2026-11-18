<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';

	const news = [
		{
			date: 'Nov 14, 2026',
			tag: 'Firm News',
			title: 'MSY Law ranked a Leading Tax Firm in Legal 500 Asia-Pacific 2026',
			text: 'The firm was recognised for tax controversy and GST work, based on client reviews and case outcomes. “This one belongs to our clients,” said founding partner Mohan S. Yadav. “They trusted us with the hardest years of their lives.”'
		},
		{
			date: 'Nov 11, 2026',
			tag: 'Insights',
			title: 'Income-tax Act, 2025: in force from 1 April 2026 — what actually changed',
			text: 'The 1961 Act is gone. The new Act replaces “previous year” and “assessment year” with a single “tax year”, simplifies the language, and re-numbers every section. Our guide maps the old sections to the new ones — and the three mistakes taxpayers are already making. Read it on our blog.'
		},
		{
			date: 'Nov 8, 2026',
			tag: 'Insights',
			title: 'GST 2.0: the 5% / 18% / 40% slabs — what it means for your business',
			text: 'Since 22 September 2025, GST runs on three slabs — 5%, 18% and 40% — with most daily goods at 5%. If your invoicing, ITC claims or GSTR-3B still use the old rates, you are overpaying or under-claiming. Here is the checklist we give every client.'
		},
		{
			date: 'Nov 5, 2026',
			tag: 'Insights',
			title: 'Faceless assessment expands — and Vivad se Vishwas is back on the table',
			text: 'Faceless assessment now covers more cases, which means replies are judged on paper alone — no hearing, no meeting, no second chance to explain. For old disputes, the Vivad se Vishwas settlement scheme lets you close the case for a fraction of the demand. Both need the same thing: a strong written reply, filed on time.'
		},
		{
			date: 'Nov 2, 2026',
			tag: 'Team',
			title: 'Ananya Rao joins MSY Law to lead the scrutiny response team',
			text: 'Ananya brings six years of scrutiny defence experience and a simple promise: every notice client gets a named advocate, weekly updates, and plain-English answers. She has already handled more than 200 notices, with penalties waived in full in over 80% of cases.'
		}
	];
</script>


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
				Press enquiries: <a href="mailto:hello@msylaw.in" class="font-bold text-navy">hello@msylaw.in</a> · +91 98110 12345
			</p>
		</Reveal>
	</div>
</section>

<CtaBanner />

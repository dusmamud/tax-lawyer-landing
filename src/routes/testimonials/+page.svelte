<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Results from '#lib/components/Results.svelte';
	import Testimonials from '#lib/components/Testimonials.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';
	import Stars from '#lib/components/Stars.svelte';

	const more = [
		{ quote: 'They settled a $90,000 state tax bill for $11,000. I checked the numbers three times because I could not believe it.', name: 'Maria Gonzalez', role: 'Restaurant Owner, Florida', img: '/lawyer-young-woman.webp' },
		{ quote: 'Clear quote, weekly updates, and a result better than promised. This is how every law firm should work.', name: 'Alan Brooks', role: 'E-commerce Seller, Ohio', img: '/lawyer-man.webp' },
		{ quote: 'My estate plan took three weeks and cost exactly what they quoted. My kids will never have to guess what I wanted.', name: 'Helen Park', role: 'Estate Client, California', img: '/lawyer-woman.webp' },
		{ quote: 'The audit lasted four months and ended with zero penalties. Emily handled everything — I just signed papers.', name: 'Tom Becker', role: 'Contractor, Arizona', img: '/lawyer-senior.webp' },
		{ quote: 'As a non-resident investor I had filings in two countries and penalties in both. Sarah fixed all of it in one engagement.', name: 'Arjun Mehta', role: 'Foreign Investor, New York', img: '/lawyer-man.webp' },
		{ quote: 'They challenged my property assessment and cut my annual tax by $4,800. Every year, from now on.', name: 'Grace Liu', role: 'Homeowner, Texas', img: '/lawyer-woman.webp' }
	];
</script>

<svelte:head>
	<title>Testimonials &amp; Case Results — MSY Law</title>
	<meta name="description" content="What MSY Law clients say: 4.9/5 from 1,200+ clients, with real case results — $2.4M settled, $860k penalties removed, $1.2M estate tax saved." />
</svelte:head>

<PageHero
	eyebrow="Testimonials"
	title="What our clients say"
	subtitle="4.9 out of 5 from more than 1,200 clients — and results we can show, not just promise."
	crumb="Testimonials"
/>

<Results />
<Testimonials />

<section class="bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
		<Reveal class="text-center">
			<h2 class="font-serif text-[30px] font-semibold text-ink sm:text-[36px]">More client stories</h2>
			<p class="mt-2 text-[15px] text-muted">Names shared with permission. Details changed only to protect privacy.</p>
		</Reveal>
		<div class="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
			{#each more as item, i}
				<Reveal delay={(i % 3) * 90}>
					<figure class="flex h-full flex-col rounded-2xl border border-black/5 bg-cream/50 p-6 transition hover:-translate-y-1 hover:shadow-lg">
						<Stars />
						<blockquote class="mt-4 flex-1 text-[15px] leading-relaxed text-ink/85">“{item.quote}”</blockquote>
						<figcaption class="mt-5 flex items-center gap-3 border-t border-black/5 pt-4">
							<img src={item.img} alt={item.name} class="h-11 w-11 rounded-full object-cover object-top" />
							<span>
								<span class="block text-[14px] font-bold">{item.name}</span>
								<span class="block text-[12.5px] text-muted">{item.role}</span>
							</span>
						</figcaption>
					</figure>
				</Reveal>
			{/each}
		</div>
		<Reveal class="mt-10 text-center">
			<a href="/case-results" class="inline-block rounded-full bg-navy px-7 py-3 text-[14px] font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-navy-3">See detailed case results</a>
		</Reveal>
	</div>
</section>

<CtaBanner />

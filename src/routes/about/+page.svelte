<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Stats from '#lib/components/Stats.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';

	const values = [
		{ title: 'Honesty first', text: 'We tell you the real odds, the real cost and the real timeline — before you pay us anything.' },
		{ title: 'Plain English', text: 'No jargon, no legal fog. If you cannot understand our advice, we have not done our job.' },
		{ title: 'Fixed fees', text: 'A written quote before we start. The price we agree is the price you pay.' },
		{ title: 'Relentless follow-through', text: 'Weekly updates, same-day replies, and a named attorney who actually answers the phone.' }
	];

	const timeline = [
		{ year: '2011', text: 'Michael S. Young founds MSY Law with one attorney, one desk, and a promise: honest tax help.' },
		{ year: '2014', text: 'The firm wins its first major IRS settlement — $1.8M of tax debt settled for $210k.' },
		{ year: '2018', text: 'Estate and international tax practices open as Sarah Mitchell joins as partner.' },
		{ year: '2022', text: 'MSY Law passes 1,000 clients served and $40M recovered for clients.' },
		{ year: '2026', text: 'Today: 4 attorneys, 1,200+ clients, a 98% success rate — and the same promise as day one.' }
	];
</script>

<svelte:head>
	<title>About Us — MSY Law | Tax Attorney &amp; Tax Lawyer</title>
	<meta name="description" content="Meet MSY Law: a tax attorney firm founded in 2011. Our story, our values, and the team behind 1,200+ resolved tax cases." />
</svelte:head>

<PageHero
	eyebrow="About Us"
	title="A tax firm built on honesty, not fear"
	subtitle="We started MSY Law because tax help felt broken: confusing, expensive, and slow. Fifteen years later, we run the firm we wished existed — clear advice, fixed fees, and results you can measure."
	crumb="About Us"
/>

<section class="bg-white py-16 lg:py-24">
	<div class="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
		<Reveal class="relative mx-auto w-full max-w-[440px]">
			<div class="absolute -inset-5 rounded-full border border-navy/10"></div>
			<div class="absolute -inset-3 rounded-full border border-dashed border-navy/20"></div>
			<div class="relative aspect-square overflow-hidden rounded-full bg-sage ring-8 ring-white">
				<img src="/lawyer-meeting.webp" alt="Tax attorney discussing documents with a client" class="h-full w-full object-cover" />
			</div>
			<div class="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl bg-navy px-5 py-3 text-white shadow-xl sm:left-auto sm:translate-x-0">
				<p class="font-serif text-2xl leading-none font-bold">15+</p>
				<p class="text-[12px] leading-tight text-white/80">Years of<br />experience</p>
			</div>
		</Reveal>
		<div>
			<Reveal>
				<h2 class="font-serif text-[32px] leading-[1.15] font-semibold text-ink sm:text-[40px]">Our story</h2>
				<p class="mt-5 text-[15px] leading-relaxed text-muted">
					In 2011, Michael Young was a tax attorney at a national firm. He kept seeing the same thing:
					good people — business owners, freelancers, parents — terrified by a letter from the IRS, and
					charged thousands before anyone explained what was actually wrong.
				</p>
				<p class="mt-4 text-[15px] leading-relaxed text-muted">
					So he left, rented a small office, and started MSY Law with a different model: a free first
					consultation, a written plan and a fixed fee before any work begins, and an attorney who calls
					you back the same day. Fifteen years later, that model has served more than 1,200 clients —
					and it has not changed.
				</p>
				<p class="mt-4 text-[15px] leading-relaxed text-muted">
					Today the firm is four attorneys strong, covering audits, criminal tax, estate planning,
					international tax and property tax. What has not changed is the promise: if we cannot help
					you, we will tell you — for free.
				</p>
			</Reveal>
		</div>
	</div>
</section>

<Stats />

<section class="bg-white py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
		<Reveal class="mx-auto max-w-2xl text-center">
			<span class="inline-block rounded-md bg-cream px-3 py-1 text-[12px] font-semibold tracking-wide text-navy">Our Values</span>
			<h2 class="mt-4 font-serif text-[32px] leading-tight font-semibold text-ink sm:text-[40px]">What we stand for</h2>
		</Reveal>
		<div class="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
			{#each values as value, i}
				<Reveal delay={i * 90}>
					<article class="h-full rounded-2xl border border-black/5 bg-cream/60 p-6 transition hover:-translate-y-1 hover:shadow-lg">
						<h3 class="font-serif text-[20px] font-semibold">{value.title}</h3>
						<p class="mt-2 text-[14px] leading-relaxed text-muted">{value.text}</p>
					</article>
				</Reveal>
			{/each}
		</div>
	</div>
</section>

<section class="bg-cream py-16 lg:py-24">
	<div class="mx-auto max-w-4xl px-4 sm:px-5">
		<Reveal class="text-center">
			<span class="inline-block rounded-md bg-white px-3 py-1 text-[12px] font-semibold tracking-wide text-navy shadow-sm">Our Journey</span>
			<h2 class="mt-4 font-serif text-[32px] leading-tight font-semibold text-ink sm:text-[40px]">From one desk to 1,200+ clients</h2>
		</Reveal>
		<div class="mt-12 space-y-0">
			{#each timeline as item, i}
				<Reveal delay={i * 80}>
					<div class="relative flex gap-5 pb-10 last:pb-0">
						<div class="flex flex-col items-center">
							<span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy font-serif text-[15px] font-bold text-white ring-4 ring-cream">{item.year.slice(2)}</span>
							{#if i < timeline.length - 1}<span class="mt-2 w-0.5 flex-1 bg-navy/15" aria-hidden="true"></span>{/if}
						</div>
						<div class="pt-2.5">
							<p class="font-serif text-[19px] font-bold text-navy">{item.year}</p>
							<p class="mt-1 max-w-xl text-[15px] leading-relaxed text-muted">{item.text}</p>
						</div>
					</div>
				</Reveal>
			{/each}
		</div>
		<Reveal class="mt-12 text-center">
			<a href="/team" class="inline-block rounded-full bg-navy px-7 py-3 text-[14px] font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-navy-3">Meet the Team</a>
		</Reveal>
	</div>
</section>

<CtaBanner />

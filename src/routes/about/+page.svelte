<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Picture from '#lib/components/Picture.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Stats from '#lib/components/Stats.svelte';
	import AwardsStrip from '#lib/components/AwardsStrip.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';

	const values = [
		{ title: 'Honesty first', text: 'We tell you the real odds, the real cost and the real timeline — before you pay us anything.' },
		{ title: 'Plain English', text: 'No jargon, no legal fog. If you cannot understand our advice, we have not done our job.' },
		{ title: 'Fixed fees', text: 'A written quote before we start. The price we agree is the price you pay.' },
		{ title: 'Relentless follow-through', text: 'Weekly updates, same-day replies, and a named lawyer who actually answers the phone.' }
	];

	const timeline = [
		{ year: '2011', text: 'Mohan S. Yadav founds MSY Law in New Delhi with one advocate, one desk, and a promise: honest tax help.' },
		{ year: '2014', text: 'The Mumbai office opens — the firm’s first office outside Delhi.' },
		{ year: '2017', text: 'GST practice opens as GST launches in India on 1 July 2017.' },
		{ year: '2020', text: 'Faceless assessment arrives — and the firm settles its first cases under Vivad se Vishwas.' },
		{ year: '2023', text: 'Bengaluru and Hyderabad offices open, taking the firm to six cities.' },
		{ year: '2026', text: 'Today: 4 advocates, 1,200+ clients, ₹120 Cr+ tax saved — and a practice built around the new Income-tax Act, 2025.' }
	];
</script>


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
				<Picture src="/lawyer-meeting.webp" alt="Tax lawyer discussing documents with a client" class="h-full w-full object-cover" width={1920} height={1280} sizes="(min-width: 640px) 440px, 90vw" fullWidth={1920} />
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
					In 2011, Mohan S. Yadav was a tax lawyer at a national firm. He kept seeing the same thing:
					good people — business owners, freelancers, parents — terrified by a notice from the
					Income-tax Department, and charged thousands before anyone explained what was actually wrong.
				</p>
				<p class="mt-4 text-[15px] leading-relaxed text-muted">
					So he left, rented a small office in Connaught Place, and started MSY Law with a different
					model: a free first consultation, a written plan and a fixed fee before any work begins, and
					a lawyer who calls you back the same day. Fifteen years later, that model has served more
					than 1,200 clients — and it has not changed.
				</p>
				<p class="mt-4 text-[15px] leading-relaxed text-muted">
					Today the firm is four advocates strong, covering income-tax appeals, GST disputes, corporate
					tax planning, international tax and search &amp; seizure matters. What has not changed is the
					promise: if we cannot help you, we will tell you — for free.
				</p>
			</Reveal>
		</div>
	</div>
</section>

<Stats />

<AwardsStrip />

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
			<a href="/careers" class="ml-3 inline-block rounded-full border border-navy/20 bg-white px-7 py-3 text-[14px] font-semibold text-navy transition hover:bg-cream-2">Join the Team</a>
		</Reveal>
	</div>
</section>

<CtaBanner />

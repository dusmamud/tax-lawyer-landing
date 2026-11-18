<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';

	const cities = [
		{ slug: 'new-delhi', name: 'New Delhi', detail: 'Main office — Statesman House, Barakhamba Road, Connaught Place', tag: 'Headquarters' },
		{ slug: 'mumbai', name: 'Mumbai', detail: 'Serving clients across Mumbai and Maharashtra', tag: 'By appointment' },
		{ slug: 'bengaluru', name: 'Bengaluru', detail: 'Serving clients across Bengaluru and Karnataka', tag: 'By appointment' },
		{ slug: 'hyderabad', name: 'Hyderabad', detail: 'Serving clients across Hyderabad and Telangana', tag: 'By appointment' },
		{ slug: 'chennai', name: 'Chennai', detail: 'Serving clients across Chennai and Tamil Nadu', tag: 'By appointment' },
		{ slug: 'kolkata', name: 'Kolkata', detail: 'Serving clients across Kolkata and West Bengal', tag: 'By appointment' }
	];
</script>


<PageHero
	eyebrow="Locations"
	title="Based in New Delhi. Serving all of India — and beyond."
	subtitle="Our office is in Connaught Place, New Delhi, but most of our work happens by phone and video. For income tax and GST matters — appeals, disputes, international tax — we serve clients across India."
	crumb="Locations"
/>

<section class="bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
		<div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
			{#each cities as city, i}
				<Reveal delay={(i % 3) * 90}>
					<article class="h-full rounded-3xl border border-black/5 bg-cream/50 p-7 transition hover:-translate-y-1 hover:shadow-xl {i === 0 ? 'ring-2 ring-leaf/60' : ''}">
						<span class="inline-block rounded-full bg-navy px-3 py-1 text-[11px] font-bold text-white">{city.tag}</span>
						<h2 class="mt-4 font-serif text-[26px] font-semibold">{city.name}</h2>
						<p class="mt-2 text-[14.5px] leading-relaxed text-muted">{city.detail}</p>
						{#if i === 0}
							<p class="mt-4 border-t border-black/5 pt-4 text-[13.5px] leading-relaxed text-muted">
								Statesman House, Barakhamba Road, Connaught Place, New Delhi 110001<br />Mon–Sat · 10:00 AM – 7:00 PM IST<br />Barakhamba Road Metro (Blue Line) — 2 min walk.
							</p>
						{/if}
						<a href="/locations/{city.slug}" class="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-navy">See the {city.name} page <Icon name="arrow-right" class="h-3.5 w-3.5" /></a>
					</article>
				</Reveal>
			{/each}
		</div>

		<Reveal class="mt-12">
			<div class="rounded-3xl bg-navy p-8 text-white sm:p-10">
				<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
					<div>
						<h2 class="font-serif text-[26px] font-semibold sm:text-[30px]">Not in one of these cities? That is usually fine.</h2>
						<p class="mt-3 text-[15px] leading-relaxed text-white/75">
							Income tax and GST law are the same across India. Appeals, notices, international tax
							and planning can all be handled remotely — by phone, video and secure document sharing.
							Only matters that need a physical appearance, like a search, are the ones where
							location matters.
						</p>
					</div>
					<div class="flex flex-col justify-center gap-3">
						<a href="/free-consultation" class="rounded-full bg-leaf py-3.5 text-center text-[15px] font-bold text-navy-3 transition hover:bg-leaf-2">Book a free consultation</a>
						<a href="tel:+919811012345" class="rounded-full border border-white/30 py-3.5 text-center text-[15px] font-semibold text-white transition hover:bg-white/10">Call +91 98110 12345</a>
					</div>
				</div>
			</div>
		</Reveal>
	</div>
</section>

<CtaBanner />

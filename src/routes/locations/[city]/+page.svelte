<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import MapEmbed from '#lib/components/MapEmbed.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const city = $derived(data.city);

	let openFaq = $state(0);

	// The ONE LegalService block for this city page. The layout deliberately
	// does not emit its Delhi-HQ block here (see +layout.svelte), so the two
	// can never contradict each other. Structured address with postalCode as
	// its own field, geo from the office address, opening hours, rating and
	// social profiles — the same completeness as the layout block.
	const schema = $derived({
		'@context': 'https://schema.org',
		'@type': 'LegalService',
		'@id': `https://tax-lawyer-landing.pages.dev/locations/${city.slug}#legal-service`,
		name: `MSY Law — Tax Attorney in ${city.name}, India`,
		description: `Tax attorney in ${city.name}, India: income tax appeals, GST disputes, corporate tax and search & settlement. Free 30-minute consultation.`,
		url: `https://tax-lawyer-landing.pages.dev/locations/${city.slug}`,
		image: 'https://tax-lawyer-landing.pages.dev/og-image.jpg',
		telephone: '+91-98110-12345',
		email: 'hello@msylaw.in',
		priceRange: '₹₹',
		address: {
			'@type': 'PostalAddress',
			streetAddress: city.street,
			addressLocality: city.locality,
			addressRegion: city.region,
			postalCode: city.postalCode,
			addressCountry: 'IN'
		},
		geo: { '@type': 'GeoCoordinates', latitude: city.latitude, longitude: city.longitude },
		openingHoursSpecification: {
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '10:00',
			closes: '19:00'
		},
		areaServed: { '@type': 'City', name: city.name },
		aggregateRating: { '@type': 'AggregateRating', ratingValue: 4.9, reviewCount: 312 },
		sameAs: [
			'https://www.linkedin.com/company/msy-law',
			'https://www.facebook.com/msylaw',
			'https://x.com/msylaw',
			'https://www.youtube.com/@msylaw'
		]
	});
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
</svelte:head>

<PageHero
	eyebrow="Locations · {city.name}, India"
	title="Tax attorney in {city.name}, India"
	subtitle={city.detail}
	crumb={city.name}
/>

<section class="bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
			<div>
				<Reveal>
					<h2 class="font-serif text-[28px] leading-tight font-semibold sm:text-[34px]">Serving {city.name} and the surrounding area</h2>
					{#each city.about as para}
						<p class="mt-4 text-[15px] leading-relaxed text-muted">{para}</p>
					{/each}
				</Reveal>

				<Reveal delay={100}>
					<h3 class="mt-10 font-serif text-[22px] font-semibold">Areas we serve near {city.name}</h3>
					<div class="mt-4 flex flex-wrap gap-2">
						{#each city.areas as area}
							<span class="rounded-full border border-navy/15 bg-cream/60 px-4 py-2 text-[13.5px] font-semibold text-navy">{area}</span>
						{/each}
					</div>
				</Reveal>

				<Reveal delay={160}>
					<h3 class="mt-10 font-serif text-[22px] font-semibold">Common questions in {city.name}</h3>
					<div class="mt-5 space-y-3">
						{#each city.faqs as faq, i}
							<div class="overflow-hidden rounded-2xl border border-black/5 bg-cream/50 transition {openFaq === i ? 'bg-white shadow-md' : ''}">
								<button onclick={() => (openFaq = openFaq === i ? -1 : i)} aria-expanded={openFaq === i} aria-controls="city-faq-{i}" class="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
									<span class="text-[15px] font-bold">{faq.q}</span>
									<span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-lg text-white transition-transform duration-300 {openFaq === i ? 'rotate-45' : ''}" aria-hidden="true">+</span>
								</button>
								<div id="city-faq-{i}" class="grid transition-all duration-500 ease-in-out {openFaq === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}">
									<div class="overflow-hidden">
										<p class="px-5 pb-5 text-[14.5px] leading-relaxed text-muted">{faq.a}</p>
									</div>
								</div>
							</div>
						{/each}
					</div>
				</Reveal>

				<Reveal delay={200}>
					<div class="mt-10">
						<MapEmbed query={city.mapQuery} title="MSY Law meeting office in {city.name} on Google Maps" />
						<p class="mt-3 text-[13px] text-muted">{city.address} · {city.parking}</p>
					</div>
				</Reveal>
			</div>

			<aside>
				<Reveal delay={120}>
					<div class="rounded-3xl bg-navy p-7 text-white lg:sticky lg:top-28">
						<h3 class="font-serif text-[24px] font-semibold">Meet us in {city.name}</h3>
						<p class="mt-3 text-[14px] leading-relaxed text-white/75">{city.address}</p>
						<p class="mt-2 text-[14px] leading-relaxed text-white/75">{city.parking}</p>
						<p class="mt-3 text-[14px] leading-relaxed text-white/75">Most matters are handled by phone and video after the first meeting.</p>
						<a href="/free-consultation" class="mt-6 block rounded-full bg-leaf py-3 text-center text-[14px] font-bold text-navy-3 transition hover:bg-leaf-2">Book Free Consultation</a>
						<a href="tel:+919811012345" class="mt-3 block text-center text-[14px] font-semibold text-white/85 transition hover:text-white">or call +91 98110 12345</a>
					</div>
				</Reveal>
				<Reveal delay={200}>
					<div class="mt-6 rounded-3xl border border-black/5 bg-cream/50 p-6">
						<h3 class="text-[13px] font-bold tracking-[0.16em] text-muted uppercase">Attorneys serving {city.name}</h3>
						<ul class="mt-4 space-y-2.5">
							{#each city.attorneys as name}
								<li class="flex items-center gap-2.5 text-[14.5px] font-semibold text-navy">
									<span class="flex h-5 w-5 items-center justify-center rounded-full bg-leaf/20 text-leaf-dark"><Icon name="check" class="h-3 w-3" /></span>
									{name}
								</li>
							{/each}
						</ul>
						<a href="/team" class="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-navy">Meet the whole team <Icon name="arrow-right" class="h-3.5 w-3.5" /></a>
					</div>
				</Reveal>
				<Reveal delay={240}>
					<div class="mt-6 rounded-3xl border border-black/5 bg-cream/50 p-6">
						<h3 class="text-[13px] font-bold tracking-[0.16em] text-muted uppercase">Other locations</h3>
						<ul class="mt-4 space-y-2.5 text-[14.5px] font-semibold">
							<li><a href="/locations" class="text-navy transition hover:text-leaf-dark">All locations →</a></li>
							<li><a href="/locations/new-delhi" class="text-navy/70 transition hover:text-leaf-dark">New Delhi (Headquarters)</a></li>
						</ul>
					</div>
				</Reveal>
			</aside>
		</div>
	</div>
</section>

<CtaBanner />

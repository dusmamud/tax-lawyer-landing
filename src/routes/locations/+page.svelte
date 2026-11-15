<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';

	const cities = [
		{ name: 'Austin', detail: 'Main office — 1200 Congress Ave, Suite 400', tag: 'Headquarters' },
		{ name: 'Dallas', detail: 'Serving clients across the Dallas–Fort Worth metro', tag: 'By appointment' },
		{ name: 'Houston', detail: 'Serving clients across Greater Houston', tag: 'By appointment' },
		{ name: 'San Antonio', detail: 'Serving clients across Bexar County and South Texas', tag: 'By appointment' },
		{ name: 'Fort Worth', detail: 'Serving clients across Tarrant County', tag: 'By appointment' },
		{ name: 'El Paso', detail: 'Serving clients across West Texas', tag: 'By appointment' }
	];
</script>

<svelte:head>
	<title>Locations &amp; Service Areas — MSY Law | Tax Attorney in Texas</title>
	<meta name="description" content="MSY Law is based in Austin, Texas and serves clients in Dallas, Houston, San Antonio, Fort Worth and El Paso — and nationwide for federal tax matters." />
</svelte:head>

<PageHero
	eyebrow="Locations"
	title="Based in Austin. Serving all of Texas — and beyond."
	subtitle="Our office is in downtown Austin, but most of our work happens by phone and video. For federal tax matters — audits, IRS debt, international tax — we serve clients in all 50 states."
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
								1200 Congress Ave, Suite 400, Austin, TX 78701<br />Mon–Fri · 9:00 AM – 6:00 PM<br />Free validated parking in the Congress garage.
							</p>
						{:else}
							<a href="/free-consultation" class="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-navy">Book a video consultation <Icon name="arrow-right" class="h-3.5 w-3.5" /></a>
						{/if}
					</article>
				</Reveal>
			{/each}
		</div>

		<Reveal class="mt-12">
			<div class="rounded-3xl bg-navy p-8 text-white sm:p-10">
				<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
					<div>
						<h2 class="font-serif text-[26px] font-semibold sm:text-[30px]">Not in Texas? That is usually fine.</h2>
						<p class="mt-3 text-[15px] leading-relaxed text-white/75">
							Federal tax law is the same in every state. Audits, IRS debt, international tax and
							estate planning for federal purposes can all be handled remotely — by phone, video and
							secure document sharing. State-specific matters (like a Texas property tax appeal) are
							the only ones that need you to be here.
						</p>
					</div>
					<div class="flex flex-col justify-center gap-3">
						<a href="/free-consultation" class="rounded-full bg-leaf py-3.5 text-center text-[15px] font-bold text-navy-3 transition hover:bg-leaf-2">Book a free consultation</a>
						<a href="tel:+18005550199" class="rounded-full border border-white/30 py-3.5 text-center text-[15px] font-semibold text-white transition hover:bg-white/10">Call +1 (800) 555-0199</a>
					</div>
				</div>
			</div>
		</Reveal>
	</div>
</section>

<CtaBanner />

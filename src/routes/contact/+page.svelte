<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Contact from '#lib/components/Contact.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import MapEmbed from '#lib/components/MapEmbed.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';

	const offices = [
		{ title: 'Main Office', lines: ['1200 Congress Ave, Suite 400', 'Austin, TX 78701'], note: 'Free parking in the Congress garage — bring your ticket, we validate it.' },
		{ title: 'By Phone', lines: ['+1 (800) 555-0199', 'Mon–Fri · 9:00 AM – 6:00 PM'], note: 'After hours? Leave a message — urgent audit matters are returned within 2 hours.' },
		{ title: 'By Email', lines: ['hello@msylaw.com', 'Replies within one business day'], note: 'Do not email sensitive documents until we confirm your case — we will send a secure link.' }
	];
</script>

<svelte:head>
	<title>Contact Us — MSY Law | Tax Attorney</title>
	<meta name="description" content="Contact MSY Law: call +1 (800) 555-0199, email hello@msylaw.com, or book a free 30-minute consultation. An attorney replies within one business day." />
</svelte:head>

<PageHero
	eyebrow="Contact Us"
	title="Talk to a tax attorney today"
	subtitle="Call, email, or send the form below. An attorney — not a sales rep — replies within one business day, usually much faster."
	crumb="Contact Us"
/>

<Contact />

<section class="bg-cream py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
		<Reveal class="text-center">
			<h2 class="font-serif text-[30px] font-semibold text-ink sm:text-[36px]">Visit or reach us</h2>
		</Reveal>
		<div class="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
			{#each offices as office, i}
				<Reveal delay={i * 90}>
					<div class="h-full rounded-2xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
						<span class="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white"><Icon name="check" class="h-5 w-5" /></span>
						<h3 class="mt-4 font-serif text-[20px] font-semibold">{office.title}</h3>
						{#each office.lines as line}
							<p class="mt-1 text-[14.5px] font-medium text-ink/85">{line}</p>
						{/each}
						<p class="mt-3 text-[13.5px] leading-relaxed text-muted">{office.note}</p>
					</div>
				</Reveal>
			{/each}
		</div>

		<Reveal class="mt-12">
			<h2 class="text-center font-serif text-[26px] font-semibold sm:text-[30px]">Find our Austin office</h2>
			<p class="mx-auto mt-2 max-w-xl text-center text-[14.5px] text-muted">1200 Congress Ave, Suite 400, Austin, TX 78701 — free validated parking in the Congress garage. <a href="https://www.google.com/maps/search/MSY+Law+Austin+TX" target="_blank" rel="noopener" class="font-semibold text-navy underline underline-offset-2">Open in Google Maps</a></p>
			<div class="mt-6">
				<MapEmbed query="1200 Congress Ave, Austin, TX 78701" title="MSY Law office on Google Maps" class="h-[380px] w-full" />
			</div>
		</Reveal>
	</div>
</section>

<CtaBanner />

<script lang="ts">
	import { page } from '$app/state';
	import Icon from '#lib/components/Icon.svelte';
</script>

<svelte:head>
	<title>Page Not Found — MSY Law</title>
	<meta name="description" content="The page you are looking for does not exist. Return home or contact MSY Law for help." />
</svelte:head>

<section class="bg-cream py-20 lg:py-28">
	<div class="mx-auto max-w-2xl px-4 text-center sm:px-5">
		<p class="font-serif text-[96px] leading-none font-bold text-navy/15 sm:text-[140px]" aria-hidden="true">404</p>
		<h1 class="mt-2 font-serif text-[34px] leading-tight font-semibold text-ink sm:text-[44px]">This page went missing</h1>
		<p class="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-muted">
			The page you are looking for ({page.url.pathname}) does not exist or was moved. Let’s get you back on track.
		</p>
		<div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
			<a href="/" class="w-full rounded-full bg-navy px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-navy-3 sm:w-auto">
				Back to Home <Icon name="arrow-right" class="ml-1 inline h-4 w-4 align-middle" />
			</a>
			<a href="/contact" class="w-full rounded-full border border-navy/20 bg-white px-7 py-3.5 text-[15px] font-semibold text-navy transition hover:bg-white sm:w-auto">Contact Us</a>
		</div>
		<p class="mt-8 text-[13.5px] text-muted">
			Or call us directly: <a href="tel:+919811012345" class="font-bold text-navy">+91 98110 12345</a>
		</p>
	</div>
</section>

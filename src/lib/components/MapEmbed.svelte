<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';

	// Google Maps embed — no API key needed (uses the public embed endpoint).
	// If the embed is slow or blocked (strict network, ad blocker), a fallback
	// card with the address and a "Open in Google Maps" button appears instead
	// of an empty box, so the visitor always has a working path to the map.
	let { query, title = 'Office location on Google Maps', class: cls = 'h-[320px] w-full' }: { query: string; title?: string; class?: string } = $props();
	const src = $derived(`https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`);
	const mapsUrl = $derived(`https://www.google.com/maps/search/${encodeURIComponent(query)}`);
	let loaded = $state(false);
	let timedOut = $state(false);

	$effect(() => {
		const t = setTimeout(() => {
			if (!loaded) timedOut = true;
		}, 6000);
		return () => clearTimeout(t);
	});
</script>

<div class="relative {cls}">
	{#if timedOut && !loaded}
		<div class="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 rounded-3xl border border-black/5 bg-cream px-6 text-center">
			<span class="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-gold">
				<Icon name="pin" class="h-5 w-5" />
			</span>
			<p class="font-serif text-[19px] font-semibold text-navy">The map did not load here</p>
			<p class="text-[14px] leading-relaxed text-muted">{query}</p>
			<a href={mapsUrl} target="_blank" rel="noopener" class="mt-1 rounded-full bg-navy px-6 py-3 text-[14px] font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-navy-3">
				Open in Google Maps
			</a>
		</div>
	{/if}
	<iframe
		{src}
		{title}
		class="relative z-10 h-full w-full rounded-3xl border-0 bg-cream shadow-sm"
		loading="lazy"
		allowfullscreen
		referrerpolicy="no-referrer-when-downgrade"
		onload={() => (loaded = true)}
	></iframe>
</div>
<p class="mt-3 text-center text-[13.5px] text-muted">
	<a href={mapsUrl} target="_blank" rel="noopener" class="font-semibold text-navy underline underline-offset-2">Open in Google Maps</a>
	· {query}
</p>

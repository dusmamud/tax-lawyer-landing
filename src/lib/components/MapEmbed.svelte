<script lang="ts">
	// Google Maps embed — no API key needed (uses the public embed endpoint).
	let { query, title = 'Office location on Google Maps', class: cls = 'h-[320px] w-full' }: { query: string; title?: string; class?: string } = $props();
	const src = $derived(`https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`);
</script>

<iframe {src} {title} class="rounded-3xl border border-black/5 shadow-sm {cls}" style="border:0" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe>

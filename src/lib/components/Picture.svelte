<script lang="ts">
	// Responsive-format image with the fastest-first fallback chain:
	//   AVIF -> WebP -> JPEG
	// The browser tries each <source> top to bottom and uses the first format
	// it supports, so modern browsers get the ~90% smaller AVIF, older ones
	// get WebP, and anything else falls back to the JPEG <img> — which is
	// also the element that actually displays (alt, width, height, loading
	// and class all live on it, per the <picture> spec).
	// `src` is the image path with any extension, e.g. "/lawyer-man.webp" —
	// the extension is stripped and each format is derived from the base.
	// Pass width/height (intrinsic dimensions) when known to prevent CLS;
	// where the parent already reserves space (fixed size / aspect ratio),
	// they can be omitted.
	// `sizes` opts a usage into responsive variants: when given, <source>
	// and <img> get a srcset of the 400w / 800w variants plus the full-size
	// file, so a 40px avatar never downloads the 1600px original. Variants
	// are {base}-400w.{avif,webp,jpg} and {base}-800w.{avif,webp,jpg},
	// generated from the full-size JPEGs (see api_push_taxlawyer.py).
	// `fullWidth` is the full-size file's pixel width (1600 for the square
	// portraits, 1280 for lawyer-senior, 1920 for lawyer-meeting).
	let {
		src,
		alt = '',
		class: cls = '',
		width,
		height,
		loading = 'lazy',
		fetchpriority = 'auto',
		sizes,
		fullWidth = 1600
	}: {
		src: string;
		alt?: string;
		class?: string;
		width?: number;
		height?: number;
		loading?: 'lazy' | 'eager';
		fetchpriority?: 'high' | 'low' | 'auto';
		sizes?: string;
		fullWidth?: number;
	} = $props();

	const base = $derived(src.replace(/\.[^.]+$/, ''));
	const srcsetFor = (ext: string) =>
		`${base}-400w.${ext} 400w, ${base}-800w.${ext} 800w, ${base}.${ext} ${fullWidth}w`;
</script>

<picture class="contents">
	{#if sizes}
		<source srcset={srcsetFor('avif')} {sizes} type="image/avif" />
		<source srcset={srcsetFor('webp')} {sizes} type="image/webp" />
	{:else}
		<source srcset="{base}.avif" type="image/avif" />
		<source srcset="{base}.webp" type="image/webp" />
	{/if}
	<img
		src="{base}.jpg"
		srcset={sizes ? srcsetFor('jpg') : undefined}
		{sizes}
		{alt}
		class={cls}
		{width}
		{height}
		{loading}
		decoding="async"
		fetchpriority={fetchpriority}
	/>
</picture>

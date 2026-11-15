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
	let {
		src,
		alt = '',
		class: cls = '',
		width,
		height,
		loading = 'lazy',
		fetchpriority = 'auto'
	}: {
		src: string;
		alt?: string;
		class?: string;
		width?: number;
		height?: number;
		loading?: 'lazy' | 'eager';
		fetchpriority?: 'high' | 'low' | 'auto';
	} = $props();

	const base = $derived(src.replace(/\.[^.]+$/, ''));
</script>

<picture class="contents">
	<source srcset="{base}.avif" type="image/avif" />
	<source srcset="{base}.webp" type="image/webp" />
	<img src="{base}.jpg" {alt} class={cls} {width} {height} {loading} decoding="async" fetchpriority={fetchpriority} />
</picture>

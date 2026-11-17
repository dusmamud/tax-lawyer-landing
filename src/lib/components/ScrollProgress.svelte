<script lang="ts">
	// Thin scroll-progress bar pinned to the top of the viewport.
	let progress = $state(0);

	function onScroll() {
		const el = document.documentElement;
		const max = el.scrollHeight - el.clientHeight;
		progress = max > 0 ? Math.min(100, (el.scrollTop / max) * 100) : 0;
	}

	$effect(() => {
		onScroll();
	});
</script>

<svelte:window onscroll={onScroll} />

<div class="fixed inset-x-0 top-0 z-[80] h-1 bg-transparent" aria-hidden="true">
	<div
		class="h-full bg-gradient-to-r from-leaf via-leaf-2 to-gold transition-[width] duration-100 ease-out"
		style="width: {progress}%"
	></div>
</div>

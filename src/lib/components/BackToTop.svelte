<script lang="ts">
	let show = $state(false);

	$effect(() => {
		const onScroll = () => (show = window.scrollY > 700);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

{#if show}
	<button
		onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
		aria-label="Back to top"
		class="animate-fade-up fixed right-4 bottom-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-navy text-xl text-white shadow-xl transition hover:-translate-y-1 hover:bg-navy-3 sm:right-6 sm:bottom-6"
	>
		↑
	</button>
{/if}

<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';

	let { class: cls = '' }: { class?: string } = $props();
</script>

<span class="inline-flex items-center gap-0.5 text-gold {cls}" role="img" aria-label="5 out of 5 stars">
	{#each [0, 1, 2, 3, 4] as _}
		<Icon name="star" class="h-4 w-4" />
	{/each}
</span>

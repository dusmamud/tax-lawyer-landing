<script lang="ts">
	import { reveal } from '../actions/reveal';
	import type { Snippet } from 'svelte';

	let { children, delay = 0, class: className = '' }: { children: Snippet; delay?: number; class?: string } =
		$props();
</script>

<div use:reveal={{ delay }} class={className}>
	{@render children()}
</div>

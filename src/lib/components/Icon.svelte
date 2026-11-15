<script lang="ts">
	export type IconName =
		| 'phone'
		| 'mail'
		| 'clock'
		| 'check'
		| 'star'
		| 'arrow-right'
		| 'arrow-left'
		| 'arrow-up'
		| 'diamond';

	let { name, class: cls = '' }: { name: IconName; class?: string } = $props();

	const filled = $derived(name === 'star' || name === 'diamond');
</script>

<svg
	viewBox="0 0 24 24"
	class={cls}
	fill={filled ? 'currentColor' : 'none'}
	stroke={filled ? 'none' : 'currentColor'}
	stroke-width="2"
	stroke-linecap="round"
	aria-hidden="true"
>
	{#if name === 'phone'}
		<path
			d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"
			stroke-linejoin="round"
		/>
	{:else if name === 'mail'}
		<rect x="3" y="5" width="18" height="14" rx="2" />
		<path d="M3 7l9 6 9-6" />
	{:else if name === 'clock'}
		<circle cx="12" cy="12" r="9" />
		<path d="M12 7v5l3 2" />
	{:else if name === 'check'}
		<path d="M5 13l4 4L19 7" stroke-linejoin="round" />
	{:else if name === 'star'}
		<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
	{:else if name === 'arrow-right'}
		<path d="M5 12h14M13 6l6 6-6 6" stroke-linejoin="round" />
	{:else if name === 'arrow-left'}
		<path d="M19 12H5M11 6l-6 6 6 6" stroke-linejoin="round" />
	{:else if name === 'arrow-up'}
		<path d="M12 19V5M6 11l6-6 6 6" stroke-linejoin="round" />
	{:else if name === 'diamond'}
		<path d="M12 3l7 9-7 9-7-9z" />
	{/if}
</svg>

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
		| 'diamond'
		| 'pin'
		| 'calc'
		| 'calendar'
		| 'receipt'
		| 'doc';

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
	{:else if name === 'pin'}
		<path d="M12 21s-7-5.1-7-11a7 7 0 1 1 14 0c0 5.9-7 11-7 11z" stroke-linejoin="round" />
		<circle cx="12" cy="10" r="2.5" />
	{:else if name === 'calc'}
		<rect x="5" y="3" width="14" height="18" rx="2" />
		<path d="M8 7h8" />
		<path d="M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01" />
	{:else if name === 'calendar'}
		<rect x="3" y="5" width="18" height="16" rx="2" />
		<path d="M3 10h18M8 3v4M16 3v4" />
	{:else if name === 'receipt'}
		<path d="M6 2h12v20l-2-1.5L14 22l-2-1.5L10 22l-2-1.5L6 22z" stroke-linejoin="round" />
		<path d="M9 7h6M9 11h6" />
	{:else if name === 'doc'}
		<path d="M6 2h9l5 5v15H6z" stroke-linejoin="round" />
		<path d="M14 2v6h6M9 13h6M9 17h6" />
	{/if}
</svg>

<script lang="ts">
	let open = $state(false);

	const links = [
		{ label: 'Home', href: '#home' },
		{ label: 'About Us', href: '#about' },
		{ label: 'Practice Areas', href: '#practice' },
		{ label: 'Our Blog', href: '#practice' },
		{ label: 'Pages', href: '#practice' },
		{ label: 'Contact Us', href: '#contact' }
	];
</script>

<header class="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-black/5">
	<div class="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
		<a href="#home" class="flex items-center gap-3">
			<span
				class="flex h-12 w-12 items-center justify-center rounded-full border-2 border-navy/80 bg-white text-navy"
			>
				<!-- scales of justice -->
				<svg viewBox="0 0 24 24" class="h-7 w-7" fill="none" stroke="currentColor" stroke-width="1.6">
					<path d="M12 3v18M8 21h8M12 6h7M12 6H5" stroke-linecap="round" />
					<path d="M5 6l-2.5 6a2.8 2.8 0 0 0 5 0L5 6zM19 6l-2.5 6a2.8 2.8 0 0 0 5 0L19 6z" />
					<path d="M7 21h10" stroke-linecap="round" />
				</svg>
			</span>
			<span class="leading-none">
				<span class="block font-serif text-[22px] font-bold tracking-[0.18em] text-navy">MSY LAW</span>
				<span class="mt-1 block text-[9px] font-semibold tracking-[0.32em] text-muted uppercase"
					>Tax Attorney</span
				>
			</span>
		</a>

		<nav class="hidden items-center gap-8 text-[14px] font-medium text-ink/85 lg:flex">
			{#each links as link}
				<a href={link.href} class="transition hover:text-navy hover:underline underline-offset-4">
					{link.label}
				</a>
			{/each}
		</nav>

		<div class="flex items-center gap-3">
			<button
				aria-label="Search"
				class="hidden h-10 w-10 items-center justify-center rounded-full text-navy transition hover:bg-white sm:flex"
			>
				<svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2">
					<circle cx="11" cy="11" r="7" />
					<path d="m20 20-3.5-3.5" stroke-linecap="round" />
				</svg>
			</button>
			<button
				aria-label="Menu"
				onclick={() => (open = !open)}
				class="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md border border-navy/20 bg-white lg:hidden"
			>
				<span class="h-0.5 w-5 bg-navy"></span>
				<span class="h-0.5 w-5 bg-navy"></span>
				<span class="h-0.5 w-3.5 self-start bg-navy ml-2.5"></span>
			</button>
			<button
				aria-label="Menu"
				class="hidden h-10 w-10 flex-col items-center justify-center gap-1.5 lg:flex"
			>
				<span class="h-0.5 w-6 bg-navy"></span>
				<span class="h-0.5 w-6 bg-navy"></span>
				<span class="h-0.5 w-4 bg-navy self-end mr-2"></span>
			</button>
		</div>
	</div>

	{#if open}
		<nav class="border-t border-black/5 bg-cream px-5 py-4 lg:hidden">
			<div class="flex flex-col gap-3 text-[15px] font-medium">
				{#each links as link}
					<a href={link.href} onclick={() => (open = false)}>{link.label}</a>
				{/each}
			</div>
		</nav>
	{/if}
</header>

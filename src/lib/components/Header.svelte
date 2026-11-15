<script lang="ts">
	import TopBar from '#lib/components/TopBar.svelte';

	let open = $state(false);
	let scrolled = $state(false);

	$effect(() => {
		const onScroll = () => (scrolled = window.scrollY > 24);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	const links = [
		{ label: 'Home', href: '#home' },
		{ label: 'About Us', href: '#about' },
		{ label: 'Practice Areas', href: '#practice' },
		{ label: 'Our Team', href: '#team' },
		{ label: 'Testimonials', href: '#testimonials' },
		{ label: 'Blog', href: '#blog' },
		{ label: 'Contact Us', href: '#contact' }
	];
</script>

<TopBar />

<header
	class="sticky top-0 z-50 bg-cream/95 backdrop-blur transition-all duration-300 {scrolled
		? 'shadow-[0_8px_30px_rgba(18,42,58,0.12)]'
		: 'border-b border-black/5'}"
>
	<div
		class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-5 lg:px-8 {scrolled
			? 'py-2.5'
			: 'py-4'}"
	>
		<a href="#home" class="flex shrink-0 items-center gap-2.5" aria-label="MSY Law — home">
			<span
				class="flex h-11 w-11 items-center justify-center rounded-full border-2 border-navy/80 bg-white text-navy sm:h-12 sm:w-12"
			>
				<svg viewBox="0 0 24 24" class="h-6 w-6 sm:h-7 sm:w-7" fill="none" stroke="currentColor" stroke-width="1.6">
					<path d="M12 3v18M8 21h8M12 6h7M12 6H5" stroke-linecap="round" />
					<path d="M5 6l-2.5 6a2.8 2.8 0 0 0 5 0L5 6zM19 6l-2.5 6a2.8 2.8 0 0 0 5 0L19 6z" />
					<path d="M7 21h10" stroke-linecap="round" />
				</svg>
			</span>
			<span class="leading-none">
				<span class="block font-serif text-[20px] font-bold tracking-[0.16em] text-navy sm:text-[22px]">MSY LAW</span>
				<span class="mt-1 block text-[9px] font-semibold tracking-[0.32em] text-muted uppercase">Tax Attorney</span>
			</span>
		</a>

		<nav class="hidden items-center gap-7 text-[14px] font-medium text-ink/85 xl:flex">
			{#each links as link}
				<a href={link.href} class="transition hover:text-navy hover:underline underline-offset-4">
					{link.label}
				</a>
			{/each}
		</nav>

		<div class="flex items-center gap-2 sm:gap-3">
			<a
				href="tel:+18005550199"
				class="hidden h-11 w-11 items-center justify-center rounded-full text-navy transition hover:bg-white lg:flex"
				aria-label="Call us"
			>
				<svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" stroke-linejoin="round" />
				</svg>
			</a>
			<a
				href="#contact"
				class="hidden rounded-full bg-navy px-5 py-2.5 text-[13.5px] font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-navy-3 sm:inline-block"
			>
				Free Consultation
			</a>
			<button
				aria-label={open ? 'Close menu' : 'Open menu'}
				aria-expanded={open}
				onclick={() => (open = !open)}
				class="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-xl border border-navy/20 bg-white transition hover:bg-cream-2 xl:hidden"
			>
				<span class="h-0.5 w-5 bg-navy transition-transform {open ? 'translate-y-[7px] rotate-45' : ''}"></span>
				<span class="h-0.5 w-5 bg-navy transition-opacity {open ? 'opacity-0' : ''}"></span>
				<span class="h-0.5 w-5 bg-navy transition-transform {open ? '-translate-y-[7px] -rotate-45' : ''}"></span>
			</button>
		</div>
	</div>

	{#if open}
		<nav class="animate-fade-up border-t border-black/5 bg-cream px-5 pt-2 pb-6 xl:hidden">
			<div class="flex flex-col">
				{#each links as link}
					<a
						href={link.href}
						onclick={() => (open = false)}
						class="border-b border-black/5 py-3.5 text-[16px] font-medium text-ink transition hover:text-navy"
					>
						{link.label}
					</a>
				{/each}
			</div>
			<a
				href="#contact"
				onclick={() => (open = false)}
				class="mt-5 block rounded-full bg-navy py-3.5 text-center text-[15px] font-semibold text-white"
			>
				Book a Free Consultation
			</a>
			<p class="mt-4 text-center text-[13px] text-muted">
				Call <a href="tel:+18005550199" class="font-semibold text-navy">+1 (800) 555-0199</a> · Mon–Fri, 9 AM – 6 PM
			</p>
		</nav>
	{/if}
</header>

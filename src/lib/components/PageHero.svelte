<script lang="ts">
	import Reveal from '#lib/components/Reveal.svelte';

	let {
		eyebrow,
		title,
		subtitle = '',
		crumb = ''
	}: { eyebrow: string; title: string; subtitle?: string; crumb?: string } = $props();
</script>

<section class="relative overflow-hidden bg-cream pt-12 pb-14 lg:pt-16 lg:pb-20">
	<div class="pointer-events-none absolute inset-0" aria-hidden="true">
		<div class="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-leaf/20 blur-3xl"></div>
		<div class="absolute -right-20 -bottom-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl"></div>
	</div>
	<div class="relative mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
		<Reveal>
			<nav aria-label="Breadcrumb" class="text-[13px] font-medium text-muted">
				<a href="/" class="transition hover:text-navy">Home</a>
				{#if crumb}
					<span class="mx-2" aria-hidden="true">/</span><span class="text-navy">{crumb}</span>
				{/if}
			</nav>
			<span class="mt-5 inline-block rounded-md bg-white px-3 py-1 text-[12px] font-semibold tracking-wide text-navy shadow-sm">{eyebrow}</span>
			<h1 class="mt-4 max-w-3xl font-serif text-[36px] leading-[1.1] font-semibold text-ink sm:text-[52px]">{title}</h1>
			{#if subtitle}
				<p class="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted sm:text-base">{subtitle}</p>
			{/if}
		</Reveal>
	</div>
</section>

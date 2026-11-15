<script lang="ts">
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { practiceAreas } from '../data/practice-areas';

	// Cards render from the same data as the practice-area pages, so the
	// home grid can never link to a retired area again.
	const iconFor: Record<string, string> = {
		'income-tax-appeals': 'scales',
		'gst-disputes': 'doc',
		'corporate-tax-planning': 'bank',
		'international-tax': 'globe',
		'tax-planning-compliance': 'calc',
		'search-seizure-settlement': 'shield'
	};
	const areas = practiceAreas.map((area) => ({
		slug: area.slug,
		title: area.title,
		text: area.short,
		icon: iconFor[area.slug] ?? 'doc'
	}));
</script>

<section id="practice" class="bg-cream py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
		<Reveal class="text-center">
			<span class="inline-block rounded-md bg-white px-3 py-1 text-[12px] font-semibold tracking-wide text-navy shadow-sm">Practice Areas</span>
			<h2 class="mt-5 font-serif text-[32px] font-semibold text-ink sm:text-[44px]">Tackling Your Toughest Tax Solution</h2>
			<p class="mx-auto mt-3 max-w-xl text-[15px] text-muted">Six core services, one team. Tap any card to start a free consultation about it.</p>
		</Reveal>

		<div class="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
			{#each areas as area, i}
				<Reveal delay={(i % 3) * 90}>
					<article class="group relative h-full rounded-2xl p-7 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl {i === 2 ? 'bg-navy text-white' : 'bg-white text-ink'}">
						<span class="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border transition group-hover:rotate-45 {i === 2 ? 'border-white/30 text-white' : 'border-navy/15 text-navy'}">
							<svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M9 7h8v8" stroke-linecap="round" stroke-linejoin="round" /></svg>
						</span>
						<span class="flex h-14 w-14 items-center justify-center rounded-full {i === 2 ? 'bg-white/15 text-white' : 'bg-cream text-navy'}">
							{#if area.icon === 'scales'}
								<svg viewBox="0 0 24 24" class="h-7 w-7" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3v18M8 21h8M12 6h7M12 6H5" stroke-linecap="round" /><path d="M5 6l-2.5 6a2.8 2.8 0 0 0 5 0L5 6zM19 6l-2.5 6a2.8 2.8 0 0 0 5 0L19 6z" /></svg>
							{:else if area.icon === 'bank'}
								<svg viewBox="0 0 24 24" class="h-7 w-7" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 9l9-6 9 6M4 9v10M20 9v10M8 12v5M12 12v5M16 12v5M2 21h20" stroke-linecap="round" stroke-linejoin="round" /></svg>
							{:else if area.icon === 'doc'}
								<svg viewBox="0 0 24 24" class="h-7 w-7" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 2h9l5 5v15H6z" stroke-linejoin="round" /><path d="M14 2v6h6M9 13h6M9 17h6" stroke-linecap="round" /></svg>
							{:else if area.icon === 'calc'}
								<svg viewBox="0 0 24 24" class="h-7 w-7" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M8 7h8M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01" stroke-linecap="round" /></svg>
							{:else if area.icon === 'globe'}
								<svg viewBox="0 0 24 24" class="h-7 w-7" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3.5 3 14 0 18M12 3c-3 3.5-3 14 0 18" /></svg>
							{:else if area.icon === 'shield'}
								<svg viewBox="0 0 24 24" class="h-7 w-7" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3l7 3v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6z" stroke-linejoin="round" /><path d="M9 12l2 2 4-4" stroke-linecap="round" stroke-linejoin="round" /></svg>
							{:else}
								<svg viewBox="0 0 24 24" class="h-7 w-7" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 11l9-8 9 8M5 10v10M19 10v10M9 20v-6h6v6" stroke-linecap="round" stroke-linejoin="round" /></svg>
							{/if}
						</span>
						<h3 class="mt-5 font-serif text-[22px] font-semibold">{area.title}</h3>
						<p class="mt-2 text-[14px] leading-relaxed {i === 2 ? 'text-white/80' : 'text-muted'}">{area.text}</p>
						<a href="/practice-areas/{area.slug}" class="mt-5 inline-flex items-center gap-1.5 text-[13px] font-bold {i === 2 ? 'text-white' : 'text-ink'}">
							Read More <Icon name="arrow-right" class="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
						</a>
					</article>
				</Reveal>
			{/each}
		</div>

		<Reveal class="mt-12 text-center">
			<a href="/practice-areas" class="inline-block rounded-full bg-navy px-7 py-3 text-[14px] font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-navy-3">View More Services</a>
		</Reveal>
	</div>
</section>

<script lang="ts">
	import Reveal from '#lib/components/Reveal.svelte';

	type Area = { title: string; text: string; icon: string; highlight?: boolean };
	const areas: Area[] = [
		{ title: 'Criminal Tax Law', text: 'Our team of experienced tax attorneys and experts is here to provide you with valuable.', icon: 'scales' },
		{ title: 'Estate Planning & Taxation', text: 'From understanding the latest tax code change to exploring tax planning strategies.', icon: 'bank' },
		{ title: 'State & Local Taxation', text: 'Explore our informative articles, guides, and tools to gain a better grasp of tax laws.', icon: 'doc', highlight: true },
		{ title: 'Tax Planning & Compliance', text: 'We aim to simplify the intricacies of tax law, making it accessible and relevant to Tax.', icon: 'calc' },
		{ title: 'International Taxation', text: 'Whether you’re dealing with income tax, estate tax, business tax, or any other Expect.', icon: 'globe' },
		{ title: 'Property Taxes', text: 'Tax strategy, or a legal professional in to the search of the latest updates and insights.', icon: 'home' }
	];
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
					<article class="group relative h-full rounded-2xl p-7 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl {area.highlight ? 'bg-navy text-white' : 'bg-white text-ink'}">
						<span class="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border transition group-hover:rotate-45 {area.highlight ? 'border-white/30 text-white' : 'border-navy/15 text-navy'}">
							<svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M9 7h8v8" stroke-linecap="round" stroke-linejoin="round" /></svg>
						</span>
						<span class="flex h-14 w-14 items-center justify-center rounded-full {area.highlight ? 'bg-white/15 text-white' : 'bg-cream text-navy'}">
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
							{:else}
								<svg viewBox="0 0 24 24" class="h-7 w-7" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 11l9-8 9 8M5 10v10M19 10v10M9 20v-6h6v6" stroke-linecap="round" stroke-linejoin="round" /></svg>
							{/if}
						</span>
						<h3 class="mt-5 font-serif text-[22px] font-semibold">{area.title}</h3>
						<p class="mt-2 text-[14px] leading-relaxed {area.highlight ? 'text-white/80' : 'text-muted'}">{area.text}</p>
						<a href="#contact" class="mt-5 inline-flex items-center gap-1.5 text-[13px] font-bold {area.highlight ? 'text-white' : 'text-ink'}">
							Read More <span class="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
						</a>
					</article>
				</Reveal>
			{/each}
		</div>

		<Reveal class="mt-12 text-center">
			<a href="#contact" class="inline-block rounded-full bg-navy px-7 py-3 text-[14px] font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-navy-3">View More Services</a>
		</Reveal>
	</div>
</section>

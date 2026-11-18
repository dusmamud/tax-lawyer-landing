<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';
	import { practiceAreas } from '../../lib/data/practice-areas';
</script>


<PageHero
	eyebrow="Practice Areas"
	title="Tackling your toughest tax solution"
	subtitle="Six core services, one team. Every case starts with a free consultation and a fixed-fee quote — no surprises."
	crumb="Practice Areas"
/>

<section class="bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
		<div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
			{#each practiceAreas as area, i}
				<Reveal delay={(i % 3) * 90}>
					<a href="/practice-areas/{area.slug}" class="group flex h-full flex-col rounded-2xl border border-black/5 bg-cream/60 p-7 transition duration-300 hover:-translate-y-1.5 hover:border-leaf/50 hover:bg-white hover:shadow-xl">
						<span class="flex h-14 w-14 items-center justify-center rounded-full bg-navy text-white transition group-hover:bg-leaf">
							<Icon name="check" class="h-6 w-6" />
						</span>
						<h2 class="mt-5 font-serif text-[22px] font-semibold">{area.title}</h2>
						<p class="mt-2 flex-1 text-[14px] leading-relaxed text-muted">{area.short}</p>
						<span class="mt-5 inline-flex items-center gap-1.5 text-[13px] font-bold text-navy">
							Learn more <Icon name="arrow-right" class="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
						</span>
					</a>
				</Reveal>
			{/each}
		</div>
		<Reveal class="mt-12 rounded-2xl bg-navy p-7 text-white sm:p-8">
			<div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
				<div>
					<h2 class="font-serif text-[24px] font-semibold">Not sure which area fits your problem?</h2>
					<p class="mt-1 text-[14px] text-white/75">Describe it in your own words — we will point you to the right attorney, free.</p>
				</div>
				<a href="/free-consultation" class="shrink-0 rounded-full bg-leaf px-6 py-3 text-center text-[14px] font-bold text-navy-3 transition hover:bg-leaf-2">Ask us — it’s free</a>
			</div>
		</Reveal>
	</div>
</section>

<CtaBanner />

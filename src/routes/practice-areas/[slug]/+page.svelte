<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const area = $derived(data.area);
	const others = $derived(data.others);
</script>

<svelte:head>
	<title>{area.title} — MSY Law | Tax Attorney</title>
	<meta name="description" content={area.short} />
</svelte:head>

<PageHero
	eyebrow="Practice Area"
	title={area.title}
	subtitle={area.hero}
	crumb={area.title}
/>

<section class="bg-white py-16 lg:py-20">
	<div class="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-5 lg:grid-cols-[1.6fr_1fr] lg:gap-14 lg:px-8">
		<div>
			<Reveal>
				<h2 class="font-serif text-[28px] leading-tight font-semibold text-ink sm:text-[34px]">How we help</h2>
				{#each area.overview as para}
					<p class="mt-4 text-[15px] leading-relaxed text-muted">{para}</p>
				{/each}
			</Reveal>

			<Reveal delay={100}>
				<h3 class="mt-10 font-serif text-[22px] font-semibold">What we handle</h3>
				<ul class="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
					{#each area.services as service}
						<li class="flex items-start gap-3 rounded-xl bg-cream/60 px-4 py-3 text-[14.5px] font-medium">
							<span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf/20 text-leaf-dark"><Icon name="check" class="h-3 w-3" /></span>
							{service}
						</li>
					{/each}
				</ul>
			</Reveal>

			<Reveal delay={160}>
				<div class="mt-10 rounded-2xl border border-leaf/40 bg-cream/60 p-6">
					<p class="text-[12px] font-bold tracking-[0.16em] text-leaf-dark uppercase">Recent result</p>
					<p class="mt-2 font-serif text-[20px] leading-snug font-semibold">{area.result}</p>
					<p class="mt-2 text-[13px] text-muted">Past results do not guarantee similar outcomes.</p>
				</div>
			</Reveal>
		</div>

		<aside>
			<Reveal delay={120}>
				<div class="rounded-3xl bg-navy p-7 text-white lg:sticky lg:top-28">
					<h3 class="font-serif text-[24px] font-semibold">Is this your problem?</h3>
					<p class="mt-3 text-[14px] leading-relaxed text-white/75">{area.who}</p>
					<p class="mt-4 text-[14px] leading-relaxed text-white/75">
						Tell us what happened in a free 30-minute consultation. You will leave with a clear plan — whether you hire us or not.
					</p>
					<a href="/free-consultation" class="mt-6 block rounded-full bg-leaf py-3 text-center text-[14px] font-bold text-navy-3 transition hover:bg-leaf-2">Book Free Consultation</a>
					<a href="tel:+18005550199" class="mt-3 block text-center text-[14px] font-semibold text-white/85 transition hover:text-white">or call +1 (800) 555-0199</a>
				</div>
			</Reveal>

			<Reveal delay={200}>
				<div class="mt-6 rounded-3xl border border-black/5 bg-cream/50 p-6">
					<h3 class="text-[13px] font-bold tracking-[0.16em] text-muted uppercase">Other practice areas</h3>
					<ul class="mt-4 space-y-3">
						{#each others as other}
							<li>
								<a href="/practice-areas/{other.slug}" class="flex items-center justify-between gap-2 text-[14.5px] font-semibold text-navy transition hover:text-leaf-dark">
									{other.title}
									<Icon name="arrow-right" class="h-4 w-4 shrink-0" />
								</a>
							</li>
						{/each}
					</ul>
				</div>
			</Reveal>
		</aside>
	</div>
</section>

<CtaBanner />

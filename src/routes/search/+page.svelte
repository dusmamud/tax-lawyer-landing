<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { searchIndex } from '../../lib/data/search-index';

	let q = $state('');

	const results = $derived.by(() => {
		const query = q.trim().toLowerCase();
		if (!query) return searchIndex;
		const words = query.split(/\s+/);
		return searchIndex
			.map((e) => {
				const hay = `${e.t} ${e.d} ${e.k}`.toLowerCase();
				const score = words.reduce((s, w) => s + (hay.includes(w) ? 1 : 0), 0);
				return { e, score };
			})
			.filter((r) => r.score > 0)
			.sort((a, b) => b.score - a.score)
			.map((r) => r.e);
	});
</script>

<svelte:head>
	<title>Search — MSY Law</title>
	<meta name="description" content="Search every page of the MSY Law website: practice areas, lawyers, fees, locations, blog articles and more." />
</svelte:head>

<PageHero
	eyebrow="Search"
	title="Search the site"
	subtitle="Find a practice area, a lawyer, a fee, a city, or a blog article — everything on this site, in one place."
	crumb="Search"
/>

<section class="bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-3xl px-4 sm:px-5 lg:px-8">
		<Reveal>
			<div class="relative">
				<span class="pointer-events-none absolute top-1/2 left-5 -translate-y-1/2 text-muted">
					<svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.8-3.8" /></svg>
				</span>
				<input
					bind:value={q}
					type="search"
					placeholder="Try “notice”, “fees”, “Mumbai”, “GST”…"
					aria-label="Search the site"
					class="w-full rounded-full border border-navy/20 bg-cream/50 py-4 pr-5 pl-13 text-[16px] shadow-sm outline-none transition focus:border-leaf focus:bg-white focus:ring-2 focus:ring-leaf/30"
				/>
			</div>
			<p class="mt-3 text-[13.5px] text-muted">{results.length} result{results.length === 1 ? '' : 's'}{q.trim() ? ` for “${q.trim()}”` : ' — showing everything'}</p>
		</Reveal>

		<div class="mt-6 space-y-3">
			{#each results as entry, i}
				<Reveal delay={Math.min(i, 5) * 40}>
					<a href={entry.u} class="block rounded-2xl border border-black/5 bg-cream/50 p-5 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-lg">
						<span class="flex items-center justify-between gap-3">
							<span class="text-[15.5px] font-bold text-navy">{entry.t}</span>
							<Icon name="arrow-right" class="h-4 w-4 shrink-0 text-navy/50" />
						</span>
						<span class="mt-1 block text-[14px] leading-relaxed text-muted">{entry.d}</span>
						<span class="mt-1.5 block text-[12px] font-medium text-leaf-dark">{entry.u}</span>
					</a>
				</Reveal>
			{:else}
				<Reveal>
					<div class="rounded-2xl border border-black/5 bg-cream/50 p-8 text-center">
						<p class="font-serif text-[20px] font-semibold">No results for “{q.trim()}”</p>
						<p class="mt-2 text-[14.5px] text-muted">Try a different word — or call us at <a href="tel:+919811012345" class="font-semibold text-navy">+91 98110 12345</a> and a lawyer will point you to the right page.</p>
					</div>
				</Reveal>
			{/each}
		</div>

		<Reveal class="mt-10">
			<p class="text-center text-[14px] text-muted">Popular: <a href="/practice-areas/income-tax-appeals" class="font-semibold text-navy underline underline-offset-2">Income Tax Appeals</a> · <a href="/fees" class="font-semibold text-navy underline underline-offset-2">Fees</a> · <a href="/locations/mumbai" class="font-semibold text-navy underline underline-offset-2">Mumbai</a> · <a href="/practice-areas/gst-disputes" class="font-semibold text-navy underline underline-offset-2">GST Disputes</a></p>
		</Reveal>
	</div>
</section>

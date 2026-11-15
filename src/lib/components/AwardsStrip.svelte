<script lang="ts">
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';

	const awards = [
		{ name: 'Legal 500 Asia-Pacific', detail: 'Leading Tax Firm 2026' },
		{ name: 'Chambers Asia-Pacific', detail: 'Tax, Band 1' },
		{ name: 'India Business Law Journal', detail: 'Tax Firm of the Year' },
		{ name: 'India Legal Awards', detail: 'Best Tax Practice 2026' },
		{ name: 'Bar Council of Delhi', detail: 'Member since 2011' }
	];
</script>

<section class="border-y border-black/5 bg-white py-10">
	<div class="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
		<Reveal class="text-center">
			<p class="text-[12px] font-bold tracking-[0.2em] text-muted uppercase">Recognised for client service</p>
		</Reveal>
		<div class="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
			{#each awards as award, i}
				<Reveal delay={i * 60}>
					<div class="flex h-full flex-col items-center rounded-2xl border border-black/5 bg-cream/50 px-4 py-5 text-center transition hover:-translate-y-0.5 hover:shadow-md">
						<span class="text-gold" aria-hidden="true"><Icon name="star" class="h-6 w-6" /></span>
						<p class="mt-2 text-[14px] leading-snug font-bold text-navy">{award.name}</p>
						<p class="mt-1 text-[12px] leading-snug text-muted">{award.detail}</p>
					</div>
				</Reveal>
			{/each}
		</div>
	</div>
</section>

<script lang="ts">
	import Reveal from '#lib/components/Reveal.svelte';

	const results = [
		{ amount: '$2.4M', label: 'Tax debt settled', detail: 'IRS debt of $3.1M reduced to $680k for a family business.', kind: 'Debt Settlement' },
		{ amount: '$860k', label: 'Audit penalties removed', detail: 'Full penalty abatement after a 3-year audit defence.', kind: 'Audit Defence' },
		{ amount: '$1.2M', label: 'Estate tax saved', detail: 'Restructured estate plan before a major asset sale.', kind: 'Estate Planning' }
	];
</script>

<section class="bg-navy py-16 text-white lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
		<Reveal class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
			<div>
				<span class="inline-block rounded-md bg-white/10 px-3 py-1 text-[12px] font-semibold tracking-wide text-leaf-2">Case Results</span>
				<h2 class="mt-4 font-serif text-[32px] leading-tight font-semibold sm:text-[40px]">Results we can show, not just promise</h2>
			</div>
			<p class="max-w-sm text-[14px] leading-relaxed text-white/70">Past results don’t guarantee future outcomes — but they show how we work.</p>
		</Reveal>

		<div class="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
			{#each results as result, i}
				<Reveal delay={i * 100}>
					<article class="h-full rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-leaf/50 hover:bg-white/10">
						<span class="rounded-full bg-leaf/20 px-3 py-1 text-[11px] font-bold tracking-wide text-leaf-2 uppercase">{result.kind}</span>
						<p class="mt-5 font-serif text-5xl font-bold text-leaf-2">{result.amount}</p>
						<p class="mt-2 text-[15px] font-semibold">{result.label}</p>
						<p class="mt-2 text-[14px] leading-relaxed text-white/70">{result.detail}</p>
					</article>
				</Reveal>
			{/each}
		</div>
	</div>
</section>

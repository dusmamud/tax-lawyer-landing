<script lang="ts">
	import Reveal from '#lib/components/Reveal.svelte';

	const steps = [
		{ n: '01', title: 'Free Consultation', text: 'Tell us what happened in a free 30-minute call. No obligation, no jargon.' },
		{ n: '02', title: 'Clear Action Plan', text: 'Within 48 hours you get a written plan, timeline and fixed-fee quote.' },
		{ n: '03', title: 'We Handle It', text: 'We deal with the Income-tax Department, GST officers, paperwork and deadlines — you get weekly updates.' },
		{ n: '04', title: 'Resolved & Protected', text: 'Case closed, savings locked in, and a plan so it never happens again.' }
	];
</script>

<section class="bg-cream py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
		<Reveal class="mx-auto max-w-2xl text-center">
			<span class="inline-block rounded-md bg-white px-3 py-1 text-[12px] font-semibold tracking-wide text-navy shadow-sm">How It Works</span>
			<h2 class="mt-4 font-serif text-[32px] leading-tight font-semibold text-ink sm:text-[40px]">From stressed to settled in 4 steps</h2>
		</Reveal>

		<div class="relative mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
			<div class="absolute top-8 right-[12%] left-[12%] hidden h-0.5 bg-navy/10 lg:block" aria-hidden="true"></div>
			{#each steps as step, i}
				<Reveal delay={i * 110}>
					<article class="relative h-full rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
						<span class="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-navy font-serif text-[22px] font-bold text-white ring-8 ring-cream">
							{step.n}
						</span>
						<h3 class="mt-5 font-serif text-[20px] font-semibold">{step.title}</h3>
						<p class="mt-2 text-[14px] leading-relaxed text-muted">{step.text}</p>
					</article>
				</Reveal>
			{/each}
		</div>
	</div>
</section>

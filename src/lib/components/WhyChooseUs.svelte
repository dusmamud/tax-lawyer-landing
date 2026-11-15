<script lang="ts">
	import Reveal from '#lib/components/Reveal.svelte';

	const items = [
		{
			icon: 'shield',
			title: 'IRS & Audit Defence',
			text: 'We speak to the IRS for you, so you never face an audit alone — from first notice to final settlement.'
		},
		{
			icon: 'clock',
			title: 'Fast, Clear Answers',
			text: 'Same-day replies, plain-English explanations and a clear plan within 48 hours of your first call.'
		},
		{
			icon: 'tag',
			title: 'Fixed, Honest Fees',
			text: 'A written quote before we start. No hourly surprises, no hidden charges — ever.'
		},
		{
			icon: 'lock',
			title: '100% Confidential',
			text: 'Attorney–client privilege from day one. Your finances stay private, always.'
		}
	];
</script>

<section id="why" class="bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
		<Reveal class="mx-auto max-w-2xl text-center">
			<span class="inline-block rounded-md bg-cream px-3 py-1 text-[12px] font-semibold tracking-wide text-navy">Why Choose Us</span>
			<h2 class="mt-4 font-serif text-[32px] leading-tight font-semibold text-ink sm:text-[40px]">
				Tax problems are stressful.<br />Solving them shouldn’t be.
			</h2>
			<p class="mt-3 text-[15px] leading-relaxed text-muted">
				Most firms hand you jargon and a bill. We hand you a plan, a person you can call, and a result you can measure.
			</p>
		</Reveal>

		<div class="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
			{#each items as item, i}
				<Reveal delay={i * 90}>
					<article class="group h-full rounded-2xl border border-black/5 bg-cream/60 p-6 transition duration-300 hover:-translate-y-1.5 hover:border-leaf/50 hover:bg-white hover:shadow-xl">
						<span class="flex h-13 w-13 items-center justify-center rounded-2xl bg-navy text-white transition group-hover:bg-leaf">
							{#if item.icon === 'shield'}
								<svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z" stroke-linejoin="round" /><path d="M9 12l2 2 4-4" stroke-linecap="round" stroke-linejoin="round" /></svg>
							{:else if item.icon === 'clock'}
								<svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" stroke-linecap="round" /></svg>
							{:else if item.icon === 'tag'}
								<svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 11V4h7l10 10-7 7z" stroke-linejoin="round" /><circle cx="7.5" cy="8.5" r="1.5" /></svg>
							{:else}
								<svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" stroke-linecap="round" /></svg>
							{/if}
						</span>
						<h3 class="mt-5 font-serif text-[20px] font-semibold">{item.title}</h3>
						<p class="mt-2 text-[14px] leading-relaxed text-muted">{item.text}</p>
					</article>
				</Reveal>
			{/each}
		</div>
	</div>
</section>

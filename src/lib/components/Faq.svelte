<script lang="ts">
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';

	const faqs = [
		{ q: 'How much does a tax attorney cost?', a: 'Every case starts with a free 30-minute consultation. After that you get a written, fixed-fee quote before we start — no hourly surprises and no hidden charges.' },
		{ q: 'I got an IRS audit letter. What should I do first?', a: 'Don’t ignore it and don’t reply alone. Call us the same day — deadlines in audit letters are strict, and an early response usually means a far better outcome.' },
		{ q: 'Can you deal with the IRS on my behalf?', a: 'Yes. With a signed power of attorney we handle all IRS calls, letters and meetings for you. Most clients never speak to the IRS directly again.' },
		{ q: 'How long does a typical case take?', a: 'Simple compliance work takes 1–2 weeks. Audits usually take 2–6 months, and settlements 1–4 months. You’ll get a realistic timeline in your action plan, plus weekly updates.' },
		{ q: 'Is my information confidential?', a: 'Completely. Attorney–client privilege applies from your very first call, and we never share your details with anyone without your written permission.' }
	];

	let open = $state(0);
</script>

<section id="faq" class="bg-white py-16 lg:py-24">
	<div class="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-5 lg:grid-cols-[1fr_1.4fr] lg:gap-16 lg:px-8">
		<Reveal>
			<span class="inline-block rounded-md bg-cream px-3 py-1 text-[12px] font-semibold tracking-wide text-navy">FAQ</span>
			<h2 class="mt-4 font-serif text-[32px] leading-tight font-semibold text-ink sm:text-[40px]">Questions? We’ve got honest answers.</h2>
			<p class="mt-3 max-w-md text-[15px] leading-relaxed text-muted">Can’t find your question? Call us — a real attorney answers, not a bot.</p>
			<a href="tel:+18005550199" class="mt-6 inline-flex items-center gap-2 rounded-full border border-navy/15 px-5 py-3 text-[14px] font-semibold text-navy transition hover:bg-cream">
				<Icon name="phone" class="h-4 w-4" /> +1 (800) 555-0199
			</a>
		</Reveal>

		<div class="space-y-3">
			{#each faqs as faq, i}
				<Reveal delay={i * 60}>
					<div class="overflow-hidden rounded-2xl border border-black/5 bg-cream/50 transition {open === i ? 'bg-white shadow-md' : ''}">
						<button onclick={() => (open = open === i ? -1 : i)} aria-expanded={open === i} class="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6">
							<span class="text-[15px] font-bold sm:text-base">{faq.q}</span>
							<span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-lg text-white transition-transform duration-300 {open === i ? 'rotate-45' : ''}" aria-hidden="true">+</span>
						</button>
						{#if open === i}
							<p class="animate-fade-up px-5 pb-5 text-[14.5px] leading-relaxed text-muted sm:px-6">{faq.a}</p>
						{/if}
					</div>
				</Reveal>
			{/each}
		</div>
	</div>
</section>

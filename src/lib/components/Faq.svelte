<script lang="ts">
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { faqs } from '../data/faqs';

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
						<button onclick={() => (open = open === i ? -1 : i)} aria-expanded={open === i} aria-controls="faq-panel-{i}" class="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6">
							<span class="text-[15px] font-bold sm:text-base">{faq.q}</span>
							<span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-lg text-white transition-transform duration-300 {open === i ? 'rotate-45' : ''}" aria-hidden="true">+</span>
						</button>
						<div id="faq-panel-{i}" class="grid transition-all duration-500 ease-in-out {open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}">
							<div class="overflow-hidden">
								<p class="px-5 pb-5 text-[14.5px] leading-relaxed text-muted sm:px-6">{faq.a}</p>
							</div>
						</div>
					</div>
				</Reveal>
			{/each}
		</div>
	</div>
</section>

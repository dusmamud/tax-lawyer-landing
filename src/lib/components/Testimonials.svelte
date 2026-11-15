<script lang="ts">
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import Stars from '#lib/components/Stars.svelte';

	const items = [
		{ quote: 'The IRS wanted $180,000. MSY Law settled it for $22,000 — and I finally sleep at night. They called me every week with an update, no chasing needed.', name: 'Robert Hayes', role: 'Small Business Owner, Texas', img: '/lawyer-man.webp' },
		{ quote: 'After two accountants failed, Sarah rebuilt our estate plan in three weeks and saved us over a million in tax. Clear, calm and completely honest about fees.', name: 'Priya Sharma', role: 'Estate Client, California', img: '/lawyer-woman.webp' },
		{ quote: 'I was terrified of the audit letter. Emily explained everything in plain English, handled the whole audit, and not a single penalty stuck. Worth every penny.', name: 'James O’Connor', role: 'Freelancer, New York', img: '/lawyer-senior.webp' }
	];

	let index = $state(0);
	// Plain let, not $state: assigning it inside $effect would re-trigger the effect.
	let timer: ReturnType<typeof setInterval> | undefined;

	function go(i: number) {
		index = (i + items.length) % items.length;
		restart();
	}
	function restart() {
		clearInterval(timer);
		timer = setInterval(() => (index = (index + 1) % items.length), 7000);
	}
	$effect(() => {
		restart();
		return () => clearInterval(timer);
	});
</script>

<section id="testimonials" class="bg-cream py-16 lg:py-24">
	<div class="mx-auto max-w-4xl px-4 text-center sm:px-5">
		<Reveal>
			<span class="inline-block rounded-md bg-white px-3 py-1 text-[12px] font-semibold tracking-wide text-navy shadow-sm">Testimonials</span>
			<h2 class="mt-4 font-serif text-[32px] leading-tight font-semibold text-ink sm:text-[40px]">What our clients say</h2>
			<p class="mt-2 text-[15px] text-muted"><span class="font-bold text-ink">4.9 / 5</span> average from 1,200+ clients · <a href="/testimonials" class="font-bold text-navy underline underline-offset-4">Read all testimonials</a></p>
		</Reveal>

		<Reveal delay={120}>
			<div class="relative mt-10 rounded-3xl bg-white p-7 shadow-lg sm:p-10" role="region" aria-roledescription="carousel" aria-label="Client testimonials">
				<p class="font-serif text-6xl leading-none text-leaf" aria-hidden="true">“</p>
				{#key index}
					<blockquote class="animate-fade-up -mt-4 font-serif text-[21px] leading-relaxed font-medium text-ink sm:text-[24px]">
						{items[index].quote}
					</blockquote>
				{/key}
				<div class="mt-7 flex items-center justify-center gap-3">
					<img src={items[index].img} alt={items[index].name} class="h-12 w-12 rounded-full object-cover object-top ring-2 ring-cream" />
					<div class="text-left">
						<p class="text-[15px] font-bold">{items[index].name}</p>
						<p class="text-[13px] text-muted">{items[index].role}</p>
					</div>
				</div>
				<p class="mt-3"><Stars /></p>

				<div class="mt-6 flex items-center justify-center gap-4">
					<button onclick={() => go(index - 1)} aria-label="Previous testimonial" class="flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 text-navy transition hover:bg-navy hover:text-white"><Icon name="arrow-left" class="h-5 w-5" /></button>
					<div class="flex gap-2">
						{#each items as _, i}
							<button onclick={() => go(i)} aria-label="Go to testimonial {i + 1}" class="h-2.5 rounded-full transition-all {i === index ? 'w-8 bg-navy' : 'w-2.5 bg-navy/25 hover:bg-navy/50'}"></button>
						{/each}
					</div>
					<button onclick={() => go(index + 1)} aria-label="Next testimonial" class="flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 text-navy transition hover:bg-navy hover:text-white"><Icon name="arrow-right" class="h-5 w-5" /></button>
				</div>
			</div>
		</Reveal>
	</div>
</section>

<script lang="ts">
	import Reveal from '#lib/components/Reveal.svelte';

	type Stat = { value: number; suffix: string; prefix?: string; label: string; decimals?: number };
	const stats: Stat[] = [
		{ value: 98, suffix: '%', label: 'Successful Cases' },
		{ value: 1200, suffix: '+', label: 'Happy Clients' },
		{ value: 120, suffix: ' Cr+', prefix: '₹', label: 'Tax Saved for Clients' },
		{ value: 15, suffix: '+', label: 'Years of Experience' }
	];

	let visible = $state(false);
	let values = $state<number[]>(stats.map(() => 0));

	function animate() {
		const start = performance.now();
		const duration = 1600;
		const tick = (now: number) => {
			const p = Math.min(1, (now - start) / duration);
			const eased = 1 - Math.pow(1 - p, 3);
			values = stats.map((s) => Math.round(s.value * eased));
			if (p < 1) requestAnimationFrame(tick);
		};
		requestAnimationFrame(tick);
	}

	function onIntersect(node: HTMLElement) {
		const io = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && !visible) {
					visible = true;
					animate();
					io.disconnect();
				}
			},
			{ threshold: 0.3 }
		);
		io.observe(node);
		return { destroy: () => io.disconnect() };
	}
</script>

<section class="bg-navy py-12 lg:py-14" aria-label="Our results in numbers">
	<div
		use:onIntersect
		class="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-8 px-5 text-center text-white lg:grid-cols-4 lg:px-8"
	>
		{#each stats as stat, i}
			<Reveal delay={i * 90}>
				<p class="font-serif text-4xl font-bold sm:text-5xl">
					{stat.prefix ?? ''}{values[i].toLocaleString()}{stat.suffix}
				</p>
				<p class="mt-2 text-[13px] font-medium tracking-wide text-white/70">{stat.label}</p>
			</Reveal>
		{/each}
	</div>
</section>

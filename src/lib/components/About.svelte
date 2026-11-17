<script lang="ts">
	import Reveal from '#lib/components/Reveal.svelte';
	import Picture from '#lib/components/Picture.svelte';

	const points = [
		'Licensed tax lawyers, not just accountants',
		'Clear, fixed-fee quotes — no surprise bills',
		'Same-day response on every enquiry',
		'Confidential, judgement-free advice'
	];
</script>

<section id="about" class="bg-white py-16 lg:py-24">
	<div class="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
		<Reveal class="relative mx-auto w-full max-w-[440px]">
			<div class="absolute -inset-5 rounded-full border border-navy/10"></div>
			<div class="absolute -inset-3 rounded-full border border-dashed border-navy/20"></div>
			<span class="absolute top-6 -left-2 h-2.5 w-2.5 rounded-full bg-leaf"></span>
			<span class="absolute top-1/2 -left-5 h-2 w-2 rounded-full bg-leaf"></span>
			<span class="absolute right-2 bottom-16 h-2.5 w-2.5 rounded-full bg-leaf"></span>
			<div class="relative aspect-square overflow-hidden rounded-full bg-sage ring-8 ring-white">
				<Picture src="/lawyer-meeting.webp" alt="Tax attorney discussing documents with a client" class="h-full w-full object-cover" width={1920} height={1280} />
			</div>
			<div class="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl bg-navy px-5 py-3 text-white shadow-xl sm:left-auto sm:translate-x-0">
				<p class="font-serif text-2xl leading-none font-bold">15+</p>
				<p class="text-[12px] leading-tight text-white/80">Years of<br />experience</p>
			</div>
		</Reveal>

		<div>
			<Reveal>
				<span class="inline-block rounded-md bg-cream px-3 py-1 text-[12px] font-semibold tracking-wide text-navy">About Us</span>
				<h2 class="mt-5 font-serif text-[32px] leading-[1.15] font-semibold text-ink sm:text-[44px]">
					Your Trusted Tax Attorney,<br />Solve Tax Issues Together
				</h2>
				<p class="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
					Whether you're facing a tax audit, need assistance with tax compliance, or are looking for
					ways to maximize tax benefits, we have the knowledge — and the track record to prove it.
				</p>
			</Reveal>

			<Reveal delay={120}>
				<ul class="mt-6 space-y-3">
					{#each points as point}
						<li class="flex items-start gap-3 text-[15px] font-medium text-ink/90">
							<span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-leaf/20 text-leaf-dark">
								<svg viewBox="0 0 24 24" class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" /></svg>
							</span>
							{point}
						</li>
					{/each}
				</ul>
			</Reveal>

			<Reveal delay={200}>
				<div class="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center">
					<a href="/free-consultation" class="rounded-full bg-navy px-6 py-3 text-center text-[14px] font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-navy-3">
						Begin Your Tax Journey
					</a>
					<div class="flex items-center gap-3">
						<Picture src="/lawyer-senior.webp" alt="Michael S. Young, founding partner" class="h-12 w-12 rounded-full object-cover object-top ring-2 ring-cream" width={1280} height={1920} />
						<div>
							<p class="font-serif text-[17px] font-semibold italic">Michael S. Young</p>
							<p class="text-[12px] text-muted">Founding Partner · 15+ yrs</p>
						</div>
					</div>
				</div>
			</Reveal>
		</div>
	</div>
</section>

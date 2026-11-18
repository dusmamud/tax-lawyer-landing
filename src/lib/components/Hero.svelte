<script lang="ts">
	import Reveal from '#lib/components/Reveal.svelte';
	import Picture from '#lib/components/Picture.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import Stars from '#lib/components/Stars.svelte';
</script>

<section id="home" class="relative overflow-hidden bg-cream">
	<!-- soft background blobs -->
	<div class="pointer-events-none absolute inset-0" aria-hidden="true">
		<div class="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-leaf/20 blur-3xl"></div>
		<div class="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-gold/10 blur-3xl"></div>
		<span class="absolute top-16 left-[6%] h-2 w-2 rounded-full bg-leaf"></span>
		<span class="absolute right-[8%] bottom-28 h-2 w-2 rounded-full bg-leaf"></span>
	</div>

	<div class="relative mx-auto max-w-7xl px-4 pt-10 pb-14 sm:px-5 lg:px-8 lg:pt-16 lg:pb-20">
		<div class="grid grid-cols-1 items-center gap-10 lg:grid-cols-[240px_1fr_240px] lg:gap-6">
			<!-- Left portrait — visible on mobile too, smaller -->
			<div class="relative mx-auto w-[168px] shrink-0 animate-float-slow sm:w-[200px] lg:mx-0 lg:w-[220px]">
				<div class="absolute -inset-3 animate-spin-slow rounded-full border border-dashed border-navy/25 sm:-inset-4"></div>
				<div class="absolute -inset-6 rounded-full border border-navy/10 sm:-inset-8"></div>
				<div class="relative h-[168px] w-[168px] overflow-hidden rounded-full bg-sage ring-8 ring-white/70 sm:h-[200px] sm:w-[200px] lg:h-[220px] lg:w-[220px]">
					<Picture src="/lawyer-man.webp" alt="Tax lawyer" class="h-full w-full object-cover object-top" width={1600} height={1600} loading="eager" fetchpriority="high" sizes="(min-width: 1024px) 220px, (min-width: 640px) 200px, 168px" />
				</div>
				<span class="absolute -bottom-1 -left-4 -rotate-12 rounded-sm bg-leaf px-3 py-1.5 text-[12px] font-bold text-navy-3 shadow sm:-left-6 sm:text-[13px]">
					Tax Lawyer
				</span>
				<div class="absolute -right-3 -bottom-4 hidden animate-float rounded-2xl bg-white px-3.5 py-2.5 shadow-lg ring-1 ring-black/5 sm:block" style="animation-delay: 1.2s">
					<p class="font-serif text-lg leading-none font-bold text-navy">98%</p>
					<p class="mt-1 text-[11px] font-medium text-muted">Success rate</p>
				</div>
			</div>

			<!-- Centre copy -->
			<div class="text-center">
				<Reveal>
					<span class="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white/70 px-4 py-1.5 text-[12px] font-medium tracking-wide text-ink/70">
						<span class="h-2 w-2 animate-pulse-ring rounded-full bg-leaf"></span>
						We provide the experience you need
					</span>
				</Reveal>

				<Reveal delay={80}>
					<h1 class="mt-5 font-serif text-[38px] leading-[1.08] font-semibold text-ink sm:text-6xl lg:text-[64px]">
						We Handle Every<br />
						Case
						<span class="mx-1 inline-block align-middle" aria-hidden="true">
							<svg viewBox="0 0 72 40" class="inline h-6 w-14 sm:h-8 sm:w-16">
								<g transform="rotate(-18 36 20)">
									<rect x="8" y="10" width="30" height="13" rx="6" fill="#1e3d52" />
									<rect x="14" y="10" width="4" height="13" fill="#c9a227" />
									<rect x="28" y="10" width="4" height="13" fill="#c9a227" />
									<rect x="38" y="14" width="25" height="5" rx="2.5" fill="#8a5a2b" />
									<circle cx="66" cy="16.5" r="3.2" fill="#8a5a2b" />
								</g>
							</svg>
						</span>
						Professionally
					</h1>
				</Reveal>

				<Reveal delay={160}>
					<p class="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base">
						With a track record of successfully resolving a wide range of tax-related issues,
						we're committed to protecting your financial interests and helping you achieve peace of mind.
					</p>
				</Reveal>

				<Reveal delay={220}>
					<div class="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
						<a href="/practice-areas" class="w-full rounded-full bg-navy px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-navy-3 sm:w-auto">
							Discover Tax Services
						</a>
						<a href="/about" class="w-full rounded-full border border-navy/20 bg-white/80 px-7 py-3.5 text-[15px] font-semibold text-navy transition hover:-translate-y-0.5 hover:bg-white sm:w-auto">
							Learn More <span class="sr-only">about MSY Law</span>
						</a>
					</div>
				</Reveal>

				<Reveal delay={280}>
					<div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
						<div class="flex -space-x-3">
							<Picture src="/lawyer-man.webp" alt="" class="h-10 w-10 rounded-full object-cover object-top ring-2 ring-white" width={1600} height={1600} sizes="40px" />
							<Picture src="/lawyer-woman.webp" alt="" class="h-10 w-10 rounded-full object-cover object-top ring-2 ring-white" width={1600} height={1600} sizes="40px" />
							<Picture src="/lawyer-senior.webp" alt="" class="h-10 w-10 rounded-full object-cover object-top ring-2 ring-white" width={1280} height={1920} sizes="40px" />
							<span class="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-[11px] font-bold text-white ring-2 ring-white">1.2k+</span>
						</div>
						<div class="text-center sm:text-left">
							<p class="text-[14px] font-semibold text-ink">
								<Stars /> 4.9/5
							</p>
							<p class="text-[12.5px] text-muted">from 1,200+ happy clients</p>
						</div>
					</div>
				</Reveal>
			</div>

			<!-- Right portrait -->
			<div class="relative mx-auto w-[168px] shrink-0 animate-float sm:w-[200px] lg:mx-0 lg:w-[220px]">
				<div class="absolute -inset-3 animate-spin-slow rounded-full border border-dashed border-navy/25 sm:-inset-4"></div>
				<div class="absolute -inset-6 rounded-full border border-navy/10 sm:-inset-8"></div>
				<div class="relative h-[168px] w-[168px] overflow-hidden rounded-full bg-sage ring-8 ring-white/70 sm:h-[200px] sm:w-[200px] lg:h-[220px] lg:w-[220px]">
					<Picture src="/lawyer-woman.webp" alt="Tax lawyer" class="h-full w-full object-cover object-top" width={1600} height={1600} loading="eager" sizes="(min-width: 1024px) 220px, (min-width: 640px) 200px, 168px" />
				</div>
				<span class="absolute -top-3 -right-1 flex h-11 w-11 items-center justify-center rounded-full border-2 border-leaf bg-white text-[17px] font-bold text-leaf-dark shadow sm:-top-6 sm:-right-2 sm:h-12 sm:w-12">
					1
				</span>
				<div class="absolute -left-3 -bottom-4 hidden animate-float rounded-2xl bg-white px-3.5 py-2.5 shadow-lg ring-1 ring-black/5 sm:block" style="animation-delay: 0.6s">
					<p class="font-serif text-lg leading-none font-bold text-navy">₹120 Cr+</p>
					<p class="mt-1 text-[11px] font-medium text-muted">Tax saved for clients</p>
				</div>
			</div>
		</div>

		<div class="mt-12 flex justify-center lg:mt-14">
			<a href="#about" aria-label="Scroll down to About" class="flex h-14 w-14 animate-bounce items-center justify-center rounded-full border border-dashed border-navy/30 bg-white/80 text-navy transition hover:bg-white">
				<svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M12 5v14M6 13l6 6 6-6" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</a>
		</div>
	</div>

	<!-- Trust marquee -->
	<div class="relative border-y border-navy/10 bg-white/70 py-3.5">
		<div class="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
			<div class="marquee-track items-center gap-10 text-[13px] font-bold tracking-[0.18em] text-navy/80 uppercase">
				{#each [0, 1] as dup}
					<div class="flex items-center gap-10 pr-10" aria-hidden={dup === 1}>
						<span>Income Tax Appeals</span><Icon name="diamond" class="h-2.5 w-2.5 text-leaf" />
						<span>GST Disputes</span><Icon name="diamond" class="h-2.5 w-2.5 text-leaf" />
						<span>Corporate Tax Planning</span><Icon name="diamond" class="h-2.5 w-2.5 text-leaf" />
						<span>International Tax</span><Icon name="diamond" class="h-2.5 w-2.5 text-leaf" />
						<span>Search &amp; Seizure</span><Icon name="diamond" class="h-2.5 w-2.5 text-leaf" />
						<span>NRI Taxation</span><Icon name="diamond" class="h-2.5 w-2.5 text-leaf" />
						<span>Tax Compliance</span><Icon name="diamond" class="h-2.5 w-2.5 text-leaf" />
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

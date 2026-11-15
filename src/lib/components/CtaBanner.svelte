<script lang="ts">
	import Reveal from '#lib/components/Reveal.svelte';
</script>

<section class="bg-cream px-4 pb-16 sm:px-5 lg:px-8 lg:pb-24">
	<Reveal>
		<div class="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-navy px-6 py-12 text-center text-white shadow-xl sm:px-10 lg:py-16">
			<div class="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-leaf/20 blur-3xl" aria-hidden="true"></div>
			<div class="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-gold/15 blur-3xl" aria-hidden="true"></div>
			<div class="relative">
				<h2 class="mx-auto max-w-2xl font-serif text-[30px] leading-tight font-semibold sm:text-[40px]">
					Tax trouble won’t wait.<br />Neither should you.
				</h2>
				<p class="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white/75">
					Book a free 30-minute consultation today. Leave with a clear plan — whether you hire us or not.
				</p>
				<div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
					<a href="#contact" class="w-full rounded-full bg-leaf px-7 py-3.5 text-[15px] font-bold text-navy-3 shadow-lg transition hover:-translate-y-0.5 hover:bg-leaf-2 sm:w-auto">Book Free Consultation</a>
					<a href="tel:+18005550199" class="w-full rounded-full border border-white/30 px-7 py-3.5 text-[15px] font-semibold text-white transition hover:bg-white/10 sm:w-auto">Call +1 (800) 555-0199</a>
				</div>
			</div>
		</div>
	</Reveal>
</section>

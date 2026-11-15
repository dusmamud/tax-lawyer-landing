<script lang="ts">
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import ConsultationForm from '#lib/components/ConsultationForm.svelte';
</script>

<section id="contact" class="bg-white py-16 lg:py-24">
	<div class="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-5 lg:grid-cols-[1fr_1.15fr] lg:gap-14 lg:px-8">
		<Reveal>
			<span class="inline-block rounded-md bg-cream px-3 py-1 text-[12px] font-semibold tracking-wide text-navy">Contact Us</span>
			<h2 class="mt-4 font-serif text-[32px] leading-tight font-semibold text-ink sm:text-[40px]">Book your free consultation</h2>
			<p class="mt-3 max-w-md text-[15px] leading-relaxed text-muted">
				Tell us what’s going on — in your own words. A lawyer (not a sales rep) replies within one business day.
			</p>

			<div class="mt-8 space-y-4">
				<a href="tel:+919811012345" class="flex items-center gap-4 rounded-2xl border border-black/5 bg-cream/60 p-4 transition hover:-translate-y-0.5 hover:shadow-md">
					<span class="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white"><Icon name="phone" class="h-5 w-5" /></span>
					<span><span class="block text-[12px] font-semibold tracking-wide text-muted uppercase">Call us</span><span class="block text-[15px] font-bold">+91 98110 12345</span></span>
				</a>
				<a href="mailto:hello@msylaw.in" class="flex items-center gap-4 rounded-2xl border border-black/5 bg-cream/60 p-4 transition hover:-translate-y-0.5 hover:shadow-md">
					<span class="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white"><Icon name="mail" class="h-5 w-5" /></span>
					<span><span class="block text-[12px] font-semibold tracking-wide text-muted uppercase">Email</span><span class="block text-[15px] font-bold">hello@msylaw.in</span></span>
				</a>
				<div class="flex items-center gap-4 rounded-2xl border border-black/5 bg-cream/60 p-4">
					<span class="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white"><Icon name="clock" class="h-5 w-5" /></span>
					<span><span class="block text-[12px] font-semibold tracking-wide text-muted uppercase">Office hours</span><span class="block text-[15px] font-bold">Mon–Sat · 10:00 AM – 7:00 PM IST</span></span>
				</div>
			</div>
		</Reveal>

		<Reveal delay={120}>
			<ConsultationForm />
		</Reveal>
	</div>
</section>

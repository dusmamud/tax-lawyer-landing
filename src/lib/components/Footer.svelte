<script>
	import Stars from '#lib/components/Stars.svelte';
</script>

<footer class="bg-navy-3 pt-14 pb-8 text-white">
	<div class="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
		<div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
			<div>
				<p class="font-serif text-xl font-bold tracking-[0.18em]">MSY LAW</p>
				<p class="mt-3 max-w-xs text-[14px] leading-relaxed text-white/70">
					Trusted tax attorneys — solving tax issues together since 2011. Clear advice, fixed fees, real results.
				</p>
				<p class="mt-4 flex items-center gap-2 text-[13px] text-white/60"><Stars /> 4.9/5 · 1,200+ clients</p>
			</div>
			<div>
				<h3 class="text-[13px] font-bold tracking-[0.16em] text-white/50 uppercase">Practice Areas</h3>
				<ul class="mt-4 space-y-2.5 text-[14px] text-white/80">
					<li><a href="/practice-areas/criminal-tax-law" class="transition hover:text-white">Criminal Tax Law</a></li>
					<li><a href="/practice-areas/estate-planning-taxation" class="transition hover:text-white">Estate Planning &amp; Taxation</a></li>
					<li><a href="/practice-areas/state-local-taxation" class="transition hover:text-white">State &amp; Local Taxation</a></li>
					<li><a href="/practice-areas/international-taxation" class="transition hover:text-white">International Taxation</a></li>
					<li><a href="/practice-areas/property-taxes" class="transition hover:text-white">Property Taxes</a></li>
				</ul>
			</div>
			<div>
				<h3 class="text-[13px] font-bold tracking-[0.16em] text-white/50 uppercase">Company</h3>
				<ul class="mt-4 space-y-2.5 text-[14px] text-white/80">
					<li><a href="/about" class="transition hover:text-white">About Us</a></li>
					<li><a href="/team" class="transition hover:text-white">Our Team</a></li>
					<li><a href="/testimonials" class="transition hover:text-white">Testimonials</a></li>
					<li><a href="/blog" class="transition hover:text-white">Blog</a></li>
					<li><a href="/faq" class="transition hover:text-white">FAQ</a></li>
				</ul>
			</div>
			<div>
				<h3 class="text-[13px] font-bold tracking-[0.16em] text-white/50 uppercase">Contact</h3>
				<ul class="mt-4 space-y-2.5 text-[14px] text-white/80">
					<li><a href="tel:+18005550199" class="transition hover:text-white">+1 (800) 555-0199</a></li>
					<li><a href="mailto:hello@msylaw.com" class="transition hover:text-white">hello@msylaw.com</a></li>
					<li>Mon–Fri · 9:00 AM – 6:00 PM</li>
					<li>Free 30-min consultation</li>
				</ul>
				<a href="/free-consultation" class="mt-5 inline-block rounded-full bg-leaf px-5 py-2.5 text-[13px] font-bold text-navy-3 transition hover:bg-leaf-2">Book Free Consultation</a>
			</div>
		</div>
		<div class="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-[12.5px] text-white/55 sm:flex-row">
			<p>© 2026 MSY Law. All rights reserved.</p>
			<p class="flex flex-wrap items-center gap-x-4 gap-y-1"><a href="/privacy-policy" class="transition hover:text-white">Privacy Policy</a><a href="/terms" class="transition hover:text-white">Terms of Service</a><a href="/disclaimer" class="transition hover:text-white">Disclaimer</a><span>Attorney advertising. Past results do not guarantee similar outcomes.</span></p>
		</div>
	</div>
</footer>

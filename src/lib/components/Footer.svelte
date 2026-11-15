<script>
	import Stars from '#lib/components/Stars.svelte';
</script>

<footer class="bg-navy-3 pt-14 pb-8 text-white">
	<div class="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
		<div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
			<div>
				<a href="/" class="flex items-center gap-2.5" aria-label="MSY Law — home">
					<img src="/logo.svg" alt="MSY Law logo" class="h-10 w-10" width="40" height="40" />
					<span class="font-serif text-xl font-bold tracking-[0.18em]">MSY LAW</span>
				</a>
				<p class="mt-3 max-w-xs text-[14px] leading-relaxed text-white/70">
					Trusted tax attorneys — solving tax issues together since 2011. Clear advice, fixed fees, real results.
				</p>
				<p class="mt-4 flex items-center gap-2 text-[13px] text-white/60"><Stars /> 4.9/5 · 1,200+ clients</p>
				<p class="mt-3 text-[13px] text-white/60">
					<a href="https://www.google.com/maps/search/MSY+Law+Austin+TX" target="_blank" rel="noopener" class="font-semibold text-white/85 underline decoration-white/30 underline-offset-2 transition hover:text-white">See our 312 Google reviews</a> · Se habla español
				</p>
				<div class="mt-4 flex items-center gap-2.5">
					<a href="https://www.linkedin.com/company/msy-law" target="_blank" rel="noopener" aria-label="MSY Law on LinkedIn" class="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20">
						<svg viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.5c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21H9z"/></svg>
					</a>
					<a href="https://www.facebook.com/msylaw" target="_blank" rel="noopener" aria-label="MSY Law on Facebook" class="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20">
						<svg viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor"><path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.7V11H8.3v3h2.4v7z"/></svg>
					</a>
					<a href="https://x.com/msylaw" target="_blank" rel="noopener" aria-label="MSY Law on X" class="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20">
						<svg viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor"><path d="M17.7 3H21l-7.3 8.3L22.2 21h-6.7l-5.2-6.2L4.3 21H1l7.8-8.9L1.8 3h6.9l4.7 5.7zm-1.2 16h1.9L6.9 4.9H4.9z"/></svg>
					</a>
					<a href="https://www.youtube.com/@msylaw" target="_blank" rel="noopener" aria-label="MSY Law on YouTube" class="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20">
						<svg viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor"><path d="M23 7.2s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.3-1C16.6 3.6 12 3.6 12 3.6s-4.6 0-7.8.3c-.4.1-1.4.1-2.3 1-.7.7-.9 2.3-.9 2.3S.8 9.1.8 11v1.8c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.9.9 2 .9 2.6 1 1.9.2 7.5.3 7.5.3s4.6 0 7.8-.4c.4-.1 1.4-.1 2.3-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8V11c0-1.9-.2-3.8-.2-3.8zM9.8 15V8.4l6.2 3.3z"/></svg>
					</a>
				</div>
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
					<li><a href="/case-results" class="transition hover:text-white">Case Results</a></li>
					<li><a href="/resources" class="transition hover:text-white">Resources</a></li>
					<li><a href="/locations" class="transition hover:text-white">Locations</a></li>
					<li><a href="/fees" class="transition hover:text-white">Fees &amp; Pricing</a></li>
					<li><a href="/case-evaluator" class="transition hover:text-white">Case Evaluator</a></li>
					<li><a href="/client-portal" class="transition hover:text-white">Client Portal</a></li>
					<li><a href="/careers" class="transition hover:text-white">Careers</a></li>
					<li><a href="/news" class="transition hover:text-white">News</a></li>
					<li><a href="/search" class="transition hover:text-white">Search</a></li>
					<li><a href="/es" class="transition hover:text-white">En español</a></li>
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
			<p class="flex flex-wrap items-center gap-x-4 gap-y-1"><a href="/privacy-policy" class="transition hover:text-white">Privacy Policy</a><a href="/terms" class="transition hover:text-white">Terms of Service</a><a href="/disclaimer" class="transition hover:text-white">Disclaimer</a><a href="/cookie-policy" class="transition hover:text-white">Cookie Policy</a><a href="/accessibility" class="transition hover:text-white">Accessibility</a><a href="/sitemap" class="transition hover:text-white">Sitemap</a><span>Attorney advertising. Past results do not guarantee similar outcomes.</span></p>
		</div>
	</div>
</footer>

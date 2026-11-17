<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import Stars from '#lib/components/Stars.svelte';
	import { practiceAreas } from '../data/practice-areas';
	import { cities } from '../data/locations';

	// Newsletter signup is a demo (no backend): it shows a success state in
	// the browser. To go live, post the email to the firm's email tool.
	let email = $state('');
	let subscribed = $state(false);
	let newsError = $state('');

	function subscribe(e: SubmitEvent) {
		e.preventDefault();
		if (!email.includes('@') || email.length < 5) {
			newsError = 'Please enter a valid email address.';
			return;
		}
		newsError = '';
		subscribed = true;
	}

	const company = [
		{ label: 'About Us', href: '/about' },
		{ label: 'Our Team', href: '/team' },
		{ label: 'Testimonials', href: '/testimonials' },
		{ label: 'Case Results', href: '/case-results' },
		{ label: 'Blog', href: '/blog' },
		{ label: 'Careers', href: '/careers' },
		{ label: 'News', href: '/news' },
		{ label: 'FAQ', href: '/faq' }
	];

	const tools = [
		{ label: 'Fees & Pricing', href: '/fees' },
		{ label: 'Tax Calculators', href: '/tools' },
		{ label: 'Free Guides', href: '/downloads' },
		{ label: 'Case Evaluator', href: '/case-evaluator' },
		{ label: 'Client Portal', href: '/client-portal' },
		{ label: 'Resources', href: '/resources' },
		{ label: 'Search', href: '/search' },
		{ label: 'हिन्दी में', href: '/hi' }
	];

	const legal = [
		{ label: 'Privacy Policy', href: '/privacy-policy' },
		{ label: 'Terms of Service', href: '/terms' },
		{ label: 'Disclaimer', href: '/disclaimer' },
		{ label: 'Cookie Policy', href: '/cookie-policy' },
		{ label: 'Accessibility', href: '/accessibility' },
		{ label: 'Sitemap', href: '/sitemap' }
	];
</script>

<footer class="bg-navy-3 text-white">
	<!-- Gold accent line -->
	<div class="h-1 bg-gradient-to-r from-gold via-leaf to-gold" aria-hidden="true"></div>

	<div class="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
		<!-- Top row: brand + newsletter -->
		<div class="grid grid-cols-1 gap-10 border-b border-white/10 py-12 lg:grid-cols-2 lg:gap-16">
			<div>
				<a href="/" class="flex items-center gap-2.5" aria-label="MSY Law — home">
					<img src="/logo.svg" alt="MSY Law logo" class="h-11 w-11" width="44" height="44" />
					<span>
						<span class="block font-serif text-[22px] leading-none font-bold tracking-[0.18em]">MSY LAW</span>
						<span class="mt-1 block text-[11px] font-semibold tracking-[0.28em] text-white/50 uppercase">Tax Lawyer</span>
					</span>
				</a>
				<p class="mt-4 max-w-md text-[14.5px] leading-relaxed text-white/70">
					Trusted tax lawyers — solving tax issues together since 2011. Clear advice, fixed fees, real results.
				</p>
				<p class="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13.5px] text-white/70">
					<Stars /> <span class="font-semibold text-white">4.9/5</span> · 312 Google reviews ·
					<a href="https://www.google.com/maps/search/MSY+Law+New+Delhi" target="_blank" rel="noopener" class="font-semibold text-white underline decoration-white/30 underline-offset-2 transition hover:text-white">See reviews</a>
					· हिन्दी में
				</p>
				<div class="mt-5 flex items-center gap-2.5">
					<a href="https://www.linkedin.com/company/msy-law" target="_blank" rel="noopener" aria-label="MSY Law on LinkedIn" class="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:-translate-y-0.5 hover:bg-white/20">
						<svg viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.5c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21H9z"/></svg>
					</a>
					<a href="https://www.facebook.com/msylaw" target="_blank" rel="noopener" aria-label="MSY Law on Facebook" class="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:-translate-y-0.5 hover:bg-white/20">
						<svg viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor"><path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.7V11H8.3v3h2.4v7z"/></svg>
					</a>
					<a href="https://x.com/msylaw" target="_blank" rel="noopener" aria-label="MSY Law on X" class="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:-translate-y-0.5 hover:bg-white/20">
						<svg viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor"><path d="M17.7 3H21l-7.3 8.3L22.2 21h-6.7l-5.2-6.2L4.3 21H1l7.8-8.9L1.8 3h6.9l4.7 5.7zm-1.2 16h1.9L6.9 4.9H4.9z"/></svg>
					</a>
					<a href="https://www.youtube.com/@msylaw" target="_blank" rel="noopener" aria-label="MSY Law on YouTube" class="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:-translate-y-0.5 hover:bg-white/20">
						<svg viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor"><path d="M23 7.2s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.3-1C16.6 3.6 12 3.6 12 3.6s-4.6 0-7.8.3c-.4.1-1.4.1-2.3 1-.7.7-.9 2.3-.9 2.3S.8 9.1.8 11v1.8c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.9.9 2 .9 2.6 1 1.9.2 7.5.3 7.5.3s4.6 0 7.8-.4c.4-.1 1.4-.1 2.3-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8V11c0-1.9-.2-3.8-.2-3.8zM9.8 15V8.4l6.2 3.3z"/></svg>
					</a>
				</div>
			</div>

			<div class="lg:pl-8">
				<h2 class="font-serif text-[22px] font-semibold">Tax tips, once a month</h2>
				<p class="mt-2 max-w-md text-[14px] leading-relaxed text-white/65">
					Deadlines, new tax rules and money-saving moves — in plain English, no spam. Join 3,400+ readers.
				</p>
				{#if subscribed}
					<p class="mt-5 flex items-center gap-2.5 rounded-2xl bg-leaf/15 px-4 py-3.5 text-[14.5px] font-semibold text-leaf-2">
						<Icon name="check" class="h-5 w-5 shrink-0" /> You're in — your first issue arrives next month.
					</p>
				{:else}
					<form onsubmit={subscribe} novalidate class="mt-5 flex flex-col gap-2.5 sm:flex-row">
						<label class="sr-only" for="footer-newsletter">Email address</label>
						<input
							id="footer-newsletter"
							bind:value={email}
							type="email"
							required
							placeholder="Your email address"
							class="min-w-0 flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-[14.5px] text-white placeholder:text-white/45 outline-none transition focus:border-leaf focus:bg-white/15 focus:ring-2 focus:ring-leaf/40"
						/>
						<button type="submit" class="shrink-0 rounded-full bg-leaf px-6 py-3 text-[14px] font-bold text-navy-3 shadow-md transition hover:-translate-y-0.5 hover:bg-leaf-2">Subscribe</button>
					</form>
					{#if newsError}
						<p class="mt-2 text-[13px] font-medium text-red-300">{newsError}</p>
					{:else}
						<p class="mt-2 text-[12.5px] text-white/45">We never share your email. Unsubscribe anytime.</p>
					{/if}
				{/if}
			</div>
		</div>

		<!-- Link grid: 4 balanced columns -->
		<div class="grid grid-cols-1 gap-10 border-b border-white/10 py-12 sm:grid-cols-2 lg:grid-cols-4">
			<nav aria-label="Practice areas">
				<h3 class="text-[12.5px] font-bold tracking-[0.16em] text-gold uppercase">Practice Areas</h3>
				<ul class="mt-4 space-y-2.5 text-[14px] text-white/75">
					{#each practiceAreas as area}
						<li><a href="/practice-areas/{area.slug}" class="transition hover:text-white">{area.title}</a></li>
					{/each}
				</ul>
			</nav>
			<nav aria-label="Company">
				<h3 class="text-[12.5px] font-bold tracking-[0.16em] text-gold uppercase">Company</h3>
				<ul class="mt-4 space-y-2.5 text-[14px] text-white/75">
					{#each company as link}
						<li><a href={link.href} class="transition hover:text-white">{link.label}</a></li>
					{/each}
				</ul>
			</nav>
			<nav aria-label="Tools and resources">
				<h3 class="text-[12.5px] font-bold tracking-[0.16em] text-gold uppercase">Tools &amp; Resources</h3>
				<ul class="mt-4 space-y-2.5 text-[14px] text-white/75">
					{#each tools as link}
						<li><a href={link.href} class="transition hover:text-white">{link.label}</a></li>
					{/each}
				</ul>
			</nav>
			<div>
				<h3 class="text-[12.5px] font-bold tracking-[0.16em] text-gold uppercase">Contact</h3>
				<ul class="mt-4 space-y-3 text-[14px] text-white/75">
					<li class="flex items-start gap-2.5">
						<Icon name="pin" class="mt-0.5 h-4 w-4 shrink-0 text-leaf-2" />
						<span>Statesman House, Barakhamba Road, Connaught Place<br />New Delhi 110001</span>
					</li>
					<li class="flex items-center gap-2.5">
						<Icon name="phone" class="h-4 w-4 shrink-0 text-leaf-2" />
						<a href="tel:+919811012345" class="transition hover:text-white">+91 98110 12345</a>
					</li>
					<li class="flex items-center gap-2.5">
						<Icon name="mail" class="h-4 w-4 shrink-0 text-leaf-2" />
						<a href="mailto:hello@msylaw.in" class="transition hover:text-white">hello@msylaw.in</a>
					</li>
					<li class="flex items-center gap-2.5">
						<Icon name="clock" class="h-4 w-4 shrink-0 text-leaf-2" />
						<span>Mon–Sat · 10:00 AM – 7:00 PM IST</span>
					</li>
				</ul>
				<a href="/free-consultation" class="mt-5 inline-block rounded-full bg-leaf px-5 py-2.5 text-[13.5px] font-bold text-navy-3 shadow-md transition hover:-translate-y-0.5 hover:bg-leaf-2">Book Free Consultation</a>
			</div>
		</div>

		<!-- Locations strip -->
		<div class="flex flex-col gap-3 border-b border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
			<p class="text-[12.5px] font-bold tracking-[0.16em] text-white/50 uppercase">Serving India</p>
			<p class="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[13.5px] text-white/70">
				{#each cities as city, i}
					<a href="/locations/{city.slug}" class="transition hover:text-white">{city.name}</a>{#if i < cities.length - 1}<span class="text-white/30">·</span>{/if}
				{/each}
				<span class="text-white/30">·</span>
				<a href="/locations" class="inline-flex items-center gap-1 font-semibold text-leaf-2 transition hover:text-leaf">All locations <Icon name="arrow-right" class="h-3.5 w-3.5" /></a>
			</p>
		</div>

		<!-- Legal bar -->
		<div class="flex flex-col gap-3 py-6 text-[12.5px] text-white/50 lg:flex-row lg:items-center lg:justify-between">
			<p>© 2026 MSY Law. All rights reserved.</p>
			<nav aria-label="Legal" class="flex flex-wrap items-center gap-x-4 gap-y-1.5">
				{#each legal as link}
					<a href={link.href} class="transition hover:text-white">{link.label}</a>
				{/each}
			</nav>
		</div>
		<p class="pb-8 text-center text-[12px] leading-relaxed text-white/40 lg:text-left">
			Lawyer advertising. Past results do not guarantee similar outcomes. Nothing on this site is legal advice — every case is different, and a consultation is the only way to know how the law applies to you.
		</p>
	</div>
</footer>

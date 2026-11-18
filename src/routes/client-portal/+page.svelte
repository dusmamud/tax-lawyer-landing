<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';

	// Mock client portal (demo): any email + password signs in to a demo
	// dashboard. To go live, connect this to the firm's case management
	// system and real authentication.
	let email = $state('');
	let password = $state('');
	let loggedIn = $state(false);
	let error = $state('');
	let paid = $state(false);
	let sending = $state(false);
	let msgSent = $state(false);
	let message = $state('');

	const timeline = [
		{ date: 'Nov 14, 2026', text: 'ITAT admitted the appeal — hearing listed for 12 Dec 2026.', done: true },
		{ date: 'Nov 3, 2026', text: 'Penalty waiver request filed under Section 270A for AY 2023-24.', done: true },
		{ date: 'Oct 21, 2026', text: 'Vakalatnama signed — we now handle all department contact.', done: true },
		{ date: 'Oct 12, 2026', text: 'Case opened after your free consultation.', done: true }
	];

	const docs = [
		{ name: 'Form 35 — Appeal to CIT(A).pdf', size: '1.2 MB', date: 'Nov 14, 2026' },
		{ name: 'GST Notice Reply — Draft.pdf', size: '240 KB', date: 'Oct 21, 2026' },
		{ name: 'Engagement Letter — Signed.pdf', size: '380 KB', date: 'Oct 12, 2026' },
		{ name: 'ITR AY 2023-24 — Copy.pdf', size: '2.1 MB', date: 'Oct 12, 2026' }
	];

	function login(e: SubmitEvent) {
		e.preventDefault();
		if (!email.includes('@') || password.length < 4) {
			error = 'Enter a valid email and a password of at least 4 characters. (Demo: any email works.)';
			return;
		}
		error = '';
		sending = true;
		setTimeout(() => {
			loggedIn = true;
			sending = false;
			// The dashboard replaces the shorter login form — jump to the top
			// so the user lands on the case status, not mid-page.
			window.scrollTo(0, 0);
		}, 700);
	}
</script>


<PageHero
	eyebrow="Client Portal"
	title="Your case, always in view"
	subtitle="Check your case status, download documents, message your lawyer, and pay online — any time, from anywhere."
	crumb="Client Portal"
/>

<section class="bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-5xl px-4 sm:px-5 lg:px-8">
		{#if !loggedIn}
			<Reveal class="mx-auto max-w-md">
				<form onsubmit={login} class="rounded-3xl border border-black/5 bg-cream/50 p-7 shadow-sm sm:p-8" novalidate>
					<h2 class="font-serif text-[24px] font-semibold">Sign in</h2>
					<p class="mt-1.5 text-[14px] text-muted">Use the email and password from your welcome letter.</p>
					<label class="mt-5 block">
						<span class="mb-1.5 block text-[13px] font-bold">Email *</span>
						<input bind:value={email} type="email" autocomplete="email" placeholder="priya@example.com" class="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-[15px] outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/30" />
					</label>
					<label class="mt-4 block">
						<span class="mb-1.5 block text-[13px] font-bold">Password *</span>
						<input bind:value={password} type="password" autocomplete="current-password" placeholder="••••••••" class="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-[15px] outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/30" />
					</label>
					{#if error}
						<p class="mt-3 rounded-xl bg-red-50 px-4 py-3 text-[13.5px] font-medium text-red-700" role="alert">{error}</p>
					{/if}
					<button type="submit" disabled={sending} class="mt-5 w-full rounded-full bg-navy py-3.5 text-[15px] font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-navy-3 disabled:opacity-60">
						{sending ? 'Signing in…' : 'Sign in'}
					</button>
					<button type="button" onclick={() => { email = 'demo@msylaw.in'; password = 'demo1234'; }} class="mt-3 w-full rounded-full border border-navy/20 bg-white py-3 text-[14px] font-semibold text-navy transition hover:bg-cream-2">Use the demo account</button>
					<p class="mt-4 text-center text-[13px] text-muted">Forgot your password? Call <a href="tel:+919811012345" class="font-semibold text-navy">+91 98110 12345</a> and we will reset it.</p>
				</form>
			</Reveal>
		{:else}
			<Reveal>
				<div class="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
					<div>
						<h2 class="font-serif text-[28px] font-semibold">Welcome back, Priya</h2>
						<p class="mt-1 text-[14.5px] text-muted">Case <strong class="text-ink">MSY-2026-1042</strong> · ITAT Appeal — AY 2023-24 · Lawyer: Ananya Rao</p>
					</div>
					<button onclick={() => (loggedIn = false)} class="shrink-0 rounded-full border border-navy/20 bg-white px-5 py-2.5 text-[13px] font-semibold text-navy transition hover:bg-cream-2">Sign out</button>
				</div>

				<div class="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
					<div class="rounded-3xl bg-navy p-7 text-white">
						<p class="text-[12px] font-bold tracking-[0.16em] text-white/60 uppercase">Case status</p>
						<p class="mt-3 font-serif text-[24px] leading-snug font-semibold">Appeal admitted — hearing 12 Dec 2026</p>
						<p class="mt-2 text-[14px] leading-relaxed text-white/75">Your ITAT appeal is admitted. The Section 270A penalty waiver for AY 2023-24 is still in progress — we will update you the moment the department responds.</p>
						<div class="mt-5 h-2 overflow-hidden rounded-full bg-white/15">
							<div class="h-full w-[85%] rounded-full bg-leaf"></div>
						</div>
						<p class="mt-2 text-[12.5px] text-white/60">85% complete · updated Nov 14, 2026</p>
					</div>

					<div class="rounded-3xl border border-black/5 bg-cream/50 p-7">
						<p class="text-[12px] font-bold tracking-[0.16em] text-muted uppercase">Balance</p>
						{#if paid}
							<p class="mt-3 font-serif text-[24px] font-semibold text-leaf-dark">Paid — thank you!</p>
							<p class="mt-2 text-[14px] leading-relaxed text-muted">Your payment of ₹25,000 was received. A receipt has been emailed to you.</p>
						{:else}
							<p class="mt-3 font-serif text-[30px] leading-none font-bold text-navy">₹25,000</p>
							<p class="mt-2 text-[14px] leading-relaxed text-muted">Remaining on your fixed-fee agreement. Due 1 Dec 2026.</p>
							<button onclick={() => (paid = true)} class="mt-4 w-full rounded-full bg-navy py-3 text-[14px] font-semibold text-white transition hover:bg-navy-3">Pay online</button>
						{/if}
						<p class="mt-3 text-[12.5px] text-muted">Secure card payment. Questions about your bill? Call us.</p>
					</div>

					<div class="rounded-3xl border border-black/5 bg-cream/50 p-7">
						<p class="text-[12px] font-bold tracking-[0.16em] text-muted uppercase">Message your lawyer</p>
						{#if msgSent}
							<p class="mt-3 flex items-start gap-2 text-[14px] leading-relaxed text-ink/85"><span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf/20 text-leaf-dark"><Icon name="check" class="h-3 w-3" /></span>Message sent to Ananya Rao. She usually replies within one business day.</p>
							<button onclick={() => (msgSent = false)} class="mt-4 text-[13px] font-semibold text-navy">Send another message</button>
						{:else}
							<form
								onsubmit={(e) => {
									e.preventDefault();
									if (message.trim()) msgSent = true;
								}}
								class="mt-3"
							>
								<textarea bind:value={message} rows="3" placeholder="Hi Ananya, a quick question about…" class="w-full resize-none rounded-xl border border-navy/15 bg-white px-4 py-3 text-[14px] outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/30"></textarea>
								<button type="submit" class="mt-3 w-full rounded-full bg-navy py-3 text-[14px] font-semibold text-white transition hover:bg-navy-3">Send message</button>
							</form>
						{/if}
					</div>
				</div>

				<div class="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
					<div class="rounded-3xl border border-black/5 bg-white p-7 shadow-sm">
						<h3 class="font-serif text-[20px] font-semibold">Case timeline</h3>
						<ul class="mt-5 space-y-4">
							{#each timeline as item}
								<li class="flex gap-3">
									<span class="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-leaf/20 text-leaf-dark"><Icon name="check" class="h-3.5 w-3.5" /></span>
									<div>
										<p class="text-[14.5px] leading-relaxed font-medium">{item.text}</p>
										<p class="text-[12.5px] text-muted">{item.date}</p>
									</div>
								</li>
							{/each}
						</ul>
					</div>
					<div class="rounded-3xl border border-black/5 bg-white p-7 shadow-sm">
						<h3 class="font-serif text-[20px] font-semibold">Your documents</h3>
						<ul class="mt-5 space-y-3">
							{#each docs as doc}
								<li class="flex items-center justify-between gap-3 rounded-xl bg-cream/50 px-4 py-3">
									<div class="min-w-0">
										<p class="truncate text-[14px] font-semibold">{doc.name}</p>
										<p class="text-[12px] text-muted">{doc.size} · {doc.date}</p>
									</div>
									<button onclick={() => alert('Demo: this file would download in the live portal.')} class="shrink-0 rounded-full border border-navy/20 bg-white px-4 py-2 text-[12.5px] font-semibold text-navy transition hover:bg-cream-2">Download</button>
								</li>
							{/each}
						</ul>
						<p class="mt-4 text-[13px] text-muted">Need to send us a document? Use the secure upload link in your welcome email — never email sensitive files directly.</p>
					</div>
				</div>
			</Reveal>
		{/if}
	</div>
</section>

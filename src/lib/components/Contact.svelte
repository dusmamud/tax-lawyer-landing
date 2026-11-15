<script lang="ts">
	import Reveal from '#lib/components/Reveal.svelte';

	let name = $state('');
	let email = $state('');
	let phone = $state('');
	let service = $state('Tax Audit & IRS Defence');
	let message = $state('');
	let submitted = $state(false);
	let error = $state('');

	function submit(e: SubmitEvent) {
		e.preventDefault();
		if (!name.trim() || !email.includes('@') || !message.trim()) {
			error = 'Please fill your name, a valid email and a short message.';
			return;
		}
		error = '';
		submitted = true;
	}
</script>

<section id="contact" class="bg-white py-16 lg:py-24">
	<div class="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-5 lg:grid-cols-[1fr_1.15fr] lg:gap-14 lg:px-8">
		<Reveal>
			<span class="inline-block rounded-md bg-cream px-3 py-1 text-[12px] font-semibold tracking-wide text-navy">Contact Us</span>
			<h2 class="mt-4 font-serif text-[32px] leading-tight font-semibold text-ink sm:text-[40px]">Book your free consultation</h2>
			<p class="mt-3 max-w-md text-[15px] leading-relaxed text-muted">
				Tell us what’s going on — in your own words. An attorney (not a sales rep) replies within one business day.
			</p>

			<div class="mt-8 space-y-4">
				<a href="tel:+18005550199" class="flex items-center gap-4 rounded-2xl border border-black/5 bg-cream/60 p-4 transition hover:-translate-y-0.5 hover:shadow-md">
					<span class="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-lg text-white">☎</span>
					<span><span class="block text-[12px] font-semibold tracking-wide text-muted uppercase">Call us</span><span class="block text-[15px] font-bold">+1 (800) 555-0199</span></span>
				</a>
				<a href="mailto:hello@msylaw.com" class="flex items-center gap-4 rounded-2xl border border-black/5 bg-cream/60 p-4 transition hover:-translate-y-0.5 hover:shadow-md">
					<span class="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-lg text-white">✉</span>
					<span><span class="block text-[12px] font-semibold tracking-wide text-muted uppercase">Email</span><span class="block text-[15px] font-bold">hello@msylaw.com</span></span>
				</a>
				<div class="flex items-center gap-4 rounded-2xl border border-black/5 bg-cream/60 p-4">
					<span class="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-lg text-white">◷</span>
					<span><span class="block text-[12px] font-semibold tracking-wide text-muted uppercase">Office hours</span><span class="block text-[15px] font-bold">Mon–Fri · 9:00 AM – 6:00 PM</span></span>
				</div>
			</div>
		</Reveal>

		<Reveal delay={120}>
			{#if submitted}
				<div class="animate-fade-up flex h-full flex-col items-center justify-center rounded-3xl bg-cream p-10 text-center">
					<span class="flex h-16 w-16 items-center justify-center rounded-full bg-leaf text-3xl text-white">✓</span>
					<h3 class="mt-5 font-serif text-3xl font-semibold">Thank you, {name.split(' ')[0]}!</h3>
					<p class="mt-3 max-w-sm text-[15px] leading-relaxed text-muted">
						Your request is in. An attorney will reply to <strong class="text-ink">{email}</strong> within one business day — usually much faster.
					</p>
					<button onclick={() => { submitted = false; name = ''; email = ''; phone = ''; message = ''; }} class="mt-6 rounded-full border border-navy/20 bg-white px-6 py-3 text-[14px] font-semibold text-navy transition hover:bg-cream-2">
						Send another message
					</button>
				</div>
			{:else}
				<form onsubmit={submit} class="rounded-3xl border border-black/5 bg-cream/50 p-6 shadow-sm sm:p-8" novalidate>
					<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
						<label class="block">
							<span class="mb-1.5 block text-[13px] font-bold">Full name *</span>
							<input bind:value={name} type="text" autocomplete="name" placeholder="Jane Cooper" class="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-[15px] outline-none transition focus:border-leaf focus:ring-2 focus:ring-leaf/30" />
						</label>
						<label class="block">
							<span class="mb-1.5 block text-[13px] font-bold">Email *</span>
							<input bind:value={email} type="email" autocomplete="email" placeholder="jane@example.com" class="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-[15px] outline-none transition focus:border-leaf focus:ring-2 focus:ring-leaf/30" />
						</label>
						<label class="block">
							<span class="mb-1.5 block text-[13px] font-bold">Phone</span>
							<input bind:value={phone} type="tel" autocomplete="tel" placeholder="+1 (555) 000-0000" class="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-[15px] outline-none transition focus:border-leaf focus:ring-2 focus:ring-leaf/30" />
						</label>
						<label class="block">
							<span class="mb-1.5 block text-[13px] font-bold">I need help with</span>
							<select bind:value={service} class="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-[15px] outline-none transition focus:border-leaf focus:ring-2 focus:ring-leaf/30">
								<option>Tax Audit &amp; IRS Defence</option>
								<option>Criminal Tax Law</option>
								<option>Estate Planning &amp; Taxation</option>
								<option>State &amp; Local Taxation</option>
								<option>Tax Planning &amp; Compliance</option>
								<option>International Taxation</option>
								<option>Property Taxes</option>
							</select>
						</label>
					</div>
					<label class="mt-4 block">
						<span class="mb-1.5 block text-[13px] font-bold">Tell us what happened *</span>
						<textarea bind:value={message} rows="4" placeholder="I received an IRS notice last week…" class="w-full resize-none rounded-xl border border-navy/15 bg-white px-4 py-3 text-[15px] outline-none transition focus:border-leaf focus:ring-2 focus:ring-leaf/30"></textarea>
					</label>
					{#if error}
						<p class="mt-3 rounded-xl bg-red-50 px-4 py-3 text-[13.5px] font-medium text-red-700" role="alert">{error}</p>
					{/if}
					<button type="submit" class="mt-5 w-full rounded-full bg-navy py-3.5 text-[15px] font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-navy-3">
						Get My Free Consultation →
					</button>
					<p class="mt-3 text-center text-[12px] text-muted">No spam, no obligation. Your details stay confidential.</p>
				</form>
			{/if}
		</Reveal>
	</div>
</section>

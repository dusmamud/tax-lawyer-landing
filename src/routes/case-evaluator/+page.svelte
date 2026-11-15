<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';

	// Mock case evaluator (demo): 4 quick questions, instant result.
	// No data leaves the browser.
	const issues = [
		{ id: 'audit', label: 'IRS audit letter', desc: 'I received an audit or examination notice' },
		{ id: 'debt', label: 'IRS debt / back taxes', desc: 'I owe tax I cannot pay' },
		{ id: 'criminal', label: 'Criminal tax / investigation', desc: 'I am under investigation or worried I might be' },
		{ id: 'estate', label: 'Estate planning', desc: 'Will, trust, or passing on a business' },
		{ id: 'property', label: 'Property tax', desc: 'My assessment is too high' },
		{ id: 'other', label: 'Something else', desc: 'Planning, international tax, or state tax' }
	];

	let step = $state(1);
	let issue = $state('');
	let deadline = $state('');
	let amount = $state('');
	let name = $state('');
	let email = $state('');
	let ref = $state('');

	const result = $derived.by(() => {
		if (issue === 'criminal')
			return { level: 'Urgent', color: 'bg-red-50 text-red-700', title: 'Talk to an attorney today — before you speak to anyone else.', body: 'Criminal tax matters are time-sensitive: what you say in the first conversation can shape the whole case. Do not contact the IRS or any investigator until you have spoken to us. Call +1 (800) 555-0199 now — this is exactly what the free consultation is for.', cta: 'Call now — +1 (800) 555-0199', href: 'tel:+18005550199' };
		if (issue === 'audit')
			return { level: deadline === 'yes' ? 'Urgent' : 'High priority', color: deadline === 'yes' ? 'bg-red-50 text-red-700' : 'bg-amber-50 text-amber-700', title: 'An audit is very manageable — if you act before the deadline.', body: 'Most audits end far better than clients fear, especially when an attorney takes over IRS contact early. Bring your letter to a free consultation and we will read it with you, explain the deadline, and take over from there.', cta: 'Book a free consultation', href: '/free-consultation' };
		if (issue === 'debt')
			return { level: 'Good options available', color: 'bg-leaf/15 text-leaf-dark', title: 'IRS debt can usually be reduced or spread out.', body: 'Depending on the amount, an Offer in Compromise, an installment agreement, or penalty abatement may apply. In our experience, most clients pay far less than the number on the notice — the first step is a free review of what you actually owe.', cta: 'Get a free debt review', href: '/free-consultation' };
		if (issue === 'property')
			return { level: 'Quick win possible', color: 'bg-leaf/15 text-leaf-dark', title: 'Your assessment is probably worth challenging.', body: 'Most properties are over-assessed, and a successful appeal cuts your bill every year after. Our appeals are no win, no fee — if we cannot reduce your assessment, you pay nothing. The Texas protest deadline is usually May 15, so start early.', cta: 'Start a free assessment review', href: '/free-consultation' };
		return { level: 'Good time to plan', color: 'bg-leaf/15 text-leaf-dark', title: 'This is exactly the right time to get advice.', body: 'Estate planning, international tax and year-round planning all work best when they start early. A free 30-minute consultation will give you a clear plan — and an honest answer about whether you need us at all.', cta: 'Book a free consultation', href: '/free-consultation' };
	});

	function finish() {
		ref = `MSY-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
		step = 5;
		// The result card replaces the form — scroll it into view so the
		// user sees their answer immediately, on any screen size.
		requestAnimationFrame(() => {
			document.getElementById('evaluator-result')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
		});
	}
</script>

<svelte:head>
	<title>Case Evaluator — MSY Law | Find Out What Your Tax Problem Needs</title>
	<meta name="description" content="Answer 4 quick questions and find out what kind of help your tax problem needs — instantly, free, and confidential. No data leaves your browser." />
</svelte:head>

<PageHero
	eyebrow="Case Evaluator"
	title="What does your tax problem actually need?"
	subtitle="Answer 4 quick questions. Get an honest, instant answer — and the exact next step. Free, confidential, and nothing you type leaves your browser."
	crumb="Case Evaluator"
/>

<section class="bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-3xl px-4 sm:px-5 lg:px-8">
		<Reveal>
			<div class="mb-8 flex items-center gap-2">
				{#each [1, 2, 3, 4] as n}
					<div class="h-2 flex-1 rounded-full {step >= n ? 'bg-leaf' : 'bg-black/10'}"></div>
				{/each}
			</div>
		</Reveal>

		{#if step === 1}
			<Reveal>
				<h2 class="font-serif text-[26px] font-semibold sm:text-[30px]">1. What is the problem?</h2>
				<div class="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
					{#each issues as item}
						<button onclick={() => { issue = item.id; step = 2; }} class="rounded-2xl border border-black/10 bg-cream/50 p-5 text-left transition hover:-translate-y-0.5 hover:border-leaf hover:shadow-md">
							<span class="block text-[15px] font-bold">{item.label}</span>
							<span class="mt-1 block text-[13.5px] text-muted">{item.desc}</span>
						</button>
					{/each}
				</div>
			</Reveal>
		{:else if step === 2}
			<Reveal>
				<h2 class="font-serif text-[26px] font-semibold sm:text-[30px]">2. Is there a deadline in a letter?</h2>
				<p class="mt-2 text-[15px] text-muted">IRS letters always carry a response deadline — usually 30 days. Missing it is the most expensive mistake.</p>
				<div class="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
					{#each [{ id: 'yes', label: 'Yes — soon', desc: 'Within 30 days' }, { id: 'later', label: 'Yes — later', desc: 'More than 30 days away' }, { id: 'no', label: 'No letter', desc: 'No deadline yet' }] as opt}
						<button onclick={() => { deadline = opt.id; step = 3; }} class="rounded-2xl border border-black/10 bg-cream/50 p-5 text-left transition hover:-translate-y-0.5 hover:border-leaf hover:shadow-md">
							<span class="block text-[15px] font-bold">{opt.label}</span>
							<span class="mt-1 block text-[13.5px] text-muted">{opt.desc}</span>
						</button>
					{/each}
				</div>
				<button onclick={() => (step = 1)} class="mt-5 text-[14px] font-semibold text-navy">← Back</button>
			</Reveal>
		{:else if step === 3}
			<Reveal>
				<h2 class="font-serif text-[26px] font-semibold sm:text-[30px]">3. How much is at stake?</h2>
				<p class="mt-2 text-[15px] text-muted">A rough range is fine — it helps us point you to the right kind of help.</p>
				<div class="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
					{#each [{ id: 'small', label: 'Under $10,000' }, { id: 'mid', label: '$10,000 – $100,000' }, { id: 'large', label: '$100,000 – $1,000,000' }, { id: 'huge', label: 'Over $1,000,000' }] as opt}
						<button onclick={() => { amount = opt.id; step = 4; }} class="rounded-2xl border border-black/10 bg-cream/50 p-5 text-left text-[15px] font-bold transition hover:-translate-y-0.5 hover:border-leaf hover:shadow-md">{opt.label}</button>
					{/each}
				</div>
				<button onclick={() => (step = 2)} class="mt-5 text-[14px] font-semibold text-navy">← Back</button>
			</Reveal>
		{:else if step === 4}
			<Reveal>
				<h2 class="font-serif text-[26px] font-semibold sm:text-[30px]">4. Where should we send your result?</h2>
				<p class="mt-2 text-[15px] text-muted">We will email your evaluation and the next steps. No spam, no obligation.</p>
				<form
					onsubmit={(e) => {
						e.preventDefault();
						if (name.trim() && email.includes('@')) finish();
					}}
					class="mt-6 space-y-4"
				>
					<label class="block">
						<span class="mb-1.5 block text-[13px] font-bold">Full name *</span>
						<input bind:value={name} required type="text" placeholder="Jane Cooper" class="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-[15px] outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/30" />
					</label>
					<label class="block">
						<span class="mb-1.5 block text-[13px] font-bold">Email *</span>
						<input bind:value={email} required type="email" placeholder="jane@example.com" class="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-[15px] outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/30" />
					</label>
					<button type="submit" class="w-full rounded-full bg-navy py-3.5 text-[15px] font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-navy-3">See my evaluation</button>
					<button type="button" onclick={() => (step = 3)} class="w-full text-center text-[14px] font-semibold text-navy">← Back</button>
				</form>
			</Reveal>
		{:else}
			<Reveal>
				<div id="evaluator-result" class="animate-fade-up scroll-mt-28 rounded-3xl border border-black/5 bg-cream/50 p-8 text-center sm:p-10">
					<span class="inline-block rounded-full px-4 py-1.5 text-[12px] font-bold tracking-wide uppercase {result.color}">{result.level}</span>
					<h2 class="mt-4 font-serif text-[26px] leading-snug font-semibold sm:text-[30px]">{result.title}</h2>
					<p class="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-muted">{result.body}</p>
					<p class="mt-4 text-[13px] text-muted">Your reference: <strong class="text-ink">{ref}</strong> — quote it when you call. A copy is on its way to {email}.</p>
					<div class="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
						<a href={result.href} class="rounded-full bg-navy px-7 py-3.5 text-[14px] font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-navy-3">{result.cta}</a>
						<a href="/fees" class="rounded-full border border-navy/20 bg-white px-7 py-3.5 text-[14px] font-semibold text-navy transition hover:bg-cream-2">See typical fees</a>
					</div>
					<button onclick={() => { step = 1; issue = ''; deadline = ''; amount = ''; }} class="mt-5 text-[14px] font-semibold text-navy">Start over</button>
				</div>
			</Reveal>
		{/if}
	</div>
</section>

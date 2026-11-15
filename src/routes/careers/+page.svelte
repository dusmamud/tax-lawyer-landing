<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';

	const roles = [
		{
			title: 'Tax Advocate — Scrutiny & Appeals',
			type: 'Full-time · New Delhi (hybrid)',
			text: 'Own a caseload of 40–60 scrutiny, assessment and appeal matters. You will run client meetings, argue before the CIT(A) and ITAT, and write the submissions — not just review them.',
			reqs: ['Enrolled with the Bar Council of Delhi', '3+ years of tax litigation experience', 'ITAT appearance experience preferred']
		},
		{
			title: 'Paralegal — GST & Compliance',
			type: 'Full-time · Mumbai',
			text: 'Support our GST and compliance team: prepare filings, manage deadlines, organise client documents, and keep cases moving while advocates focus on the law.',
			reqs: ['2+ years in a law firm or tax practice', 'Excellent written English and attention to detail', 'Experience with GST returns a plus']
		},
		{
			title: 'Client Intake Specialist',
			type: 'Full-time · Remote (India)',
			text: 'Be the first voice a worried taxpayer hears. You will answer first calls, explain how we work, and make sure every enquiry reaches the right advocate the same day.',
			reqs: ['Kind, calm, and clear on the phone', 'Previous customer service or intake experience', 'Able to work Mon–Sat, 10 AM – 7 PM IST']
		}
	];

	const perks = [
		'Competitive salary + performance bonus',
		'Health insurance for you and your family',
		'20 days paid leave + public holidays',
		'Paid bar fees and continuing education',
		'Hybrid working — 2 days from home',
		'No billable-hour targets for advocates'
	];

	let name = $state('');
	let email = $state('');
	let role = $state(roles[0].title);
	let message = $state('');
	let submitted = $state(false);
	let error = $state('');

	function submit(e: SubmitEvent) {
		e.preventDefault();
		if (!name.trim() || !email.includes('@') || !message.trim()) {
			error = 'Please fill your name, a valid email and a short note about yourself.';
			return;
		}
		error = '';
		submitted = true;
	}
</script>

<svelte:head>
	<title>Careers — MSY Law | Join Our Tax Team in India</title>
	<meta name="description" content="Careers at MSY Law: tax advocate, paralegal and client intake roles in New Delhi and Mumbai. Competitive pay, no billable-hour targets, hybrid working." />
</svelte:head>

<PageHero
	eyebrow="Careers"
	title="Do tax law the way it should be done"
	subtitle="No billable-hour targets. No jargon. Just good people solving real problems for clients who actually need help — and a team that has your back."
	crumb="Careers"
/>

<section class="bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
		<Reveal class="mx-auto max-w-2xl text-center">
			<h2 class="font-serif text-[30px] font-semibold text-ink sm:text-[36px]">Open roles</h2>
			<p class="mt-2 text-[15px] text-muted">Do not see your role? We are always glad to hear from great tax people — send an open application below.</p>
		</Reveal>

		<div class="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
			{#each roles as job, i}
				<Reveal delay={i * 90}>
					<article class="flex h-full flex-col rounded-3xl border border-black/5 bg-cream/50 p-7 transition hover:-translate-y-1 hover:shadow-xl">
						<span class="text-[12px] font-bold tracking-wide text-leaf-dark uppercase">{job.type}</span>
						<h3 class="mt-2 font-serif text-[22px] leading-snug font-semibold">{job.title}</h3>
						<p class="mt-3 flex-1 text-[14.5px] leading-relaxed text-muted">{job.text}</p>
						<ul class="mt-4 space-y-2">
							{#each job.reqs as req}
								<li class="flex items-start gap-2.5 text-[13.5px] font-medium text-ink/85">
									<span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf/20 text-leaf-dark"><Icon name="check" class="h-3 w-3" /></span>
									{req}
								</li>
							{/each}
						</ul>
					</article>
				</Reveal>
			{/each}
		</div>

		<div class="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
			<div>
				<Reveal>
					<h2 class="font-serif text-[28px] font-semibold text-ink sm:text-[32px]">Why work here</h2>
					<ul class="mt-6 space-y-3">
						{#each perks as perk}
							<li class="flex items-start gap-3 text-[15px] font-medium">
								<span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-leaf/20 text-leaf-dark"><Icon name="check" class="h-3.5 w-3.5" /></span>
								{perk}
							</li>
						{/each}
					</ul>
					<p class="mt-6 text-[14.5px] leading-relaxed text-muted">
						We hire slowly and carefully. If you join us, you will work on real cases from week one,
						with a named mentor and a team that reviews your work — not your hours.
					</p>
				</Reveal>
			</div>

			<Reveal delay={100}>
				{#if submitted}
					<div class="animate-fade-up flex h-full flex-col items-center justify-center rounded-3xl bg-cream p-10 text-center">
						<span class="flex h-16 w-16 items-center justify-center rounded-full bg-leaf text-white"><Icon name="check" class="h-8 w-8" /></span>
						<h3 class="mt-5 font-serif text-3xl font-semibold">Thank you, {name.split(' ')[0]}!</h3>
						<p class="mt-3 max-w-sm text-[15px] leading-relaxed text-muted">
							Your application for <strong class="text-ink">{role}</strong> is in. We reply to every applicant within two weeks.
						</p>
					</div>
				{:else}
					<form onsubmit={submit} class="rounded-3xl border border-black/5 bg-cream/50 p-6 shadow-sm sm:p-8" novalidate>
						<h3 class="font-serif text-[22px] font-semibold">Apply now</h3>
						<p class="mt-1 text-[13.5px] text-muted">Tell us about yourself — a CV link in your message is welcome.</p>
						<div class="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
							<label class="block">
								<span class="mb-1.5 block text-[13px] font-bold">Full name *</span>
								<input bind:value={name} type="text" autocomplete="name" placeholder="Priya Sharma" class="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-[15px] outline-none transition focus:border-leaf focus:ring-2 focus:ring-leaf/30" />
							</label>
							<label class="block">
								<span class="mb-1.5 block text-[13px] font-bold">Email *</span>
								<input bind:value={email} type="email" autocomplete="email" placeholder="priya@example.com" class="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-[15px] outline-none transition focus:border-leaf focus:ring-2 focus:ring-leaf/30" />
							</label>
						</div>
						<label class="mt-4 block">
							<span class="mb-1.5 block text-[13px] font-bold">Role</span>
							<select bind:value={role} class="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-[15px] outline-none transition focus:border-leaf focus:ring-2 focus:ring-leaf/30">
								{#each roles as job}
									<option>{job.title}</option>
								{/each}
								<option>Open application</option>
							</select>
						</label>
						<label class="mt-4 block">
							<span class="mb-1.5 block text-[13px] font-bold">Why you? *</span>
							<textarea bind:value={message} rows="4" placeholder="A few lines about your experience and why MSY Law…" class="w-full resize-none rounded-xl border border-navy/15 bg-white px-4 py-3 text-[15px] outline-none transition focus:border-leaf focus:ring-2 focus:ring-leaf/30"></textarea>
						</label>
						{#if error}
							<p class="mt-3 rounded-xl bg-red-50 px-4 py-3 text-[13.5px] font-medium text-red-700" role="alert">{error}</p>
						{/if}
						<button type="submit" class="mt-5 w-full rounded-full bg-navy py-3.5 text-[15px] font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-navy-3">
							Submit Application <Icon name="arrow-right" class="ml-1 inline h-4 w-4 align-middle" />
						</button>
					</form>
				{/if}
			</Reveal>
		</div>
	</div>
</section>

<CtaBanner />

<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import ConsultationForm from '#lib/components/ConsultationForm.svelte';
	import Icon from '#lib/components/Icon.svelte';

	const steps = [
		{ n: '01', title: 'Tell us what happened', text: 'Fill the form in your own words — 2 minutes. No legal language needed.' },
		{ n: '02', title: 'We call you back', text: 'An attorney calls within one business day to schedule your free 30-minute consultation.' },
		{ n: '03', title: 'Leave with a plan', text: 'You get an honest assessment, a written plan and a fixed-fee quote. Hire us or not — the plan is yours.' }
	];

	const promises = [
		'Free — no charge, no obligation, no card required',
		'Confidential — attorney–client privilege from the first call',
		'Honest — if we cannot help, we will tell you and point you to someone who can',
		'Fast — replies within one business day, usually same day'
	];
</script>

<svelte:head>
	<title>Free Consultation — MSY Law | Tax Attorney</title>
	<meta name="description" content="Book a free 30-minute consultation with an MSY Law tax attorney. Leave with a clear plan and a fixed-fee quote — no obligation." />
</svelte:head>

<PageHero
	eyebrow="Free Consultation"
	title="Book your free 30-minute consultation"
	subtitle="The fastest way to stop worrying about a tax problem is to understand it. In 30 minutes, an attorney will tell you where you stand — and what to do next."
	crumb="Free Consultation"
/>

<section class="bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
			<div>
				<Reveal>
					<h2 class="font-serif text-[28px] leading-tight font-semibold text-ink sm:text-[34px]">How it works</h2>
					<div class="mt-8 space-y-6">
						{#each steps as step}
							<div class="flex gap-4">
								<span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy font-serif text-[17px] font-bold text-white">{step.n}</span>
								<div>
									<h3 class="font-serif text-[19px] font-semibold">{step.title}</h3>
									<p class="mt-1 text-[14.5px] leading-relaxed text-muted">{step.text}</p>
								</div>
							</div>
						{/each}
					</div>
				</Reveal>

				<Reveal delay={120}>
					<div class="mt-10 rounded-2xl bg-cream/70 p-6">
						<h3 class="font-serif text-[20px] font-semibold">Our promise to you</h3>
						<ul class="mt-4 space-y-3">
							{#each promises as promise}
								<li class="flex items-start gap-3 text-[14.5px] font-medium">
									<span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf/20 text-leaf-dark"><Icon name="check" class="h-3 w-3" /></span>
									{promise}
								</li>
							{/each}
						</ul>
						<p class="mt-5 border-t border-black/5 pt-4 text-[13.5px] text-muted">
							Prefer to talk first? Call <a href="tel:+18005550199" class="font-bold text-navy">+1 (800) 555-0199</a>, Mon–Fri 9 AM – 6 PM.
						</p>
					</div>
				</Reveal>
			</div>

			<Reveal delay={100}>
				<ConsultationForm />
			</Reveal>
		</div>
	</div>
</section>

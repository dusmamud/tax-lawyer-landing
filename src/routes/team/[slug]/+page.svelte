<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Picture from '#lib/components/Picture.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const member = $derived(data.member);
	const others = $derived(data.others);

	const personSchema = $derived({
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: member.name,
		jobTitle: member.role,
		worksFor: { '@type': 'LegalService', name: 'MSY Law', url: 'https://tax-lawyer-landing.pages.dev/' },
		alumniOf: member.education,
		knowsAbout: member.focus,
		image: `https://tax-lawyer-landing.pages.dev${member.img.replace('.webp', '.jpg')}`,
		url: `https://tax-lawyer-landing.pages.dev/team/${member.slug}`
	});
</script>

<svelte:head>
	<title>{member.name} — {member.role} | MSY Law</title>
	<meta name="description" content="{member.name}, {member.role} at MSY Law. {member.exp} experience in {member.focus.join(', ')}." />
	{@html `<script type="application/ld+json">${JSON.stringify(personSchema)}</script>`}
</svelte:head>

<PageHero
	eyebrow="Our Team"
	title={member.name}
	subtitle={member.role}
	crumb={member.name}
/>

<section class="bg-white py-16 lg:py-20">
	<div class="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-5 lg:grid-cols-[380px_1fr] lg:gap-14 lg:px-8">
		<div>
			<Reveal>
				<div class="overflow-hidden rounded-3xl bg-sage shadow-lg">
					<Picture src={member.img} alt={member.name} class="aspect-[4/4.4] w-full object-cover object-top" />
				</div>
				<div class="mt-6 rounded-3xl border border-black/5 bg-cream/50 p-6">
					<p class="text-[13px] font-bold tracking-[0.16em] text-muted uppercase">Focus areas</p>
					<div class="mt-3 flex flex-wrap gap-2">
						{#each member.focus as f}
							<span class="rounded-full bg-navy px-3 py-1.5 text-[12px] font-semibold text-white">{f}</span>
						{/each}
					</div>
					<p class="mt-5 text-[13px] font-bold tracking-[0.16em] text-muted uppercase">Experience</p>
					<p class="mt-2 text-[15px] font-semibold">{member.exp} in tax law</p>
					<a href="/free-consultation" class="mt-6 block rounded-full bg-navy py-3 text-center text-[14px] font-semibold text-white transition hover:bg-navy-3">Book a consultation with {member.name.split(' ')[0]}</a>
				</div>
			</Reveal>
		</div>

		<div>
			<Reveal>
				<h2 class="font-serif text-[28px] leading-tight font-semibold text-ink sm:text-[34px]">About {member.name.split(' ')[0]}</h2>
				{#each member.bio as para}
					<p class="mt-4 text-[15px] leading-relaxed text-muted">{para}</p>
				{/each}
			</Reveal>

			<div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
				<Reveal delay={100}>
					<div class="h-full rounded-2xl bg-cream/60 p-6">
						<h3 class="font-serif text-[20px] font-semibold">Education</h3>
						<ul class="mt-3 space-y-2.5">
							{#each member.education as edu}
								<li class="flex items-start gap-2.5 text-[14.5px] text-muted">
									<span class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-leaf" aria-hidden="true"></span>{edu}
								</li>
							{/each}
						</ul>
					</div>
				</Reveal>
				<Reveal delay={180}>
					<div class="h-full rounded-2xl bg-cream/60 p-6">
						<h3 class="font-serif text-[20px] font-semibold">Admissions</h3>
						<ul class="mt-3 space-y-2.5">
							{#each member.admissions as adm}
								<li class="flex items-start gap-2.5 text-[14.5px] text-muted">
									<span class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-leaf" aria-hidden="true"></span>{adm}
								</li>
							{/each}
						</ul>
					</div>
				</Reveal>
			</div>

			<Reveal delay={220}>
				<div class="mt-10">
					<h3 class="font-serif text-[22px] font-semibold">Other attorneys</h3>
					<div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
						{#each others as other}
							<a href="/team/{other.slug}" class="flex items-center gap-3 rounded-2xl border border-black/5 p-3 transition hover:-translate-y-0.5 hover:shadow-md">
								<Picture src={other.img} alt={other.name} class="h-14 w-14 rounded-full object-cover object-top" />
								<span>
									<span class="block text-[14px] font-bold">{other.name}</span>
									<span class="block text-[12px] text-muted">{other.role}</span>
								</span>
							</a>
						{/each}
					</div>
				</div>
			</Reveal>
		</div>
	</div>
</section>

<CtaBanner />

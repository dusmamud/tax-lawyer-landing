<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Picture from '#lib/components/Picture.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';
	import { team } from '../../lib/data/team';
</script>


<PageHero
	eyebrow="Our Team"
	title="Meet the attorneys behind the results"
	subtitle="Real people, direct phone numbers, and a named attorney on every case — never a call centre. Tap any profile to read their full story."
	crumb="Our Team"
/>

<section class="bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each team as member, i}
				<Reveal delay={i * 90}>
					<a href="/team/{member.slug}" class="group block overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl">
						<div class="relative aspect-[4/4.4] overflow-hidden bg-sage">
							<Picture src={member.img} alt={member.name} class="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 90vw" />
							<span class="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-navy">{member.tag}</span>
						</div>
						<div class="p-5">
							<h2 class="font-serif text-[20px] font-semibold">{member.name}</h2>
							<p class="mt-1 text-[13.5px] text-muted">{member.role}</p>
							<p class="mt-3 inline-block rounded-full bg-cream px-3 py-1 text-[12px] font-semibold text-navy">{member.exp} experience</p>
							<p class="mt-3 flex items-center gap-1.5 text-[13px] font-bold text-navy">View profile <Icon name="arrow-right" class="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></p>
						</div>
					</a>
				</Reveal>
			{/each}
		</div>
	</div>
</section>

<CtaBanner />

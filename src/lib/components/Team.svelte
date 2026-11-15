<script lang="ts">
	import Reveal from '#lib/components/Reveal.svelte';
	import Picture from '#lib/components/Picture.svelte';

	const slugOf = (name: string) =>
		name === 'Mohan S. Yadav' ? 'mohan-s-yadav' : name === 'Arvind Kapoor' ? 'arvind-kapoor' : name === 'Sara Iyer' ? 'sara-iyer' : 'ananya-rao';

	const team = [
		{ img: '/lawyer-senior.webp', name: 'Mohan S. Yadav', role: 'Founding Partner · Tax Litigation', exp: '15+ yrs', tag: 'Income Tax Appeals' },
		{ img: '/lawyer-man.webp', name: 'Arvind Kapoor', role: 'Senior Advocate · Corporate Tax', exp: '12 yrs', tag: 'Corporate Tax' },
		{ img: '/lawyer-woman.webp', name: 'Sara Iyer', role: 'Partner · International & GST', exp: '11 yrs', tag: 'GST Disputes' },
		{ img: '/lawyer-young-woman.webp', name: 'Ananya Rao', role: 'Advocate · Compliance & Scrutiny', exp: '6 yrs', tag: 'Scrutiny Defence' }
	];
</script>

<section id="team" class="bg-white py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
		<Reveal class="mx-auto max-w-2xl text-center">
			<span class="inline-block rounded-md bg-cream px-3 py-1 text-[12px] font-semibold tracking-wide text-navy">Our Team</span>
			<h2 class="mt-4 font-serif text-[32px] leading-tight font-semibold text-ink sm:text-[40px]">Meet the lawyers behind the results</h2>
			<p class="mt-3 text-[15px] text-muted">Real people, direct phone numbers, and a named lawyer on every case — never a call centre.</p>
		</Reveal>

		<div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each team as member, i}
				<Reveal delay={i * 90}>
					<a href="/team/{slugOf(member.name)}" class="group block overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl">
						<div class="relative aspect-[4/4.4] overflow-hidden bg-sage">
							<Picture src={member.img} alt={member.name} class="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105" />
							<span class="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-navy">{member.tag}</span>
						</div>
						<div class="p-5">
							<h3 class="font-serif text-[20px] font-semibold">{member.name}</h3>
							<p class="mt-1 text-[13.5px] text-muted">{member.role}</p>
							<p class="mt-3 inline-block rounded-full bg-cream px-3 py-1 text-[12px] font-semibold text-navy">{member.exp} experience</p>
						</div>
					</a>
				</Reveal>
			{/each}
		</div>
	</div>
</section>

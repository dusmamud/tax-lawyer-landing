<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import { practiceAreas } from '../../lib/data/practice-areas';
	import { team } from '../../lib/data/team';
	import { posts } from '../../lib/data/posts';
	import { cities } from '../../lib/data/locations';

	const main = [
		{ label: 'Home', href: '/' },
		{ label: 'About Us', href: '/about' },
		{ label: 'Free Consultation', href: '/free-consultation' },
		{ label: 'Contact Us', href: '/contact' },
		{ label: 'Locations & Service Areas', href: '/locations' },
		{ label: 'Careers', href: '/careers' },
		{ label: 'News', href: '/news' }
	];
	const more = [
		{ label: 'Practice Areas', href: '/practice-areas' },
		{ label: 'Our Team', href: '/team' },
		{ label: 'Case Results', href: '/case-results' },
		{ label: 'Testimonials', href: '/testimonials' },
		{ label: 'Blog', href: '/blog' },
		{ label: 'Resources', href: '/resources' },
		{ label: 'FAQ', href: '/faq' },
		{ label: 'Fees & Pricing', href: '/fees' },
		{ label: 'Case Evaluator', href: '/case-evaluator' },
		{ label: 'Client Portal', href: '/client-portal' },
		{ label: 'Search', href: '/search' },
		{ label: 'En español', href: '/es' }
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

<svelte:head>
	<title>Sitemap — MSY Law</title>
	<meta name="description" content="Full sitemap of the MSY Law website: every page, practice area, attorney profile and article." />
</svelte:head>

<PageHero
	eyebrow="Sitemap"
	title="Every page on this site"
	subtitle="Looking for something specific? Here is the full map of the MSY Law website."
	crumb="Sitemap"
/>

<section class="bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
		<div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
			<Reveal>
				<div>
					<h2 class="font-serif text-[22px] font-semibold">Main pages</h2>
					<ul class="mt-4 space-y-2.5">
						{#each main as link}
							<li><a href={link.href} class="text-[15px] font-medium text-navy underline-offset-4 hover:underline">{link.label}</a></li>
						{/each}
					</ul>
					<h2 class="mt-8 font-serif text-[22px] font-semibold">More pages</h2>
					<ul class="mt-4 space-y-2.5">
						{#each more as link}
							<li><a href={link.href} class="text-[15px] font-medium text-navy underline-offset-4 hover:underline">{link.label}</a></li>
						{/each}
					</ul>
					<h2 class="mt-8 font-serif text-[22px] font-semibold">Legal</h2>
					<ul class="mt-4 space-y-2.5">
						{#each legal as link}
							<li><a href={link.href} class="text-[15px] font-medium text-navy underline-offset-4 hover:underline">{link.label}</a></li>
						{/each}
					</ul>
				</div>
			</Reveal>
			<Reveal delay={80}>
				<div>
					<h2 class="font-serif text-[22px] font-semibold">Practice areas</h2>
					<ul class="mt-4 space-y-2.5">
						{#each practiceAreas as area}
							<li><a href="/practice-areas/{area.slug}" class="text-[15px] font-medium text-navy underline-offset-4 hover:underline">{area.title}</a></li>
						{/each}
					</ul>
					<h2 class="mt-8 font-serif text-[22px] font-semibold">Our team</h2>
					<ul class="mt-4 space-y-2.5">
						{#each team as member}
							<li><a href="/team/{member.slug}" class="text-[15px] font-medium text-navy underline-offset-4 hover:underline">{member.name} — {member.role}</a></li>
						{/each}
					</ul>
				</div>
			</Reveal>
			<Reveal delay={120}>
				<div>
					<h2 class="font-serif text-[22px] font-semibold">Locations</h2>
					<ul class="mt-4 space-y-2.5">
						{#each cities as city}
							<li><a href="/locations/{city.slug}" class="text-[15px] font-medium text-navy underline-offset-4 hover:underline">Tax Attorney in {city.name}, TX</a></li>
						{/each}
					</ul>
				</div>
			</Reveal>
			<Reveal delay={160}>
				<div>
					<h2 class="font-serif text-[22px] font-semibold">Blog articles</h2>
					<ul class="mt-4 space-y-2.5">
						{#each posts as post}
							<li><a href="/blog/{post.slug}" class="text-[15px] font-medium text-navy underline-offset-4 hover:underline">{post.title}</a></li>
						{/each}
					</ul>
				</div>
			</Reveal>
		</div>
	</div>
</section>

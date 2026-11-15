<script lang="ts">
		import Hero from '#lib/components/Hero.svelte';
	import Stats from '#lib/components/Stats.svelte';
	import About from '#lib/components/About.svelte';
	import WhyChooseUs from '#lib/components/WhyChooseUs.svelte';
	import Process from '#lib/components/Process.svelte';
	import PracticeAreas from '#lib/components/PracticeAreas.svelte';
	import AwardsStrip from '#lib/components/AwardsStrip.svelte';
	import Team from '#lib/components/Team.svelte';
	import Results from '#lib/components/Results.svelte';
	import Testimonials from '#lib/components/Testimonials.svelte';
	import Faq from '#lib/components/Faq.svelte';
	import Blog from '#lib/components/Blog.svelte';
	import Contact from '#lib/components/Contact.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';
		</script>

<svelte:head>
	<!-- Preload the LCP hero image in its smallest format (AVIF). Browsers
		that do not support AVIF skip this preload and use the <picture>
		fallback chain instead. -->
	<link rel="preload" as="image" href="/lawyer-man.avif" type="image/avif" fetchpriority="high" />
</svelte:head>

<main>
	<Hero />
	<Stats />
	<AwardsStrip />
	<About />
	<WhyChooseUs />
	<Process />
	<PracticeAreas />
	<Team />
	<Results />
	<Testimonials />
	<Faq />
	<Blog />
	<Contact />
	<CtaBanner />
</main>

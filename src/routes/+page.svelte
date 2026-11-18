<script lang="ts">
		import Hero from '#lib/components/Hero.svelte';
	import Stats from '#lib/components/Stats.svelte';
	import About from '#lib/components/About.svelte';
	import WhyChooseUs from '#lib/components/WhyChooseUs.svelte';
	import Process from '#lib/components/Process.svelte';
	import PracticeAreas from '#lib/components/PracticeAreas.svelte';
import Tools from '#lib/components/Tools.svelte';
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
	<!-- Preload the LCP hero image with the same srcset the <picture> uses,
		so the preload fetches the variant the browser will actually display
		(800w on desktop) instead of the 1600px original. Browsers that do
		not support AVIF skip this preload and use the <picture> fallback. -->
	<link
		rel="preload"
		as="image"
		href="/lawyer-man-800w.avif"
		imagesrcset="/lawyer-man-400w.avif 400w, /lawyer-man-800w.avif 800w, /lawyer-man.avif 1600w"
		imagesizes="(min-width: 1024px) 220px, (min-width: 640px) 200px, 168px"
		type="image/avif"
		fetchpriority="high"
	/>
</svelte:head>

<Hero />
<Stats />
<AwardsStrip />
<About />
<WhyChooseUs />
<Process />
<PracticeAreas />
<Tools />
<Team />
<Results />
<Testimonials />
<Faq />
<Blog />
<Contact />
<CtaBanner />

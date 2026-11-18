<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';
	import ConsultationForm from '#lib/components/ConsultationForm.svelte';

	const services = [
		{ title: 'आयकर अपील', desc: 'नोटिस, स्क्रूटनी और असेसमेंट के खिलाफ अपील — CIT(A) से ITAT तक पूरी पैरवी।' },
		{ title: 'जीएसटी विवाद', desc: 'शो-कॉज़ नोटिस, DRC-01 और ITC विवाद — बिना जीते कोई फीस नहीं।' },
		{ title: 'कॉर्पोरेट टैक्स प्लानिंग', desc: 'कंपनी और LLP के लिए तिमाही टैक्स प्लानिंग — एडवांस टैक्स से लेकर TDS तक।' },
		{ title: 'अंतरराष्ट्रीय कर', desc: 'NRI, DTAA, विदेशी आय और क्रॉस-बॉर्डर लेनदेन — दोहरा कर नहीं।' },
		{ title: 'टैक्स प्लानिंग और अनुपालन', desc: 'ITR, एडवांस टैक्स और अनुपालन — हर साल समय पर, बिना ब्याज के।' },
		{ title: 'सर्च और सीज़र', desc: 'सर्च या सर्वे के बाद तुरंत मदद — पहले किसी से कुछ न कहें।' }
	];
</script>


<PageHero
	eyebrow="हिन्दी में"
	title="भारत में टैक्स वकील"
	subtitle="आयकर नोटिस मिला है? टैक्स देना है जो आप चुका नहीं सकते? हम हिन्दी में बात करते हैं — और पहली 30 मिनट की सलाह मुफ़्त है।"
	crumb="हिन्दी में"
/>

<section class="bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
		<Reveal class="text-center">
			<h2 class="font-serif text-[30px] font-semibold text-ink sm:text-[36px]">हम आपकी कैसे मदद कर सकते हैं</h2>
			<p class="mx-auto mt-2 max-w-2xl text-[15px] text-muted">हम नई दिल्ली, मुंबई, बेंगलुरु, हैदराबाद, चेन्नई और कोलकाता में ग्राहकों की सेवा करते हैं — और पूरे भारत में।</p>
		</Reveal>
		<div class="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
			{#each services as service, i}
				<Reveal delay={(i % 3) * 90}>
					<article class="h-full rounded-3xl border border-black/5 bg-cream/50 p-7 transition hover:-translate-y-1 hover:shadow-xl">
						<span class="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white"><Icon name="check" class="h-5 w-5" /></span>
						<h3 class="mt-4 font-serif text-[20px] font-semibold">{service.title}</h3>
						<p class="mt-2 text-[14.5px] leading-relaxed text-muted">{service.desc}</p>
					</article>
				</Reveal>
			{/each}
		</div>

		<div class="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
			<Reveal>
				<h2 class="font-serif text-[28px] leading-tight font-semibold sm:text-[34px]">परिवार हमें क्यों चुनते हैं</h2>
				<ul class="mt-6 space-y-4">
					<li class="flex items-start gap-3 text-[15px] leading-relaxed"><span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-leaf/20 text-leaf-dark"><Icon name="check" class="h-3.5 w-3.5" /></span><span><strong>30 मिनट की मुफ़्त सलाह</strong> — वकील से, सेल्समैन से नहीं।</span></li>
					<li class="flex items-start gap-3 text-[15px] leading-relaxed"><span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-leaf/20 text-leaf-dark"><Icon name="check" class="h-3.5 w-3.5" /></span><span><strong>लिखित फिक्स्ड फीस</strong> — कोई छिपा खर्च नहीं।</span></li>
					<li class="flex items-start gap-3 text-[15px] leading-relaxed"><span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-leaf/20 text-leaf-dark"><Icon name="check" class="h-3.5 w-3.5" /></span><span><strong>4.9/5 रेटिंग</strong> — 2011 से 1,200+ ग्राहक।</span></li>
					<li class="flex items-start gap-3 text-[15px] leading-relaxed"><span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-leaf/20 text-leaf-dark"><Icon name="check" class="h-3.5 w-3.5" /></span><span><strong>पूरी गोपनीयता</strong> — पहली कॉल से वकील–ग्राहक गोपनीयता।</span></li>
				</ul>
				<div class="mt-8 flex flex-col gap-3 sm:flex-row">
					<a href="tel:+919811012345" class="rounded-full bg-navy px-7 py-3.5 text-center text-[14px] font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-navy-3">कॉल करें: +91 98110 12345</a>
					<a href="/practice-areas" class="rounded-full border border-navy/20 bg-white px-7 py-3.5 text-center text-[14px] font-semibold text-navy transition hover:bg-cream-2">अंग्रेज़ी में सेवाएँ देखें</a>
				</div>
			</Reveal>
			<Reveal delay={120}>
				<ConsultationForm />
			</Reveal>
		</div>
	</div>
</section>

<CtaBanner />

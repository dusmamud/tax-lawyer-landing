<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import CtaBanner from '#lib/components/CtaBanner.svelte';
	import ConsultationForm from '#lib/components/ConsultationForm.svelte';

	const services = [
		{ title: 'Auditorías del IRS', desc: 'Representación completa en auditorías: nosotros hablamos con el IRS por usted.' },
		{ title: 'Deudas con el IRS', desc: 'Acuerdos de pago, ofertas de compromiso y reducción de multas.' },
		{ title: 'Impuestos criminales', desc: 'Defensa en investigaciones criminales y divulgación voluntaria.' },
		{ title: 'Planificación patrimonial', desc: 'Testamentos, fideicomisos y sucesión de negocios familiares.' },
		{ title: 'Impuestos internacionales', desc: 'FBAR, FATCA, cuentas en el extranjero y tratados fiscales.' },
		{ title: 'Impuestos de propiedad', desc: 'Impugnamos su avalúo — si no reducimos su impuesto, no paga nada.' }
	];
</script>

<svelte:head>
	<title>Abogados de Impuestos en Austin, TX — MSY Law | Se Habla Español</title>
	<meta name="description" content="Abogados de impuestos en Austin, Texas. Auditorías del IRS, deudas fiscales, planificación patrimonial e impuestos internacionales. Consulta gratuita de 30 minutos. Se habla español." />
</svelte:head>

<PageHero
	eyebrow="Se Habla Español"
	title="Abogados de impuestos en Austin, Texas"
	subtitle="Recibió una carta del IRS? ¿Debe impuestos que no puede pagar? Hablamos español — y la primera consulta de 30 minutos es gratis."
	crumb="En español"
/>

<section class="bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
		<Reveal class="text-center">
			<h2 class="font-serif text-[30px] font-semibold text-ink sm:text-[36px]">Cómo podemos ayudarle</h2>
			<p class="mx-auto mt-2 max-w-2xl text-[15px] text-muted">Atendemos a clientes en Austin, Dallas, Houston, San Antonio, Fort Worth y El Paso — y en todo Estados Unidos para asuntos federales.</p>
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
				<h2 class="font-serif text-[28px] leading-tight font-semibold sm:text-[34px]">Por qué las familias nos eligen</h2>
				<ul class="mt-6 space-y-4">
					<li class="flex items-start gap-3 text-[15px] leading-relaxed"><span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-leaf/20 text-leaf-dark"><Icon name="check" class="h-3.5 w-3.5" /></span><span><strong>Consulta gratis de 30 minutos</strong> — con un abogado, no con un vendedor.</span></li>
					<li class="flex items-start gap-3 text-[15px] leading-relaxed"><span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-leaf/20 text-leaf-dark"><Icon name="check" class="h-3.5 w-3.5" /></span><span><strong>Honorarios fijos por escrito</strong> — sin sorpresas ni cargos ocultos.</span></li>
					<li class="flex items-start gap-3 text-[15px] leading-relaxed"><span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-leaf/20 text-leaf-dark"><Icon name="check" class="h-3.5 w-3.5" /></span><span><strong>4.9 de 5</strong> — más de 1,200 clientes atendidos desde 2011.</span></li>
					<li class="flex items-start gap-3 text-[15px] leading-relaxed"><span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-leaf/20 text-leaf-dark"><Icon name="check" class="h-3.5 w-3.5" /></span><span><strong>Confidencialidad total</strong> — el secreto abogado-cliente aplica desde su primera llamada.</span></li>
				</ul>
				<div class="mt-8 flex flex-col gap-3 sm:flex-row">
					<a href="tel:+18005550199" class="rounded-full bg-navy px-7 py-3.5 text-center text-[14px] font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-navy-3">Llamar: +1 (800) 555-0199</a>
					<a href="/practice-areas" class="rounded-full border border-navy/20 bg-white px-7 py-3.5 text-center text-[14px] font-semibold text-navy transition hover:bg-cream-2">Ver servicios en inglés</a>
				</div>
			</Reveal>
			<Reveal delay={120}>
				<ConsultationForm />
			</Reveal>
		</div>
	</div>
</section>

<CtaBanner />

<script lang="ts">
	// Mock live chat (demo): keyword-based auto-replies, no backend.
	// To go live, replace `botReply` with a real chat provider (Intercom,
	// Crisp, Zendesk) or a server endpoint.
	type Msg = { from: 'me' | 'bot'; text: string };

	let open = $state(false);
	let input = $state('');
	let typing = $state(false);
	let timer: ReturnType<typeof setTimeout> | undefined;
	let messages = $state<Msg[]>([
		{ from: 'bot', text: 'Namaste, this is MSY Law. How can we help? Ask about fees, an income-tax notice, GST, or booking a free consultation.' }
	]);

	const quick = ['How much does it cost?', 'I got an income-tax notice', 'Book a free consultation'];

	function botReply(text: string): string {
		const t = text.toLowerCase();
		if (t.includes('cost') || t.includes('fee') || t.includes('price') || t.includes('much'))
			return 'Consultations are free for 30 minutes. After that you get a written fixed-fee quote before we start — income-tax notices from ₹9,999, ITR filing from ₹2,499. See our Fees page for typical prices, or tell me what happened and I can point you to the right service.';
		if (t.includes('notice') || t.includes('scrutiny') || t.includes('demand') || t.includes('itr') || t.includes('gst') || t.includes('assessment') || t.includes('letter'))
			return 'Do not ignore the notice and do not reply alone — deadlines under the Income-tax Act are strict, and a late reply can add penalty and interest. The fastest help is a free consultation: a lawyer will read your notice with you. Would you like the booking link?';
		if (t.includes('book') || t.includes('consult') || t.includes('appointment') || t.includes('schedule'))
			return 'You can book a free 30-minute consultation right here: /free-consultation — or call +91 98110 12345, Mon–Sat 10 AM–7 PM IST.';
		if (t.includes('hour') || t.includes('open') || t.includes('when'))
			return 'Our office is open Mon–Sat, 10:00 AM – 7:00 PM IST. Urgent matters — search, seizure or a notice deadline — left after hours are returned within 2 hours.';
		if (t.includes('hindi') || t.includes('हिन्दी') || t.includes('hindi me') || t.includes('hindi mein'))
			return 'जी हाँ! हम हिन्दी में भी बात करते हैं। Visit our Hindi page at /hi — or just type your question in Hindi here.';
		if (t.includes('hi') || t.includes('hello') || t.includes('hey') || t.includes('namaste'))
			return 'Hello! Tell me briefly what happened — an income-tax notice, a GST notice, a tax demand, or something else — and I will guide you.';
		return 'Thanks — I have noted that. A lawyer will pick this up during office hours (Mon–Sat, 10 AM–7 PM IST). For urgent tax matters, call +91 98110 12345, or book a free consultation at /free-consultation.';
	}

	function send(text: string) {
		const clean = text.trim();
		if (!clean) return;
		messages = [...messages, { from: 'me', text: clean }];
		input = '';
		typing = true;
		clearTimeout(timer);
		timer = setTimeout(() => {
			messages = [...messages, { from: 'bot', text: botReply(clean) }];
			typing = false;
		}, 900);
	}
</script>

{#if open}
	<div class="animate-fade-up fixed right-4 bottom-[9.5rem] z-[65] flex h-[24rem] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/10 sm:right-6 sm:bottom-[6.5rem] sm:h-[26rem]">
		<div class="flex items-center justify-between bg-navy px-5 py-4 text-white">
			<div>
				<p class="text-[15px] font-bold">MSY Law — Live Chat</p>
				<p class="flex items-center gap-1.5 text-[12px] text-white/70">
					<span class="h-2 w-2 rounded-full bg-leaf"></span> Online · replies instantly
				</p>
			</div>
			<button onclick={() => (open = false)} aria-label="Close chat" class="flex h-8 w-8 items-center justify-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-white">
				<svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
			</button>
		</div>
		<div class="flex-1 space-y-3 overflow-y-auto bg-cream/40 px-4 py-4">
			{#each messages as m}
				<div class="flex {m.from === 'me' ? 'justify-end' : 'justify-start'}">
					<p class="max-w-[80%] rounded-2xl px-4 py-2.5 text-[14px] leading-relaxed {m.from === 'me' ? 'rounded-br-md bg-navy text-white' : 'rounded-bl-md bg-white text-ink shadow-sm ring-1 ring-black/5'}">{m.text}</p>
				</div>
			{/each}
			{#if typing}
				<p class="w-fit rounded-2xl rounded-bl-md bg-white px-4 py-2.5 text-[14px] text-muted shadow-sm ring-1 ring-black/5">Typing…</p>
			{/if}
		</div>
		<div class="flex gap-2 overflow-x-auto px-4 pt-3 pb-1">
			{#each quick as q}
				<button onclick={() => send(q)} class="shrink-0 rounded-full border border-navy/20 bg-white px-3 py-1.5 text-[12px] font-semibold text-navy transition hover:bg-cream">{q}</button>
			{/each}
		</div>
		<form
			onsubmit={(e) => {
				e.preventDefault();
				send(input);
			}}
			class="flex items-center gap-2 border-t border-black/5 p-3"
		>
			<input bind:value={input} type="text" placeholder="Type your question…" aria-label="Chat message" class="min-w-0 flex-1 rounded-full border border-navy/15 bg-white px-4 py-2.5 text-[14px] outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/30" />
			<button type="submit" aria-label="Send message" class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-white transition hover:bg-navy-3">
				<svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" /></svg>
			</button>
		</form>
	</div>
{/if}

<button
	onclick={() => (open = !open)}
	aria-label={open ? 'Close live chat' : 'Open live chat'}
	class="fixed right-4 bottom-20 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-leaf text-navy-3 shadow-xl transition hover:-translate-y-1 hover:bg-leaf-2 sm:right-6 sm:bottom-6"
>
	{#if open}
		<svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
	{:else}
		<svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
	{/if}
</button>

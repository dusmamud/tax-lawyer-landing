<script lang="ts">
	// Mock live chat (demo): keyword-based auto-replies, no backend.
	// To go live, replace `botReply` with a real chat provider (Intercom,
	// Crisp, Zendesk) or a server endpoint.
	//
	// Mobile-first: on phones the panel is a full-screen sheet (inset-0,
	// 100dvh) so the keyboard never hides the composer and the conversation
	// is readable; on desktop it is the usual corner-anchored floating panel.
	type Msg = { from: 'me' | 'bot'; text: string; time: string };

	let open = $state(false);
	let input = $state('');
	let typing = $state(false);
	let timer: ReturnType<typeof setTimeout> | undefined;
	let scrollEl: HTMLDivElement | undefined = $state();
	let inputEl: HTMLInputElement | undefined = $state();

	const now = () => new Date().toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit' });

	let messages = $state<Msg[]>([
		{
			from: 'bot',
			text: 'Namaste, this is MSY Law. How can we help? Ask about fees, an income-tax notice, GST, or booking a free consultation.',
			time: now()
		}
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

	// Bot replies are our own static strings; make the booking link and the
	// phone number tappable. User messages are rendered as plain text.
	function linkify(text: string): string {
		const esc = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
		return esc
			.replaceAll(
				'/free-consultation',
				'<a href="/free-consultation" class="font-semibold underline underline-offset-2">free consultation</a>'
			)
			.replaceAll(
				'+91 98110 12345',
				'<a href="tel:+919811012345" class="font-semibold underline underline-offset-2">+91 98110 12345</a>'
			);
	}

	function scrollToBottom() {
		scrollEl?.scrollTo({ top: scrollEl.scrollHeight, behavior: 'auto' });
	}

	function send(text: string) {
		const clean = text.trim();
		if (!clean) return;
		messages = [...messages, { from: 'me', text: clean, time: now() }];
		input = '';
		typing = true;
		clearTimeout(timer);
		timer = setTimeout(() => {
			messages = [...messages, { from: 'bot', text: botReply(clean), time: now() }];
			typing = false;
		}, 900);
	}

	// Keep the latest message in view whenever a message arrives or the
	// typing indicator appears / disappears.
	$effect(() => {
		void messages.length;
		void typing;
		scrollToBottom();
	});

	// While the chat is open on a phone, lock the page behind it; focus the
	// input only on devices with a real keyboard (auto-focus on a phone
	// would pop the keyboard up uninvited).
	$effect(() => {
		if (!open) return;
		const prev = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		if (window.matchMedia('(pointer: fine)').matches) inputEl?.focus();
		return () => {
			document.body.style.overflow = prev;
		};
	});

	function onKeyDown(e: KeyboardEvent) {
		if (e.key === 'Escape' && open) open = false;
	}
</script>

<svelte:window onkeydown={onKeyDown} />

{#if open}
	<div
		class="animate-fade-up fixed inset-0 z-[65] flex h-dvh flex-col bg-white sm:inset-auto sm:right-6 sm:bottom-24 sm:h-[30rem] sm:w-[24rem] sm:max-w-[calc(100vw-2rem)] sm:overflow-hidden sm:rounded-3xl sm:shadow-2xl sm:ring-1 sm:ring-black/10"
		role="dialog"
		aria-label="Live chat with MSY Law"
	>
		<div class="flex items-center gap-3 bg-navy px-4 py-3 text-white sm:px-5 sm:py-4">
			<span class="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-leaf text-[15px] font-bold text-navy-3" aria-hidden="true">
				MSY
				<span class="absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full bg-leaf ring-2 ring-navy"></span>
			</span>
			<div class="min-w-0 flex-1">
				<p class="truncate text-[15px] font-bold">MSY Law — Live Chat</p>
				<p class="flex items-center gap-1.5 text-[12px] text-white/70">
					<span class="h-2 w-2 rounded-full bg-leaf"></span> Online · replies instantly
				</p>
			</div>
			<button
				onclick={() => (open = false)}
				aria-label="Close chat"
				class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-white"
			>
				<svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
			</button>
		</div>

		<div
			bind:this={scrollEl}
			class="flex-1 space-y-3 overflow-y-auto bg-cream/40 px-4 py-4 overscroll-contain"
		>
			<p class="mx-auto w-fit rounded-full bg-black/5 px-3 py-1 text-[11px] font-semibold text-muted">Today</p>
			{#each messages as m}
				<div class="flex {m.from === 'me' ? 'justify-end' : 'justify-start'}">
					<div class="max-w-[85%] sm:max-w-[80%]">
						{#if m.from === 'bot'}
							<p class="rounded-2xl rounded-bl-md bg-white px-4 py-2.5 text-[15px] leading-relaxed text-ink shadow-sm ring-1 ring-black/5">{@html linkify(m.text)}</p>
						{:else}
							<p class="rounded-2xl rounded-br-md bg-navy px-4 py-2.5 text-[15px] leading-relaxed text-white">{m.text}</p>
						{/if}
						<p class="mt-1 px-1 text-[11px] text-muted {m.from === 'me' ? 'text-right' : ''}">{m.time}</p>
					</div>
				</div>
			{/each}
			{#if typing}
				<div class="flex items-center gap-1.5 rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-sm ring-1 ring-black/5 w-fit" role="status" aria-label="MSY Law is typing">
					<span class="typing-dot"></span>
					<span class="typing-dot"></span>
					<span class="typing-dot"></span>
				</div>
			{/if}
		</div>

		<div class="no-scrollbar flex gap-2 overflow-x-auto px-4 pt-3 pb-1">
			{#each quick as q}
				<button
					onclick={() => send(q)}
					class="min-h-11 shrink-0 rounded-full border border-navy/20 bg-white px-4 py-2.5 text-[13px] font-semibold text-navy transition hover:bg-cream"
				>
					{q}
				</button>
			{/each}
		</div>

		<form
			onsubmit={(e) => {
				e.preventDefault();
				send(input);
			}}
			class="flex items-center gap-2 border-t border-black/5 bg-white p-3 [padding-bottom:calc(0.75rem+env(safe-area-inset-bottom,0px))]"
		>
			<input
				bind:this={inputEl}
				bind:value={input}
				type="text"
				placeholder="Type your question…"
				aria-label="Chat message"
				autocomplete="off"
				autocapitalize="sentences"
				enterkeyhint="send"
				class="min-w-0 flex-1 rounded-full border border-navy/15 bg-white px-4 py-3 text-base outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/30 sm:py-2.5 sm:text-sm"
			/>
			<button
				type="submit"
				aria-label="Send message"
				class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-white transition hover:bg-navy-3 disabled:opacity-40"
				disabled={!input.trim()}
			>
				<svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" /></svg>
			</button>
		</form>
	</div>
{/if}

<button
	onclick={() => (open = !open)}
	aria-label={open ? 'Close live chat' : 'Open live chat'}
	aria-expanded={open}
	class="fixed right-4 bottom-20 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-leaf text-navy-3 shadow-xl transition hover:-translate-y-1 hover:bg-leaf-2 sm:right-6 sm:bottom-6"
>
	{#if open}
		<svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
	{:else}
		<svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
	{/if}
</button>

<style>
	.typing-dot {
		width: 7px;
		height: 7px;
		border-radius: 9999px;
		background: var(--color-muted);
		animation: typing-bounce 1.2s infinite ease-in-out;
	}
	.typing-dot:nth-child(2) {
		animation-delay: 0.15s;
	}
	.typing-dot:nth-child(3) {
		animation-delay: 0.3s;
	}
	@keyframes typing-bounce {
		0%,
		60%,
		100% {
			transform: translateY(0);
			opacity: 0.4;
		}
		30% {
			transform: translateY(-4px);
			opacity: 1;
		}
	}
	.no-scrollbar {
		scrollbar-width: none;
	}
	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}
	@media (prefers-reduced-motion: reduce) {
		.typing-dot {
			animation: none;
			opacity: 0.6;
		}
	}
</style>

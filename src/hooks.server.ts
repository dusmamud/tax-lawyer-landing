// /hi is a Hindi (Devanagari) page, but src/app.html hardcodes
// <html lang="en">. transformPageChunk rewrites the lang attribute for
// that route only, at render time — which includes prerendering, because
// adapter-static prerenders through this same handle hook. Verified live
// after deploy: curl /hi must show <html lang="hi">.
export async function handle({ event, resolve }) {
	const response = await resolve(event, {
		transformPageChunk: ({ html }) =>
			event.url.pathname === '/hi' ? html.replace('<html lang="en">', '<html lang="hi">') : html
	});
	return response;
}

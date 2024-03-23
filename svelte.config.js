import adapter from "@sveltejs/adapter-static"; 

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		appDir: 'site',
		adapter: adapter({
			pages: 'site',
			assets: 'site',
		})
	}
};

export default config;

export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Nick Frostbutter',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ hid: 'charset', charset: 'utf-8' },
			{ hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ hid: 'format-detection', name: 'format-detection', content: 'telephone=no' },

			/* Twitter specific head tags */
			// { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
			// { hid: 'twitter:site', name: 'twitter:site', content: '@nickfrosty' },
			// { hid: 'twitter:creator', name: 'twitter:creator', content: '@nickfrosty' },

			/* OpenGraph specific head tags */
			// { hid: 'og:url', property: 'og:url', content: 'page / route url' },
			// { hid: 'og:title', property: 'og:title', content: 'Page title' },
			// { hid: 'og:description', property: 'og:description', content: 'Page title' },
			// { hid: 'og:image', property: 'og:image', content: '/img/nick.jpg' },
		],
		link: [
			// <link rel="apple-touch-icon" sizes="76x76" href="/assets/icon.png">
			// <link rel="icon" type="image/png" href="/assets/icon.png">
			{ hid: 'icon', rel: 'icon', type: 'image/png', href: '/img/icon.png' },
			{ hid: 'apple-touch-icon', rel: 'apple-touch-icon', size: '76x76', href: '/img/icon.png' },
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		// '~assets/css/article.css',
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		'~/plugins/gtag.js',
		'~/plugins/utils.js',
		// '~/plugins/fontawesome.js',
		{ src: '~/plugins/nprogress.js', mode: 'client' },
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/tailwindcss
		'@nuxtjs/tailwindcss',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		// https://go.nuxtjs.dev/content
		'@nuxt/content',
		'@nuxt/image',
		'nuxt-seo',
		// '~/modules/nuxt-meta',
		'@nuxtjs/sitemap',
	],
	
	sitemap: {
		hostname: 'https://frostbutter.com',
		gzip: true,
		exclude: [
			'/newsletter/**',
		],
		// path: 'sitemap.xml',
		cacheTime: 1000 * 60 * 60 * 24,
		trailingSlash: true,
		// exclude: ['/**'], 
		routes: async () => {
			const { $content } = require('@nuxt/content');
			let routes = [];
			let posts, options;

			// load the 'blog' posts
			options = { contentFolder: 'blog', };
			posts = await $content(options.contentFolder, { deep: true })
			.where({ published: true }).sortBy("createdAt", "desc").fetch();
			for (const post of posts) {
				routes.push(`${options.pathPrefix || options.contentFolder}/${post.slug}`);
			}

			// load the 'articles'
			options = { contentFolder: 'articles', };
			posts = await $content(options.contentFolder, { deep: true })
			.where({ published: true }).sortBy("createdAt", "desc").fetch();
			for (const post of posts) {
				routes.push(`${options.pathPrefix || options.contentFolder}/${post.slug}`);
			}
			
			return routes;
		},
	},

	seo: {
		// Module options
		baseUrl: 'https://frostbutter.com', //process.env.HOST_NAME,
		name: 'Nick Frostbutter',
		title: '',
		templateTitle: '%name% — %title%',
		description: "Hi! I'm Nick, an indie developer working on interesting projects. Including writing code, building in my workshop, and creating content online.",
		keywords: 'indie, developer, saas, founder, nuxt, php, dev, tutorials',
		canonical: 'auto',
		isForcedTrailingSlash: false,
		// social defaults
		author: 'Nick Frostbutter',
		twitter: { 
			site: '@nickfrosty', 
			creator: '@nickfrosty',
			// card: 'summary_large_image',
			card: 'summary',
		},
		url: '',
		openGraph: {
			// title: '',
			// type: '',
			// url: '',
			image: {
				url: 'https://frostbutter.com/img/nick.jpg',
			},
		},
		//...
	},

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {},

	// Content module configuration: https://go.nuxtjs.dev/config-content
	content: {
		markdown: {
			prism: {
				// theme: false,
			},
		},
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		postcss: {
			plugins: {
				"postcss-nested": {}
			}
		}
	}
}

import highlightjs from 'highlight.js'

const seo = require("./modules/seo");

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
		'@nickfrosty/nuxt-seo',
		'@nuxt/content',
		'@nuxtjs/axios',
		'@nuxt/image',
		'@nuxtjs/markdownit',
		'@nuxtjs/feed',
		'@nuxtjs/sitemap',
	],

	/* Generate the sitemap(s) for the blog */
	sitemap: {
		hostname: 'https://frostbutter.com',
		gzip: true,
		exclude: [
			// '/**', // will hide all the 'pages'
			'/newsletter/**',
		],
		// path: 'sitemap.xml', // default 'sitemap.xml'
		cacheTime: 1000 * 60 * 60 * 24,
		trailingSlash: true,
		routes: async() => { return seo.createSitemapFromContent(['blog', 'articles']) },
		// routes: async() => { return await seo.createSitemapFromContent( [
		// 	{
		// 		path: 'blog',
		// 		prefix: '/derp'
		// 	},
		// 	"articles",
		// ] ) },
	},

	/* Set the global default SEO settings for the site */
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
				theme: 'prism-themes/themes/prism-material-oceanic.css'
			}
		},
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		postcss: {
			plugins: {
				"postcss-nested": {}
			}
		}
	},

	/* Configure the RSS feeds */
	feed: [
		{
			path: '/blog.xml',
			cacheTime: 1000 * 60 * 15,
			type: 'rss2',
			async create(feed, args) { seo.createFeedFromContent(feed, {
				contentPath: 'blog',
				feedFile: '/blog.xml',
				options: {
					title: 'Nick Frostbutter - Blog',
					description: 'Building in public, sharing as I go',
				}
			}) },
		},
		{
			path: '/articles.xml',
			cacheTime: 1000 * 60 * 15,
			type: 'rss2',
			async create(feed, args) { seo.createFeedFromContent(feed, {
				contentPath: 'articles',
				feedFile: '/articles.xml',
				options: {
					title: 'Nick Frostbutter - Articles',
					description: 'Collection of "how-to" style tutorials and technical writings',
				}
			}) },
		},
	],

	/* Add hooks */
	hooks: {
		// format the 'content' markdown posts for the RSS feeds 
		'content:file:beforeInsert': (document) => {
			if (document.extension === '.md') {
				// eslint-disable-next-line
				const md = require('markdown-it')();
				// eslint-disable-next-line global-require
				// const { text } = require('reading-time')(document.text);
				// document.readingTime = text;
				const mdToHtml = md.render(document.text);

				const utils = require("./modules/utils");

				document.bodyPlainText = utils.relative_to_asolute(mdToHtml, 'https://frostbutter.com');
			}
		}
	},

	markdownit: {
		preset: 'default',
		linkify: true,
		breaks: true,
		// use: ['markdown-it-div', 'markdown-it-attrs'],
	},

}

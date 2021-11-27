
/* Create a RSS feed from a 'content' library of markdown posts */
const createFeedFromContent = async (feed, args) => {
	const { contentPath, feedFile, options } = args;
	
	// validate the hostname and create the unique ids
	const hostname = options.hostname || 'https://frostbutter.com';
	feed.options = {
		...options,
		hostname: hostname,
		image: options.image || `${hostname}/img/nick.jpg`,
		author: options.author || {
			name: "Nick Frostbutter",
			email: "hello@frostbutter.com",
			link: "https://frostbutter.com",
			twitter: "@nickfrosty"
		},
		generator: options.generator || 'Nuxt Feed',
		id: `${hostname}${feedFile}`,
		link: `${hostname}${feedFile}`
	};

	// eslint-disable-next-line global-require
	const { $content } = require('@nuxt/content');

	// get all the posts from the 'content/$contentPath' dir
	const posts = await $content(contentPath, { deep: true })
	.where({ published: true }).sortBy("createdAt", "asc").fetch();

	// process each post and add to the feed
	posts.forEach((post) => {
		// the url of the post is set first
		const url = `${hostname}/${contentPath}/${post.slug}`;
		const image = post.hero_image ? `${hostname}${post.hero_image}` : null;

		// create the feed item for each 'post'
		feed.addItem({
			title: post.title,
			id: url,
			link: url,
			description: post.intro || null,
			image: image,
			// date: post.date || null,
			author: feed.options.author || null,
			content: post.bodyPlainText,
		});
	});
}

// const createFeed = async (feed, args) => {
// 	console.log(feed);
// 	const [filePath, feedFile, options] = args;
// 	//const hostname = process.NODE_ENV === 'production' ? 'https://my-production-domain.com' : 'http://localhost:3000';

// 	const hostname = 'https://frostbutter.com';

// 	feed.options = {
// 		...options,
// 		link: `${hostname}/${feedFile}`
// 	}

// 	const { $content } = require('@nuxt/content')
// 	if (posts === null || posts.length === 0)
// 	  	posts = await $content(filePath).fetch();

// 	// for (const post of posts) {
// 	// 	const feedItem = await constructFeedItem(post, filePath, hostname);
// 	// 	feed.addItem(feedItem);
// 	// }
// 	// then, we'll loop over each post and grab the data fields we want to show in our feed. The name of your fields might be different than mine - that depends on how your data is set up in your Content settings.

// 	posts.forEach((post) => {
// 		// the url of the post is set first
// 		const url = `${hostname}/${filePath}/${post.slug}`;
// 		// then we do addItem, and give it all the details we want. You'll often see a date field here too - I don't have one because I don't post my dates on my posts.
// 		feed.addItem({
// 			title: post.title,
// 			id: url,
// 			link: url,
// 			description: post.blurb,
// 			date: post.date,
// 			// this is what we did in part two! Accessing that body text, that we converted into HTML
// 			content: 'test content', // post.bodyText,
// 		});
// 	});

// 	return feed;
// }

// async function createFeed(feed) {
// 	// the main options of what the page is called, desc, and where to find it as a full path
// 	feed.options = {
// 		title: 'LindaKat Blogs',
// 		description: 'Tech Writings from Linda Thompson',
// 		link: 'https://www.lindakat.com/feed.xml',
// 	};

// 	// we're going to require the content module so we have access to $content, then we're going to fetch all of our posts. If you're using eslint in your project, you might need to ignore this line because it's requiring something inside a function. Will work just fine, it might yell at you though. :)

// 	// eslint-disable-next-line global-require
// 	const { $content } = require('@nuxt/content');

// 	// get all the posts we have
// 	const posts = await $content('blog').fetch();

// 	// then, we'll loop over each post and grab the data fields we want to show in our feed. The name of your fields might be different than mine - that depends on how your data is set up in your Content settings.
// 	posts.forEach((post) => {
// 		// the url of the post is set first
// 		const url = `https://www.lindakat.com/blog/${post.slug}`;
// 		// then we do addItem, and give it all the details we want. You'll often see a date field here too - I don't have one because I don't post my dates on my posts.
// 		feed.addItem({
// 			title: post.title,
// 			id: url,
// 			link: url,
// 			description: post.blurb,
// 			// this is what we did in part two! Accessing that body text, that we converted into HTML
// 			content: post.bodyPlainText,
// 		});
// 	});
// };
// this is the end of the create function

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
		'nuxt-seo',
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
			'/newsletter/**',
		],
		// path: 'sitemap.xml',
		cacheTime: 1000 * 60 * 60 * 24,
		trailingSlash: true,
		// exclude: ['/**'], // will hide all the 'pages'
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
	},

	/* Configure the RSS feeds */
	feed: [
		{
			path: '/blog.xml',
			cacheTime: 1000 * 60 * 15,
			type: 'rss2',
			data: {
				contentPath: 'blog',
				feedFile: '/blog.xml',
				options: {
					title: 'Nick Frostbutter - Blog',
					description: 'Building in public, sharing as I go',
				}
			},
			async create(feed, args) { createFeedFromContent(feed, args) },
		},
		{
			path: '/articles.xml',
			cacheTime: 1000 * 60 * 15,
			type: 'rss2',
			data: {
				contentPath: 'articles',
				feedFile: '/articles.xml',
				options: {
					title: 'Nick Frostbutter - Articles',
					description: 'Collection of "how-to" style tutorials and technical writings',
				}
			},
			async create(feed, args) { createFeedFromContent(feed, args) },
		},
	],

	/* Add hooks */
	hooks: {
		// format the 'content' markdown posts for the RSS feeds 
		'content:file:beforeInsert': (document) => {
			// eslint-disable-next-line
			const md = require('markdown-it')();
				if (document.extension === '.md') {
				// eslint-disable-next-line global-require
				// const { text } = require('reading-time')(document.text);
			
				// document.readingTime = text;
				const mdToHtml = md.render(document.text);
				document.bodyPlainText = mdToHtml;
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

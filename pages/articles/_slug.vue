<template>
	<article class="max-w-6xl px-3 mx-auto">
		<header class="max-w-4xl mx-auto text-center article">
			<h1><nuxt-link :to="url" class="text-4xl text-gray-800 no-underline md:text-6xl">{{ post.title }}</nuxt-link></h1>
			<p v-if="post.intro">{{ post.intro }}</p>	
		</header>

		<img v-if="image" class="rounded-xl" :src="image" :alt="post.title">
		
		<author-section :post="post" :author="author" :path="'/articles'" />

		<nuxt-content :document="post" class="max-w-3xl mx-auto article" />

			<!-- {{ main_content }}
				{{ if type == "text" }}
					{{ text }}
				{{ elseif type == "code_block" }}
					<pre class="language-{{ mode ?? 'php' }} rounded"><code>{{ code }}</code></pre>
				{{ elseif type == "image" }}
					<figure>
						<img src="{{ image }}" alt="{{ caption }}" />
						<figcaption>{{ caption }}</figcaption>
					</figure>
				{{ /if }}
			{{ /main_content }} -->

		<newsletter-signup-form />

	</article>
</template>

<script>
import AuthorSection from '~/components/blog/AuthorSection.vue';
import NewsletterSignupForm from '~/components/NewsletterSignupForm.vue';

export default {
	components: {
		NewsletterSignupForm,
		AuthorSection
	},
	async asyncData({ params, error, $content }) {
		try {
			// const postPath = `/articles/${params.slug}`;
			const [post] = await $content("articles", { deep: true })
				.where({ slug: params.slug })
				.fetch();
			return { post };
		} catch (err) {
			error({
				statusCode: 404,
				message: "Page could not be found",
			});
		}
	},
    methods: {
        tag_url( tag ){
            return `/articles/tag/${tag}`;
        }
    },
	computed:{
		url(){
            return `/articles/${this.post.slug}`;
        },
		image(){
            let image = this.post.hero_image || this.post.image;
			if ( !image )
				return false;
            // remove '/static/' from the path
            if ( image.substring(0, 8) != '/static/' )
                image = image.substring(7);
            // force add '/media/' if not already there
            if ( image.substring(0, 7) != '/media/' )
                image = `/media/${image}`;
            return image;
        },
		author(){
			return {
				name: 'Nick Frostbutter',
				website: 'https://frostbutter.com',
				avatar: '/img/nick.jpg',
			};
			// return false;
		},
	},
    head() {
		return this.$seo({
			templateTitle: this.post.template || '%title% - %name%',
			title: this.post.title || 'Articles',
			description: this.post.intro || this.post.description || 'Checkout this awesome article. It is super good. You should read it :)',
			canonical: this.post.canonical || 'auto',
			openGraph: {
				image: {
					url: this.image ? `https://frostbutter.com${this.image}` : 'https://frostbutter.com/img/nick.jpg',
				},
			},
			twitter: {
				card: this.image ? 'summary_large_image' : 'summary',
				// url: '/',
				// title: '<local page title>',
				// description: '<local page desc>',
				// image: '<local page image>',
			}, 
		})
	},
};
</script>

<style lang="postcss">
@import '~/assets/css/article.css'
</style>
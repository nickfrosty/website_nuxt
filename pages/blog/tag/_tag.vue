<template>
	<main class="max-w-3xl px-3 mx-auto">
		<header class="max-w-xl mx-auto text-center content">
			<h1 class="mb-2 text-4xl">#{{ $route.params.tag }}</h1>
			<p class="">
				blog posts
			</p>
		</header>

		<div class="">
			<div v-for="post in posts" :key="post.title">
				<blog-post-card :post="post" />
			</div>
		</div>

	</main>
</template>

<script>
import BlogPostCard from '~/components/blog/BlogPostCard.vue';

export default {
	components: {
		BlogPostCard
	},
	async asyncData({ params, error, $content }) {
		try {
			const posts = await $content("blog", { deep: true })
			.sortBy("createdAt", "desc")
			.where({ tags: { $contains : params.tag } })
			.fetch()
			.catch((err) => { throw new Error('No posts found')});
			
			return { posts };
		} catch (err) {
			// error({
			// 	statusCode: 404,
			// 	message: "No posts could found",
			// });
		}
	},
    head() {
		return this.$seo({
			// templateTitle: '%title% - %name%',
			title: this.$route.params.tag ? `#${this.$route.params.tag} Blog Posts` : 'Blog',
			description: 'Checkout this awesome blog post. As I build in public, I pour my heart and soul into these posts and my newsletter.',
			// canonical: this.post.canonical || 'auto',
			// twitter: {
				// card: 'summary_large_image',
				// url: '/',
				// title: '<local page title>',
				// description: '<local page desc>',
				// image: '<local page image>',
			// }, 
		})
	},
};
</script>

<style lang="postcss">
@import '~/assets/css/article.css'
</style>
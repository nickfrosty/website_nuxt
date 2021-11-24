<template>
	<main class="max-w-3xl px-3 mx-auto">
		<header class="max-w-xl mx-auto text-center content">
			<h1 class="mb-2 text-4xl">#{{ $route.params.tag }}</h1>
			<p class="">
				list of all the articles tagged with "{{ $route.params.tag }}"
			</p>
		</header>

		<div class="space-y-8 my-5">
			<div v-for="post in posts" :key="post.title" class="">
				<article-post-card :post="post" />
			</div>
		</div>

	</main>
</template>

<script>
import ArticlePostCard from '~/components/blog/ArticlePostCard.vue';

export default {
	components: {
		ArticlePostCard
	},
	async asyncData({ params, error, $content }) {
		try {
			const posts = await $content("articles", { deep: true })
			.sortBy("createdAt", "desc")
			.where({ tags: { $contains : params.tag } })
			.fetch().catch((err) => { throw new Error('No posts found')});
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
			title: this.$route.params.tag ? `#${this.$route.params.tag} Articles` : 'Articles',
			description: this.$route.params.tag ? `Checkout these awesome #${this.$route.params.tag} articles!` : 'Checkout these awesome articles!',
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
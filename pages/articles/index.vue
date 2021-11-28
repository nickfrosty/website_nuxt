<template>
	<main class="max-w-6xl px-3 mx-auto">
		<header class="max-w-xl mx-auto text-center content">
			<h1 class="mb-2 text-4xl">Articles</h1>
			<p class="">
				Collection of "how-to" style tutorials and technical writings
			</p>
		</header>

	    <section class="grid grid-cols-1 gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
			<div v-for="post in posts" :key="post.title">
				<article-post-card :post="post"  />
			</div>
		</section>

		<!-- {{ collection:articles as="posts" paginate="12" }}
		<section class="gap-6 py-8 mx-auto">
			{{ posts }}
				<div class="{{ first ? 'md:col-span-2' : 'col-span-1' }}">
					{{ partial:articles/card }}
				</div>
			{{ /posts }}
		</section>
		{{ paginate }}
			{{ if prev_page || next_page }}
			<section class="flex justify-center pt-16 space-x-8 text-xl font-bold">
				{{ if prev_page }}
					<a href="{{ prev_page }}"><span class="squiggle">&larr;</span> Newer articles</a>
				{{ /if }}
				{{ if next_page }}
					<a href="{{ next_page }}">Older articles <span class="squiggle">&rarr;</span></a>
				{{ /if }}
			</section>
			{{ /if }}
		{{ /paginate }}
		{{ /collection:articles }} -->
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
			.where({ published: true })
			.sortBy("date", "desc").fetch()
			// .catch((err) => { throw new Error('No posts found')});
			
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
			title: 'Articles',
			description: 'Collection of "how-to" style tutorials and technical writings. Mostly centered around coding, devops, and content creators.',
			// canonical: '',
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
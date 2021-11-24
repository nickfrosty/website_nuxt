<template>
	<main class="max-w-3xl px-3 mx-auto">
		<header class="max-w-xl mx-auto text-center content">
			<h1 class="mb-2 text-4xl">BLOG</h1>
			<p class="">
				Building in public 👷. Writing down and sharing my thoughts and experiences as I go. ✏️
			</p>
		</header>

		<div class="">
			<div v-for="post in posts" :key="post.title">
				<blog-post-card :post="post" />
				<!-- <h3 class="heading">{{ post.title }}</h3>
				<p>{{ post.description }}</p>
				<p class="tags">
					<span v-for="tag in post.tags" :key="tag" class="tag">
					<nuxt-link :to="`/tag/${tag}`">{{ tag }}</nuxt-link>
					&nbsp;
					</span>
				</p>
				<nuxt-link :to="post.dir">Read more</nuxt-link> -->
			</div>
		</div>

		<!-- {{ collection:blog as="posts" paginate="12" }}
		<section class="gap-6 py-8 mx-auto">
			{{ posts }}
				<div class="{{ first ? 'md:col-span-2' : 'col-span-1' }}">
					{{ partial:blog/card }}
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
		{{ /collection:blog }} -->
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
			.where({ published: true })
			.sortBy("createdAt", "desc").fetch()
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
			title: 'Blog',
			description: 'Building in public 👷. Writing down and sharing my thoughts and experiences as I go. ✏️',
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
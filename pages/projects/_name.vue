<template>
	<main class="max-w-5xl px-3 mx-auto">
		<header class="max-w-3xl mx-auto text-center article">
			<h1>{{ project.name }}</h1>
			<p v-if="post.intro">{{ post.intro }}</p>
			
			<!-- <author-section :author="author" :post="post" :path="'/blog'" /> -->
			
		</header>

		<img v-if="hero_image" class="rounded-xl" :src="hero_image" :alt="post.title">

		<nuxt-content :document="post" class="max-w-3xl py-6 mx-auto lg:py-12 article" />

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


	</main>
</template>

<script>

export default {
	components: {
	},
	head(){
        return this.$seo({
            title: this.project.name || 'Projects',
            description: this.project.description || "Learn about and explore this project",
        })
    },
	async asyncData({ params, error, $content }) {
		try {
			// const postPath = `/projects/${params.name}`;
			const [project] = await $content("projects", { deep: true })
				.where({ name: params.name })
				.fetch();
			return { project };
		} catch (err) {
			error({
				statusCode: 404,
				message: "Project could not be found",
			});
		}
	},
    methods: {
        // tag_url( tag ){
        //     return `/blog/tag/${tag}`;
        // }
    },
	computed:{
		hero_image(){
			if ( this.post.hero_image )
				return this.post.hero_image;
			else if ( this.post.image )
				return this.post.image;
			else
				return false;
		}
	},
	head() {
		return {
			title: this.project.name || this.project.title || '',
			// meta: [
			// 	{
			// 		hid: "description",
			// 		name: "description",
			// 		content: this.post.description,
			// 	},
			// ],
			// link: [
			// 	{
			// 		rel: "canonical",
			// 		href: "https://nuxt-blog.com/" + this.post.dir,
			// 	},
			// ],
		};
	},
};
</script>

<style lang="postcss">
@import '~/assets/css/article.css'
</style>
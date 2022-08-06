<template>
  <main class="px-3 mx-auto max-w-5xl">
    <header class="article mx-auto max-w-3xl text-center">
      <h1>{{ project.name }}</h1>
      <p v-if="project.intro">{{ project.intro }}</p>

      <!-- <author-section :author="author" :project="project" :path="'/blog'" /> -->
    </header>

    <img
      v-if="hero_image"
      class="rounded-xl"
      :src="hero_image"
      :alt="project.title"
    />

    <nuxt-content
      :document="project"
      class="lg:py-12 article py-6 mx-auto max-w-3xl"
    />

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
  components: {},
  head() {
    return this.$seo({
      title: this.project.name || "Projects",
      description:
        this.project.description || "Learn about and explore this project",
    });
  },
  async asyncData({ params, error, $content }) {
    try {
      // const projectPath = `/projects/${params.slug}`;
      const [project] = await $content("projects", { deep: true })
        .where({ slug: params.slug })
        .fetch();

      if (!project) throw new Error("Not found");

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
  computed: {
    hero_image() {
      if (this.project.hero_image) return this.project.hero_image;
      else if (this.project.image) return this.project.image;
      else return false;
    },
  },
  // head() {
  //     return {
  //         title: this.project.name || this.project.title || "",
  //         // meta: [
  //         // 	{
  //         // 		hid: "description",
  //         // 		name: "description",
  //         // 		content: this.project.description,
  //         // 	},
  //         // ],
  //         // link: [
  //         // 	{
  //         // 		rel: "canonical",
  //         // 		href: "https://nuxt-blog.com/" + this.project.dir,
  //         // 	},
  //         // ],
  //     };
  // },
};
</script>

<style lang="postcss">
@import "~/assets/css/article.css";
</style>

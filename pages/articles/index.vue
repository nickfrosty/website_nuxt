<template>
    <main class="max-w-6xl px-3 mx-auto">
        <header class="mx-auto text-center content">
            <h1 class="mb-2 text-4xl">Articles</h1>
            <p class="">
                Collection of technical writing and some "how-to" style
                tutorials
            </p>
        </header>

        <section
            class="grid grid-cols-1 gap-6 py-8 md:grid-cols-2 lg:grid-cols-3"
        >
            <div v-for="post in posts" :key="post.title">
                <article-post-card :post="post" />
            </div>
        </section>
    </main>
</template>

<script>
import ArticlePostCard from "~/components/blog/ArticlePostCard.vue";

export default {
    components: {
        ArticlePostCard,
    },
    async asyncData({ params, error, $content }) {
        try {
            const posts = await $content("articles", { deep: true })
                .where({ published: true })
                .sortBy("date", "desc")
                .fetch();
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
            title: "Articles",
            description:
                'Collection of "how-to" style tutorials and technical writings. Mostly centered around coding, devops, and content creators.',
            // canonical: '',
            // twitter: {
            // card: 'summary_large_image',
            // url: '/',
            // title: '<local page title>',
            // description: '<local page desc>',
            // image: '<local page image>',
            // },
        });
    },
};
</script>

<style lang="postcss">
@import "~/assets/css/article.css";
</style>
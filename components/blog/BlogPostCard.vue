<template>
    <div class="card">
            <h2 class="text-2xl font-bold leading-tight">
                <nuxt-link :to="url" class="link">{{ post.title  }}</nuxt-link>
            </h2>
            <div class="">
                <div class="flex items-center mt-4 space-x-5 text-xs text-gray-600 dark:text-gray-400">
                    <span class="block whitespace-nowrap md:inline-block">{{ date }} </span>
                    <div v-if="post.tags" class="block md:inline-block">
                        <span v-for="tag in $utils.tagSpliter(post.tags)" :key="tag">
                            <nuxt-link :to="tag_url(tag)" class="tag indigo">
                                #{{ tag }}
                            </nuxt-link>
                        </span>
                    </div>
                </div>
                <!-- {{ if tags }}
                    <div class="mb-12">
                        {{ tags }}
                            <a href="{{ url }}" class="relative px-3 py-1 m-1 font-bold text-white no-underline rounded-lg shadow-lg hover:-top-px hover:bg-geni-pink bg-geni-purple">#{{ title }}</a>
                        {{ /tags }}
                    </div>
                {{ /if }} -->
            </div>
    </div>
</template>

<script>
export default {
    name: 'BlogPostCard',
    props: {
        post: Object,
    },
    methods: {
        tag_url( tag ){
            return `/blog/tag/${tag}`;
        }
    },
    computed:{
        url(){
            return `/blog/${this.post.slug}`;
        },
        date(){
			let date =  this.post.date || this.post.updatedAt || this.post.createdAt; 
			return new Date(date).toLocaleString("en-US", { dateStyle: 'medium' });
		},
    },
}
</script>

<style lang="postcss" scoped>
.card{
    /* @apply md:hover:-top-2 md:hover:shadow-lg; */
    @apply px-0 py-2 md:px-8 md:py-6;
    @apply border-0;
}
</style>
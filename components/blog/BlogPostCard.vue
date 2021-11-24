<template>
    <nuxt-link :to="url" class="card px-8 py-6">
            <h2 class="text-2xl font-bold leading-tight">
                {{ post.title  }}
            </h2>
            <div class="">
                <div class="flex items-center mt-4 text-xs text-gray-600 space-x-5">
                    <span class="">{{ date }} </span>
                    <div v-if="post.tags" class="space-x-2 inline-block">
                        <span v-for="tag in post.tags" :key="tag">
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
    </nuxt-link>
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
    @apply relative top-0 block h-full mb-3 overflow-hidden transition-all duration-75 ease-in-out bg-white border border-white hover:border-indigo-200 hover:-top-2 hover:shadow-lg rounded-xl;
}
</style>
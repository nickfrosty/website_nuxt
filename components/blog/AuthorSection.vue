<template>
    <section class="justify-between block max-w-xl mx-auto my-12 space-x-10 space-y-4 md:flex">
        <div v-if="author" class="flex items-center justify-center whitespace-nowrap">
            <img v-if="author.avatar" :src="author.avatar" class="w-20 h-20 my-0 mr-4 rounded-full">
            <div class="text-left">
                <div>
                    <a class="text-xl font-bold no-underline link hover:underline" :href="author.website">
                        {{ author.name }}
                    </a>
                </div>
                <span class="text-gray-500">
                    <span v-if="post.updatedAt">Updated on</span>
                    <time datetime="">{{ post_date }}</time>
                </span>
            </div>
        </div>
        <div v-else class="flex items-center justify-center">
            <div class="text-left">
                <time datetime="">{{ post_date }}</time>
                <!-- <time datetime="{{ date format="Y-m-d" }}">{{ date format="F jS, Y" }}</time> -->
            </div>
        </div>
        
        <div v-if="post.tags" class="place-content-end">
            <span v-for="tag in $utils.tagSpliter(post.tags)" :key="tag" class="inline-block mb-1 space-x-0">
                <nuxt-link :to="tag_url(tag)" class="text-base no-underline tag indigo">
                    #{{ tag }}
                </nuxt-link>
            </span>
        </div>
        
    </section>
</template>

<script>
export default {
    name: 'AuthorSection',
    props: {
        author: false,
        post: false,
        path: {
            type: String,
            default: '/blog',
        }
    },
    methods: {
        tag_url( tag ){
            return `${this.path}/tag/${tag}`;
        }
    },
    computed:{
        post_date(){
			let date =  this.post.updatedAt || this.post.date || this.post.createdAt; 
			return new Date(date).toLocaleString("en-US", { dateStyle: 'medium' });
		},
    },
}
</script>
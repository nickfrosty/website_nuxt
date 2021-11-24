<template>
    <section class="mx-auto max-w-xl my-12 space-y-4 flex justify-between space-x-10">
        <div v-if="author" class="flex items-center justify-center whitespace-nowrap mr-5">
            <img v-if="author.avatar" :src="author.avatar" class="w-20 h-20 my-0 mr-4 rounded-full">
            <div class="text-left">
                <div>
                    <a class="text-xl font-bold no-underline link hover:underline" :href="author.website">
                        {{ author.name }}
                    </a>
                </div>
                <time datetime="">{{ post_date }}</time>
            </div>
        </div>
        <div v-else class="flex items-center justify-center">
            <div class="text-left">
                time ago
                <!-- <time datetime="{{ date format="Y-m-d" }}">{{ date format="F jS, Y" }}</time> -->
            </div>
        </div>
        
        <div v-if="post.tags" class="place-content-end">
            <span v-for="tag in post.tags" :key="tag" class="space-x-0 mb-1 inline-block">
                <nuxt-link :to="tag_url(tag)" class="tag indigo no-underline text-base">
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
			let date =  this.post.date || this.post.updatedAt || this.post.createdAt; 
			return new Date(date).toLocaleString("en-US", { dateStyle: 'medium' });
		},
    },
}
</script>
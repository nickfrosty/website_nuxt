<template>
    <div class="card">
        <nuxt-link :to="url"><img :class="oversized ? '' : ''" class="block" height="285" :src="image" :alt="post.title"></nuxt-link>
        <div class="px-8 py-6">
            <h2><nuxt-link :to="url" class="text-2xl font-bold leading-tight text-gray-800 hover:text-hot-pink">{{ post.title  }}</nuxt-link></h2>
            <p class="flex items-center mt-4 text-xs text-gray-600">
                {{ date }}
            </p>
            <div v-if="post.tags" class="mt-2 space-x-2">
                <span v-for="tag in post.tags.slice(0, 2)" :key="tag">
                    <nuxt-link :to="tag_url(tag)" class="text-base tag indigo">
                        #{{ tag }}
                    </nuxt-link>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ArticlePostCard',
    props: {
        post: Object,
    },
    methods: {
        tag_url( tag ){
            return `/articles/tag/${tag}`;
        }
    },
    computed: {
        oversized(){
            return true;
        },
        image(){
            let image = this.post.hero_image || this.post.image;
			if ( !image )
				return false;
            // remove '/static/' from the path
            if ( image.substring(0, 8) != '/static/' )
                image = image.substring(7);
            // force add '/media/' if not already there
            if ( image.substring(0, 7) != '/media/' )
                image = `/media/${image}`;
            return image;
        },
        url(){
            return `/articles/${this.post.slug}`;
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
    @apply relative top-0 block h-full overflow-hidden transition-all duration-75 ease-in-out bg-white shadow-lg hover:-top-2 hover:shadow-lg rounded-xl;
}
</style>
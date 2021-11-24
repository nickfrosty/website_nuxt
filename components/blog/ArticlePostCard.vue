<template>
    <nuxt-link :to="url" class="card">
        <img :class="oversized ? 'hidden md:block' : 'hidden'" height="285" :src="image" :alt="post.title">
        <!-- <img :class="oversized ? 'md:hidden' : ''" height="285" src="{{ glide:hero_image height="570" width="736" fit="crop_focal" }}" alt="{{ hero_image:alt }}"> -->
        <div class="px-8 py-6">
            <h2 class="text-2xl font-bold leading-tight text-gray-800 hover:text-hot-pink">
                {{ post.title  }}
            </h2>
            <p class="flex items-center mt-4 text-xs text-gray-600">
                {{ date }}
            </p>
            <div v-if="post.tags" class="space-x-2 mt-2">
                <span v-for="tag in post.tags.slice(0, 2)" :key="tag">
                    <nuxt-link :to="tag_url(tag)" class="tag indigo text-base">
                        #{{ tag }}
                    </nuxt-link>
                </span>
            </div>
        </div>
    </nuxt-link>
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
<template>
    <div class="px-4 py-20 mx-auto nuxt-error md:py-4">
        <component :is="errorPage" :error="error" />
    </div>
</template>

<script>

import error404 from '~/components/error/404.vue';

export default {
    name: 'nuxt-error',
    components:{
    },
	layout: 'simple',
    props: {
        error: {
            type: Object,
            default: () => {},
        },
    },
    computed: {
        errorPage() {
            if (this.error.statusCode === 404) {
                return error404;
            }
            // catch everything else
            // return error500;
        },
    }
};
</script>

<style lang="postcss">
</style>
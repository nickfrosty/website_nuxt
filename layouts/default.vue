<template>
    <div style="font-family: Montserrat" class="min-h-screen overflow-x-hidden leading-normal tracking-normal text-gray-700 bg-white gradient font-body">

        <site-header></site-header>
    
        <main class="px-6 py-12 mx-auto"><!-- py-12 lg:py-20 -->
            <nuxt />
        </main>
        
        <site-footer></site-footer>
    </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'

export default {
    components:{
        SiteHeader,
        SiteFooter,
        // SimpleFooter,
    }
}
</script>

<style lang="postcss">
    
</style>
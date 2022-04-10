<template>
    <div
        style="font-family: Montserrat"
        class="leading-normal tracking-normal gradient font-body"
    >
        <site-header></site-header>

        <main class="px-6 py-12 mx-auto">
            <!-- py-12 lg:py-20 -->
            <nuxt />
        </main>

        <!-- <newsletter-signup-form class="px-6 py-12 mx-auto" /> -->
    </div>
</template>

<script>
import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";

import NewsletterSignupForm from "~/components/NewsletterSignupForm.vue";

export default {
    components: {
        SiteHeader,
        SiteFooter,
        NewsletterSignupForm,
    },
};
</script>

<style lang="postcss">
</style>
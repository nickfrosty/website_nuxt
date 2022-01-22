<template>
    <div class="">
        <!-- <p class="mt-8 text-lg font-medium">Building in public, sharing as I go →</p> -->
        <hr class="mb-12 md:hidden" />

        <div class="card">
            <p class="text-lg font-medium sm:text-lg">
                Building in public, sharing as I go →
            </p>
            <p class="text-center sm:mx-0 lg:text-left dark:text-gray-400">
                You can find more details about my
                <nuxt-link to="/newsletter" class="link">newsletter</nuxt-link>
                here.
            </p>
            <form
                class="items-center justify-between my-3 space-y-2  md:space-y-0 md:space-x-3 md:flex validate"
                action="https://frostbutter.us2.list-manage.com/subscribe/post?u=ff54f64a9c7c22ff1cd77bb2c&id=6778f6294a"
                method="post"
            >
                <input
                    type="email"
                    value=""
                    class="w-full"
                    name="EMAIL"
                    placeholder="Your best email address"
                    required
                />
                <div
                    style="position: absolute; left: -5000px"
                    aria-hidden="true"
                >
                    <input
                        type="email"
                        class="mx-auto"
                        name="b_ff54f64a9c7c22ff1cd77bb2c_6778f6294a"
                        tabindex="-1"
                        value=""
                        required="false"
                    />
                </div>
                <input
                    type="submit"
                    class="px-8 mx-auto text-center"
                    value="Follow along 💌"
                    name="subscribe"
                />
            </form>
            <!-- <script async src="https://eocampaign1.com/form/166eac0e-6c10-11ec-96e5-06b4694bee2a.js" data-form="166eac0e-6c10-11ec-96e5-06b4694bee2a"></script> -->

            <p class="text-center sm:mx-0 dark:text-gray-400">
                PS: You can also follow on Twitter -
                <a target="_blank" href="https://twitter.com/nickfrosty"
                    >@nickfrosty</a
                >
            </p>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.card {
    @apply max-w-xl mx-auto;
    @apply border-0 md:border md:border-indigo-200;
    @apply md:dark:border-indigo-500 md:shadow;
    @apply md:hover:-top-2 md:hover:shadow-lg;
    @apply px-1 py-2 md:px-8 md:py-6;
}
</style>
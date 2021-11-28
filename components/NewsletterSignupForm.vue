<template>
    <div class="">
        <!-- <p class="mt-8 text-lg font-medium">Building in public, sharing as I go →</p> -->
        <hr class="mb-12 md" />
        
        <div class="card">
            <p class="font-medium sm:text-lg">
                Building in public, sharing as I go →
            </p>   
            <form class="items-center justify-between my-2 space-y-2 md:space-x-3 md:flex validate" action="https://frostbutter.us2.list-manage.com/subscribe/post?u=ff54f64a9c7c22ff1cd77bb2c&id=6778f6294a" method="post" novalidate>
                <input type="email" value="" class="w-full px-4 py-3 bg-white border border-gray-200 rounded" name="EMAIL" placeholder="Your best email address" required>
                <div style="position: absolute; left: -5000px;" aria-hidden="true">
                <input type="email" class="mx-auto" name="b_ff54f64a9c7c22ff1cd77bb2c_6778f6294a" tabindex="-1" value="" required=""></div>
                <input type="submit" class="block px-4 py-3 mx-auto text-white bg-indigo-500 rounded cursor-pointer hover:bg-hot-pink active:bg-hot-pink" value="Follow along 💌" name="subscribe" />
            </form>
            <p class="mx-8 text-center sm:mx-0 lg:text-left">You can find more details about my <nuxt-link to="/newsletter" class="link">newsletter</nuxt-link> here.</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="postcss" scoped>
.card{
    /* @apply relative top-0 block w-full h-full max-w-xl col-span-2 p-5 mx-auto mt-8 overflow-hidden transition-all duration-75 ease-in-out bg-white border border-indigo-100 shadow-xl hover:border-indigo-200 lg:text-left hover:-top-2 rounded-xl; */
    @apply max-w-xl mx-auto;
    @apply relative top-0 block h-full mb-3 overflow-hidden transition-all duration-75 ease-in-out;
    @apply bg-white border border-white md:border-indigo-200 rounded-xl md:shadow;
    @apply  md:hover:-top-2 md:hover:shadow-lg;
    @apply px-0 py-2 md:px-8 md:py-6;
}
</style>
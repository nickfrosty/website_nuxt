<template>
    <section>
        <nav
            id="navigation"
            class="absolute top-0 z-30 flex flex-row justify-center w-full text-lg font-bold text-indigo-500  md:justify-end"
        >
            <ul class="flex flex-row px-6 py-2 mt-0">
                <li>
                    <nuxt-link class="mx-3 hover:text-hot-pink" to="/projects"
                        >Projects</nuxt-link
                    >
                </li>
                <li>
                    <nuxt-link class="mx-3 hover:text-hot-pink" to="/blog"
                        >Blog</nuxt-link
                    >
                </li>
                <li>
                    <nuxt-link class="mx-3 hover:text-hot-pink" to="/articles"
                        >Articles</nuxt-link
                    >
                </li>
                <li>
                    <nuxt-link class="mx-3 hover:text-hot-pink" to="/newsletter"
                        >Newsletter</nuxt-link
                    >
                </li>
            </ul>
        </nav>
        <div class="text-center">
            <h1
                class="pt-6 my-8 text-5xl font-bold tracking-tighter text-indigo-500  md:text-6xl"
            >
                <nuxt-link to="/" class="">Nick Frostbutter</nuxt-link>
            </h1>
        </div>
        <div
            id="header-divider"
            class="w-full h-px my-4 transform bg-indigo-500 -rotate-1"
        ></div>
    </section>
</template>
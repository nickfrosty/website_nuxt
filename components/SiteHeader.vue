<template>
  <section>
    <nav
      id="navigation"
      class="md:justify-end flex overflow-hidden absolute top-0 z-30 flex-row justify-center w-full text-lg font-bold text-indigo-500"
    >
      <ul class="flex flex-row px-6 py-2 mt-0">
        <li>
          <nuxt-link class="hover:text-hot-pink mx-3" to="/projects"
            >Projects</nuxt-link
          >
        </li>
        <li>
          <nuxt-link class="hover:text-hot-pink mx-3" to="/blog"
            >Blog</nuxt-link
          >
        </li>
        <li>
          <nuxt-link class="hover:text-hot-pink mx-3" to="/articles"
            >Articles</nuxt-link
          >
        </li>
        <li>
          <nuxt-link class="hover:text-hot-pink mx-3" to="/now">Now</nuxt-link>
        </li>
      </ul>
    </nav>
    <div class="text-center">
      <h1
        class="md:text-6xl pt-6 my-8 text-5xl font-bold tracking-tighter text-indigo-500"
      >
        <nuxt-link to="/" class="">Nick Frostbutter</nuxt-link>
      </h1>
    </div>
    <div
      id="header-divider"
      class="my-4 w-full h-px bg-indigo-500 transform -rotate-1"
    ></div>
  </section>
</template>

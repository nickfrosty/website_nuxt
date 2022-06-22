<template>
  <section
    class="grid grid-cols-1 gap-10 items-center mx-auto mt-4 max-w-6xl md:gap-32 sm:mt-8 lg:grid-cols-2"
  >
    <section
      class="grid grid-cols-2 gap-10 md:grid-cols-3 sm:gap-5 md:gap-8 md:items-center lg:block"
    >
      <nuxt-link
        to="/"
        class="block col-span-2 auto-cols-auto mx-auto mb-5 text-center sm:col-span-1 md:text-left"
      >
        <img
          class="w-60 h-60 rounded-full border border-gray-300 shadow md:w-48 md:h-48 lg:w-32 lg:h-32"
          src="/img/nick.jpg"
        />
      </nuxt-link>

      <p class="col-span-2 text-2xl font-medium sm:text-2xl sm:col-span-2">
        <span class="inline-block mb-5 text-3xl lg:mb-0 lg:text-2xl">
          Hi! I'm Nick,
        </span>
        <br class="lg:hidden" />
        a
        <a
          href="https://github.com/nickfrosty"
          target="_blank"
          class="underline link"
          title="@nickfrosty on GitHub"
          >full stack developer</a
        >
        and submarine veteran. In my free time, I build
        <nuxt-link
          to="/projects"
          class="underline link"
          title="View a list of my projects"
          >projects</nuxt-link
        >
        and practice
        <nuxt-link
          to="/articles"
          class="underline link"
          title="View my technical articles"
          >technical writing</nuxt-link
        >.
      </p>

      <div
        class="col-span-3 mt-5 space-x-5 text-center md:mt-10 lg:mt-5 lg:text-left"
      >
        <social-icons></social-icons>
      </div>

      <!-- <p
        class="col-span-2 space-y-5 text-lg font-medium text-center md:mt-10 xl:mt-14 lg:text-left"
      >
        I specialize in NuxtJS and Node.js.
      </p> -->
    </section>

    <section class="grid gap-8 xl:gap-12">
      <div class="order-2 md:order-1" v-if="active_projects">
        <hr class="mb-14 md:hidden" />

        <h2 class="my-10 text-3xl font-bold text-center lg:hidden">
          My Current Projects
        </h2>

        <div
          class="grid grid-cols-1 gap-4 mb-3 space-y-3 lg:block md:grid-cols-2"
        >
          <div
            v-for="project in active_projects.slice(0, 3)"
            :key="project.name"
          >
            <project-card :project="project" />
          </div>
        </div>

        <nuxt-link to="/projects" class="block ml-10 text-lg font-medium link"
          >View more projects →</nuxt-link
        >
      </div>
    </section>
  </section>
</template>

<script>
import ProjectCard from "~/components/projects/ProjectCard.vue";
import SocialIcons from "~/components/SocialIcons.vue";

export default {
  layout: "home",
  components: {
    ProjectCard,
    SocialIcons,
  },
  async asyncData({ params, error, $content }) {
    try {
      const active_projects = await $content("projects", { deep: true })
        .where({ status: "active", homepage: true })
        .sortBy("sortDate", "desc")
        .fetch()
        .catch((err) => {
          throw new Error("No projects found");
        });
      return { active_projects };
    } catch (err) {
      // error({
      // 	statusCode: 404,
      // 	message: "No posts could found",
      // });
    }
  },
  head() {
    return this.$seo({
      name: "Nick Frostbutter",
      // title: "Nick Frostbutter",
      templateTitle: "%name%",
      // description: '',
      // canonical: '',
      // twitter: {
      // card: 'summary_large_image',
      // url: '/',
      // title: '<local page title>',
      // description: '<local page desc>',
      // image: '<local page image>',
      // },
    });
  },
};
</script>

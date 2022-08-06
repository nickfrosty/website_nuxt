<template>
  <section
    class="md:gap-32 sm:mt-8 lg:grid-cols-2 grid grid-cols-1 gap-10 items-center mx-auto mt-4 max-w-6xl"
  >
    <section
      class="md:grid-cols-3 sm:gap-5 md:gap-8 md:items-center lg:block grid grid-cols-2 gap-10"
    >
      <nuxt-link
        to="/"
        class="sm:col-span-1 md:text-left block col-span-2 auto-cols-auto mx-auto mb-5 text-center"
      >
        <img
          class="md:w-48 md:h-48 lg:w-32 lg:h-32 w-60 h-60 rounded-full border border-gray-500 shadow"
          src="/img/nick.jpg"
        />
      </nuxt-link>

      <p class="sm:text-2xl sm:col-span-2 col-span-2 text-2xl font-medium">
        <span class="lg:mb-0 lg:text-2xl inline-block mb-5 text-3xl">
          Hi! I'm Nick,
        </span>
        <br class="lg:hidden" />
        a
        <a
          href="https://github.com/nickfrosty"
          target="_blank"
          class="link underline"
          title="@nickfrosty on GitHub"
          >full stack developer</a
        >
        and submarine veteran. In my free time, I build software
        <nuxt-link
          to="/projects"
          class="link underline"
          title="View a list of my projects"
          >projects</nuxt-link
        >
        and do
        <nuxt-link
          to="/articles"
          class="link underline"
          title="View my technical articles"
          >technical writing</nuxt-link
        >.
      </p>

      <div
        class="md:mt-10 lg:mt-5 lg:text-left col-span-3 mt-5 space-x-5 text-center"
      >
        <social-icons></social-icons>
      </div>

      <p
        class="md:mt-10 xl:mt-14 lg:text-left col-span-2 space-y-5 text-lg font-medium text-center"
      >
        Here, you can find
        <nuxt-link to="/now" class="link underline"
          >what I am working on now</nuxt-link
        >.
      </p>
    </section>

    <section class="xl:gap-12 grid gap-8">
      <div class="md:order-1 order-2" v-if="active_projects">
        <hr class="md:hidden mb-14" />

        <h2 class="lg:hidden my-10 text-3xl font-bold text-center">
          My Current Projects
        </h2>

        <div
          class="lg:block md:grid-cols-2 grid grid-cols-1 gap-4 mb-3 space-y-3"
        >
          <div
            v-for="project in active_projects.slice(0, 3)"
            :key="project.name"
          >
            <project-card :project="project" />
          </div>
        </div>

        <nuxt-link to="/projects" class="link block ml-10 text-lg font-medium"
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

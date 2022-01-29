<template>
    <section
        class="grid items-center max-w-6xl grid-cols-1 gap-10 mx-auto mt-4  md:gap-32 sm:mt-8 lg:grid-cols-2"
    >
        <section
            class="grid grid-cols-2 gap-10  sm:gap-5 md:gap-10 md:items-center lg:block"
        >
            <nuxt-link
                to="/"
                class="block col-span-2 mx-auto mb-5 text-center  auto-cols-auto sm:col-span-1 md:text-left"
            >
                <img
                    class="border border-gray-300 rounded-full shadow  w-60 h-60 lg:w-32 lg:h-32"
                    src="/img/nick.jpg"
                />
            </nuxt-link>

            <p class="col-span-2 text-2xl font-medium sm:col-span-1">
                <span class="inline-block mb-5 text-3xl lg:mb-0 lg:text-2xl">
                    Hi! I'm Nick,
                </span>
                <br class="lg:hidden" />
                an indie developer working on interesting
                <nuxt-link to="/projects" class="underline link"
                    >projects</nuxt-link
                >. Including writing code,
                <nuxt-link to="/blog" class="underline link">blogging</nuxt-link
                >, and
                <nuxt-link to="/articles" class="underline link"
                    >writing useful dev articles</nuxt-link
                >.
            </p>

            <div
                class="col-span-2 mt-5 space-x-5 text-center  md:mt-10 lg:mt-5 lg:text-left"
            >
                <social-icons></social-icons>
            </div>

            <ul
                class="col-span-2 space-y-5 text-lg font-medium text-center  md:mt-10 xl:mt-14 lg:text-left"
            >
                <li class="">
                    <!-- <nuxt-link to="/about" class="link">
                    Learn more about me →
                </nuxt-link> -->
                </li>
                <li class="">
                    Checkout the
                    <nuxt-link to="/uses" class="link">gear I use</nuxt-link> on
                    the regular
                </li>
                <!-- <li class="">
                    Bullish on Solana:
                    <nuxt-link to="/uses" class="link"
                        >nickfrosty.sol</nuxt-link
                    >
                </li> -->
                <li class="">
                    PS: I have lots of
                    <nuxt-link to="/domains" class="link"
                        >domains for sale</nuxt-link
                    >. Want one?
                </li>
            </ul>
        </section>

        <section class="grid gap-8 xl:gap-12">
            <!-- projects -->
            <div class="order-2 md:order-1" v-if="active_projects">
                <hr class="mb-14 md:hidden" />

                <h2 class="my-10 text-3xl font-bold text-center lg:hidden">
                    My Current Projects
                </h2>

                <div
                    class="grid grid-cols-1 gap-4 mb-3 space-y-3  lg:block md:grid-cols-2"
                >
                    <div
                        v-for="project in active_projects.slice(0, 3)"
                        :key="project.name"
                    >
                        <project-card :project="project" />
                    </div>
                    <!-- <project-card :name="'boomerang.link'" :url="'https://boomerang.link'" :logo="'/boomerang/boomerang.svg'" :description="'bookmark manager with bookmark reminders made easy'" :status="'active'" :timerange="'present'" />

					<project-card :name="'sizable.io'" :url="'https://sizable.io'" :logo="'sizable.png'" :description="'url shortener and tiny link analytics for creators'" :status="'active'" :timerange="'2021'" /> -->
                </div>

                <nuxt-link
                    to="/projects"
                    class="block ml-10 text-lg font-medium link"
                    >View more projects →</nuxt-link
                >
            </div>
            <!-- end projcets -->
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
            // name: 'Name app',
            title: "Nick Frostbutter",
            templateTitle: "%title%",
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
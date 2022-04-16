<template>
    <div>
        <section class="mb-12 text-center">
            <h1 class="mb-5 text-4xl font-bold">Active Projects</h1>

            <p class="">
                I'm always working on something. These are my main active
                projects right now.
            </p>
        </section>

        <section
            v-if="active_projects"
            class="grid max-w-5xl grid-cols-1 gap-5 mx-auto mt-4 mb-3  md:grid-cols-2 sm:mt-8"
        >
            <div
                v-for="project in active_projects"
                :key="project.name"
                class="block"
            >
                <project-card :project="project" />
            </div>
        </section>

        <hr />

        <section class="max-w-2xl mx-auto mb-12 text-center">
            <h1 class="mb-5 text-4xl font-bold">
                Other Projects, <br class="block sm:hidden" />
                Various States
            </h1>

            <p class="">
                Not every project can be actively and dilligently maintained.
                <br class="hidden sm:block" />
                Sometimes I need to set some aside, and let them ride.
            </p>
        </section>

        <section
            v-if="projects"
            class="grid max-w-2xl grid-cols-1 gap-5 mx-auto mt-4 mb-3 space-y-2  sm:mt-8"
        >
            <div v-for="project in projects" :key="project.name">
                <project-card :project="project" />
            </div>
        </section>
    </div>
</template>

<script>
import ProjectCard from "~/components/projects/ProjectCard.vue";

export default {
    components: {
        ProjectCard,
    },
    head() {
        return this.$seo({
            title: "Projects",
            description:
                "I'm always working on something. These are my main active projects, and previous projects. All in various states.",
        });
    },
    async asyncData({ params, error, $content }) {
        try {
            const projects = await $content("projects", { deep: true })
                .where({ status: { $ne: "active" } })
                .sortBy("sortDate", "desc")
                .fetch()
                .catch((err) => {
                    throw new Error("No projects found");
                });

            const active_projects = await $content("projects", { deep: true })
                .where({ status: "active" })
                .sortBy("sortDate", "desc")
                .fetch()
                .catch((err) => {
                    throw new Error("No projects found");
                });

            return { projects, active_projects };
        } catch (err) {
            // error({
            // 	statusCode: 404,
            // 	message: "No posts could found",
            // });
        }
    },
};
</script>
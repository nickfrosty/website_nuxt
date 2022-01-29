<template>
    <div class="card hover:no-underline">
        <div class="flex items-center gap-4">
            <a v-if="logo" :href="project.url" target="_blank">
                <img
                    :src="logo"
                    :alt="project.name"
                    class="w-12 h-12 rounded"
                />
            </a>
            <div class="flex justify-between flex-grow">
                <div class="block items-center">
                    <a
                        :href="project.url"
                        target="_blank"
                        class="
                            text-2xl
                            font-bold
                            text-gray-700
                            dark:text-gray-300
                            hover:text-hot-pink
                            link
                        "
                        >{{ project.name }}</a
                    >
                    <div class="block text-sm text-gray-500">
                        {{ project.timeperiod }}
                    </div>
                </div>
                <span :class="'status ' + statusClass">
                    {{ project.status }}
                </span>
            </div>
        </div>
        <p v-if="project.description" class="">{{ project.description }}</p>
    </div>
</template>

<script>
export default {
    props: {
        project: Object,
    },
    computed: {
        logo() {
            let logo = this.project.hero_logo || this.project.logo;
            if (!logo) return false;
            // remove '/static/' from the path
            if (logo.substring(0, 8) != "/static/") logo = logo.substring(7);
            // force add '/media/' if not already there
            if (logo.substring(0, 7) != "/media/") logo = `/media/${logo}`;
            return logo;
        },
        statusClass() {
            return this.project.status;
        },
    },
    data() {
        return {};
    },
};
</script>

<style lang="postcss" scoped>
.card {
    @apply border-0 p-0 space-y-3;
    @apply md:p-5 md:border md:shadow-md;
    /* @apply md:hover:-top-2 md:hover:shadow-lg; */
}

/* Style the stauts pills */
.status {
    @apply place-self-start px-3 py-1 ml-2 text-xs font-medium rounded-full;
}
.status.init {
    @apply text-gray-900 bg-purple-200;
}
.status.active {
    @apply text-gray-900 bg-green-200;
}
.status.autopilot {
    @apply text-gray-900 bg-purple-200;
}
.status.backburner {
    @apply text-gray-900 bg-yellow-200;
}
.status.graveyard,
.status.sold {
    @apply text-gray-900 bg-red-200;
}
</style>
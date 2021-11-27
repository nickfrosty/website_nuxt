<template>
    <div class="text-gray-800 card hover:no-underline">
        <div class="flex items-center gap-3">
            <a :href="project.url" target="_blank"><img :src="logo" :alt="project.name" class="w-12 h-12 rounded" /></a>
            <div class="block">
                <a :href="project.url" target="_blank" class="text-2xl font-bold text-gray-700 hover:text-hot-pink link">{{ project.name }}</a>
                <span style="top:-.25rem" :class="'status ' + statusClass">{{ project.status }}</span>
                <div class="block text-sm text-gray-500">{{ project.timerange }}</div>
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
    computed:{
        logo(){
            let logo = this.project.hero_logo || this.project.logo;
			if ( !logo )
				return false;
            // remove '/static/' from the path
            if ( logo.substring(0, 8) != '/static/' )
                logo = logo.substring(7);
            // force add '/media/' if not already there
            if ( logo.substring(0, 7) != '/media/' )
                logo = `/media/${logo}`;
            return logo;
        },
        statusClass(){
            return this.project.status;
        },
    },
    data(){
        return{

        }
    },
}
</script>

<style lang="postcss" scoped>
.card{
    @apply relative top-0 block h-full overflow-hidden transition-all duration-75 ease-in-out;
    @apply bg-white border border-white rounded-xl;
    @apply lg:text-left md:hover:border-indigo-200 md:hover:-top-2 md:hover:shadow-lg;
    @apply md:p-5 p-0 space-y-3;
}

/* Style the stauts pills */
.status{
    @apply relative px-3 py-1 ml-2 text-xs font-medium rounded-full;
}
.status.active{
    @apply text-gray-900 bg-green-200;
}
.status.autopilot{
    @apply text-gray-900 bg-purple-200;
}
.status.backburner{
    @apply text-gray-900 bg-yellow-200;
}
.status.graveyard{
    @apply text-gray-900 bg-red-200;
}
</style>
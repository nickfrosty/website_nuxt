<template>
    <a :href="project.url" target="_blank" class="card text-gray-800 hover:no-underline">
        <div class="flex items-center gap-3">
            <img :src="logo" :alt="project.name" class="w-12 h-12 rounded" />
            <div class="block">
                <a target="_blank" :href="project.url" class="text-2xl font-bold text-gray-700 hover:no-underline">{{ project.name }}</a>
                <span style="top:-.25rem" :class="'status ' + statusClass">{{ project.status }}</span>
                <div class="block text-sm text-gray-500">{{ project.timerange }}</div>
            </div>
        </div>
        <p v-if="project.description" class="">{{ project.description }}</p>
    </a>
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
    @apply  relative top-0 block h-full p-5 space-y-3 overflow-hidden transition-all duration-75 ease-in-out bg-white border border-white cursor-pointer hover:shadow-lg hover:border-indigo-200 lg:text-left hover:-top-2 rounded-xl;
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
<template>
	<article class="grid items-center max-w-6xl grid-cols-1 gap-10 mx-auto mt-4 md:gap-32 sm:mt-8 lg:grid-cols-2">

		<div class="grid grid-cols-2 gap-10 sm:gap-5 md:gap-10 md:items-center lg:block">
			<div class="block col-span-2 mx-auto mb-5 text-center auto-cols-auto sm:col-span-1 md:text-left">
				<img class="border border-gray-300 rounded-full shadow w-60 h-60 lg:w-32 lg:h-32" src="/img/nick.jpg" />
			</div>
			
			<p class="col-span-2 text-2xl font-medium sm:col-span-1">
				<span class="inline-block mb-5 text-3xl lg:mb-0 lg:text-2xl">Hi! I'm Nick,</span> 
				<br class="lg:hidden" /> an indie developer working on interesting 
				<nuxt-link to="/projects" class="link underline">projects</nuxt-link>. 
				Including writing code, building in my workshop, and creating content online.
			</p>
			
			<div class="col-span-2 mt-5 space-x-5 text-center md:mt-10 lg:mt-5 lg:text-left">
			
				<social-icons></social-icons>
			
			</div>

			<!-- <newsletter-signup-form /> -->

		</div>

		<!-- projects -->
		<div class="" v-if="active_projects">
			<h2 class="mt-10 mb-5 text-3xl font-bold text-center lg:hidden">My Current Projects</h2>

			<div class="grid grid-cols-1 gap-4 mb-3 space-y-3 lg:block md:grid-cols-2">
				
				<div v-for="project in active_projects" :key="project.name">
					<project-card :project="project" />
				</div>
				<!-- <project-card :name="'boomerang.link'" :url="'https://boomerang.link'" :logo="'/boomerang/boomerang.svg'" :description="'bookmark manager with bookmark reminders made easy'" :status="'active'" :timerange="'present'" />

				<project-card :name="'sizable.io'" :url="'https://sizable.io'" :logo="'sizable.png'" :description="'url shortener and tiny link analytics for creators'" :status="'active'" :timerange="'2021'" /> -->
	
			</div>

			<nuxt-link to="/projects" class="block ml-10 text-lg font-medium link">View more projects →</nuxt-link>
		</div>
		<!-- end projcets -->
	</article>
</template>

<script>
import ProjectCard from '~/components/projects/ProjectCard.vue';
import NewsletterSignupForm from '~/components/NewsletterSignupForm.vue';
import SocialIcons from '~/components/SocialIcons.vue';

export default {
    components: {
        ProjectCard,
        SocialIcons,
        NewsletterSignupForm,
    },
	async asyncData({ params, error, $content }) {
		try {
			const active_projects = await $content("projects", { deep: true })
			.where({ status: 'active' }).sortBy("sortDate", "desc").fetch()
			.catch((err) => { throw new Error('No projects found')});
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
			title: 'Nick Frostbutter',
			templateTitle: '%title%',
			// description: '',
			// canonical: '',
			// twitter: {
				// card: 'summary_large_image',
				// url: '/',
				// title: '<local page title>',
				// description: '<local page desc>',
				// image: '<local page image>',
			// }, 
		})
	},
}
</script>
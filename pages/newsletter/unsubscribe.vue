<template>
	<main class="max-w-2xl py-10 mx-auto text-center">
		<!-- {{# <div class="w-full mb-8 border-t-2"></div> #}} -->
		<h3 class="text-4xl font-bold leading-none font-display">
			Leaving from my Newsletter?
		</h3>
		<div class="max-w-xl mx-auto mt-8 space-y-5 text-lg">
			
			<p class="">
				I really am sorry to see you go, but I respect your choice. 😔
			</p>
			<p>
				If there is anything you would like to see be done different or think I can do better, then please do let me know.
			</p>
			<p>
				Email me directly at <a href="mailto:nick@frostbutter.com">nick@frostbutter.com</a>
			</p>
		</div>
	</main>
</template>

<script>
export default {
	head() {
		return this.$seo({
			title: 'Want to leave my newsletter?',
			description: 'Sorry to see you go! If there is anything you would like to see be done different or better, then please do let me know. @nickfrosty',
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
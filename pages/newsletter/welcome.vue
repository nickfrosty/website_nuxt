<template>
	<main class="max-w-2xl py-10 mx-auto text-center">
		<h3 class="text-4xl font-bold leading-none font-display">
			Double opt in for privacy!
		</h3>
		<div class="max-w-xl mx-auto mt-8 space-y-5 text-lg">
			<!-- <p>Welcome to my Newsletter!</p> -->

			<p>You're in! Check your email though! 💌</p>

			<p>I respect email privacy and clarity, so I ask for <span class="font-bold">double opt-in</span> for my newsletter.</p>

			<p>Change your mind, <span class="font-bold">unsubscribe any time</span>. No hard feelings.</p>
		</div>
	</main>
</template>

<script>
export default {
	head() {
		return this.$seo({
			title: '💌 Welcome to my Newsletter',
			description: 'I respect email privacy and clarity, so I ask for double opt-in for my newsletter. Change your mind, unsubscribe any time. No hard feelings.',
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
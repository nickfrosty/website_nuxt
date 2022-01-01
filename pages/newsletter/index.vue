<template>
	<div class="max-w-xl mx-auto">

		<h1 class="mb-10 text-4xl font-bold text-center">Building in public, <br />sharing as I go 😁</h1>
		
		<p class="mb-2 text-xl text-center">
			Sharing my personal thoughts and progress updates on projects. 
		</p>

		<p class="text-center ">
			PS: Here is my <a class="link" target="_blank" href="https://shard-piper-911.notion.site/2022-Get-things-done-df66e4729bd84b68bfaf16e74b7b4b51">2022 notion doc</a> where you can <br />see all my weekly progress as I am building in public. 
		</p>
		
		<section class="px-1 my-10 space-y-1">
			<form class="flex items-center justify-center space-x-3 validate" action="https://frostbutter.us2.list-manage.com/subscribe/post?u=ff54f64a9c7c22ff1cd77bb2c&id=6778f6294a" method="post" novalidate>
				<input type="email" value="" class="w-104" name="EMAIL" placeholder="Your best email address" required>
				<div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="email" name="b_ff54f64a9c7c22ff1cd77bb2c_6778f6294a" tabindex="-1" value="" required=""></div>
				<input type="submit" class="" value="Follow along 💌" name="subscribe" />
			</form>
			
			<p class="mb-10 text-sm text-center">
				I usually email about <b>**once a month**</b>, but it does vary from time to time.
			</p>

		</section>
		

		<p class="mx-auto text-2xl font-bold text-center">Interested?</p>
		<p class="mx-auto text-lg text-center">Join my newsletter to get things like these sent to your inbox.<br />Unsubscribe anytime, no hard feelings.</p>
		
	</div>
</template>

<script>
export default {
	head() {
		return this.$seo({
			title: 'Newsletter',
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
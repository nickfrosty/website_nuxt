---
published: true
title: 'Current year with JavaScript getFullYear()'
intro: 'Did you hard code the year in your footer? New year, new problems. Get the current year in Javascript with the getFullYear() function.'
hero_image: /media/articles/javascript/getfullyear-javascript-current-year-new-years.png
date: 2022-01-01
category: dev
tags:
    - javascript
    - vue
    - nuxt
    - snippets
---

With this one-liner, you can dynamically set the year with the JavaScript getFullYear() function:

```js
let year = new Date().getFullYear();
```

If you are using amazing frameworks like [VueJS](https://vuejs.org) or [NuxtJS](https://nuxtjs.org), you can add the current year code directly into your template section

```vue
<template>
	<footer>
		Copyright © {{ new Date().getFullYear() }}
	</footer>
</template>
```

Happy new years!
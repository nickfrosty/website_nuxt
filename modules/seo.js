/**
 * 
 * **/


/**
 *  Generates an array of routes  using 'content'
 *  @param args(string) - single string name of the 'content' directory to load
 *  @param args(array) - array of the names of each of the 'content' directories to load
 *          each of the items in the array can be a string, or an object with a 'path'(required) and 'prefix'(optional)
 *          when not supplied, the 'prefix' will default to the 'path'
 * 
 * Examples:
 *  createSitemapFromContent("single_dir_name");
 *  createSitemapFromContent(["dir1", "dir2"]);
 *  createSitemapFromContent([ {path:"dir1"}, "dir2"]);
 *  createSitemapFromContent([ {path:"dir1", prefix: "dir1_prefix"}, "dir2"]);
 * **/
exports.createSitemapFromContent = async (args) => {
    const { $content } = require('@nuxt/content');
    let routes = [];
    let posts;

    // allow 'args' to be a single 'string'. converting it to an array for processing 
    if ( args && typeof args == 'string' ){
        args = [ args ];
    }

    // process each of the args passed
    if ( args && args.length > 0 ){
        args.forEach(options => {
            
            // process a single string being supplied as the 'options'
            if ( typeof options == 'string' )
                options = { path: options };

            try {
                // retrieve all of the 'content' posts
                loader = $content(options.path, { deep: true })
                    .where({ published: true }).sortBy("createdAt", "desc")
                    .fetch();

                // process the Promise from 'content'
                loader.then((posts) => {
                    if ( posts && posts.length > 0 ){
                        posts.forEach((post) => {
                            routes.push(`${options.prefix || options.path}/${post.slug}`);
                        });
                    }
                });
                
            }
            catch (err){
                console.error(err);
            }
        });
    }
    return routes;
}

/* Create a RSS feed from a 'content' library of markdown posts */
exports.createFeedFromContent = async (feed, args) => {
	const { contentPath, feedFile, options } = args;
	
	// set the default author
	const author = {
		name: "Nick Frostbutter",
		email: "hello@frostbutter.com",
		link: "https://frostbutter.com",
		twitter: "@nickfrosty"
	};

	// validate the hostname and create the unique ids
	const hostname = options.hostname || 'https://frostbutter.com';
	feed.options = {
		...options,
		hostname: hostname,
		image: options.image || `${hostname}/img/nick.jpg`,
		author: options.author || author,
		generator: options.generator || 'Nuxt Feed',
		id: `${hostname}${feedFile}`,
		link: `${hostname}${feedFile}`
	};

	// eslint-disable-next-line global-require
	const { $content } = require('@nuxt/content');

	// get all the posts from the 'content/$contentPath' dir
	const posts = await $content(contentPath, { deep: true })
	.where({ published: true }).sortBy("createdAt", "asc").fetch();

	// process each post and add to the feed
	posts.forEach((post) => {
		// the url of the post is set first
		const url = `${hostname}/${contentPath}/${post.slug}`;
		const image = post.hero_image ? `${hostname}${post.hero_image}` : null;
		let content = (image ? `<p><img alt="${post.title}" title="${post.title}" src="${image}"></p>\n` : '') + post.bodyPlainText;

		content += (`\n<hr /><br />This article was originally posted to my personal site at <a href="${url}">frostbutter.com</a>\n`);

		// create the feed item for each 'post'
		feed.addItem({
			title: post.title,
			id: url,
			link: url,
			author: author || null,
			description: post.intro || null,
			image: image,
			date: new Date(post.date) || null,
			content: content,
		});
	});
}
---
published: false
title: 'Install Statamic 3 (with complete setup)'
intro: "Simply put? Statamic is just awesome! It's an open source PHP/Laravel CMS framework built with developers in mind. Awesomeness full of awesome sauce."
updated_at: 1626134807
category: dev
tags: statamic, php
---
install node

install valet

install statamic via composer

install statamic in your folder

check that your site loads

finish the install with "npm install"

create a user

enjoy!

## Create a new Statamic website

From inside of the terminal, you can now run the statamic command to create new Statamic websites. Updating the name of your project of course.

**Note:** this will begin the new site creation process in the current directory of your terminal, so be sure to navigate around to where you actually want your site to live on the machine first.

You will be asked if you want to use a Statamic starter kit, or the barebones install. Personally, I love the [Starter's Creek](https://github.com/statamic/starter-kit-starters-creek) starter kit. It is what this blog used to run on.

???img???

Off to the races! Your new Statamic website will be created (and with a basic setup if you chose a starter kit). After a few minutes your installer will complete, and you can get to the real magic.

## Make some checks on your new website

Every time I install a new Statamic website, especially from a starter kit, I **ALWAYS** check the _package.json_ file. Since Statamic uses webpack and Laravel mix, there may be some minor updates you need to make to the _package.json_ file.

Open that sucker up and check to see that your scripts are using webpack CLI. For any fresh install with **webpack version newer than 4.0**, webpack CLI is required. But several of the starter kits are not configured properly to use webpack CLI.

You may need to update your "**devDependencies**" to use webpack CLI, make sure you have these packages:

```bash
"devDependencies": {
  "webpack": "^4.6.0",
  "webpack-cli": "^4.6",
  "webpack-dev-server": "^3.1.2"
}
```

**Pro Tip:** I also highly recommend using **BrowserSync** with any Statamic project. With it setup properly, you can get auto refresh and rebuilds of your frontend code while you make changes. Just amazing.

Next I update the "scripts" to actually use webpack CLI:

```bash
"scripts": {
  "dev": "npm run development",
  "development": "cross-env NODE_ENV=development node_modules/webpack-cli/bin/cli.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
  "watch": "npm run development -- --watch",
  "watch-poll": "npm run watch -- --watch-poll",
  "hot": "cross-env NODE_ENV=development node_modules/webpack-dev-server/bin/webpack-dev-server.js --inline --hot --config=node_modules/laravel-mix/setup/webpack.config.js",
  "prod": "npm run production",
  "production": "cross-env NODE_ENV=production node_modules/webpack-cli/bin/cli.js --no-progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js"
}
```

Notice that the "**development**", "**hot**", and "**production**" now use webpack CLI instead of the older versions of webpack.

## Run the npm install command

Go ahead and run the npm install command to have npm download all the required packages for your new Statamic project. This usually takes some time, so be patient with it. Especially on the first time.

img

### Audit the npm packages for vulnerabilities

Once your install is complete you will see a summary of the how many packages were installed and how many vulnerabilities npm found.

img

You can run the audit command to get a comprehensive summary of the vulnerabilities:

img

Of if you can be like me and run that audit fix command to get the repairs and patches underway. This will fix all of installed packages (except the ones that have breaking changes):

```bash

```

## Create your first Statamic user

Like any quality CMS, you need a user account to be able to actually log in and mange your content. You know, content management system. Seems kind of important.

To create a user account with Statamic, you have to run one command in the terminal:

```bash
php please make:user
```

You will be asked to enter some basic user account details like:

  - email
  - name
  - password
  - and superuser or not

If this is going to be your one and only user account for Statamic, for sure make it a **superuser**. Without that permission level, you will **NOT** be able to really manage and setup your site.

## Open that snazzy new Statamic site

Your install is complete! Browse on over to the server address your new Statamic site is setup on. Whether that is your production/staging server, or your local development server using something like XAMPP or LAMPP. 

Better yet, use Laravel Valet. It is the best way to run a Statamic site. If you have Valet setup and installed, you link up your new Statamic site, and open the .test site

Enjoy your fresh Statamic site! Make something awesome!
---

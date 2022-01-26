<template>
    <main class="space-y-5">
        <section class="max-w-3xl mx-auto text-lg text-center">
            <h1 class="mb-8 text-4xl font-bold">
                I have lots of domain names. <br class="hidden sm:block" />Want
                one? <br class="sm:hidden" />Let me know!
            </h1>

            <p class="mt-5">
                If one catches your eye, let me know:<br />
                <a class="link" href="mailto:nick@frostbutter.com"
                    >nick@frostbutter.com</a
                >
                or
                <a class="link" href="https://twitter.com/nickfrosty"
                    >@nickfrosty</a
                >
                <br />
                You can also see my
                <a
                    class="link"
                    href="https://dan.com/domain-seller/domain-seller-544b3056-a375-4c05-8462-f93d6244dfdf"
                    target="_blank"
                    >dan.com</a
                >
                listings too!
            </p>
        </section>

        <!-- <section class="flex justify-center space-x-2">
            <button class="">All TLDs</button>
            <button class="">.com</button>
            <button class="">.co</button>
            <button class="">.io</button>
            <button class="">.so</button>
            <button class="">.dev</button>
            <button class="">.me</button>
            <button class="">.app</button>
        </section> -->

        <section class="listing">
            <a
                :href="`https://dan.com/buy-domain/${domain.name}`"
                target="_blank"
                class="item"
                v-for="domain in domains"
                :key="domain.id"
                :class="domain.viewLarge ? 'large' : 'small'"
            >
                <div class="flex items-center gap-3">
                    <img
                        v-if="domain.icon"
                        :src="domain.icon"
                        :alt="domain.name"
                        class="icon"
                    />
                    <p class="">{{ domain.name }}</p>
                </div>
            </a>
        </section>
    </main>
</template>

<script>
export default {
    head() {
        return this.$seo({
            title: "Domains",
            description:
                "I have a problem. I have lots of domain names. Too many. Want one? Let me know! @nickfrosty",
            // canonical: '',
            openGraph: {
                image: {
                    url: "https://frostbutter.com/media/domains.jpg",
                },
            },
            twitter: {
                card: "summary_large_image",
                // url: '/',
                // title: '',
                description:
                    "Awesome, hand curated, domains names that I have gathered. They are all for sale!",
            },
        });
    },
    data() {
        return {
            domains: [
                {
                    name: "twitter.fm",
                    tld: "fm",
                    expiration: "25 Oct 2022",
                    descriptions: "",
                    tags: "spaces, audio, podcast, record, social, media, share",
                    icon: "/media/projects/logos/bird.png",
                    viewLarge: true,
                },
                {
                    name: "taag.me",
                    tld: "me",
                    expiration: "Feb 19, 2022",
                    descriptions: "",
                    tags: "tag, social, follow, media, twitter, creator, content, at, email",
                    icon: "/media/projects/logos/taag.svg",
                    viewLarge: false,
                },
                // {
                //     name: 'spacebird.io',
                //     tld: 'io',
                //     expiration: 'Oct 28, 2022',
                //     descriptions: '',
                //     tags: 'twitter, space, audio, search, record',
                //     icon: '/media/projects/logos/space.svg',
                //     viewLarge: false,
                // },

                {
                    name: "todoo.app",
                    tld: "app",
                    expiration: "Jul 12, 2022",
                    descriptions: "",
                    tags: "todo, product, productivity, work, list, app, create",
                },
                {
                    name: "perm.link",
                    tld: "link",
                    expiration: "Jun 8, 2022",
                    descriptions: "",
                    tags: "save, permanent, arvid, download",
                },

                {
                    name: "StatusPanel.app",
                    tld: "app",
                    expiration: "May 30, 2022",
                    descriptions: "",
                    tags: "status, panel, track, dashboard, dash, live, stocks, crypto, coin, bit",
                },
                {
                    name: "sizable.io",
                    tld: "io",
                    expiration: "Apr 29, 2022",
                    descriptions: "",
                    tags: "large, small, size, share, links, short, measure",
                    icon: "/media/projects/logos/sizable.svg",
                    viewLarge: false,
                },
                {
                    name: "crafted.so",
                    tld: "so",
                    expiration: "Apr 3, 2022",
                    descriptions: "",
                    tags: "craft, build, make, log, work, craftsman, saw, blade, table",
                    icon: "/media/projects/logos/crafted.svg",
                    viewLarge: false,
                },
                {
                    name: "creators.fm",
                    tld: "fm",
                    expiration: "",
                    descriptions: "",
                    tags: "podcast, create, share, build, public, audio, record",
                    icon: "/media/projects/logos/creators.svg",
                    // viewLarge: true,
                },

                {
                    name: "adilic.com",
                    tld: "com",
                    expiration: "Feb 19, 2022",
                    descriptions: "",
                    icon: "/media/projects/logos/adilic.svg",
                    tags: "ads, advertise, advert, marketing, content",
                },
                {
                    name: "upsle.com",
                    tld: "com",
                    expiration: "Feb 9, 2023",
                    descriptions: "",
                    icon: "/media/projects/logos/upsle.svg",
                    tags: "up, time, monitor, monitoring, robot, check, checker, social",
                },

                {
                    name: "faqel.com",
                    tld: "com",
                    expiration: "Jun 28, 2022",
                    descriptions: "",
                    tags: "faq, help, facts, questions, ask, forum, post, share, social",
                    icon: "/media/projects/logos/faq.svg",
                    viewLarge: true,
                },
                {
                    name: "unbly.com",
                    tld: "com",
                    expiration: "Jun 28, 2022",
                    descriptions: "",
                    // icon: '/media/projects/logos/upsle.svg',
                    tags: "brand, marketing, social, twitter, brandable, believe, undo",
                },
                {
                    name: "upmix.co",
                    tld: "co",
                    expiration: "Jun 30, 2022",
                    descriptions: "",
                    tags: "mix, mixer, brandable, saas, software, startup",
                },
                {
                    name: "clerq.co",
                    tld: "co",
                    expiration: "Jun 30, 2022",
                    descriptions: "",
                    tags: "finance, money, tracker, tracking, bills, clerk, desk, help",
                },

                {
                    name: "gema.dev",
                    tld: "dev",
                    expiration: "Mar 24, 2022",
                    descriptions: "",
                    tags: "gem, gems, ruby, code, dev, program, jems, jem, jema",
                    icon: "/media/projects/logos/gema.svg",
                    // viewLarge: true,
                },
                {
                    name: "geni.dev",
                    tld: "dev",
                    expiration: "Mar 24, 2022",
                    descriptions: "",
                    tags: "genie, wizard, dev, code, developer, software, articles",
                    icon: "/media/projects/logos/genie.svg",
                    // viewLarge: true,
                },
                {
                    name: "dnl.link",
                    tld: "link",
                    expiration: "Feb 19, 2022",
                    descriptions: "",
                    icon: "/media/projects/logos/download.svg",
                    tags: "file, sharing, share, downloads, upload, track, dropbox, drop, links, gumroad",
                },
                {
                    name: "eatt.app",
                    tld: "app",
                    expiration: "Jun 28, 2022",
                    descriptions: "",
                    icon: "/media/projects/logos/bowl.svg",
                    tags: "eat, food, restraunt, restaraunt, cook, bake, app, saas, software, recipes",
                    viewLarge: true,
                },
                {
                    name: "pott.app",
                    tld: "app",
                    expiration: "Jul 9, 2022",
                    descriptions: "",
                    icon: "/media/projects/logos/pot.svg",
                    tags: "pot, weed, garden, bake, baked, brownie, edibles, recipes",
                    viewLarge: true,
                },
                {
                    name: "tinymart.app",
                    tld: "app",
                    expiration: "Jun 28, 2022",
                    descriptions: "",
                    tags: "",
                    icon: "/media/projects/logos/cart.svg",
                },
                {
                    name: "webmart.app",
                    tld: "app",
                    expiration: "Sep 18, 2022",
                    descriptions: "",
                    tags: "",
                    icon: "/media/projects/logos/store.svg",
                },

                {
                    name: "gloic.com",
                    tld: "com",
                    expiration: "Jun 28, 2022",
                    descriptions: "",
                    tags: "",
                },

                {
                    name: "ting.so",
                    tld: "so",
                    expiration: "Oct 24, 2022",
                    descriptions: "",
                    tags: "",
                },
                {
                    name: "epilog.me",
                    tld: "me",
                    expiration: "Jun 21, 2022",
                    descriptions: "",
                    tags: "",
                },
                {
                    name: "epilog.so",
                    tld: "so",
                    expiration: "Jun 21, 2022",
                    descriptions: "",
                    tags: "",
                },
                {
                    name: "epilogue.so",
                    tld: "so",
                    expiration: "Jun 21, 2022",
                    descriptions: "",
                    tags: "",
                },
                {
                    name: "toghl.com",
                    tld: "com",
                    expiration: "Jun 28, 2022",
                    descriptions: "",
                    tags: "",
                    icon: "/media/projects/logos/toggle.svg",
                },
                {
                    name: "contactt.co",
                    tld: "co",
                    expiration: "Jun 30, 2022",
                    descriptions: "",
                    tags: "",
                    icon: "/media/projects/logos/mailbox.svg",
                },
                {
                    name: "subpage.io",
                    tld: "io",
                    expiration: "Apr 29, 2022",
                    descriptions: "",
                    tags: "",
                    icon: "/media/projects/logos/page.svg",
                },
                {
                    name: "banter.fm",
                    tld: "fm",
                    expiration: "Feb 19, 2022",
                    descriptions: "",
                    tags: "",
                },
                {
                    name: "backpanel.co",
                    tld: "co",
                    expiration: "Apr 30, 2022",
                    descriptions: "",
                    tags: "",
                },
                {
                    name: "beabl.com",
                    tld: "com",
                    expiration: "Jun 28, 2022",
                    descriptions: "",
                    tags: "",
                },
                {
                    name: "bevah.com",
                    tld: "com",
                    expiration: "Jun 28, 2022",
                    descriptions: "",
                    tags: "",
                },
                {
                    name: "authah.com",
                    tld: "com",
                    expiration: "Dec 13, 2022",
                    descriptions: "",
                    tags: "",
                    viewLarge: true,
                },
                {
                    name: "authuh.com",
                    tld: "com",
                    expiration: "Dec 13, 2022",
                    descriptions: "",
                    tags: "",
                    viewLarge: true,
                },

                {
                    name: "finantu.com",
                    tld: "com",
                    expiration: "Jun 28, 2022",
                    descriptions: "",
                    tags: "",
                    icon: "/media/projects/logos/money.svg",
                },
                {
                    name: "gemuti.com",
                    tld: "com",
                    expiration: "Jun 28, 2022",
                    descriptions: "",
                    tags: "",
                    icon: "/media/projects/logos/gema.svg",
                },

                {
                    name: "logeni.com",
                    tld: "com",
                    expiration: "Jun 28, 2022",
                    descriptions: "",
                    tags: "",
                    icon: "/media/projects/logos/book.svg",
                },
                {
                    name: "scamper.dev",
                    tld: "dev",
                    expiration: "Apr 12, 2022",
                    descriptions: "",
                    tags: "",
                },
                {
                    name: "drivetrain.dev",
                    tld: "dev",
                    expiration: "Sep 22, 2022",
                    descriptions: "",
                    tags: "",
                },
                {
                    name: "devabi.com",
                    tld: "com",
                    expiration: "Jun 28, 2022",
                    descriptions: "",
                    tags: "",
                },

                {
                    name: "megohms.com",
                    tld: "com",
                    expiration: "Jun 28, 2022",
                    descriptions: "",
                    tags: "",
                },

                {
                    name: "pajce.com",
                    tld: "com",
                    expiration: "Jun 28, 2022",
                    descriptions: "",
                    tags: "",
                },
                {
                    name: "opager.com",
                    tld: "com",
                    expiration: "Jun 28, 2022",
                    descriptions: "",
                    tags: "",
                },
                {
                    name: "nameea.com",
                    tld: "com",
                    expiration: "Jun 28, 2022",
                    descriptions: "",
                    tags: "",
                    icon: "/media/projects/logos/nameea.png",
                },
                {
                    name: "fii.sh",
                    tld: "sh",
                    expiration: "Dec 20, 2022",
                    descriptions: "",
                    tags: "",
                    icon: "/media/projects/logos/fiish.png",
                },
                {
                    name: "jsonapi.io",
                    tld: "io",
                    expiration: "Apr 16, 2022",
                    descriptions: "",
                    tags: "",
                },
                {
                    name: "pooka.io",
                    tld: "io",
                    expiration: "Apr 29, 2022",
                    descriptions: "",
                    tags: "",
                },
                {
                    name: "collabb.co",
                    tld: "co",
                    expiration: "Jun 30, 2022",
                    descriptions: "",
                    tags: "",
                },
                {
                    name: "blouq.com",
                    tld: "com",
                    expiration: "Feb 7, 2023",
                    descriptions: "",
                    tags: "",
                },
                {
                    name: "perrform.com",
                    tld: "com",
                    expiration: "Jun 28, 2022",
                    descriptions: "",
                    tags: "",
                },
                {
                    name: "koil.io",
                    tld: "io",
                    expiration: "Apr 29, 2022",
                    descriptions: "",
                    tags: "",
                },
                {
                    name: "domainerrs.com",
                    tld: "com",
                    expiration: "Jun 11, 2022",
                    descriptions: "",
                    tags: "",
                },
                {
                    name: "bovine.io",
                    tld: "io",
                    expiration: "Apr 29, 2022",
                    descriptions: "",
                    icon: "/media/projects/logos/bovine.svg",
                    tags: "",
                },
                {
                    name: "10h.dev",
                    tld: "dev",
                    expiration: "08 Dec 2022",
                    descriptions: "",
                    icon: "/media/projects/logos/10hdev.png",
                    tags: "",
                },
                {
                    name: "bookidu.com",
                    tld: "com",
                    expiration: "Jun 28, 2022",
                    descriptions: "",
                    tags: "",
                    icon: "/media/projects/logos/books.svg",
                },

                {
                    name: "WildZinc.com",
                    tld: "com",
                    expiration: "28 Nov 2022",
                    descriptions: "",
                    tags: "",
                },
                {
                    name: "kalooma.com",
                    tld: "com",
                    expiration: "08 Dec 2022",
                    descriptions: "",
                    tags: "",
                },
                {
                    name: "kedoza.com",
                    tld: "com",
                    expiration: "29 Nov 2022",
                    descriptions: "",
                    tags: "",
                },
                {
                    name: "atiny.link",
                    tld: "link",
                    expiration: "Jun 21, 2022",
                    descriptions: "",
                    tags: "",
                },
                {
                    name: "oxzip.com",
                    tld: "com",
                    expiration: "",
                    descriptions: "",
                    tags: "",
                },

                {
                    name: "podello.com",
                    tld: "com",
                    expiration: "Jun 28, 2022",
                    descriptions: "",
                    tags: "",
                },
                {
                    name: "arcoina.com",
                    tld: "com",
                    expiration: "May 15, 2022",
                    descriptions: "",
                    tags: "",
                    icon: "/media/projects/logos/bitcoin.svg",
                },
                {
                    name: "hashifa.com",
                    tld: "com",
                    expiration: "May 19, 2022",
                    descriptions: "",
                    tags: "",
                    icon: "/media/projects/logos/bitcoin2.svg",
                },

                {
                    name: "tinyfu.com",
                    tld: "com",
                    expiration: "Apr 16, 2022",
                    descriptions: "",
                    tags: "",
                    icon: "/media/projects/logos/tinyfu.svg",
                    // viewLarge: true,
                },
                {
                    name: "miniwiki.org",
                    tld: "org",
                    expiration: "May 14, 2022",
                    descriptions: "",
                    tags: "",
                },
                {
                    name: "greatname.org",
                    tld: "org",
                    expiration: "Mar 12, 2022",
                    descriptions: "",
                    tags: "",
                },
                {
                    name: "hostanu.com",
                    tld: "com",
                    expiration: "May 24, 2022",
                    descriptions: "",
                    tags: "",
                },
                {
                    name: "hostia.co",
                    tld: "co",
                    expiration: "May 9, 2022",
                    descriptions: "",
                    tags: "",
                },

                {
                    name: "aminiti.com",
                    tld: "com",
                    expiration: "Jun 28, 2022",
                    descriptions: "",
                    tags: "",
                },
                {
                    name: "aipups.com",
                    tld: "com",
                    expiration: "Feb 9, 2023",
                    descriptions: "",
                    tags: "",
                },
                {
                    name: "doVending.com",
                    tld: "com",
                    expiration: "22 Aug 2022",
                    descriptions: "",
                    tags: "",
                },
                {
                    name: "PersonalMillion.com",
                    tld: "com",
                    expiration: "28 Jul 2022",
                    descriptions: "",
                    tags: "",
                    viewLarge: true,
                },
                {
                    name: "OneDayHosting.com",
                    tld: "com",
                    expiration: "03 Jul 2022",
                    descriptions: "",
                    tags: "",
                    viewLarge: true,
                },
                {
                    name: "7on.me",
                    tld: "me",
                    expiration: "08 Dec 2022",
                    descriptions: "",
                    tags: "",
                },
            ],
        };
    },
};
</script>

<style lang="postcss" scoped>
.listing {
    @apply grid max-w-5xl grid-cols-2 gap-3 mx-auto mt-8 mb-3 sm:gap-5 md:grid-cols-3 sm:mt-8;
}
.icon {
    @apply w-10 h-10 rounded sm:w-12 sm:h-12;
}
.item {
    @apply items-center justify-between block p-3 lg:p-5;
    @apply space-y-3 text-xl font-black text-center;
    @apply rounded-lg shadow border;
    @apply border-gray-300 dark:border-gray-700;
    @apply hover:border-gray-500;
    @apply place-self-center w-full;
}
.item.small {
    @apply md:text-2xl;
}
.item.large {
    @apply col-span-2 sm:col-span-1 md:text-2xl;
}

.active {
    @apply hover:bg-green-100;
}
.sold {
    @apply hover:bg-red-100;
}
/* @apply items-center justify-between block col-span-2 p-3 space-y-3 text-xl font-black text-center text-gray-400 bg-gray-100 border border-gray-200 rounded-lg shadow sm:col-span-1 md:text-2xl lg:p-5 hover:bg-red-100; */
/* @apply items-center justify-between block col-span-2 p-3 space-y-3 text-lg font-black text-center border border-gray-200 rounded-lg shadow sm:col-span-1 lg:text-2xl lg:p-5 hover:bg-green-100; */
</style>
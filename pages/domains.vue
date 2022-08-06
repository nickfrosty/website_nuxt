<template>
  <main class="space-y-5">
    <section class="mx-auto max-w-3xl text-lg text-center">
      <h1 class="mb-8 text-4xl font-bold">
        I have lots of domain names. <br class="sm:block hidden" />Want one?
        <br class="sm:hidden" />Let me know!
      </h1>

      <p class="mt-5">
        If one catches your eye, let me know:<br />
        <a class="link" href="mailto:nick@frostbutter.com"
          >nick@frostbutter.com</a
        >
        or
        <a class="link" href="https://twitter.com/nickfrosty">@nickfrosty</a>
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

    <section class="listing">
      <a
        :href="`https://dan.com/buy-domain/${domain.name}`"
        target="_blank"
        class="item"
        v-for="domain in domains"
        :key="domain.id"
        :class="true || domain.viewLarge ? 'large' : 'small'"
      >
        <div class="flex gap-3 items-center">
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
        {
          name: "todoo.app",
          tld: "app",
          expiration: "Jul 12, 2023",
          descriptions: "",
          tags: "todo, product, productivity, work, list, app, create",
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
          name: "unbly.com",
          tld: "com",
          expiration: "Jun 28, 2022",
          descriptions: "",
          // icon: '/media/projects/logos/upsle.svg',
          tags: "brand, marketing, social, twitter, brandable, believe, undo",
        },
        {
          name: "gema.dev",
          tld: "dev",
          expiration: "Mar 24, 2023",
          descriptions: "",
          tags: "gem, gems, ruby, code, dev, program, jems, jem, jema",
          icon: "/media/projects/logos/gema.svg",
          // viewLarge: true,
        },
        {
          name: "geni.dev",
          tld: "dev",
          expiration: "Mar 24, 2023",
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
          name: "tinymart.app",
          tld: "app",
          expiration: "Jun 28, 2023",
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
          name: "ting.so",
          tld: "so",
          expiration: "Oct 24, 2022",
          descriptions: "",
          tags: "",
        },
        {
          name: "toghl.com",
          tld: "com",
          expiration: "Jun 28, 2023",
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
          name: "backpanel.co",
          tld: "co",
          expiration: "Apr 30, 2022",
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
          name: "drivetrain.dev",
          tld: "dev",
          expiration: "Sep 22, 2022",
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
          expiration: "Apr 16, 2023",
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
          name: "10h.dev",
          tld: "dev",
          expiration: "08 Dec 2022",
          descriptions: "",
          icon: "/media/projects/logos/10hdev.png",
          tags: "",
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
          expiration: "Jun 21, 2023",
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
          name: "aipups.com",
          tld: "com",
          expiration: "Feb 9, 2023",
          descriptions: "",
          tags: "",
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
  @apply items-center justify-between block p-5 lg:p-5;
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

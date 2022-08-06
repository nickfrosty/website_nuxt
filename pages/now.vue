<template>
  <main class="mx-auto space-y-12 max-w-3xl text-lg">
    <div class="mx-auto space-y-8 max-w-xl">
      <div class="md:flex md:space-x-5 justify-center items-center mx-auto">
        <div class="flex justify-center items-center mx-auto space-x-5">
          <nuxt-link
            to="/now"
            class="w-30 h-30 block overflow-hidden flex-shrink-0 rounded-full border border-gray-600 shadow"
          >
            <img class="w-full h-full" src="/img/nick.jpg" />
          </nuxt-link>

          <nuxt-link to="/now" class="md:hidden text-6xl font-bold">
            <h1 class="">/now</h1>
          </nuxt-link>
        </div>

        <div class="space-y-3">
          <nuxt-link to="/now" class="md:block hidden text-6xl font-bold">
            <h1 class="">/now</h1>
          </nuxt-link>

          <p class="">
            Here are some low level snapshots of what I am working on now:
          </p>
        </div>
      </div>

      <p class="px-3 text-gray-600 border-l-4 border-indigo-600">
        PS: I am looking to start a new <b>full time</b> job in
        <b>Feb/Mar 2023</b>. Are you are hiring or looking for a developer?
        <br />
        <br class="md:hidden" />
        Let's chat:
        <a
          href="https://linkedin.com/in/nickfrostbutter"
          target="_blank"
          class="font-normal underline"
          >LinkedIn</a
        >
        |
        <a
          href="https://twitter.com/nickfrosty"
          target="_blank"
          class="font-normal underline"
          >Twitter</a
        >
      </p>
    </div>

    <section class="space-y-3" id="solana">
      <h2>
        <a
          href="#solana"
          class="hover:underline hover:text-hot-pink space-x-5 text-4xl font-bold cursor-pointer"
        >
          <span class="text-indigo-600">#</span>
          Solana Blockchain (Core Docs)
        </a>
      </h2>

      <p>
        As an <i>"external developer advocate"</i> for the Solana foundation, I
        am actively working on improving the official
        <a href="https://docs.solana.com" class="link" target="_blank"
          >Solana documentation</a
        >.
      </p>

      <p>
        Here is the
        <a
          class="link"
          target="_blank"
          href="https://github.com/solana-labs/solana/issues/26699"
          >Github issue</a
        >
        for the core docs restructure I am working on. I also recently had my
        first PR merged into the Solana repo!
      </p>
    </section>

    <section class="space-y-3" id="solfate">
      <h2>
        <a
          href="#solfate"
          class="hover:underline hover:text-hot-pink space-x-5 text-4xl font-bold cursor-pointer"
        >
          <span class="text-indigo-600">#</span>
          Solfate Labs
        </a>
      </h2>

      <p>
        <a href="https://solfate.com" target="_blank" class="link">Solfate</a>
        is the umbrella name that I am creating deverloper tools and
        informational resources on building on Solana. Currently:
      </p>

      <ul class="md:mx-10 mx-3 space-y-2 list-disc list-inside">
        <li class="">
          <a
            class="link font-semibold underline"
            target="_blank"
            href="https://solfate.com/cli"
            >Solfate CLI</a
          >
          <span>-</span>
          Publihsed the first version of the CLI that enables hot
          loading/building of Solana programs. Next, going to add auto words
        </li>
        <li class="">
          <a
            class="link font-semibold underline"
            target="_blank"
            href="https://solfate.com/extension"
            >Browser extension</a
          >
          <span>-</span>
          Just added a simple IPFS browser to this browser extension. Working on
          polishing the source code up to release it as open source and for the
          Solana SummerCamp hackathon.
        </li>
      </ul>
    </section>

    <section class="space-y-3" id="logdotfm">
      <h2>
        <a
          href="#logdotfm"
          class="hover:underline hover:text-hot-pink space-x-5 text-4xl font-bold cursor-pointer"
        >
          <span class="text-indigo-600">#</span>
          log.fm
        </a>
      </h2>

      <p>
        Building this podcast exploration app,
        <a href="https://log.fm.com" target="_blank" class="link">log.fm</a>, to
        help build the podcast exploration experience.
      </p>

      <p>
        Right now, I am finishing up the last of the re-write to swap from a
        NuxtJS(Vue) to a NextJS(React) base app.
      </p>
    </section>

    <section class="space-y-3" id="game">
      <h2>
        <a
          href="#game"
          class="hover:underline hover:text-hot-pink space-x-5 text-4xl font-bold cursor-pointer"
        >
          <span class="text-indigo-600">#</span>
          Some sort of game?
        </a>
      </h2>

      <p>
        Toying with the idea of building some sort of <i>"idle"</i> game using
        NFTs and blockchain. I have been thinking about this ALOT for all of
        this year. But now, I am finally starting to take this idea seriously.
        At least enough to write down and flush out my various thoughts.
      </p>
    </section>
  </main>
</template>

<script>
export default {
  head() {
    return this.$seo({
      title: "What I'm working on now",
      description:
        "I am always working on various projects. Here are some low level snapshots of what I am working on now.",
      openGraph: {
        image: {
          url: "https://frostbutter.com/media/now.jpg",
        },
      },
      twitter: {
        card: "summary_large_image",
        // url: '/',
        // title: '',
        description:
          "I am always working on various projects. Here are some low level snapshots of what I am working on now.",
      },
    });
  },
};
</script>

<style lang="postcss" scoped>
a.link {
  @apply font-semibold underline;
}
</style>

<template>
    <div class="mx-auto">
        <section class="block w-full my-10 space-y-12 text-center">
            <h1 class="text-5xl font-bold">
                <span class="">Well, this is embarassing...</span>
            </h1>

            <!-- <p class="text-2xl font-semibold md:mx-auto">
				Well, this is embarassing...
			</p> -->
            <!-- <p class="text-2xl font-semibold md:mx-auto">
				I cannot find the page<br /> you area looking for
			</p> -->

            <p class="text-2xl font-semibold md:mx-auto">
                You found a page that does not exist,
                <br />or I moved it or am hiding it from you. <br /><br />

                You probably shouldn't try to look for it, <br />
                just move on.
            </p>
        </section>
    </div>
</template>

<script>
export default {
    name: "error404",
    head: {
        title: "Page Not Found",
    },
    props: {
        error: {
            type: Object,
            default: () => {},
        },
    },
};
</script>

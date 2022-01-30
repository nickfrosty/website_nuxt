<template>
    <div class="">
        <!-- <p class="mt-8 text-lg font-medium">Building in public, sharing as I go →</p> -->
        <hr class="mb-12 md:hidden" />

        <div class="card">
            <p class="text-lg font-medium sm:text-lg">
                Building in public, sharing as I go →
            </p>
            <p class="text-center sm:mx-0 lg:text-left dark:text-gray-400">
                You can find more details about my
                <nuxt-link to="/newsletter" class="link">newsletter</nuxt-link>
                here.
            </p>

            <!-- <form
                method="POST"
                @submit.prevent="submit()"
                class="
                    mx-auto
                    mt-6
                    mb-12
                    text-base
                    md:mb-0 md:mt-10 md:max-w-xl
                "
            >
                <div
                    style="position: absolute; left: -5000px"
                    aria-hidden="true"
                >
                    <input
                        type="email"
                        v-model="form.extra"
                        name="hpc4b27b6e-eb38-11e9-be00-06b4694bee2a"
                        tabindex="-1"
                        autocomplete="nope"
                    />
                </div>
                <div
                    class="
                        justify-between
                        block
                        space-y-2
                        md:space-y-0 md:space-x-2 md:flex
                    "
                    v-if="!state.success"
                >
                    <input
                        type="email"
                        required
                        name="email"
                        v-model="form.email"
                        value=""
                        placeholder="Your best email..."
                        v-bind:disabled="state.loading"
                        class="input md:min-w-88"
                    />
                    <button
                        v-bind:disabled="state.loading"
                        :class="
                            state.success
                                ? 'bg-green-500 hover:bg-green-600'
                                : ''
                        "
                        class="
                            block
                            mx-auto
                            text-center
                            btn btn-purple
                            whitespace-nowrap
                        "
                    >
                        {{ buttonText }}
                    </button>
                </div>
                <transition
                    enter-active-class="transition duration-100 ease-out"
                    enter-class="transform scale-95 opacity-0"
                    enter-to-class="transform scale-100 opacity-100"
                    leave-active-class="transition duration-75 ease-in"
                    leave-class="transform scale-100 opacity-100"
                    leave-to-class="transform scale-95 opacity-0"
                >
                    <div
                        class="relative"
                        :class="state.success ? 'mt-10' : ''"
                        v-if="state.tooltip"
                    >
                        <div
                            :class="{
                                'bg-green-500': state.tooltipType === 'success',
                                'bg-blue-500': state.tooltipType === 'info',
                                'bg-yellow-500':
                                    state.tooltipType === 'warning',
                                'bg-red-500': state.tooltipType === 'error',
                            }"
                            class="
                                absolute
                                top-0
                                z-10
                                w-full
                                px-4
                                py-3
                                text-lg
                                font-bold
                                text-center text-white
                                transform
                                -translate-y-full
                                rounded-lg
                                shadow-lg
                                cursor-default
                            "
                        >
                            {{ state.tooltipText }}
                        </div>
                    </div>
                </transition>
            </form> -->

            <!-- <form
                @submit.prevent="submit"
                class="
                    items-center
                    justify-between
                    my-3
                    space-y-2
                    md:space-y-0 md:space-x-3 md:flex
                    validate
                "
                action="https://eocampaign1.com/form/166eac0e-6c10-11ec-96e5-06b4694bee2a"
                method="post"
            >
                <input
                    type="email"
                    class="w-full"
                    id="field_0"
                    name="field_0"
                    placeholder="Your best email address"
                    required="required"
                />
                <div
                    style="position: absolute; left: -5000px"
                    aria-hidden="true"
                >
                    <input
                        type="email"
                        name="hpc4b27b6e-eb38-11e9-be00-06b4694bee2a"
                        tabindex="-1"
                        autocomplete="nope"
                    />
                </div>
                <input
                    type="submit"
                    class="px-8 mx-auto text-center"
                    value="Follow along 💌"
                    name="subscribe"
                />
            </form> -->

            <script
                async
                src="https://eocampaign1.com/form/166eac0e-6c10-11ec-96e5-06b4694bee2a.js"
                data-form="166eac0e-6c10-11ec-96e5-06b4694bee2a"
            ></script>
            <!-- <form
                action="https://eocampaign1.com/form/166eac0e-6c10-11ec-96e5-06b4694bee2a"
                class="emailoctopus-form"
                _lpchecked="1"
            >
                <div class="main-form">
                    <div eo-form-fields-container="">
                        <div
                            class="emailoctopus-form-row form-group mb-2"
                            eo-block="form-row"
                            eo-label="Email address"
                        >
                            <input
                                id="field_0"
                                name="field_0"
                                type="email"
                                placeholder="Email address"
                                required="required"
                                class="form-control"
                            />
                        </div>
                    </div>
                    <input
                        type="submit"
                        class="btn w-100 btn-primary mb-2"
                        value="Follow along 💌"
                    />
                </div>
                <div aria-hidden="true" class="emailoctopus-form-row-hp">
                    <input
                        type="text"
                        name="hpc4b27b6e-eb38-11e9-be00-06b4694bee2a"
                        tabindex="-1"
                        autocomplete="nope"
                    />
                </div>
            </form> -->

            <p class="text-center sm:mx-0 dark:text-gray-400">
                PS: You can also follow on Twitter -
                <a
                    target="_blank"
                    class="link"
                    href="https://twitter.com/nickfrosty"
                    >@nickfrosty</a
                >
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        waitlistId: {
            type: Number,
            default: 0,
        },
        buttonText: {
            type: String,
            default: "Join",
        },
    },
    data() {
        return {
            /* Define the needed state data */
            state: {
                // custom state variables
                buttonText: this.buttonText,

                // default state variables
                tooltip: false,
                tooltipText: "",
                tooltipClass: "",
                loading: false,
                enabled: true,
                success: false,
            },

            /* Establish the form data fields */
            form: {
                extra: "",
                email: "",
            },
        };
    },
    methods: {
        /* Submit API call and process the response */
        async submit() {
            this.loading(true);

            try {
                const res = await this.$axios
                    .post(
                        "https://eocampaign1.com/form/166eac0e-6c10-11ec-96e5-06b4694bee2a",
                        {
                            "hpc4b27b6e-eb38-11e9-be00-06b4694bee2a":
                                form.extra,
                            field_0: form.email,
                        }
                    )
                    .then((res) => res.data)
                    .then((data) => {
                        console.log(data);

                        // validate a 'good' data response
                        if (data.success) {
                            this.successMsg(
                                "Thanks for joining my newsletter!"
                            );

                            // reset the form to the defaults
                            this.form.email = "";
                        } else
                            this.errorMsg(
                                data.error ||
                                    "Ohh noes! Something went wrong..."
                            );
                    })
                    .catch((err) => {
                        const res = err.response;
                        console.log(res);

                        if (res.data && res.data.error)
                            this.errorMsg(res.data.error);
                        else this.errorMsg("Unable to join list");
                    });
            } catch (err) {
                this.errorMsg("An error occured");
            }

            // escape from the loading state
            this.loading(false);
        },

        /* Establish the loading states */
        loading(status) {
            if (status) {
                this.state.loading = true;
                // this.$NProgress.start();
            } else {
                // this.$NProgress.done();
                this.state.loading = false;
            }
        },

        /* Format and display SUCCESS messages to the user */
        successMsg(text) {
            this.state.success = true;
            this.state.tooltipText = text;
            this.state.tooltipType = "success";
            this.state.tooltip = true;
            //setTimeout(() => { this.state.tooltip = false; }, 2000);
        },
        /* Format and display ERROR messages to the user */
        errorMsg(text) {
            this.state.tooltipText = text;
            this.state.tooltipType = "error";
            this.state.tooltip = true;
            setTimeout(() => {
                this.state.tooltip = false;
            }, 2000);
        },
    },
};
</script>

<style lang="postcss" scoped>
.emailoctopus-success-message {
    @apply dark:text-gray-400;
}
.card {
    @apply max-w-xl mx-auto;
    @apply border-0 md:border md:border-indigo-200;
    @apply md:dark:border-indigo-500 md:shadow;
    @apply md:hover:-top-2 md:hover:shadow-lg;
    @apply px-1 py-2 md:px-8 md:py-6;
}
</style>
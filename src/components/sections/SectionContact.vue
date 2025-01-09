<script setup>
import ItemObserver from '@/components/items/ItemObserver.vue';
</script>

<template>
    <section id="contact" class="pb-10 pt-8 xl:pb-16 xl:pt-12">
        <h2 class="text-center text-h1 font-light uppercase">Contact</h2>
        <ItemObserver v-slot="{ isVisible }">
            <div class="container" :class="isVisible ? 'fade-in-down' : 'invisible'">
                <form
                    class="mt-10 grid gap-y-4 sm:grid-cols-[23.75rem] sm:justify-center xl:mt-16 xl:grid-cols-[repeat(2,_19.375rem)] xl:gap-x-4"
                    action=""
                >
                    <div class="col-span-2 xl:col-span-1 xl:col-start-1">
                        <label class="sr-only" for="name"> Your name</label>
                        <input
                            class="w-full rounded-common border-2 border-transparent bg-primary-common px-5 py-4 outline-transparent transition-all duration-300 placeholder:text-muted-text focus:border-border-primary focus:outline"
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div class="col-span-2 xl:col-span-1 xl:col-start-2">
                        <label class="sr-only" for="email"> Your email </label>
                        <input
                            id="email"
                            class="w-full rounded-common border-2 border-transparent bg-primary-common px-5 py-4 outline-transparent transition-all duration-300 placeholder:text-muted-text focus:border-border-primary focus:outline"
                            type="email"
                            name="email"
                            placeholder="Email *"
                            required
                        />
                    </div>
                    <div class="col-span-2">
                        <label class="sr-only" for="msg">Enter your message</label>
                        <textarea
                            id="msg"
                            class="min-h-[240px] w-full resize-none rounded-3xl border-2 border-transparent bg-primary-common p-5 text-primary-text outline-transparent transition-all duration-300 placeholder:text-muted-text focus:border-border-primary focus:outline"
                            name="message"
                            placeholder="Enter Your Message"
                            required
                        />
                    </div>
                    <div
                        class="col-span-2 mx-auto w-full max-w-full xl:row-start-3 xl:max-w-[225px]"
                    >
                        <button
                            class="mt-5 w-full rounded-full bg-primary-accent py-4 text-center text-primary-text transition-colors duration-400 hover:bg-primary-accent/90"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </ItemObserver>
    </section>
</template>

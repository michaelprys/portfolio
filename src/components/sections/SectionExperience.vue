<script setup>
import BaseObserver from '@/components/base/BaseObserver.vue';
</script>

<template>
    <section id="experience" class="pb-12 pt-8 xl:pb-16 xl:pt-12">
        <BaseObserver v-slot="{ isVisible }">
            <h2
                class="text-center text-h1 font-light uppercase"
                :class="isVisible ? 'fade-in-primary' : 'invisible'">
                Experience
            </h2>

            <div class="container" :class="isVisible ? 'fade-in-down' : 'invisible'">
                <div
                    class="mt-10 grid justify-center gap-y-12 sm:grid-cols-[23.75rem] md:grid-cols-[20rem_23.75rem] md:items-center md:gap-x-12 xl:mt-16 xl:grid-cols-[21.875rem_31.875rem] xl:gap-x-24">
                    <h3 class="text-h2">Frontend Developer</h3>

                    <div class="rounded-common bg-primary-common p-8 shadow-xl">
                        <span class="block text-h3 font-bold">2+ Years of Development</span>
                        <span class="mt-1 block text-sm text-muted-text">
                            Vue 3 Ecosystem & TypeScript
                        </span>
                        <ul class="mt-4 list-disc pl-5 text-muted-text space-y-1">
                            <li>
                                Building functional applications with
                                <b>Vue 3, Pinia, and Quasar</b>
                            </li>
                            <li>
                                Developing maintainable systems using
                                <b>TypeScript</b>
                            </li>
                            <li>
                                Integrating
                                <b>External APIs</b>
                                for dynamic data flow
                            </li>
                            <li>Implementing modern web standards and responsive design</li>
                        </ul>
                    </div>

                    <h3 class="text-h2">Digital Media Producer</h3>

                    <div class="rounded-common bg-primary-common p-8 shadow-xl">
                        <span class="block text-h3 font-bold">9 Years of Experience</span>
                        <span class="mt-1 block text-sm text-muted-text">
                            Digital Media Production
                        </span>
                        <ul class="mt-4 list-disc pl-5 text-muted-text space-y-1">
                            <li>
                                Focused on transforming creative visions into high-quality digital
                                products.
                            </li>
                            <li>
                                Managed the full project lifecycle from concept to final market
                                launch.
                            </li>
                            <li>Navigated complex ecosystems to meet professional standards.</li>
                            <li>Worked autonomously to deliver clear, measurable results.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </BaseObserver>
    </section>
</template>

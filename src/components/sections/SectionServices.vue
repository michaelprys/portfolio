<script setup>
import IconCode from '@/components/icons/IconCode.vue';
import IconGear from '@/components/icons/IconGear.vue';
import IconLock from '@/components/icons/IconLock.vue';
import IconRocket from '@/components/icons/IconRocket.vue';
import ItemObserver from '@/components/items/ItemObserver.vue';
</script>

<template>
    <section id="services" class="pb-12 pt-8 xl:pb-16 xl:pt-12">
        <h2 class="text-center text-h1 font-light uppercase">Services</h2>
        <div class="container">
            <ItemObserver v-slot="{ isVisible }">
                <ul
                    class="mt-10 grid grid-cols-1 justify-center gap-6 *:cursor-pointer *:rounded-common *:bg-primary-common *:p-6 *:shadow-xl *:transition-none *:duration-300 *:will-change-contents sm:grid-cols-[23.75rem] md:grid-cols-[repeat(2,_21.875rem)] lg:*:transition-transform xl:mt-16 xl:grid-cols-[repeat(4,_16.75rem)]"
                >
                    <li class="group" :class="isVisible ? 'fade-in-down' : 'invisible'">
                        <div class="relative *:transition-transform *:duration-400">
                            <div
                                class="ml-2 size-12 rounded-full bg-primary-accent group-hover:-translate-y-1 group-hover:translate-x-1 xl:size-14"
                            />
                            <IconCode
                                class="absolute -bottom-2 left-0 size-9 *:fill-primary-text xl:-bottom-3 xl:size-11"
                            />
                        </div>

                        <h2 class="mt-8 text-h3 font-bold">Responsive & Accessible UI</h2>
                        <p class="mt-3 text-muted-text">
                            Creating responsive and accessible interfaces using intrinsic design,
                            relative units and semantic HTML.
                        </p>
                    </li>
                    <li class="group" :class="isVisible ? 'fade-in-down' : 'invisible'">
                        <div class="relative *:transition-transform *:duration-400">
                            <div
                                class="ml-2 size-12 rounded-full bg-primary-accent group-hover:-translate-y-1 group-hover:translate-x-1 xl:size-14"
                            />
                            <IconRocket
                                class="absolute -bottom-2 left-0 size-9 *:fill-primary-text xl:-bottom-3 xl:size-11"
                            />
                        </div>

                        <h2 class="mt-8 text-h3 font-bold">Performance & Optimization</h2>
                        <p class="mt-3 text-muted-text">
                            Leveraging load optimization practices and modern asset formats to
                            improve the performance.
                        </p>
                    </li>
                    <li class="group" :class="isVisible ? 'fade-in-down' : 'invisible'">
                        <div class="relative *:transition-transform *:duration-400">
                            <div
                                class="ml-2 size-12 rounded-full bg-primary-accent group-hover:-translate-y-1 group-hover:translate-x-1 xl:size-14"
                            />
                            <IconGear
                                class="absolute -bottom-2 left-0 size-9 *:fill-primary-text xl:-bottom-3 xl:size-11"
                            />
                        </div>

                        <h2 class="mt-8 text-h3 font-bold">API & State Management</h2>
                        <p class="mt-3 text-muted-text">
                            Integrating APIs and managing state with composables or Pinia for
                            reliable data handling.
                        </p>
                    </li>
                    <li class="group" :class="isVisible ? 'fade-in-down' : 'invisible'">
                        <div class="relative *:transition-transform *:duration-400">
                            <div
                                class="ml-2 size-12 rounded-full bg-primary-accent group-hover:-translate-y-1 group-hover:translate-x-1 xl:size-14"
                            />
                            <IconLock
                                class="absolute -bottom-2 left-0 size-9 *:fill-primary-text xl:-bottom-3 xl:size-12"
                            />
                        </div>

                        <h2 class="mt-8 text-h3 font-bold">Authentication & Validation</h2>
                        <p class="mt-3 text-muted-text">
                            Using session-based authentication and tools such as Valibot for
                            accurate data validation.
                        </p>
                    </li>
                </ul>
            </ItemObserver>
        </div>
    </section>
</template>

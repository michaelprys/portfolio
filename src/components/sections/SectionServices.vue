<script setup>
import IconCode from '@/components/icons/IconCode.vue';
import IconGear from '@/components/icons/IconGear.vue';
import IconRocket from '@/components/icons/IconRocket.vue';
import BaseObserver from '@/components/base/BaseObserver.vue';
import { useTheme } from '@/composables/useTheme.js';
import { computed } from 'vue';

const { getTheme, currentTheme } = useTheme();

const theme = computed(() => getTheme(currentTheme.value));
</script>

<template>
    <section id="services" class="pb-12 pt-8 xl:pb-16 xl:pt-12">
        <BaseObserver v-slot="{ isVisible }">
            <h2
                class="text-center text-h1 font-light uppercase"
                :class="isVisible ? 'fade-in-primary' : 'invisible'">
                Services
            </h2>
            <div class="container">
                <ul
                    class="mt-10 grid grid-cols-1 justify-center gap-6 *:cursor-pointer *:rounded-common *:bg-primary-common *:p-6 *:shadow-xl *:transition-none *:duration-300 *:will-change-contents sm:grid-cols-[380px] md:grid-cols-[repeat(1,350px)] lg:*:transition-transform xl:mt-16 xl:grid-cols-[repeat(3,350px)]">
                    <li class="group" :class="isVisible ? 'fade-in-down' : 'invisible'">
                        <div class="relative *:transition-transform *:duration-400">
                            <div
                                class="ml-2 size-12 rounded-full group-hover:-translate-y-1 group-hover:translate-x-1 xl:size-14"
                                :class="
                                    currentTheme === 'theme-mora' || theme?.variant === 'dark'
                                        ? 'bg-primary-accent'
                                        : 'bg-secondary-accent'
                                " />
                            <IconCode
                                class="absolute -bottom-2 left-0 size-9 *:fill-primary-text xl:-bottom-3 xl:size-11" />
                        </div>
                        <h2 class="mt-8 text-h3 font-bold">Intelligent Features</h2>
                        <p class="mt-3 text-muted-text">
                            Integrating AI features via Hugging Face Inference API and
                            location-based services.
                        </p>
                    </li>

                    <li class="group" :class="isVisible ? 'fade-in-down' : 'invisible'">
                        <div class="relative *:transition-transform *:duration-400">
                            <div
                                class="ml-2 size-12 rounded-full bg-primary-accent group-hover:-translate-y-1 group-hover:translate-x-1 xl:size-14"
                                :class="
                                    currentTheme === 'theme-mora' || theme?.variant === 'dark'
                                        ? 'bg-primary-accent'
                                        : 'bg-secondary-accent'
                                " />
                            <IconRocket
                                class="absolute -bottom-2 left-0 size-9 *:fill-primary-text xl:-bottom-3 xl:size-11" />
                        </div>
                        <h2 class="mt-8 text-h3 font-bold">Dynamic Layouts & UX</h2>
                        <p class="mt-3 text-muted-text">
                            Optimizing perceived performance with skeleton loaders, efficient state
                            handling, and smooth layouts.
                        </p>
                    </li>

                    <li class="group" :class="isVisible ? 'fade-in-down' : 'invisible'">
                        <div class="relative *:transition-transform *:duration-400">
                            <div
                                class="ml-2 size-12 rounded-full bg-primary-accent group-hover:-translate-y-1 group-hover:translate-x-1 xl:size-14"
                                :class="
                                    currentTheme === 'theme-mora' || theme?.variant === 'dark'
                                        ? 'bg-primary-accent'
                                        : 'bg-secondary-accent'
                                " />
                            <IconGear
                                class="absolute -bottom-2 left-0 size-9 *:fill-primary-text xl:-bottom-3 xl:size-11" />
                        </div>
                        <h2 class="mt-8 text-h3 font-bold">Solid App Foundation</h2>
                        <p class="mt-3 text-muted-text">
                            Building solid SPAs with structured state management, secure routing,
                            and scalable component logic.
                        </p>
                    </li>
                </ul>
            </div>
        </BaseObserver>
    </section>
</template>

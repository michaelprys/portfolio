<script setup>
import BaseObserver from '@/components/base/BaseObserver.vue';
import IconCopyright from '@/components/icons/IconCopyright.vue';
import IconGithub from '@/components/icons/IconGithub.vue';
import IconLinkedin from '@/components/icons/IconLinkedin.vue';

const currentDate = new Date().getFullYear();
</script>

<template>
    <BaseObserver v-slot="{ isVisible }">
        <footer
            class="pb-32 pt-10 xl:pt-12 xxl:pb-12"
            :class="isVisible ? 'fade-in-primary' : 'invisible'">
            <div class="container xl:max-w-screen-xl">
                <div
                    class="grid items-center justify-center gap-8 md:grid-cols-[repeat(2,max-content)] md:justify-between md:gap-10">
                    <div class="flex flex-col items-center gap-6 md:flex-row md:gap-18">
                        <a
                            class="font-secondary text-[2.5rem] leading-none"
                            href="#"
                            aria-label="Prysiazhnyi logo, go to the home section">
                            Prysiazhnyi
                        </a>
                        <ul class="flex items-center gap-12">
                            <li
                                class="text-primary-text transition-all duration-400 hover:text-primary-text/60">
                                <a href="#home" aria-label="Go to the home section">Home</a>
                            </li>
                            <li
                                class="text-primary-text transition-all duration-400 hover:text-primary-text/60">
                                <a href="#projects" aria-label="Go to the projects section">
                                    Projects
                                </a>
                            </li>
                            <li
                                class="text-primary-text transition-all duration-400 hover:text-primary-text/60">
                                <a href="#services" aria-label="Go to the services section">
                                    Services
                                </a>
                            </li>
                        </ul>
                    </div>
                    <ul class="mx-auto flex items-center gap-6">
                        <li class="transition-transform hover:scale-125">
                            <a
                                class="rounded-full"
                                href="https://www.linkedin.com/in/prysiazhnyi-dev"
                                target="_blank"
                                aria-label="Linkedin profile">
                                <IconLinkedin
                                    color="fill-button-text"
                                    class="size-10 rounded-full bg-primary-accent object-cover p-2" />
                            </a>
                        </li>
                        <li class="transition-transform hover:scale-125">
                            <a
                                class="rounded-full"
                                href="https://github.com/michaelprys"
                                target="_blank"
                                aria-label="Github profile">
                                <IconGithub
                                    color="fill-button-text"
                                    class="size-10 rounded-full bg-primary-accent object-cover p-2" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="mt-20 flex flex-col items-center justify-center xl:mt-28">
                    <p class="mt-8 text-center text-sm text-primary-text opacity-60">
                        Made with
                        <span class="font-bold">Vue.js</span>
                        and
                        <span class="font-bold">Tailwind CSS</span>
                    </p>
                    <span
                        class="mx-auto mt-5 inline-flex items-center justify-center gap-2 leading-none text-primary-text opacity-60 transition-all duration-400 hover:opacity-100 xl:mt-8">
                        <IconCopyright />
                        {{ currentDate }} All Rights Reserved
                    </span>
                </div>
            </div>
        </footer>
    </BaseObserver>
</template>

<script setup>
import IconGithub from '@/components/icons/IconGithub.vue';
import IconLinkedin from '@/components/icons/IconLinkedin.vue';
import IconStackoverflow from '@/components/icons/IconStackoverflow.vue';
import BaseIcon from '@/components/base/BaseIcon.vue';
import { computed, onMounted, ref } from 'vue';
import { useTheme } from '@/composables/useTheme.js';

const { getTheme, currentTheme } = useTheme();

const theme = computed(() => getTheme(currentTheme.value));

const icons = [
    { name: 'Vue 3', url: 'https://vuejs.org' },
    { name: 'Quasar', url: 'https://quasar.dev' },
    { name: 'TypeScript', url: 'https://www.typescriptlang.org' },
    { name: 'Pinia', url: 'https://pinia.vuejs.org' },
    { name: 'Supabase', url: 'https://supabase.com' },
    { name: 'Sass', url: 'https://sass-lang.com' },
    { name: 'Tailwind', url: 'https://tailwindcss.com' },
    { name: 'Figma', url: 'https://www.figma.com' },
];

const show = ref(false);

const socialLinks = [
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/prysiazhnyi-dev',
        icon: IconLinkedin,
    },
    {
        name: 'github',
        url: 'https://github.com/michaelprys',
        icon: IconGithub,
    },
    {
        name: 'stackoverflow',
        url: 'https://stackoverflow.com/users/20343913',
        icon: IconStackoverflow,
    },
];

const cvUrl = import.meta.env.VITE_CV_URL;

onMounted(() => {
    show.value = true;
});
</script>

<template>
    <section id="home" class="pb-16 pt-8 xl:pt-12">
        <h1 class="sr-only">Introduction</h1>
        <div class="container">
            <div
                class="grid grid-cols-1 items-stretch justify-center gap-6 sm:grid-cols-[23.75rem] md:grid-cols-[repeat(2,21.875rem)] md:grid-rows-[27.9375rem_15.9375rem_23.625rem] xl:grid-cols-[17.5rem_35rem_17.5rem] xl:grid-rows-none">
                <section
                    class="info row-start-2 rounded-common bg-primary-common px-6 py-8 md:col-start-2 md:row-start-1 xl:col-start-1">
                    <h2 class="sr-only">Info</h2>
                    <div class="flex h-full flex-col justify-between">
                        <div class="flex flex-col items-center gap-3">
                            <div class="mx-auto -mt-2 flex h-12 items-center gap-2">
                                <span class="size-8 shrink-0 rounded-full bg-primary-accent" />

                                <span class="block font-secondary text-4xl ml-2 mr-7 md:hidden">
                                    Prysiazhnyi
                                </span>
                                <div
                                    class="hidden md:block relative mix-blend-exclusion overflow-hidden contrast-150">
                                    <video
                                        class="object-contain"
                                        playsinline
                                        autoplay
                                        muted
                                        disablePictureInPicture="true"
                                        disableRemotePlayback="true"
                                        width="144"
                                        height="79"
                                        aria-hidden="true">
                                        <source src="/videos/handwriting.mp4" type="video/mp4" />
                                    </video>
                                </div>
                            </div>

                            <div class="-mt-3">
                                <p class="text-body mt-3 xl:mt-2">
                                    Developing web applications using Vue 3 and TypeScript. I
                                    prioritize creating responsive interfaces that are user-focused
                                    and work consistently across all platforms and devices.
                                </p>
                                <p class="text-body mt-3.5">
                                    I value organized code and practical design, keeping the product
                                    stable, easy to navigate, and simple to maintain.
                                </p>
                            </div>
                        </div>
                        <a
                            class="rounded-max mt-6 w-full rounded-common bg-secondary-accent py-4 text-center transition-colors duration-400 hover:bg-primary-accent hover:text-white"
                            :class="
                                currentTheme === 'theme-mora'
                                    ? 'text-secondary-common'
                                    : 'text-white'
                            "
                            :href="cvUrl"
                            target="_blank">
                            View CV
                        </a>
                    </div>
                </section>

                <section
                    class="tech row-start-5 grid gap-6 rounded-common bg-primary-common px-6 py-8 md:col-start-2 md:row-start-2 xl:col-start-1">
                    <h2 class="text-h3 font-bold">Tech & Tools</h2>
                    <ul class="grid grid-cols-fit-icon items-center gap-4 *:will-change-contents">
                        <li
                            v-for="icon in icons"
                            :key="icon.name"
                            class="group transition-transform hover:scale-125">
                            <BaseIcon :name="icon.name" :url="icon.url" />
                        </li>
                    </ul>
                    <p class="text-sm">
                        Visit the
                        <a
                            class="underline underline-offset-4 transition-colors duration-400 hover:text-primary-text/75"
                            href="#projects"
                            aria-label="View latest projects">
                            #projects
                        </a>
                        section to see the works created with these technologies.
                    </p>
                </section>

                <figure
                    class="profile relative col-start-1 row-start-1 grid grid-rows-[21rem] overflow-hidden rounded-common sm:grid-rows-[17rem] md:grid-rows-none xl:col-start-2 xl:row-span-2">
                    <img
                        class="absolute left-0 top-0 row-span-2 size-full overflow-hidden rounded-common object-cover"
                        src="/images/home/profile.webp"
                        width="1243"
                        height="1710"
                        alt="Profile photo" />
                    <div
                        class="row-start-2 m-4 self-end rounded-common border-2 border-white/50 bg-[#030303]/10 p-6 backdrop-blur-sm xl:m-8 xl:max-w-92.5"
                        style="box-shadow: inset 0 0 0 200px rgba(255, 255, 255, 0.08)">
                        <h2 class="text-[1.625rem] font-light text-primary-common xl:text-[2rem]">
                            Mykhailo
                            <br />
                            Prysiazhnyi
                        </h2>

                        <div class="mt-5 flex gap-2 *:w-full *:rounded-common *:py-3.5">
                            <a
                                class="rounded-max bg-primary-accent text-center leading-none transition-colors duration-400 hover:opacity-90"
                                :class="
                                    currentTheme === 'theme-mora'
                                        ? 'text-secondary-common'
                                        : 'text-white'
                                "
                                href="#projects"
                                aria-label="Go to latest projects section">
                                Projects
                            </a>
                            <a
                                class="rounded-max bg-secondary-accent text-center leading-none transition-colors duration-400 hover:bg-primary-accent hover:text-white"
                                :class="
                                    currentTheme === 'theme-mora'
                                        ? 'text-secondary-common'
                                        : 'text-white'
                                "
                                href="#services"
                                aria-label="Go to services section">
                                Services
                            </a>
                        </div>
                    </div>
                </figure>

                <section
                    class="about col-start-1 row-span-2 grid content-center rounded-common bg-primary-common px-6 py-8 xl:col-start-3 xl:row-span-2">
                    <h2 class="sr-only">About</h2>
                    <span>
                        Mykhailo Prysiazhnyi -
                        <span class="font-bold">Frontend Developer</span>
                    </span>
                    <p class="mt-4 leading-relaxed max-w-60">
                        Building stable, clean, and intuitive web applications.
                    </p>
                    <ul class="mt-8 flex items-center justify-center gap-6">
                        <li
                            v-for="link in socialLinks"
                            :key="link.name"
                            class="transition-transform hover:scale-125">
                            <a
                                class="rounded-full"
                                :href="link.url"
                                target="_blank"
                                aria-label="Linkedin profile">
                                <component
                                    :is="link.icon"
                                    class="rounded-max size-10 rounded-full bg-primary-text object-cover p-2 *:fill-primary-common"
                                    :aria-label="`${link.name} profile`" />
                            </a>
                        </li>
                    </ul>
                    <div class="flex h-35 items-center justify-center overflow-hidden">
                        <div
                            class="mx-auto mt-2 h-52.5 w-58 bg-[url('/images/home/texture.webp')] bg-size-[45rem] bg-center bg-no-repeat mix-blend-color-dodge blur-[.5008px] brightness-90"
                            :class="{
                                'mix-blend-multiply invert opacity-70': theme?.variant === 'light',
                            }" />
                    </div>

                    <p class="mt-4 text-sm">
                        Feel free to use the contact form below or email me at
                        <span class="block font-bold">prysiazhnyi.dev@gmail.com</span>
                        and I will respond promptly.
                    </p>
                    <a
                        class="rounded-max mt-8 block w-full rounded-full bg-primary-accent py-4 text-center transition-colors duration-400 hover:bg-primary-accent/90"
                        :class="
                            currentTheme === 'theme-mora' ? 'text-secondary-common' : 'text-white'
                        "
                        href="#contact"
                        aria-label="Go to the contact form">
                        Contact Me
                    </a>
                </section>
            </div>
        </div>
    </section>
</template>

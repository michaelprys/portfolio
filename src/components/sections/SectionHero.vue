<script setup>
import IconGithub from '@/components/icons/IconGithub.vue';
import IconLinkedin from '@/components/icons/IconLinkedin.vue';
import IconStackoverflow from '@/components/icons/IconStackoverflow.vue';
import BaseIcon from '@/components/base/BaseIcon.vue';
import { onMounted, ref } from 'vue';

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
        url: 'https://www.linkedin.com/',
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
                                <span class="size-8 rounded-full bg-primary-accent" />
                                <video
                                    class="object-contain mix-blend-screen contrast-150"
                                    disablePictureInPicture="true"
                                    disableRemotePlayback="true"
                                    controlslist="nodownload nofullscreen noremoteplayback"
                                    width="144"
                                    height="79"
                                    autoplay
                                    muted
                                    aria-hidden="true">
                                    <source src="/assets/videos/handwriting.mp4" type="video/mp4" />
                                </video>
                            </div>
                            <div class="-mt-3">
                                <p class="text-body mt-3 xl:mt-2">
                                    Building web applications with Vue 3 and TypeScript. I focus on
                                    creating responsive interfaces that are intuitive, smooth, and
                                    effortless to navigate across all platforms and devices.
                                </p>
                                <p class="text-body mt-3.5">
                                    By prioritizing balanced design and subtle details, I refine the
                                    user experience to make every interaction feel fluid and
                                    polished.
                                </p>
                            </div>
                        </div>
                        <a
                            class="rounded-max mt-6 w-full rounded-common bg-secondary-accent py-4 text-center text-secondary-common transition-colors duration-400 hover:bg-primary-accent hover:text-primary-text"
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
                        src="/assets/images/home/profile.webp"
                        width="1243"
                        height="1710"
                        alt="Profile photo" />
                    <div
                        class="row-start-2 m-4 self-end rounded-common border-2 border-white/50 bg-[#030303]/10 p-6 backdrop-blur-[.5rem] xl:m-8 xl:max-w-[23.125rem]"
                        style="box-shadow: inset 0 0 0 200px rgba(255, 255, 255, 0.08)">
                        <h2 class="text-[1.625rem] font-light text-primary-common xl:text-[2rem]">
                            Mykhailo
                            <br />
                            Prysiazhnyi
                        </h2>

                        <div class="mt-5 flex gap-2 *:w-full *:rounded-common *:py-3.5">
                            <a
                                class="rounded-max bg-primary-accent text-center leading-none text-primary-text transition-colors duration-400 hover:bg-primary-accent/90"
                                href="#projects"
                                aria-label="Go to latest projects section">
                                Projects
                            </a>
                            <a
                                class="rounded-max bg-secondary-accent text-center leading-none text-primary-common transition-colors duration-400 hover:bg-primary-accent hover:text-primary-text"
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
                        <span class="font-bold">Web Developer</span>
                    </span>
                    <p class="mt-4">
                        I develop web applications, constantly improving my skills through practice.
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
                                    class="rounded-max size-10 rounded-full bg-primary-text object-cover p-2"
                                    aria-label="`${link.name} profile`" />
                            </a>
                        </li>
                    </ul>
                    <div class="flex h-[8.75rem] items-center justify-center overflow-hidden">
                        <div
                            class="mx-auto mt-2 h-[13.125rem] w-[14.5rem] bg-[url('/assets/images/home/texture.webp')] bg-[length:45rem] bg-center bg-no-repeat mix-blend-color-dodge blur-[.5008px] brightness-[90%]" />
                    </div>
                    <p class="mt-4 text-sm">
                        Feel free to use the contact form below or email me at
                        <span class="block font-bold">prysiazhnyi.dev@gmail.com</span>
                        and I will respond promptly.
                    </p>
                    <a
                        class="rounded-max mt-8 block w-full rounded-full bg-primary-accent py-4 text-center text-primary-text transition-colors duration-400 hover:bg-primary-accent/90"
                        href="#contact"
                        aria-label="Go to the contact form">
                        Contact Me
                    </a>
                </section>
            </div>
        </div>
    </section>
</template>

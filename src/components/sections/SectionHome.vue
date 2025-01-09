<script setup>
import IconFigma from '@/components/icons/IconFigma.vue';
import IconGit from '@/components/icons/IconGit.vue';
import IconGithub from '@/components/icons/IconGithub.vue';
import IconLinkedin from '@/components/icons/IconLinkedin.vue';
import IconNuxt from '@/components/icons/IconNuxt.vue';
import IconPostgres from '@/components/icons/IconPostgres.vue';
import IconSass from '@/components/icons/IconSass.vue';
import IconShadcn from '@/components/icons/IconShadcn.vue';
import IconStackoverflow from '@/components/icons/IconStackoverflow.vue';
import IconTailwind from '@/components/icons/IconTailwind.vue';
import IconTypeScript from '@/components/icons/IconTypeScript.vue';
import IconValibot from '@/components/icons/IconValibot.vue';
import IconVue from '@/components/icons/IconVue.vue';
import ItemTooltip from '@/components/items/ItemTooltip.vue';
import { onMounted, ref } from 'vue';

const show = ref(false);

onMounted(() => {
    show.value = true;
});
</script>

<template>
    <section id="home" class="pb-16 pt-8 xl:pt-12">
        <h1 class="sr-only">Introduction</h1>
        <div class="container">
            <div
                class="grid grid-cols-1 items-stretch justify-center gap-6 sm:grid-cols-[23.75rem] md:grid-cols-[repeat(2,_21.875rem)] md:grid-rows-[27.9375rem_15.9375rem_23.625rem] xl:grid-cols-[17.5rem_35rem_17.5rem] xl:grid-rows-none"
            >
                <section
                    class="info row-start-2 rounded-common bg-primary-common px-6 py-8 md:col-start-2 md:row-start-1 xl:col-start-1"
                >
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
                                    aria-hidden="true"
                                >
                                    <source
                                        src="@/assets/videos/handwriting.mp4"
                                        type="video/mp4"
                                    />
                                </video>
                            </div>
                            <div class="-mt-3">
                                <p class="text-body mt-3 xl:mt-2">
                                    Developing high-performing web applications powered by modern
                                    technologies. Experienced with Nuxt.js, Vue.js, TypeScript, HTML
                                    and CSS.
                                </p>
                                <p class="text-body mt-3.5">
                                    I focus on writing lean and maintainable code, as well as
                                    choosing solutions that would simplify everyday tasks.
                                </p>
                            </div>
                        </div>
                        <a
                            class="rounded-max mt-6 w-full rounded-common bg-secondary-accent py-4 text-center text-secondary-common transition-colors duration-400 hover:bg-primary-accent hover:text-primary-text"
                            href="https://drive.google.com/file/d/1QqW8lMEr9nvzF3a_OUnPP30FZS1ZZG-i/view?usp=sharing"
                            target="_blank"
                        >
                            View CV
                        </a>
                    </div>
                </section>

                <section
                    class="tech row-start-5 grid gap-6 rounded-common bg-primary-common px-6 py-8 md:col-start-2 md:row-start-2 xl:col-start-1"
                >
                    <h2 class="text-h3 font-bold">Tech & Tools</h2>
                    <ul class="grid grid-cols-fit-icon items-center gap-4 *:will-change-contents">
                        <li class="group transition-transform hover:scale-125">
                            <ItemTooltip
                                class="opacity-0 group-hover:opacity-100 group-hover:delay-500"
                                aria-hidden="true"
                            >
                                Nuxt.js
                            </ItemTooltip>
                            <a
                                href="https://nuxt.com"
                                target="_blank"
                                aria-label="Nuxt.js meta-framework"
                            >
                                <IconNuxt />
                            </a>
                        </li>
                        <li class="group transition-transform hover:scale-125">
                            <ItemTooltip
                                class="opacity-0 group-hover:opacity-100 group-hover:delay-500"
                                aria-hidden="true"
                            >
                                Vue.js
                            </ItemTooltip>
                            <a
                                href="https://vuejs.org"
                                target="_blank"
                                aria-label="Vue.js framework"
                            >
                                <IconVue />
                            </a>
                        </li>
                        <li class="group transition-transform hover:scale-125">
                            <ItemTooltip
                                class="opacity-0 group-hover:opacity-100 group-hover:delay-500"
                            >
                                TypeScript
                            </ItemTooltip>
                            <a
                                href="https://www.typescriptlang.org"
                                target="_blank"
                                aria-label="Typescript language"
                            >
                                <IconTypeScript />
                            </a>
                        </li>
                        <li class="group transition-transform hover:scale-125">
                            <ItemTooltip
                                class="opacity-0 group-hover:opacity-100 group-hover:delay-500"
                            >
                                Shadcn
                            </ItemTooltip>
                            <a
                                href="https://ui.shadcn.com"
                                target="_blank"
                                aria-label="Shadcn component library"
                            >
                                <IconShadcn />
                            </a>
                        </li>
                        <li class="group transition-transform hover:scale-125">
                            <ItemTooltip
                                class="opacity-0 group-hover:opacity-100 group-hover:delay-500"
                            >
                                Valibot
                            </ItemTooltip>
                            <a
                                href="https://valibot.dev"
                                target="_blank"
                                aria-label="Valibot schema library"
                            >
                                <IconValibot />
                            </a>
                        </li>
                        <li class="group transition-transform hover:scale-125">
                            <ItemTooltip
                                class="opacity-0 group-hover:opacity-100 group-hover:delay-500"
                            >
                                PostgreSQL
                            </ItemTooltip>
                            <a
                                href="https://www.postgresql.org"
                                target="_blank"
                                aria-label="PostgreSQL database"
                            >
                                <IconPostgres />
                            </a>
                        </li>
                        <li class="group transition-transform hover:scale-125">
                            <ItemTooltip
                                class="opacity-0 group-hover:opacity-100 group-hover:delay-500"
                            >
                                Git
                            </ItemTooltip>
                            <a
                                href="https://git-scm.com"
                                target="_blank"
                                aria-label="Git version control"
                            >
                                <IconGit />
                            </a>
                        </li>
                        <li class="group transition-transform hover:scale-125">
                            <ItemTooltip
                                class="opacity-0 group-hover:opacity-100 group-hover:delay-500"
                            >
                                Sass
                            </ItemTooltip>
                            <a
                                href="https://sass-lang.com"
                                target="_blank"
                                aria-label="Sass preprocessor"
                            >
                                <IconSass />
                            </a>
                        </li>
                        <li class="group transition-transform hover:scale-125">
                            <ItemTooltip
                                class="opacity-0 group-hover:opacity-100 group-hover:delay-500"
                            >
                                TailwindCSS
                            </ItemTooltip>
                            <a
                                href="https://tailwindcss.com"
                                target="_blank"
                                aria-label="TailwindCSS framework"
                            >
                                <IconTailwind />
                            </a>
                        </li>
                        <li class="group transition-transform hover:scale-125">
                            <ItemTooltip
                                class="opacity-0 group-hover:opacity-100 group-hover:delay-500"
                            >
                                Figma
                            </ItemTooltip>
                            <a
                                href="https://www.figma.com"
                                target="_blank"
                                aria-label="Figma design tool"
                            >
                                <IconFigma />
                            </a>
                        </li>
                    </ul>
                    <p class="text-sm">
                        Visit the
                        <a
                            class="underline underline-offset-4 transition-colors duration-400 hover:text-primary-text/75"
                            href="#projects"
                            aria-label="View latest projects"
                        >
                            #projects
                        </a>
                        section to see the works created with these technologies.
                    </p>
                </section>

                <figure
                    class="profile relative col-start-1 row-start-1 grid grid-rows-[21rem] overflow-hidden rounded-common sm:grid-rows-[17rem] md:grid-rows-none xl:col-start-2 xl:row-span-2"
                >
                    <img
                        class="absolute left-0 top-0 row-span-2 size-full overflow-hidden rounded-common object-cover"
                        src="@img/home/profile.webp"
                        width="1243px"
                        height="1710px"
                        alt="Profile photo"
                    />
                    <div
                        class="row-start-2 m-4 self-end rounded-common border-2 border-white/50 bg-[#030303]/10 p-6 backdrop-blur-[.5rem] xl:m-8 xl:max-w-[23.125rem]"
                        style="box-shadow: inset 0 0 0 200px rgba(255, 255, 255, 0.08)"
                    >
                        <h2 class="text-[1.625rem] font-light text-primary-common xl:text-[2rem]">
                            Mykhailo
                            <br />
                            Prysiazhnyi
                        </h2>

                        <div class="mt-5 flex gap-2 *:w-full *:rounded-common *:py-3.5">
                            <a
                                class="rounded-max bg-primary-accent text-center leading-none text-primary-text transition-colors duration-400 hover:bg-primary-accent/90"
                                href="#projects"
                                aria-label="Go to latest projects section"
                            >
                                Projects
                            </a>
                            <a
                                class="rounded-max bg-secondary-accent text-center leading-none text-primary-common transition-colors duration-400 hover:bg-primary-accent hover:text-primary-text"
                                href="#services"
                                aria-label="Go to services section"
                            >
                                Services
                            </a>
                        </div>
                    </div>
                </figure>

                <section
                    class="about col-start-1 row-span-2 grid content-center rounded-common bg-primary-common px-6 py-8 xl:col-start-3 xl:row-span-2"
                >
                    <h2 class="sr-only">About</h2>
                    <span>
                        Mykhailo Prysiazhnyi -
                        <span class="font-bold">Web Developer</span>
                    </span>
                    <p class="mt-4">
                        Based in Prague, I have developed several full-stack applications,
                        constantly improving my skills through practice.
                    </p>
                    <ul class="mt-8 flex items-center justify-center gap-6">
                        <li class="transition-transform hover:scale-125">
                            <a
                                class="rounded-full"
                                href="https://www.linkedin.com/"
                                target="_blank"
                                aria-label="Linkedin profile"
                            >
                                <IconLinkedin
                                    class="rounded-max size-10 rounded-full bg-primary-text object-cover p-2"
                                    aria-label="Linkedin profile"
                                />
                            </a>
                        </li>
                        <li class="transition-transform hover:scale-125">
                            <a
                                class="rounded-full"
                                href="https://github.com/michaelprys"
                                target="_blank"
                                aria-label="Github profile"
                            >
                                <IconGithub
                                    class="rounded-max size-10 rounded-full bg-primary-text object-cover p-2"
                                />
                            </a>
                        </li>
                        <li class="transition-transform hover:scale-125">
                            <a
                                class="rounded-full"
                                href="https://stackoverflow.com/users/20343913"
                                target="_blank"
                                aria-label="Stackoverflow profile"
                            >
                                <IconStackoverflow
                                    class="rounded-max size-10 rounded-full bg-primary-text object-cover p-2"
                                />
                            </a>
                        </li>
                    </ul>
                    <div class="flex h-[8.75rem] items-center justify-center overflow-hidden">
                        <div
                            class="mx-auto mt-2 h-[13.125rem] w-[14.5rem] bg-[url('@img/home/texture.webp')] bg-[length:45rem] bg-center bg-no-repeat mix-blend-color-dodge blur-[.5008px] brightness-[90%]"
                        />
                    </div>
                    <p class="mt-4 text-sm">
                        Feel free to use the contact form below or email me at
                        <span class="block font-bold">prysiazhnyi.dev@gmail.com</span>
                        and I will respond promptly.
                    </p>
                    <a
                        class="rounded-max mt-8 block w-full rounded-full bg-primary-accent py-4 text-center text-primary-text transition-colors duration-400 hover:bg-primary-accent/90"
                        href="#contact"
                        aria-label="Go to the contact form"
                    >
                        Contact Me
                    </a>
                </section>
            </div>
        </div>
    </section>
</template>

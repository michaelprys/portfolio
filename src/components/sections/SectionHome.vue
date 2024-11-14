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
</script>

<template>
    <section id="home" class="container mx-auto pb-16 pt-12">
        <h2 class="sr-only">
            Introduction
        </h2>
        <div
            class="grid max-h-[770px] grid-cols-[280px_560px_280px] grid-rows-2 items-stretch justify-center gap-6"
        >
            <section
                class="row-span-2 flex flex-col items-center rounded-common bg-primary-common px-6 py-8"
            >
                <h2 class="sr-only">
                    About me
                </h2>
                <div class="flex items-center gap-3">
                    <span class="h-8 w-8 rounded-full bg-primary-accent" />
                    <div class="relative -mt-2 h-[2.4375rem] w-[9rem] overflow-hidden">
                        <video class="absolute top-[-1.125rem] object-contain mix-blend-screen contrast-150" disablePictureInPicture="true" disableRemotePlayback="true" controlslist="nodownload nofullscreen noremoteplayback" width="144" height="79" autoplay muted aria-hidden="true">
                            <source src="@/assets/videos/handwriting.mp4" type="video/mp4">
                        </video>
                    </div>
                </div>

                <div class="-mt-2">
                    <p class="mt-6">
                        Committed to developing high-performing, scalable web
                        applications using modern technologies and best practices.
                        Specialized in Nuxt.js, Vue.js, TypeScript, HTML and CSS.
                    </p>
                    <p class="mt-3.5">
                        I focus on creating intuitive solutions that simplify
                        everyday tasks and improve efficiency.
                    </p>
                </div>
                <a
                    class="mt-6 w-full rounded-max bg-secondary-accent px-14 py-4 text-center text-secondary-common transition-colors duration-400 hover:bg-primary-accent hover:text-primary-text"
                    href="https://drive.google.com/file/d/140geB4spehZNzfvO0B1oJLuqDlsUd4m3/view?usp=sharing"
                    target="_blank"
                >
                    View CV
                </a>
            </section>

            <section
                class="col-start-1 row-start-3 grid gap-6 rounded-common bg-primary-common px-6 py-8"
            >
                <h2 class="text-[20px] font-bold">
                    Tech & Tools
                </h2>
                <ul
                    class="grid grid-cols-5 grid-rows-2 items-center gap-4 *:will-change-contents"
                >
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
                        class="hover:text-primary-text/75 transition-colors duration-400 underline underline-offset-4"
                        href="#projects"
                        aria-label="View latest projects"
                    >#projects</a>
                    section to see the works created with these technologies.
                </p>
            </section>

            <figure class="relative col-start-2 row-span-3 row-start-1">
                <img
                    class="h-full w-full rounded-common object-cover"
                    src="@img/home/profile.webp"
                    width="81.0625rem"
                    height="112.25rem"
                    alt="Profile photo"
                >
                <div
                    class="absolute bottom-8 left-8 flex flex-col gap-5 rounded-common border-2 border-white border-opacity-50 bg-[#030303] bg-opacity-10 p-9 backdrop-blur-[.5rem]"
                    style="
                        box-shadow: inset 0 0 0 200px rgba(255, 255, 255, 0.08);
                    "
                >
                    <h1 class="text-[32px] font-light text-primary-common">
                        Mykhailo <br>
                        Prysiazhnyi
                    </h1>

                    <div class="flex gap-2">
                        <a
                            class="hover:bg-primary-accent/90 rounded-max bg-primary-accent px-10 py-3 text-center leading-none text-primary-text transition-colors duration-400"
                            href="#projects"
                            aria-label="Go to latest projects section"
                        >
                            Projects
                        </a>
                        <a
                            class="rounded-max bg-secondary-accent px-10 py-3 text-center leading-none text-primary-common transition-colors duration-400 hover:bg-primary-accent hover:text-primary-text"
                            href="#services"
                            aria-label="Go to services section"
                        >
                            Services
                        </a>
                    </div>
                </div>
            </figure>

            <section
                class="col-start-3 row-span-3 row-start-1 grid content-center rounded-common bg-primary-common px-6 py-8"
            >
                <h2 class="sr-only">
                    Info
                </h2>
                <span>
                    Mykhailo Prysiazhnyi -
                    <span class="font-bold">Web Developer</span>
                </span>
                <p class="mt-4">
                    Based in Prague, I have developed several full-stack
                    applications, honing my skills through practical experience.
                </p>
                <ul class="mt-8 flex items-center justify-center gap-6">
                    <li class="transition-transform hover:scale-125">
                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            aria-label="Linkedin profile"
                        >
                            <IconLinkedin
                                class="h-10 w-10 rounded-max bg-primary-text object-cover p-2"
                                aria-label="Linkedin profile"
                            />
                        </a>
                    </li>
                    <li class="transition-transform hover:scale-125">
                        <a
                            href="https://github.com/michaelprys"
                            target="_blank"
                            aria-label="Github profile"
                        >
                            <IconGithub
                                class="h-10 w-10 rounded-max bg-primary-text object-cover p-2"
                            />
                        </a>
                    </li>
                    <li class="transition-transform hover:scale-125">
                        <a
                            href="https://stackoverflow.com/users/20343913"
                            target="_blank"
                            aria-label="Stackoverflow profile"
                        >
                            <IconStackoverflow
                                class="h-10 w-10 rounded-max bg-primary-text object-cover p-2"
                            />
                        </a>
                    </li>
                </ul>
                <div
                    class="mt-2 h-[210px] w-[232px] bg-[url('@img/home/texture.webp')] bg-[length:720px] bg-center bg-no-repeat mix-blend-color-dodge blur-[.0313rem] brightness-[90%]"
                />
                <p class="mt-4 text-sm">
                    Reach out to me using the contact form below or email me at
                    <span class="font-bold">prysiazhnyi.dev@gmail.com</span>,
                    and I will respond promptly.
                </p>
                <a
                    class="mt-8 block w-full rounded-max bg-primary-accent px-14 py-4 text-center text-primary-text transition-colors duration-400 hover:bg-primary-accent/90"
                    href="#contact"
                    aria-label="Go to the contact form"
                >
                    Contact Me
                </a>
            </section>
        </div>
    </section>
</template>

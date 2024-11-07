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
    <section id="intro" class="container mx-auto pb-16 pt-12">
        <div
            class="grid max-h-[48.125rem] grid-cols-[17.5rem_35rem_17.5rem] grid-rows-2 items-stretch justify-center gap-6">
            <h2 class="sr-only">Introduction</h2>
            <section
                class="row-span-2 flex flex-col items-center rounded-4xl bg-custom-gray-1 p-6">
                <h2 class="sr-only">About me</h2>
                <div class="flex items-center gap-3">
                    <span class="h-8 w-8 rounded-full bg-custom-citrus"></span>
                    <h2
                        class="flex items-center gap-3 font-secondary text-[1.75rem]">
                        Mykhailo Prysiazhnyi
                    </h2>
                </div>
                <p class="mt-6">
                    Committed to developing high-performing, scalable web
                    applications using modern technologies and best practices.
                    Specialized in Nuxt.js, Vue.js, TypeScript, HTML and CSS.
                </p>
                <p class="mt-4">
                    I focus on creating user-friendly solutions that simplify
                    everyday tasks and improve efficiency.
                </p>

                <a
                    class="mt-6 w-full rounded-btn bg-custom-dark-1 px-14 py-4 text-center transition-colors duration-400 hover:bg-custom-citrus hover:text-custom-dark-1"
                    href="https://drive.google.com/file/d/16mgzRTz0sDuHWYDTSFkqHaStwk-9X3mc/view?usp=sharing"
                    target="_blank">
                    View CV
                </a>
            </section>

            <section
                class="col-start-1 row-start-3 grid gap-6 rounded-[2rem] bg-custom-gray-1 p-6">
                <h2 class="text-[1.25rem] font-bold">Tech | Tools</h2>
                <ul
                    class="grid grid-cols-5 grid-rows-2 items-center gap-4 *:will-change-contents">
                    <li class="group transition-transform hover:scale-125">
                        <ItemTooltip
                            class="opacity-0 group-hover:opacity-100 group-hover:delay-500"
                            aria-hidden="true"
                            >Nuxt.js
                        </ItemTooltip>
                        <a
                            href="https://nuxt.com"
                            target="_blank"
                            aria-label="Nuxt.js meta-framework">
                            <IconNuxt />
                        </a>
                    </li>
                    <li class="group transition-transform hover:scale-125">
                        <ItemTooltip
                            class="opacity-0 group-hover:opacity-100 group-hover:delay-500"
                            aria-hidden="true">
                            Vue.js
                        </ItemTooltip>
                        <a
                            href="https://vuejs.org"
                            target="_blank"
                            aria-label="Vuejs framework">
                            <IconVue />
                        </a>
                    </li>
                    <li class="group transition-transform hover:scale-125">
                        <ItemTooltip
                            class="opacity-0 group-hover:opacity-100 group-hover:delay-500">
                            TypeScript
                        </ItemTooltip>
                        <a
                            href="https://www.typescriptlang.org"
                            target="_blank"
                            aria-label="Typescript language">
                            <IconTypeScript />
                        </a>
                    </li>
                    <li class="group transition-transform hover:scale-125">
                        <ItemTooltip
                            class="opacity-0 group-hover:opacity-100 group-hover:delay-500">
                            Shadcn
                        </ItemTooltip>
                        <a
                            href="https://ui.shadcn.com"
                            target="_blank"
                            aria-label="Shadcn component library">
                            <IconShadcn />
                        </a>
                    </li>
                    <li class="group transition-transform hover:scale-125">
                        <ItemTooltip
                            class="opacity-0 group-hover:opacity-100 group-hover:delay-500">
                            Valibot
                        </ItemTooltip>
                        <a
                            href="https://valibot.dev"
                            target="_blank"
                            aria-label="Valibot schema library">
                            <IconValibot />
                        </a>
                    </li>
                    <li class="group transition-transform hover:scale-125">
                        <ItemTooltip
                            class="opacity-0 group-hover:opacity-100 group-hover:delay-500">
                            PostgreSQL
                        </ItemTooltip>
                        <a
                            href="https://www.postgresql.org"
                            target="_blank"
                            aria-label="PostgreSQL database">
                            <IconPostgres />
                        </a>
                    </li>
                    <li class="group transition-transform hover:scale-125">
                        <ItemTooltip
                            class="opacity-0 group-hover:opacity-100 group-hover:delay-500">
                            Git
                        </ItemTooltip>
                        <a
                            href="https://git-scm.com"
                            target="_blank"
                            aria-label="Git version control">
                            <IconGit />
                        </a>
                    </li>
                    <li class="group transition-transform hover:scale-125">
                        <ItemTooltip
                            class="opacity-0 group-hover:opacity-100 group-hover:delay-500">
                            Sass
                        </ItemTooltip>
                        <a
                            href="https://sass-lang.com"
                            target="_blank"
                            aria-label="Sass preprocessor">
                            <IconSass />
                        </a>
                    </li>
                    <li class="group transition-transform hover:scale-125">
                        <ItemTooltip
                            class="opacity-0 group-hover:opacity-100 group-hover:delay-500">
                            TailwindCSS
                        </ItemTooltip>
                        <a
                            href="https://tailwindcss.com"
                            target="_blank"
                            aria-label="TailwindCSS framework">
                            <IconTailwind />
                        </a>
                    </li>
                    <li class="group transition-transform hover:scale-125">
                        <ItemTooltip
                            class="opacity-0 group-hover:opacity-100 group-hover:delay-500">
                            Figma
                        </ItemTooltip>
                        <a
                            href="https://www.figma.com"
                            target="_blank"
                            aria-label="Figma design tool">
                            <IconFigma />
                        </a>
                    </li>
                </ul>
                <p class="text-sm">
                    Visit the
                    <a
                        class="underline underline-offset-4"
                        href="#projects"
                        aria-label="View latest projects"
                        >#projects</a
                    >
                    section to see the works created with these technologies.
                </p>
            </section>

            <figure class="relative col-start-2 row-span-3 row-start-1">
                <img
                    class="h-full w-full rounded-4xl object-cover"
                    src="@img/intro/profile.webp"
                    width="1297px"
                    height="1796px"
                    alt="Profile photo" />
                <div
                    class="absolute bottom-8 left-8 flex flex-col gap-5 rounded-4xl border-2 border-white border-opacity-50 bg-[#030303] bg-opacity-10 p-9 backdrop-blur-[8px]"
                    style="
                        box-shadow: inset 0 0 0 200px rgba(255, 255, 255, 0.08);
                    ">
                    <h1 class="text-[2rem] font-light text-custom-gray-1">
                        Mykhailo <br />
                        Prysiazhnyi
                    </h1>

                    <div class="flex gap-2">
                        <a
                            class="hover:bg-custom-citrus-dimmed rounded-btn bg-custom-citrus px-10 py-3 text-center leading-none text-custom-dark-1 transition-colors duration-400 hover:bg-opacity-90"
                            href="#projects"
                            aria-label="Go to latest projects section">
                            Projects
                        </a>
                        <a
                            class="rounded-btn bg-custom-dark-1 px-10 py-3 text-center leading-none transition-colors duration-400 hover:bg-custom-citrus hover:text-custom-dark-1"
                            href="#services"
                            aria-label="Go to services section">
                            Services
                        </a>
                    </div>
                </div>
            </figure>

            <section
                class="col-start-3 row-span-3 row-start-1 grid content-center rounded-4xl bg-custom-gray-1 p-6">
                <h2 class="sr-only">Info</h2>
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
                            aria-label="Linkedin profile">
                            <IconLinkedin
                                class="h-[2.5625rem] w-[2.5625rem] rounded-full bg-custom-white object-cover p-2"
                                aria-label="Linkedin profile" />
                        </a>
                    </li>
                    <li class="transition-transform hover:scale-125">
                        <a
                            href="https://github.com/michaelprys"
                            target="_blank"
                            aria-label="Github profile">
                            <IconGithub
                                class="h-[2.5625rem] w-[2.5625rem] rounded-full bg-custom-white object-cover p-2" />
                        </a>
                    </li>
                    <li class="transition-transform hover:scale-125">
                        <a
                            href="https://stackoverflow.com/users/20343913"
                            target="_blank"
                            aria-label="Stackoverflow profile">
                            <IconStackoverflow
                                class="h-[2.5625rem] w-[2.5625rem] rounded-full bg-custom-white object-cover p-2" />
                        </a>
                    </li>
                </ul>
                <div
                    class="mt-2 h-[13.125rem] w-[14.5rem] bg-[url('@img/intro/texture.webp')] bg-[length:50rem] bg-center bg-no-repeat mix-blend-color-dodge blur-[0.5px] brightness-[90%] supports-[background-image:url('@img/intro/texture.avif')]:bg-[url('@img/intro/texture.avif')]" />
                <p class="mt-4 text-sm">
                    Feel free to contact me using the form below or email me at
                    <span class="font-bold">prysiazhnyi.dev@gmail.com</span>,
                    and I will respond promptly.
                </p>
                <a
                    class="mt-8 block w-full rounded-btn bg-custom-citrus px-14 py-4 text-center text-custom-dark-1 transition-colors duration-400 hover:bg-opacity-90"
                    href="#contact"
                    aria-label="Go to the contact form">
                    Contact Me
                </a>
            </section>
        </div>
    </section>
</template>

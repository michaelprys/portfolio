<script setup>
import ItemTooltip from './items/ItemTooltip.vue';
</script>

<template>
    <section
        id="intro"
        class="grid max-h-[48.125rem] grid-cols-[17.5rem_35rem_17.5rem] grid-rows-2 items-stretch justify-center gap-6">
        <h2 class="sr-only">Introduction</h2>
        <section
            class="row-span-2 flex flex-col items-center rounded-4xl bg-custom-gray p-6">
            <h2 class="sr-only">About me</h2>
            <div class="flex items-center gap-3">
                <span class="h-8 w-8 rounded-full bg-custom-bright-1"></span>
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
                I create solutions that make life easier for users and help
                streamline tasks for the team.
            </p>

            <a
                class="mt-6 w-full rounded-btn bg-custom-dark-1 px-14 py-4 text-center transition-colors duration-[400ms] hover:bg-custom-bright-1 hover:text-custom-dark-1"
                href="/"
                target="_blank">
                View CV
            </a>
        </section>

        <section
            class="col-start-1 row-start-3 grid gap-6 rounded-[2rem] bg-custom-gray p-6">
            <h2 class="text-[1.25rem] font-bold">Tech | Tools</h2>
            <ul class="grid grid-cols-5 grid-rows-2 items-center gap-4">
                <li class="group transition-transform hover:scale-125">
                    <ItemTooltip
                        class="opacity-0 group-hover:opacity-100 group-hover:delay-500"
                        >Nuxt.js
                    </ItemTooltip>
                    <a
                        href="https://nuxt.com"
                        target="_blank"
                        aria-label="Visit Nuxt.js website for more information">
                        <img
                            class="object-cover"
                            src="@icon/nuxt.svg"
                            width="24px"
                            height="24px"
                            alt="Nuxt meta-framework" />
                    </a>
                </li>
                <li class="group transition-transform hover:scale-125">
                    <ItemTooltip
                        class="opacity-0 group-hover:opacity-100 group-hover:delay-500">
                        Vue.js
                    </ItemTooltip>
                    <a
                        href="https://vuejs.org"
                        target="_blank"
                        aria-label="Visit Vuejs website for more information">
                        <img
                            class="object-cover"
                            src="@icon/vue.svg"
                            width="24px"
                            height="24px"
                            alt="Vue framework"
                    /></a>
                </li>
                <li class="group transition-transform hover:scale-125">
                    <ItemTooltip
                        class="opacity-0 group-hover:opacity-100 group-hover:delay-500">
                        TypeScript
                    </ItemTooltip>
                    <a
                        href="https://www.typescriptlang.org"
                        target="_blank"
                        aria-label="Visit Typescript website for more information">
                        <img
                            class="object-cover"
                            src="@icon/ts.svg"
                            width="28px"
                            height="28px"
                            alt="Typescript"
                    /></a>
                </li>
                <li
                    class="group transition-transform hover:scale-125"
                    aria-label="Visit Shadcn website for more information">
                    <ItemTooltip
                        class="opacity-0 group-hover:opacity-100 group-hover:delay-500">
                        Shadcn
                    </ItemTooltip>
                    <a href="https://ui.shadcn.com" target="_blank">
                        <img
                            class="object-cover"
                            src="@icon/shadcn.svg"
                            width="24px"
                            height="24px"
                            alt="Shadcn UI"
                    /></a>
                </li>
                <li class="group flex transition-transform hover:scale-125">
                    <ItemTooltip
                        class="opacity-0 group-hover:opacity-100 group-hover:delay-500">
                        Valibot
                    </ItemTooltip>
                    <a
                        href="https://valibot.dev"
                        target="_blank"
                        aria-label="Visit Valibot website for more information">
                        <img
                            class="object-fit w-full"
                            src="@icon/valibot.svg"
                            width="28px"
                            height="28px"
                            alt="Valibot schema library"
                    /></a>
                </li>
                <li class="group transition-transform hover:scale-125">
                    <ItemTooltip
                        class="opacity-0 group-hover:opacity-100 group-hover:delay-500">
                        PostgreSQL
                    </ItemTooltip>
                    <a
                        href="https://www.postgresql.org"
                        target="_blank"
                        aria-label="Visit Postgresql website for more information">
                        <img
                            class="object-cover"
                            src="@icon/pg.svg"
                            width="24px"
                            height="24px"
                            alt="PostgreSQL database"
                    /></a>
                </li>
                <li class="group transition-transform hover:scale-125">
                    <ItemTooltip
                        class="opacity-0 group-hover:opacity-100 group-hover:delay-500">
                        Git
                    </ItemTooltip>
                    <a
                        href="https://git-scm.com"
                        target="_blank"
                        aria-label="Visit Git website for more information">
                        <img
                            class="object-cover"
                            src="@icon/git.svg"
                            width="24px"
                            height="24px"
                            alt="Git version control"
                    /></a>
                </li>
                <li class="group transition-transform hover:scale-125">
                    <ItemTooltip
                        class="opacity-0 group-hover:opacity-100 group-hover:delay-500">
                        Sass
                    </ItemTooltip>
                    <a
                        href="https://sass-lang.com"
                        target="_blank"
                        aria-label="Visit Sass website for more information">
                        <img
                            class="object-cover"
                            src="@icon/sass.svg"
                            width="24px"
                            height="24px"
                            alt="Sass preprocessor"
                    /></a>
                </li>
                <li class="group transition-transform hover:scale-125">
                    <ItemTooltip
                        class="opacity-0 group-hover:opacity-100 group-hover:delay-500">
                        TailwindCSS
                    </ItemTooltip>
                    <a
                        href="https://tailwindcss.com"
                        target="_blank"
                        aria-label="Visit Tailwind website for more information">
                        <img
                            class="object-cover"
                            src="@icon/tailwind.svg"
                            width="24px"
                            height="24px"
                            alt="TailwindCSS framework"
                    /></a>
                </li>
                <li class="group transition-transform hover:scale-125">
                    <ItemTooltip
                        class="opacity-0 group-hover:opacity-100 group-hover:delay-500">
                        Figma
                    </ItemTooltip>
                    <a
                        href="https://www.figma.com"
                        target="_blank"
                        aria-label="Visit Figma website for more information">
                        <img
                            class="object-cover"
                            src="@icon/figma.svg"
                            width="24px"
                            height="24px"
                            alt="Figma design tool" />
                    </a>
                </li>
            </ul>
            <p class="text-sm">
                Visit the
                <a class="underline underline-offset-4" href="#latest-projects"
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
                style="box-shadow: inset 0 0 0 200px rgba(255, 255, 255, 0.08)">
                <h1 class="text-[2rem] font-light text-custom-gray">
                    Mykhailo <br />
                    Prysiazhnyi
                </h1>

                <div class="flex gap-2">
                    <a
                        class="hover:bg-custom-bright-1-dimmed rounded-btn bg-custom-bright-1 px-10 py-3 text-center leading-none text-custom-dark-1 transition-colors duration-[400ms] hover:bg-opacity-90"
                        href="#latest-projects">
                        Projects
                    </a>
                    <a
                        class="rounded-btn bg-custom-dark-1 px-10 py-3 text-center leading-none transition-colors duration-[400ms] hover:bg-custom-bright-1 hover:text-custom-dark-1"
                        href="#services">
                        Services
                    </a>
                </div>
            </div>
        </figure>

        <section
            class="col-start-3 row-span-3 row-start-1 grid content-center rounded-4xl bg-custom-gray p-6">
            <h2 class="sr-only">Info</h2>
            <span>
                Mykhailo Prysiazhnyi -
                <span class="font-bold">Web Developer</span>
            </span>
            <p class="mt-4">
                Based in Prague, I bring several years of experience, having
                developed various full-stack applications.
            </p>
            <ul class="mt-8 flex items-center justify-center gap-6">
                <li class="transition-transform hover:scale-125">
                    <a href="https://www.linkedin.com/" target="_blank">
                        <img
                            class="h-[2.5625rem] w-[2.5625rem] rounded-full bg-custom-bright-2 object-cover p-2"
                            src="@icon/linkedin.svg"
                            width="32px"
                            height="32px"
                            alt="Linkedin profile" />
                    </a>
                </li>
                <li class="transition-transform hover:scale-125">
                    <a href="https://github.com/michaelprys" target="_blank">
                        <img
                            class="h-[2.5625rem] w-[2.5625rem] rounded-full bg-custom-bright-2 object-cover p-2"
                            src="@icon/github.svg"
                            width="32px"
                            height="32px"
                            alt="Github profile" />
                    </a>
                </li>
                <li class="transition-transform hover:scale-125">
                    <a
                        href="https://stackoverflow.com/users/20343913"
                        target="_blank">
                        <img
                            class="h-[2.5625rem] w-[2.5625rem] rounded-full bg-custom-bright-2 object-cover p-2"
                            src="@icon/stackoverflow.svg"
                            width="32px"
                            height="32px"
                            alt="Stackoverflow profile" />
                    </a>
                </li>
            </ul>
            <div
                class="mt-2 h-[13.125rem] w-[14.5rem] bg-[length:50rem] bg-center bg-no-repeat mix-blend-color-dodge grayscale"
                style="
                    background-image: url('/src/assets/images/intro/visual.gif');
                " />

            <p class="mt-4 text-sm">
                Feel free to contact me using the form below or email me at
                <span class="font-bold">prysiazhnyi.dev@gmail.com</span>, and I
                will respond promptly.
            </p>
            <a
                class="mt-8 block w-full rounded-btn bg-custom-bright-1 px-14 py-4 text-center text-custom-dark-1 transition-colors duration-[400ms] hover:bg-opacity-90"
                href="#contact">
                Contact Me
            </a>
        </section>
    </section>
</template>

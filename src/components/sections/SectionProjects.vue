<script setup>
import IconLink from '@/components/icons/IconLink.vue';
import IconNuxt from '@/components/icons/IconNuxt.vue';
import IconPostgres from '@/components/icons/IconPostgres.vue';
import IconShadcn from '@/components/icons/IconShadcn.vue';
import IconTailwind from '@/components/icons/IconTailwind.vue';
import IconValibot from '@/components/icons/IconValibot.vue';
import ItemTooltip from '@/components/items/ItemTooltip.vue';
import ItemObserver from '@/components/items/ItemObserver.vue';
import { usePlayVideo } from '@/use/usePlayVideo';
import { watchEffect } from 'vue';

const project1 = usePlayVideo();
</script>

<template>
    <section id="projects" class="pb-12 pt-8 xl:pb-16 xl:pt-12">
        <ItemObserver v-slot="{ isVisible }">
            <h2
                class="text-center text-h1 font-light uppercase"
                :class="isVisible ? 'fade-in-secondary' : 'invisible'"
            >
                Latest projects
            </h2>
            <div class="container" :class="isVisible ? 'fade-in-down' : 'invisible'">
                <ul
                    class="mt-10 grid justify-center gap-8 *:shadow-xl sm:grid-cols-[23.75rem] md:grid-cols-[repeat(2,_21.875rem)] xl:mt-16 xl:grid-cols-[repeat(3,_23rem)]"
                >
                    <li>
                        <figure
                            class="rounded-common bg-primary-common p-6"
                            @mouseover="project1.playVideo"
                            @mouseleave="project1.stopVideo"
                        >
                            <div
                                class="relative cursor-pointer overflow-hidden rounded-3xl"
                                @click="project1.toggleVideo"
                            >
                                <picture>
                                    <source
                                        srcset="@img/projects/lows-n-lines.avif"
                                        type="image/avif"
                                    />
                                    <img
                                        class="h-60 w-full rounded-3xl object-cover opacity-100 transition-opacity duration-300 sm:h-[13.125rem]"
                                        :class="{
                                            'opacity-0': !project1.isPlaying.value
                                        }"
                                        src="@img/projects/lows-n-lines.webp"
                                        width="42.6875rem"
                                        height="24rem"
                                        loading="lazy"
                                        alt="Lows-n-Lines project"
                                    />
                                </picture>
                                <video
                                    :ref="project1.videoRef"
                                    class="absolute top-0 h-[210px] w-full rounded-3xl object-cover opacity-0 transition-opacity duration-300 sm:h-[240px]"
                                    :class="{
                                        'opacity-100': project1.isPlaying.value
                                    }"
                                    width="20rem"
                                    height="13.125rem"
                                    muted
                                    loop
                                    aria-hidden="true"
                                >
                                    <source
                                        src="@/assets/videos/lows-n-lines-preview.mp4"
                                        type="video/mp4"
                                    />
                                </video>
                            </div>
                            <figcaption class="mt-4 text-h3 font-bold">Lows-n-Lines</figcaption>
                            <p class="mt-2 text-muted-text">
                                A lowrider selling platform, featuring a system for inquiries
                                between buyers and sellers.
                            </p>
                            <div class="inline-flex flex-col items-start">
                                <ul
                                    class="mr-auto mt-6 inline-flex flex-wrap items-center gap-4 rounded-common bg-secondary-common px-4 py-2 *:will-change-contents"
                                >
                                    <li class="group transition-transform hover:scale-125">
                                        <ItemTooltip
                                            class="opacity-0 group-hover:opacity-100 group-hover:delay-500"
                                        >
                                            Nuxt.js
                                        </ItemTooltip>
                                        <a
                                            href="https://nuxt.com"
                                            target="_blank"
                                            aria-label="Nuxt.js"
                                        >
                                            <IconNuxt />
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
                                </ul>
                                <div class="group ml-1 mt-6 inline-flex">
                                    <a
                                        class="inline-flex items-center gap-2.5 font-medium"
                                        href="https://lows-n-lines.netlify.app/"
                                        target="_blank"
                                    >
                                        <IconLink aria-label="View Lows-n-Lines project" />
                                        <div class="relative">
                                            <span
                                                class="after:absolute after:bottom-[-2px] after:left-0 after:h-[.0625rem] after:w-0 after:bg-primary-text after:transition-all after:duration-400 after:group-hover:w-[100.8px]"
                                            >
                                                View Project
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </figure>
                    </li>
                </ul>
            </div>
        </ItemObserver>
    </section>
</template>

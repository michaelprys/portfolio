<script setup>
import IconLink from '@/components/icons/IconLink.vue';
import IconNuxt from '@/components/icons/IconNuxt.vue';
import IconPostgres from '@/components/icons/IconPostgres.vue';
import IconShadcn from '@/components/icons/IconShadcn.vue';
import IconTailwind from '@/components/icons/IconTailwind.vue';
import IconValibot from '@/components/icons/IconValibot.vue';
import ItemTooltip from '@/components/items/ItemTooltip.vue';

import { usePlayVideo } from '@/use/usePlayVideo';

const project1 = usePlayVideo();
</script>

<template>
    <section id="projects" class="container mx-auto mt-28">
        <h2 class="text-center text-4xl font-light uppercase">
            Latest projects
        </h2>
        <ul
            class="mt-16 grid grid-cols-[368px_368px_368px] justify-between gap-8">
            <li>
                <figure
                    class="rounded-4xl bg-custom-gray p-6 shadow-xl"
                    @mouseover="project1.playVideo"
                    @mouseleave="project1.stopVideo">
                    <div
                        class="relative cursor-pointer shadow-sm transition-shadow hover:shadow-lg">
                        <picture>
                            <source
                                srcset="@img/projects/lows-n-lines.avif"
                                type="image/avif" />
                            <img
                                class="h-[13.125rem] w-full opacity-100 rounded-3xl object-cover transition-opacity duration-300"
                                :class="{
                                    'opacity-0': !project1.state.value,
                                }"
                                src="@img/projects/lows-n-lines.webp"
                                width="683px"
                                height="384px"
                                loading="lazy"
                                alt="Lows-n-Lines project" />
                        </picture>
                        <video
                            class="absolute top-0 h-[13.125rem] w-full rounded-3xl object-cover opacity-0 transition-opacity duration-300"
                            width="320px"
                            height="210px"
                            muted
                            loop
                            :ref="project1.videoRef"
                            :class="{
                                'opacity-100': project1.state.value,
                            }">
                            <source
                                src="@/assets/videos/lows-n-lines-preview.mp4"
                                type="video/mp4" />
                        </video>
                    </div>
                    <figcaption class="mt-4 text-xl font-bold">
                        Lows-n-Lines
                    </figcaption>
                    <p class="mt-2 text-custom-medium-2">
                        A lowrider selling platform, featuring a system for
                        inquiries between buyers and sellers.
                    </p>
                    <ul
                        class="mt-6 inline-flex items-center gap-4 rounded-4xl bg-custom-dark-1 px-4 py-2">
                        <li class="group transition-transform hover:scale-125">
                            <ItemTooltip
                                class="opacity-0 group-hover:opacity-100 group-hover:delay-500">
                                Nuxt.js
                            </ItemTooltip>
                            <a
                                href="https://nuxt.com"
                                target="_blank"
                                aria-label="Nuxt.js">
                                <IconNuxt />
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
                    </ul>
                    <div class="group mt-6 inline-flex">
                        <a
                            class="inline-flex items-center gap-2.5 font-medium"
                            href="https://lows-n-lines.netlify.app/"
                            target="_blank">
                            <IconLink aria-label="View Lows-n-Lines project" />
                            <div class="relative">
                                <span
                                    class="after:absolute after:-bottom-[2px] after:left-0 after:h-[1px] after:w-0 after:bg-custom-bright-2 after:transition-all after:duration-[400ms] after:group-hover:w-[6.3rem]">
                                    View Project
                                </span>
                            </div>
                        </a>
                    </div>
                </figure>
            </li>
        </ul>
    </section>
</template>

<script setup>
import IconLink from '@/components/icons/IconLink.vue';
import BaseIcon from '@/components/base/BaseIcon.vue';
import BaseObserver from '@/components/base/BaseObserver.vue';
import { usePlayVideo } from '@/composables/usePlayVideo';
import projects from '../../../public/assets/projects.json';

const videoInstance = projects.map(() => usePlayVideo());
</script>

<template>
    <section id="projects" class="pb-12 pt-8 xl:pb-16 xl:pt-12">
        <BaseObserver v-slot="{ isVisible }">
            <h2
                class="text-center text-h1 font-light uppercase"
                :class="isVisible ? 'fade-in-secondary' : 'invisible'">
                Latest projects
            </h2>

            <div class="container" :class="isVisible ? 'fade-in-down' : 'invisible'">
                <ul
                    class="min-h-124.5 h-full mt-10 grid justify-center gap-8 *:shadow-xl sm:grid-cols-[23.75rem] md:grid-cols-[repeat(2,21.875rem)] xl:mt-16 xl:grid-cols-[repeat(3,23rem)]">
                    <li v-for="(project, idx) in projects" :key="project.id">
                        <figure
                            class="flex flex-col h-124.5 rounded-common bg-primary-common p-6"
                            @mouseover="videoInstance[idx].playVideo"
                            @mouseleave="videoInstance[idx].stopVideo">
                            <div
                                class="relative cursor-pointer overflow-hidden rounded-3xl shrink-0">
                                <picture>
                                    <source
                                        :srcset="`${project.imageUrl}.avif`"
                                        type="image/avif" />
                                    <img
                                        class="h-60 w-full rounded-3xl object-cover opacity-100 transition-opacity duration-300 sm:h-52.5"
                                        :class="{
                                            'opacity-0': !videoInstance[idx].isPlaying.value,
                                        }"
                                        :src="`${project.imageUrl}.webp`"
                                        width="42.6875rem"
                                        height="24rem"
                                        loading="lazy"
                                        :alt="`${project.name} project`" />
                                </picture>

                                <video
                                    :ref="(el) => (videoInstance[idx].videoRef.value = el)"
                                    class="absolute top-0 h-52.5 w-full rounded-3xl object-cover opacity-0 transition-opacity duration-300 sm:h-60"
                                    :class="{ 'opacity-100': videoInstance[idx].isPlaying.value }"
                                    width="20rem"
                                    height="13.125rem"
                                    muted
                                    loop
                                    aria-hidden="true">
                                    <source :src="`${project.videoUrl}.mp4`" type="video/mp4" />
                                </video>
                            </div>

                            <figcaption class="mt-4 text-h3 font-bold">
                                {{ project.name }}
                            </figcaption>

                            <p class="mt-2 text-muted-text line-clamp-3">
                                {{ project.description }}
                            </p>

                            <div class="mt-auto flex flex-col items-start">
                                <ul
                                    class="mr-auto mt-6 inline-flex flex-wrap items-center gap-4 rounded-common bg-secondary-common px-4 py-2 *:will-change-contents">
                                    <li
                                        v-for="icon in project.icons"
                                        :key="icon.name"
                                        class="group transition-transform hover:scale-125">
                                        <BaseIcon :name="icon.name" :url="icon.url" />
                                    </li>
                                </ul>

                                <div class="group ml-1 mt-6 inline-flex">
                                    <a
                                        class="inline-flex items-center gap-2.5 font-medium"
                                        :href="project.url"
                                        target="_blank">
                                        <IconLink :aria-label="`View ${project.name} project`" />
                                        <div class="relative">
                                            <span
                                                class="relative after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-primary-text after:transition-transform after:duration-400 group-hover:after:scale-x-100">
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
        </BaseObserver>
    </section>
</template>

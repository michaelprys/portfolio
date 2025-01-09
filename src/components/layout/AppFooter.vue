<script setup>
import IconCopyright from '@/components/icons/IconCopyright.vue';
import IconFacebook from '@/components/icons/IconFacebook.vue';
import IconInstagram from '@/components/icons/IconInstagram.vue';
</script>

<template>
    <footer class="pb-32 pt-10 xl:pt-12 xxl:pb-12">
        <div class="container xl:max-w-screen-xl">
            <div
                class="grid items-center justify-center gap-8 md:grid-cols-[repeat(2,_max-content)] md:justify-between md:gap-10"
            >
                <div class="flex flex-col items-center gap-6 md:flex-row md:gap-[4.5rem]">
                    <a
                        class="font-secondary text-[2.5rem] leading-none"
                        href="#"
                        aria-label="Prysiazhnyi logo, go to the home section"
                        >Prysiazhnyi</a
                    >
                    <ul class="flex items-center gap-12">
                        <li class="text-primary-text transition-all duration-400 hover:text-primary-text/60">
                            <a href="#home" aria-label="Go to the home section"> Home </a>
                        </li>
                        <li class="text-primary-text transition-all duration-400 hover:text-primary-text/60">
                            <a href="#projects" aria-label="Go to the projects section"> Projects </a>
                        </li>
                        <li class="text-primary-text transition-all duration-400 hover:text-primary-text/60">
                            <a href="#services" aria-label="Go to the services section"> Services </a>
                        </li>
                    </ul>
                </div>
                <ul class="mx-auto flex items-center gap-6">
                    <li class="transition-transform hover:scale-125">
                        <a class="rounded-full" href="/facebook" target="_blank" aria-label="Facebook profile">
                            <IconFacebook class="size-10 rounded-full bg-primary-accent object-cover p-2" />
                        </a>
                    </li>
                    <li class="transition-transform hover:scale-125">
                        <a class="rounded-full" href="/instagram" target="_blank" aria-label="Instagram profile">
                            <IconInstagram class="size-10 rounded-full bg-primary-accent object-cover p-2" />
                        </a>
                    </li>
                </ul>
            </div>
            <div class="text-center">
                <span
                    class="mx-auto mt-20 inline-flex items-center justify-center gap-2 leading-none text-primary-text opacity-60 transition-all duration-400 hover:opacity-100 xl:mt-28"
                >
                    <IconCopyright />
                    2025 All Rights Reserved
                </span>
            </div>
        </div>
    </footer>
</template>

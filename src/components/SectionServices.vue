<script setup lang="ts">
import IconCode from '@/components/icons/IconCode.vue';
import IconGear from '@/components/icons/IconGear.vue';
import IconLock from '@/components/icons/IconLock.vue';
import IconRocket from '@/components/icons/IconRocket.vue';
</script>

<template>
    <section id="services" class="container mx-auto pb-16 pt-12">
        <h1 class="text-center text-4xl font-light uppercase">Services</h1>
        <ul
            class="mt-16 grid grid-cols-4 gap-8 *:max-w-[23rem] *:cursor-pointer *:rounded-4xl *:bg-custom-gray-1 *:p-6 *:transition-transform *:duration-300 *:will-change-contents">
            <li class="hover:-translate-y-3">
                <div class="relative">
                    <div
                        class="ml-2 h-16 w-16 rounded-full bg-custom-decoration" />
                    <IconCode
                        class="absolute -bottom-4 left-0 *:fill-[#ffffff]" />
                </div>

                <h2 class="mt-8 text-xl font-bold">
                    Responsive & Accessible UI
                </h2>
                <p class="mt-5 text-custom-gray-3">
                    Creating responsive and accessible interfaces using relative
                    units, modern CSS techniques, and semantic HTML.
                </p>
            </li>
            <li class="hover:-translate-y-3">
                <div class="relative">
                    <div
                        class="ml-2 h-16 w-16 rounded-full bg-custom-decoration" />
                    <IconRocket
                        class="absolute -bottom-4 left-0 *:fill-custom-white" />
                </div>

                <h2 class="mt-8 text-xl font-bold">
                    Performance & Optimization
                </h2>
                <p class="mt-5 text-custom-gray-3">
                    Applying load optimization strategies and utilizing powerful
                    asset formats to significantly improve the performance.
                </p>
            </li>
            <li class="hover:-translate-y-3">
                <div class="relative">
                    <div
                        class="ml-2 h-16 w-16 rounded-full bg-custom-decoration" />
                    <IconGear
                        class="absolute -bottom-4 left-0 *:fill-custom-white" />
                </div>

                <h2 class="mt-8 text-xl font-bold">
                    API Integration & State Management
                </h2>
                <p class="mt-5 text-custom-gray-3">
                    Integrating third-party APIs and managing state with
                    composables or Pinia for smooth and consistent data flow.
                </p>
            </li>
            <li class="hover:-translate-y-3">
                <div class="relative">
                    <div
                        class="ml-2 h-16 w-16 rounded-full bg-custom-decoration" />
                    <IconLock
                        class="absolute -bottom-4 left-0 *:fill-custom-white" />
                </div>

                <h2 class="mt-8 text-xl font-bold">
                    Authentication & Validation
                </h2>
                <p class="mt-5 text-custom-gray-3">
                    Using session-based authentication with httpOnly cookies and
                    tools such as Valibot for accurate data validation.
                </p>
            </li>
        </ul>
    </section>
</template>

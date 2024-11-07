<script setup lang="ts">
import IconCode from '@/components/icons/IconCode.vue';
import IconGear from '@/components/icons/IconGear.vue';
import IconLock from '@/components/icons/IconLock.vue';
import IconRocket from '@/components/icons/IconRocket.vue';
</script>

<template>
    <section id="services" class="container mx-auto mt-28">
        <h1 class="text-4xl text-center uppercase font-light">Services</h1>
        <ul
            class="mt-16 *:bg-custom-gray-1 *:rounded-4xl *:max-w-[23rem] *:p-6 grid grid-cols-4 gap-8 *:transition-transform *:duration-300 *:cursor-pointer *:will-change-contents">
            <li class="hover:-translate-y-3">
                <div class="relative">
                    <div
                        class="ml-2 w-16 h-16 bg-custom-decoration rounded-full" />
                    <IconCode
                        class="absolute *:fill-[#ffffff] -bottom-4 left-0" />
                </div>

                <h2 class="mt-8 font-bold text-xl">
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
                        class="ml-2 w-16 h-16 bg-custom-decoration rounded-full" />
                    <IconRocket
                        class="absolute *:fill-custom-white -bottom-4 left-0" />
                </div>

                <h2 class="mt-8 font-bold text-xl">
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
                        class="ml-2 w-16 h-16 bg-custom-decoration rounded-full" />
                    <IconGear
                        class="absolute *:fill-custom-white -bottom-4 left-0" />
                </div>

                <h2 class="mt-8 font-bold text-xl">
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
                        class="ml-2 w-16 h-16 bg-custom-decoration rounded-full" />
                    <IconLock
                        class="absolute *:fill-custom-white -bottom-4 left-0" />
                </div>

                <h2 class="mt-8 font-bold text-xl">
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

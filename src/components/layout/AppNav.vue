<script setup>
import IconContact from '@/components/icons/IconContact.vue';
import IconExperience from '@/components/icons/IconExperience.vue';
import IconHome from '@/components/icons/IconHome.vue';
import IconProject from '@/components/icons/IconProject.vue';
import IconService from '@/components/icons/IconService.vue';
import { useTheme } from '@/composables/useTheme.js';
import { computed } from 'vue';

const { getTheme, currentTheme } = useTheme();

const theme = computed(() => getTheme(currentTheme.value));

defineProps({
    currentSection: {
        type: String,
    },
});

const components = {
    home: IconHome,
    projects: IconProject,
    services: IconService,
    experience: IconExperience,
    contact: IconContact,
};
</script>

<template>
    <nav
        class="fixed bottom-7 left-1/2 top-auto z-999 w-[88%] -translate-x-1/2 translate-y-0 rounded-full shadow-xl sm:w-max xl:h-max xl:w-auto xxl:left-auto xxl:right-12 xxl:top-1/2 xxl:translate-x-0 xxl:-translate-y-1/2 xxl:px-0">
        <ul
            class="fade-in-secondary flex flex-row items-center justify-between gap-4 rounded-full bg-nav-bg/20 px-8 py-4 backdrop-blur-sm xxl:flex-col xxl:px-4 xxl:py-8"
            style="box-shadow: inset 0 0 0 200px rgba(255, 255, 255, 0.08)">
            <li
                v-for="(component, key) in components"
                :key="key"
                class="inline-flex items-center justify-center rounded-full transition-colors duration-400 *:block"
                :class="{
                    'bg-primary-accent object-cover hover:bg-primary-accent/90 ':
                        key === currentSection,
                    'hover:bg-zinc-300/20': key !== currentSection,
                }">
                <a
                    class="rounded-full p-2"
                    :class="{
                        'invert-80': theme?.variant === 'light' && key !== currentSection,
                        'brightness-0 invert': theme?.variant === 'light' && key === currentSection,
                    }"
                    :href="`#${key}`"
                    :aria-label="`Go to the ${key} section`">
                    <component :is="component" />
                </a>
            </li>
        </ul>
    </nav>
</template>

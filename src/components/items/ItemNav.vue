<script setup>
import IconContact from '@/components/icons/IconContact.vue';
import IconExperience from '@/components/icons/IconExperience.vue';
import IconHome from '@/components/icons/IconHome.vue';
import IconProject from '@/components/icons/IconProject.vue';
import IconService from '@/components/icons/IconService.vue';

const props = defineProps(['currentSection']);

const components = {
    home: IconHome,
    projects: IconProject,
    services: IconService,
    experience: IconExperience,
    contact: IconContact
};
</script>

<template>
    <nav class="fixed shadow-xl z-[999] right-12 top-1/2 -translate-y-1/2">
        <ul class="flex flex-col gap-4 rounded-max bg-nav-bg px-4 py-8">
            <li
                v-for="(value, key) in components" :key="key" class="group rounded-full transition-colors duration-400 *:block *:p-2" :class="{
                    'h-10 w-10 bg-primary-accent hover:bg-primary-accent/90 inline-flex items-center justify-center object-cover p-2': key === props.currentSection,
                    'h-10 w-10 hover:bg-nav-hover hover:bg-opacity-20': key !== props.currentSection,
                }"
            >
                <a :href="`#${key}`" :aria-label="`Go to the ${key} section`">
                    <component :is="value" />
                </a>
            </li>
        </ul>
    </nav>
</template>

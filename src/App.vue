<script setup>
import SectionContact from '@/components/sections/SectionContact.vue';
import SectionExperience from '@/components/sections/SectionExperience.vue';
import Sectionhome from '@/components/sections/SectionHome.vue';
import SectionProjects from '@/components/sections/SectionProjects.vue';
import SectionServices from '@/components/sections/SectionServices.vue';
import AppFooter from '@/components/layout/AppFooter.vue';
</script>

<template>
    <div class="fixed left-0 top-0 -z-10 h-full w-full bg-[url('/src/assets/images/bg.webp')] bg-[cover] bg-center bg-no-repeat opacity-[8%]"/>
    <Sectionhome />
    <SectionProjects />
    <SectionServices />
    <SectionExperience />
    <SectionContact />
    <AppFooter />
</template>

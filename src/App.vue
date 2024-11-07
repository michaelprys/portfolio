<script setup>
import SectionServices from '@/components/SectionServices.vue';
import SectionIntro from '@/components/SectionIntro.vue';
import SectionProjects from '@/components/SectionProjects.vue';
</script>

<template>
    <div class="pb-16 pt-12">
        <div
            class="bg-cover bg-no-repeat w-full h-full brightness-200 z-20"
            style="background-image: url('./assets/images/bg.jpg')" />
        <SectionIntro />
        <SectionProjects />
        <SectionServices />
    </div>
</template>

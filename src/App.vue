<script setup>
import AppNav from '@/components/layout/AppNav.vue';
import BaseScrollTop from '@/components/base/BaseScrollTop.vue';
import BaseToast from '@/components/base/BaseToast.vue';
import AppFooter from '@/components/layout/AppFooter.vue';
import SectionContact from '@/components/sections/SectionContact.vue';
import SectionExperience from '@/components/sections/SectionExperience.vue';
import SectionHero from '@/components/sections/SectionHero.vue';
import SectionProjects from '@/components/sections/SectionProjects.vue';
import SectionServices from '@/components/sections/SectionServices.vue';
import { onBeforeUnmount, onMounted, ref } from 'vue';

const currentSection = ref('');

function startScroll() {
    const sections = document.querySelectorAll('section[id]');
    const scroll = window.scrollY;

    sections.forEach((current) => {
        const sectionTop = current.offsetTop - 64;
        const sectionId = current.getAttribute('id');

        if (scroll >= sectionTop) {
            currentSection.value = sectionId;
        }
    });
}

onMounted(() => {
    startScroll();
    window.addEventListener('scroll', startScroll);
});
onBeforeUnmount(() => {
    window.removeEventListener('scroll', startScroll);
});
</script>

<template>
    <AppNav :current-section="currentSection" />

    <main>
        <SectionHero />
        <SectionProjects />
        <SectionServices />
        <SectionExperience />
        <SectionContact />
    </main>

    <AppFooter />

    <Teleport to="body">
        <BaseScrollTop />
        <BaseToast />
    </Teleport>
</template>

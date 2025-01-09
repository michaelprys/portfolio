<script setup>
import ItemNav from '@/components/items/ItemNav.vue';
import ItemScrollTop from '@/components/items/ItemScrollTop.vue';
import AppFooter from '@/components/layout/AppFooter.vue';
import SectionContact from '@/components/sections/SectionContact.vue';
import SectionExperience from '@/components/sections/SectionExperience.vue';
import SectionHome from '@/components/sections/SectionHome.vue';
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

// function onIntersect() {}

onMounted(() => {
    startScroll();
    window.addEventListener('scroll', startScroll);
});
onBeforeUnmount(() => {
    window.removeEventListener('scroll', startScroll);
});
</script>

<template>
    <ItemNav :current-section="currentSection" />

    <main>
        <SectionHome />
        <SectionProjects />
        <SectionServices />
        <SectionExperience />
        <SectionContact />
    </main>

    <AppFooter />

    <Teleport to="body">
        <ItemScrollTop />
    </Teleport>
</template>

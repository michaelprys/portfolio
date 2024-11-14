<script setup>
import ItemNav from '@/components/items/ItemNav.vue';
import ItemScrollTop from '@/components/items/ItemScrollTop.vue';
import AppFooter from '@/components/layout/AppFooter.vue';
import SectionContact from '@/components/sections/SectionContact.vue';
import SectionExperience from '@/components/sections/SectionExperience.vue';
import SectionHome from '@/components/sections/SectionHome.vue';
import SectionProjects from '@/components/sections/SectionProjects.vue';
import SectionServices from '@/components/sections/SectionServices.vue';
import { onMounted, ref, onBeforeUnmount, watchEffect  } from 'vue';

const currentSection = ref('');

const startScroll = () => {
    const sections = document.querySelectorAll('section[id]');
    let scroll = window.scrollY;

    sections.forEach((current) => {
        const sectionTop = current.offsetTop - 64;
        const sectionId = current.getAttribute('id');

        if (scroll >= sectionTop) {
            currentSection.value = sectionId;
        }
    });
};

onMounted(() => {
    startScroll();
    window.addEventListener('scroll', startScroll);
});
onBeforeUnmount(() => {
    window.removeEventListener('scroll', startScroll);
});
</script>

<template>
    <ItemNav :currentSection="currentSection" />

    <main>
        <div class="fixed left-0 top-0 -z-10 h-full w-full bg-[url('/src/assets/images/bg.webp')] bg-[cover] bg-center bg-no-repeat opacity-[8%]" />
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

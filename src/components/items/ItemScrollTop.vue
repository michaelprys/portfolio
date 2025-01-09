<script setup>
import IconArrow from '@/components/icons/IconArrow.vue';
import { onBeforeUnmount, onMounted, ref } from 'vue';

const isCrossed = ref(false);

function scrollToTop() {
    if (window.scrollY >= 360) {
        isCrossed.value = true;
    }
    else {
        isCrossed.value = false;
    }
};

onMounted(() => {
    window.addEventListener('scroll', scrollToTop);
});
onBeforeUnmount(() => {
    window.removeEventListener('scroll', scrollToTop);
});
</script>

<template>
    <a
        class="fixed bottom-[8.125rem] right-4 cursor-pointer rounded-lg bg-nav-bg/20 p-1 backdrop-blur-[.5rem]
        transition-transform duration-400 hover:-translate-y-2 md:bottom-[3.125rem] xl:right-[4.1875rem]"
        :class="[isCrossed ? 'translate-y-0' : 'translate-y-[700%]']"
        href="#"
        aria-label="Go to the beginning of the page"
        style="box-shadow: inset 0 0 0 200px rgba(255, 255, 255, 0.08)"
    >
        <IconArrow />
    </a>
</template>

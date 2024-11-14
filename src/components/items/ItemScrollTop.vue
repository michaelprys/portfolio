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
    };
}

onMounted(() => {
    window.addEventListener('scroll', scrollToTop);
});
onBeforeUnmount(() => {
    window.removeEventListener('scroll', scrollToTop);
});
</script>

<template>
    <a
        class="fixed bottom-[50px] right-[67px] cursor-pointer rounded-lg bg-nav-bg p-1 transition-transform duration-400 hover:-translate-y-2"
        :class="[isCrossed ? 'translate-y-0' : 'translate-y-[300%]']" href="#"
        aria-label="Go to the beginning of the page"
    >
        <IconArrow />
    </a>
</template>

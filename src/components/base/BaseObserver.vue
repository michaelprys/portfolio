<script setup>
import { ref, onMounted } from 'vue';

const observerRef = ref(null);
const isVisible = ref(false);

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                isVisible.value = true;
                observer.disconnect();
            }
        });
    });
    if (observerRef.value) {
        observer.observe(observerRef.value);
    }
});
</script>

<template>
    <div ref="observerRef">
        <slot :isVisible="isVisible"></slot>
    </div>
</template>

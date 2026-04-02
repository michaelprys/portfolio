<script setup>
import BaseTooltip from '@/components/base/BaseTooltip.vue';
import { computed, defineAsyncComponent } from 'vue';

const props = defineProps({
    name: String,
    url: String,
    tooltip: { type: Boolean, default: true },
});

const icons = import.meta.glob('@/components/icons/*.vue');

const Icon = computed(() => {
    const path = `/src/components/icons/Icon${props.name.replace(/\s+/g, '')}.vue`;

    const loader = icons[path];

    return loader ? defineAsyncComponent(loader) : null;
});
</script>

<template>
    <div class="flex justify-center">
        <BaseTooltip v-if="tooltip" class="opacity-0 group-hover:opacity-100 group-hover:delay-500">
            {{ name }}
        </BaseTooltip>

        <a :href="url" target="_blank" :aria-label="name">
            <component :is="Icon" v-if="Icon" />
        </a>
    </div>
</template>

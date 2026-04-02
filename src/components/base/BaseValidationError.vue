<script setup>
defineProps({
    validationError: String,
});
</script>

<template>
    <div class="mt-2 px-3 text-sm text-red-500">
        <slot>
            {{ validationError }}
        </slot>
    </div>
</template>

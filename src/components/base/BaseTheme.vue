<script setup>
import IconTheme from '@/components/icons/IconTheme.vue';
import { useTheme } from '@/composables/useTheme.js';

const { themes, currentTheme } = useTheme();

const switchTheme = (id) => {
    document.documentElement.classList.add('theme-switching');
    currentTheme.value = id;
    setTimeout(() => {
        document.documentElement.classList.remove('theme-switching');
    }, 500);
};
</script>

<template>
    <div
        class="fade-in-secondary group fixed right-4 top-4 z-9999 w-12 md:right-6 md:top-6 md:w-40">
        <div
            class="flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-nav-bg/70 backdrop-blur-xl transition-all duration-700 smooth-rotation shadow-2xl group-hover:rounded-2xl group-hover:bg-nav-bg/90"
            style="box-shadow: inset 0 0 0 200px rgba(255, 255, 255, 0.05)">
            <div
                class="flex h-10 w-full items-center justify-center px-0 md:justify-between md:px-4">
                <span
                    class="hidden text-[10px] font-black tracking-[0.2em] uppercase text-white opacity-40 transition-opacity duration-500 md:block group-hover:opacity-100">
                    Theme
                </span>

                <IconTheme
                    class="shrink-0 text-white transition-transform duration-700 group-hover:rotate-90" />
            </div>

            <div
                class="grid grid-rows-[0fr] transition-all duration-700 smooth-rotation group-hover:grid-rows-[1fr]">
                <div class="overflow-hidden">
                    <div class="flex flex-col gap-1 px-2 pb-3">
                        <button
                            v-for="theme in themes"
                            :key="theme.id"
                            @click="switchTheme(theme.id)"
                            class="group/item flex items-center justify-center gap-0 rounded-xl py-3 transition-all duration-300 hover:bg-white/10 active:scale-95 md:justify-start md:gap-3 md:px-3 md:py-2.5">
                            <span
                                class="size-3 shrink-0 rounded-full shadow-sm transition-transform duration-500 group-hover/item:scale-125 md:size-2.5"
                                :class="theme.color" />

                            <span
                                class="w-0 overflow-hidden text-sm font-medium tracking-tight text-white opacity-0 transition-all duration-300 group-hover:pl-0 group-hover:opacity-100 group-hover:w-auto md:w-auto md:opacity-70 group-hover/item:translate-x-1 group-hover/item:opacity-100">
                                <span class="hidden md:inline">{{ theme.label }}</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div
            class="absolute right-0 top-0 -z-10 size-12 rounded-full bg-primary-accent/20 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />
    </div>
</template>

<style scoped>
button {
    outline: none;
    -webkit-tap-highlight-color: transparent;
}

.smooth-rotation {
    transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
}
</style>

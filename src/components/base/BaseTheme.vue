<script setup>
import IconTheme from '@/components/icons/IconTheme.vue';
import { useTheme } from '@/composables/useTheme.js';
import { ref } from 'vue';

const { themes, currentTheme } = useTheme();
const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const switchTheme = (id) => {
    document.documentElement.classList.add('theme-switching');
    currentTheme.value = id;
    isMenuOpen.value = false;
    setTimeout(() => {
        document.documentElement.classList.remove('theme-switching');
    }, 500);
};
</script>

<template>
    <div
        @click="toggleMenu"
        class="fade-in-secondary group fixed right-4 top-4 z-9999 w-12 xl:right-6 xl:top-6 xl:w-40">
        <div
            class="flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-nav-bg/70 shadow-2xl backdrop-blur-xl transition-all duration-700 smooth-rotation"
            :class="
                isMenuOpen
                    ? 'rounded-2xl bg-nav-bg/90'
                    : 'group-hover:rounded-2xl group-hover:bg-nav-bg/90'
            "
            style="box-shadow: inset 0 0 0 200px rgba(255, 255, 255, 0.05)">
            <div
                class="flex h-10 w-full items-center justify-center px-0 xl:justify-between xl:px-4">
                <span
                    class="hidden text-[10px] font-black uppercase tracking-[0.2em] text-white transition-opacity duration-500 xl:block"
                    :class="isMenuOpen ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'">
                    Theme
                </span>

                <IconTheme
                    class="shrink-0 text-white transition-transform duration-700"
                    :class="isMenuOpen ? 'rotate-90' : 'group-hover:rotate-90'" />
            </div>

            <div
                class="grid transition-all duration-700 smooth-rotation"
                :class="
                    isMenuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr] group-hover:grid-rows-[1fr]'
                ">
                <div class="overflow-hidden">
                    <div class="flex flex-col gap-1 px-2 pb-3">
                        <button
                            v-for="theme in themes"
                            :key="theme.id"
                            @click.stop="switchTheme(theme.id)"
                            class="group/item flex items-center justify-center gap-0 rounded-xl py-3 transition-all duration-300 hover:bg-white/10 active:scale-95 xl:justify-start xl:gap-3 xl:px-3 xl:py-2.5">
                            <span
                                class="size-3 shrink-0 rounded-full shadow-sm ring-1 transition-transform duration-500 md:size-2.5"
                                :class="[
                                    theme.color,
                                    isMenuOpen
                                        ? 'scale-125 xl:scale-100 xl:group-hover/item:scale-125'
                                        : 'group-hover/item:scale-125',
                                    currentTheme === theme.id ? 'ring-white/50' : 'ring-white/20',
                                ]" />

                            <span
                                class="hidden xl:block xl:w-0 xl:overflow-hidden xl:text-sm xl:font-medium xl:tracking-tight xl:text-white xl:transition-all xl:duration-300"
                                :class="
                                    isMenuOpen
                                        ? 'xl:opacity-100 xl:w-auto xl:pl-3'
                                        : 'xl:opacity-0 xl:group-hover:opacity-100 xl:group-hover:w-auto xl:group-hover:pl-3'
                                ">
                                {{ theme.label }}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div
            class="absolute right-0 top-0 -z-10 size-12 rounded-full bg-primary-accent/20 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
            :class="{ 'opacity-100': isMenuOpen }" />
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

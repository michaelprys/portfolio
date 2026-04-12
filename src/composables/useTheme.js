import { ref, watch } from 'vue';

const themes = [
    { id: 'theme-mora', variant: 'dark', color: 'bg-[#17171c]', label: 'Mora' },
    { id: 'theme-sona', variant: 'dark', color: 'bg-[#0f172a]', label: 'Sona' },
    { id: 'theme-aura', variant: 'light', color: 'bg-[#f8fafc]', label: 'Aura' },
    { id: 'theme-luna', variant: 'dark', color: 'bg-[#3C3291]', label: 'Luna' },
];

const currentTheme = ref(
    !import.meta.env.SSR ? localStorage.getItem('theme-color') || 'theme-mora' : 'theme-mora',
);
const getTheme = (id) => themes.find((theme) => theme.id === id);

watch(
    currentTheme,
    (newTheme, oldTheme) => {
        if (import.meta.env.SSR) return;

        const element = document.documentElement;
        if (oldTheme) {
            element.classList.remove(oldTheme);
        }
        element.classList.add(newTheme);
        localStorage.setItem('theme-color', newTheme);
    },
    { immediate: true },
);

export const useTheme = () => {
    return { themes, currentTheme, getTheme };
};

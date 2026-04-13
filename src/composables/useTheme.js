import { ref, watch } from 'vue';

export const themes = [
    { id: 'auto', color: 'bg-gradient-to-r from-white to-black', label: 'System' },
    { id: 'theme-mora', color: 'bg-[#17171c]', label: 'Mora' },
    { id: 'theme-sona', color: 'bg-[#0f172a]', label: 'Sona' },
    { id: 'theme-aura', color: 'bg-[#f8fafc]', label: 'Aura' },
    { id: 'theme-luna', color: 'bg-[#3C3291]', label: 'Luna' },
];

export const useTheme = () => {
    const currentTheme = ref(localStorage.getItem('theme-color') || 'auto');

    const resolveAuto = () =>
        matchMedia('(prefers-color-scheme:dark)').matches ? 'theme-mora' : 'theme-aura';

    watch(
        currentTheme,
        (v, old) => {
            if (import.meta.env.SSR) return;

            const el = document.documentElement;

            el.classList.add('theme-switching');

            const theme = v === 'auto' ? resolveAuto() : v;

            if (old && old !== 'auto') el.classList.remove(old);

            el.classList.remove('theme-mora', 'theme-sona', 'theme-aura', 'theme-luna');

            el.classList.add(theme);

            el.style.colorScheme = theme === 'theme-aura' ? 'light' : 'dark';

            localStorage.setItem('theme-color', v);

            requestAnimationFrame(() => {
                el.classList.remove('theme-switching');
            });
        },
        { immediate: true },
    );

    return { themes, currentTheme };
};

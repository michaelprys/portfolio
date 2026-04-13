<template>
    <div class="pointer-events-none absolute left-0 top-0 inline-block">
        <button
            class="transition-colors duration-200 hover:opacity-70 focus:outline-none"
            aria-label="Tooltip" />

        <p
            class="absolute -left-4 top-[-2.4rem] flex items-center justify-center rounded-lg px-2 py-1 text-xs text-secondary-text shadow-lg bg-primary-accent">
            <span class="truncate">
                <slot />
            </span>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute bottom-0.5 left-3 z-[-1] -mb-1.75 size-4 rotate-45"
                viewBox="0 0 24 24">
                <path
                    d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z" />
            </svg>
        </p>
    </div>
</template>

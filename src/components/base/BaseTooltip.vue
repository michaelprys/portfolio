<template>
    <div class="pointer-events-none absolute left-0 top-0 inline-block">
        <button
            class="text-gray-600 transition-colors duration-200 hover:text-blue-500 focus:outline-none dark:text-gray-200 dark:hover:text-blue-400"
            aria-label="Tooltip" />
        <p
            class="absolute -left-4 top-[-2.4rem] flex items-center justify-center rounded-lg bg-white px-2 py-1 text-xs text-gray-600 shadow-lg shadow-gray-200 dark:bg-tooltip-bg dark:text-primary-text dark:shadow-none">
            <span class="truncate">
                <slot />
            </span>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text absolute bottom-0.5 left-3 z-[-1] mb-[-.4375rem] size-4 rotate-45 fill-current text-white dark:text-tooltip-bg"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                    d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z" />
                a
            </svg>
        </p>
    </div>
</template>

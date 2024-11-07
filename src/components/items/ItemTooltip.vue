<template>
    <div class="absolute left-0 top-0 inline-block pointer-events-none">
        <button
            class="text-gray-600 transition-colors duration-200 hover:text-blue-500 focus:outline-none dark:text-gray-200 dark:hover:text-blue-400"></button>
        <p
            class="absolute -left-4 -top-[2.4rem] flex items-center justify-center rounded-lg bg-white px-2 py-1 text-xs text-gray-600 shadow-lg shadow-gray-200 dark:bg-custom-gray-2 dark:text-custom-white dark:shadow-none">
            <span class="truncate">
                <slot />
            </span>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text absolute bottom-0.5 left-3 -z-[1] -mb-[7px] h-4 w-4 rotate-45 transform fill-current text-white dark:text-custom-gray-2"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                    d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"></path>
                a
            </svg>
        </p>
    </div>
</template>

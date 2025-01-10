<script setup>
import { useToast } from '@/use/useToast';

const { isVisible, statusMessage, closeToast } = useToast();
</script>

<template>
    <Transition name="slide">
        <div
            v-if="isVisible"
            class="fixed bottom-40 right-12 z-[1000] max-w-xs rounded-xl text-sm text-white shadow-lg transition-transform duration-400"
            :class="[statusMessage.success ? 'bg-emerald-600' : 'bg-red-600']"
            role="alert"
            tabindex="-1"
            aria-labelledby="toast"
        >
            <div class="flex p-4">
                {{ statusMessage.success || statusMessage.failed }}

                <div class="ms-auto">
                    <button
                        type="button"
                        class="ml-2.5 inline-flex size-5 shrink-0 items-center justify-center rounded-lg text-white opacity-50 transition-opacity hover:text-white hover:opacity-100 focus:opacity-100 focus:outline-none"
                        aria-label="Close"
                        @click="closeToast"
                    >
                        <span class="sr-only">Close</span>
                        <svg
                            class="size-4 shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </Transition>
</template>

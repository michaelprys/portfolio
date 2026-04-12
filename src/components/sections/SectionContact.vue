<script setup>
import IconSpinner from '@/components/icons/IconSpinner.vue';
import BaseObserver from '@/components/base/BaseObserver.vue';
import BaseValidationError from '@/components/base/BaseValidationError.vue';
import { useToast } from '@/composables/useToast';
import emailjs from '@emailjs/browser';
import useVuelidate from '@vuelidate/core';
import { email, minLength, required, maxLength } from '@vuelidate/validators';
import { computed, reactive, ref } from 'vue';
import { useTheme } from '@/composables/useTheme.js';

const { getTheme, currentTheme } = useTheme();

const theme = computed(() => getTheme(currentTheme.value));

const { showToast } = useToast();
const messagePending = ref(false);
const isSubmitted = ref(false);

const form = reactive({
    name: '',
    email: '',
    message: '',
    website: '',
});

const schema = computed(() => {
    return {
        name: { required, minLength: minLength(2), maxLength: maxLength(50) },
        email: { required, email },
        message: { required, minLength: minLength(5), maxLength: maxLength(2000) },
    };
});

const v$ = useVuelidate(schema, form);

const resetForm = (target) => {
    Object.keys(target).forEach((key) => {
        target[key] = '';
    });
};

const sendMessage = () => {
    if (messagePending.value) return;

    if (form.website) {
        showToast('success', 'Message sent successfully');
        resetForm(form);
        return;
    }

    const STORAGE_KEY_COUNT = 'contact_form_count';
    const STORAGE_KEY_TIME = 'contact_form_last_reset';
    const MAX_EMAILS = 5;
    const DAY_IN_MS = 24 * 60 * 60 * 1000;

    const now = Date.now();
    const lastReset = Number(localStorage.getItem(STORAGE_KEY_TIME) || 0);
    let count = Number(localStorage.getItem(STORAGE_KEY_COUNT) || 0);

    if (now - lastReset > DAY_IN_MS) {
        count = 0;
        localStorage.setItem(STORAGE_KEY_TIME, now.toString());
    }

    if (count >= MAX_EMAILS) {
        showToast('failed', 'Daily limit reached. Please try again tomorrow.');
        return;
    }

    isSubmitted.value = true;
    v$.value.$validate();

    if (!v$.value.$error) {
        messagePending.value = true;

        emailjs
            .send(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                form,
                import.meta.env.VITE_PUBLIC_KEY,
            )
            .then(() => {
                count++;
                localStorage.setItem(STORAGE_KEY_COUNT, count.toString());

                showToast('success', 'Message sent successfully');
                resetForm(form);
                isSubmitted.value = false;
                messagePending.value = false;
                v$.value.$reset();
            })
            .catch((error) => {
                console.error(error);
                showToast('failed', 'Failed to send message');
                isSubmitted.value = false;
                messagePending.value = false;
            });
    }
};
</script>

<template>
    <section id="contact" class="pb-10 pt-8 xl:pb-16 xl:pt-12">
        <BaseObserver v-slot="{ isVisible }">
            <h2
                class="text-center text-h1 font-light uppercase"
                :class="isVisible ? 'fade-in-primary' : 'invisible'">
                Contact
            </h2>
            <div class="container" :class="isVisible ? 'fade-in-down' : 'invisible'">
                <form
                    class="mt-10 grid gap-y-4 sm:grid-cols-[23.75rem] sm:justify-center xl:mt-16 xl:grid-cols-[repeat(2,_19.375rem)] xl:gap-x-4"
                    action=""
                    novalidate
                    @submit.prevent="sendMessage">
                    <input
                        type="text"
                        v-model="form.website"
                        class="absolute -z-50 opacity-0"
                        tabindex="-1"
                        autocomplete="off" />

                    <div class="col-span-2 xl:col-span-1 xl:col-start-1">
                        <label class="sr-only" for="name">Your name</label>
                        <input
                            class="w-full rounded-common border-2 border-transparent bg-primary-common px-5 py-4 outline-transparent transition-all duration-300 placeholder:text-muted-text focus:border-border-primary focus:outline"
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            v-model="form.name" />
                        <BaseValidationError
                            v-if="isSubmitted"
                            :validationError="v$.name.$errors[0]?.$message" />
                    </div>
                    <div class="col-span-2 xl:col-span-1 xl:col-start-2">
                        <label class="sr-only" for="email">Your email</label>
                        <input
                            id="email"
                            class="w-full rounded-common border-2 border-transparent bg-primary-common px-5 py-4 outline-transparent transition-all duration-300 placeholder:text-muted-text focus:border-border-primary focus:outline"
                            type="email"
                            name="email"
                            placeholder="Email *"
                            required
                            v-model="form.email" />
                        <BaseValidationError
                            v-if="isSubmitted"
                            :validationError="v$.email.$errors[0]?.$message" />
                    </div>
                    <div class="col-span-2">
                        <label class="sr-only" for="msg">Enter your message</label>
                        <textarea
                            id="msg"
                            class="min-h-[240px] w-full resize-none rounded-3xl border-2 border-transparent bg-primary-common p-5 text-primary-text outline-transparent transition-all duration-300 placeholder:text-muted-text focus:border-border-primary focus:outline"
                            name="message"
                            placeholder="Enter Your Message"
                            required
                            v-model="form.message" />
                        <BaseValidationError
                            v-if="isSubmitted"
                            :validationError="v$.message.$errors[0]?.$message" />
                    </div>
                    <div
                        class="col-span-2 mx-auto w-full max-w-full xl:row-start-3 xl:max-w-[225px]">
                        <button
                            class="mt-5 w-full rounded-full bg-primary-accent py-4 text-center text-primary-text transition-colors duration-400 disabled:bg-zinc-300 disabled:text-zinc-500"
                            disabled
                            v-if="messagePending">
                            <span class="flex items-center justify-center gap-2">
                                <span>Please wait</span>
                                <IconSpinner class="animate-spin" />
                            </span>
                        </button>
                        <button
                            class="mt-5 w-full cursor-pointer rounded-full bg-primary-accent py-4 text-center transition-colors duration-400 hover:bg-primary-accent/90"
                            :class="
                                theme?.variant === 'dark'
                                    ? 'text-secondary-text'
                                    : 'text-primary-common'
                            "
                            v-else>
                            <span>Send message</span>
                        </button>
                    </div>
                </form>
            </div>
        </BaseObserver>
    </section>
</template>

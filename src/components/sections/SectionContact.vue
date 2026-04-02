<script setup>
import IconSpinner from '@/components/icons/IconSpinner.vue';
import BaseObserver from '@/components/base/BaseObserver.vue';
import BaseValidationError from '@/components/base/BaseValidationError.vue';
import { useToast } from '@/composables/useToast';
import emailjs from '@emailjs/browser';
import useVuelidate from '@vuelidate/core';
import { email, minLength, required } from '@vuelidate/validators';
import { computed, reactive, ref } from 'vue';

const { showToast } = useToast();

const messagePending = ref(false);

const form = reactive({
    name: '',
    email: '',
    message: '',
});

const schema = computed(() => {
    return {
        name: { required, minLength: minLength(1) },
        email: { required, email },
        message: { required, minLength: minLength(1) },
    };
});

const v$ = useVuelidate(schema, form);

const resetForm = (target) => {
    Object.keys(target).forEach((key) => {
        target[key] = '';
    });
};

const isSubmitted = ref(false);

const sendMessage = () => {
    if (messagePending.value) {
        return;
    }

    isSubmitted.value = true;

    v$.value.$validate();

    if (!v$.value.$error) {
        messagePending.value = true;
        emailjs
            .send(
                `${import.meta.env.VITE_SERVICE_ID}`,
                `${import.meta.env.VITE_TEMPLATE_ID}`,
                form,
                {
                    publicKey: `${import.meta.env.VITE_PUBLIC_KEY}`,
                },
            )
            .then(() => {
                showToast('success', 'Message was sent');
                resetForm(form);
                isSubmitted.value = false;
                messagePending.value = false;
            })
            .catch(() => {
                () => {
                    showToast('failed', "Message wasn't sent");
                    isSubmitted.value = false;
                    messagePending.value = false;
                };
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
                            class="mt-5 w-full rounded-full bg-primary-accent py-4 text-center text-primary-text transition-colors duration-400 hover:bg-primary-accent/90"
                            :class="{
                                'disabled:border-zinc-400 disabled:bg-zinc-300 disabled:text-zinc-500 disabled:shadow-none':
                                    messagePending,
                            }"
                            disabled
                            v-if="messagePending">
                            <span class="flex items-center justify-center gap-2">
                                <span>Please wait</span>
                                <IconSpinner class="animate-spin" />
                            </span>
                        </button>
                        <button
                            class="mt-5 w-full cursor-pointer rounded-full bg-primary-accent py-4 text-center text-primary-text transition-colors duration-400 hover:bg-primary-accent/90"
                            v-else>
                            <span>Send message</span>
                        </button>
                    </div>
                </form>
            </div>
        </BaseObserver>
    </section>
</template>

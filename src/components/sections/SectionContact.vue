<script setup>
import ItemObserver from '@/components/items/ItemObserver.vue';
import ItemValidationError from '@/components/items/ItemValidationError.vue';
import emailjs from '@emailjs/browser';
import IconSpinner from '@/components/icons/IconSpinner.vue';
import { ref, reactive, computed } from 'vue';
import { useToast } from '@/use/useToast';

const { showToast } = useToast();

const messagePending = ref(false);

const formInputs = reactive({
    name: '',
    email: '',
    message: ''
});

const validationError = reactive({
    name: null,
    email: null,
    message: null
});

const isEmptyErrorField = ref(false);

const validationSchema = {
    name: {
        validate: (value) => value.trim().length > 0,
        errorMessage: 'Name field should not be empty'
    },
    email: {
        validate: (value) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value),
        errorMessage: 'Please enter a valid email address'
    },
    message: {
        validate: (value) => value.trim().length > 0,
        errorMessage: 'Message field should not be empty'
    }
};

const isValidated = computed(() => {
    return Object.keys(validationSchema).every((key) => {
        return validationSchema[key].validate(formInputs[key]);
    });
});

const showValidationError = () => {
    Object.keys(validationSchema).forEach((key) => {
        const isValidInput = validationSchema[key].validate(formInputs[key]);

        if (!isValidInput) {
            validationError[key] = validationSchema[key].errorMessage;
        } else {
            validationError[key] = null;
        }
    });
};

const resetFields = (target) => {
    Object.keys(target).forEach((key) => {
        target[key] = '';
    });
};

const sendMessage = () => {
    if (!isValidated.value) {
        showValidationError();
        return;
    }

    if (!isEmptyErrorField.value) {
        resetFields(validationError);
        isEmptyErrorField.value = true;
    }

    if (messagePending.value) {
        return;
    }

    messagePending.value = true;

    emailjs
        .send(
            `${import.meta.env.VITE_SERVICE_ID}`,
            `${import.meta.env.VITE_TEMPLATE_ID}`,
            formInputs,
            {
                publicKey: `${import.meta.env.VITE_PUBLIC_KEY}`
            }
        )
        .then(
            (response) => {
                showToast('success', 'Message was sent');
                messagePending.value = false;
            },
            (err) => {
                showToast('failed', "Message wasn't sent");
                messagePending.value = false;
            }
        );
    resetFields(formInputs);
};
</script>

<template>
    <section id="contact" class="pb-10 pt-8 xl:pb-16 xl:pt-12">
        <ItemObserver v-slot="{ isVisible }">
            <h2
                class="text-center text-h1 font-light uppercase"
                :class="isVisible ? 'fade-in-primary' : 'invisible'"
            >
                Contact
            </h2>
            <div class="container" :class="isVisible ? 'fade-in-down' : 'invisible'">
                <form
                    class="mt-10 grid gap-y-4 sm:grid-cols-[23.75rem] sm:justify-center xl:mt-16 xl:grid-cols-[repeat(2,_19.375rem)] xl:gap-x-4"
                    action=""
                    novalidate
                    @submit.prevent="sendMessage"
                >
                    <div class="col-span-2 xl:col-span-1 xl:col-start-1">
                        <label class="sr-only" for="name">Your name</label>
                        <input
                            class="w-full rounded-common border-2 border-transparent bg-primary-common px-5 py-4 outline-transparent transition-all duration-300 placeholder:text-muted-text focus:border-border-primary focus:outline"
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            v-model="formInputs.name"
                        />
                        <ItemValidationError :validationError="validationError.name" />
                    </div>
                    <div class="col-span-2 xl:col-span-1 xl:col-start-2">
                        <label class="sr-only" for="email"> Your email </label>
                        <input
                            id="email"
                            class="w-full rounded-common border-2 border-transparent bg-primary-common px-5 py-4 outline-transparent transition-all duration-300 placeholder:text-muted-text focus:border-border-primary focus:outline"
                            type="email"
                            name="email"
                            placeholder="Email *"
                            required
                            v-model="formInputs.email"
                        />
                        <ItemValidationError :validationError="validationError.email" />
                    </div>
                    <div class="col-span-2">
                        <label class="sr-only" for="msg">Enter your message</label>
                        <textarea
                            id="msg"
                            class="min-h-[240px] w-full resize-none rounded-3xl border-2 border-transparent bg-primary-common p-5 text-primary-text outline-transparent transition-all duration-300 placeholder:text-muted-text focus:border-border-primary focus:outline"
                            name="message"
                            placeholder="Enter Your Message"
                            required
                            v-model="formInputs.message"
                        />
                        <ItemValidationError :validationError="validationError.message" />
                    </div>
                    <div
                        class="col-span-2 mx-auto w-full max-w-full xl:row-start-3 xl:max-w-[225px]"
                    >
                        <button
                            class="mt-5 w-full rounded-full bg-primary-accent py-4 text-center text-primary-text transition-colors duration-400 hover:bg-primary-accent/90"
                            :class="{
                                'disabled:border-zinc-400 disabled:bg-zinc-300 disabled:text-zinc-500 disabled:shadow-none':
                                    messagePending
                            }"
                            disabled
                            v-if="messagePending"
                        >
                            <span class="flex items-center justify-center gap-2">
                                <span>Please wait</span>
                                <IconSpinner class="animate-spin" />
                            </span>
                        </button>
                        <button
                            class="mt-5 w-full rounded-full bg-primary-accent py-4 text-center text-primary-text transition-colors duration-400 hover:bg-primary-accent/90"
                            v-else
                        >
                            <span>Send message</span>
                        </button>
                    </div>
                </form>
            </div>
        </ItemObserver>
    </section>
</template>

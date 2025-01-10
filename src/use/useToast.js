import { ref, reactive } from 'vue';

const isVisible = ref(false);

const statusMessage = reactive({
    success: '',
    failed: ''
});

let timer = null;

const showToast = (type, message) => {
    if (type === 'success') {
        statusMessage.success = message;
        statusMessage.failed = '';
    } else if (type === 'failed') {
        statusMessage.failed = message;
        statusMessage.success = '';
    }

    isVisible.value = true;

    if (timer) {
        clearTimeout(timer);
    }

    timer = setTimeout(() => {
        isVisible.value = false;

        setTimeout(() => {
            statusMessage.success = '';
            statusMessage.failed = '';
        }, 400);
    }, 3000);
};

const closeToast = () => {
    isVisible.value = false;

    if (timer) {
        clearTimeout(timer);
        timer = null;
    }

    setTimeout(() => {
        statusMessage.success = '';
        statusMessage.failed = '';
    }, 400);
};

export const useToast = () => {
    return {
        isVisible,
        statusMessage,
        showToast,
        closeToast
    };
};

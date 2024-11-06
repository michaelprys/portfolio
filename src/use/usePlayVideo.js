import { ref } from 'vue';

export const usePlayVideo = () => {
    const videoRef = ref(null);
    const state = ref(false);

    const playVideo = () => {
        if (videoRef.value) {
            videoRef.value.play();
            state.value = true;
        }
    };

    const stopVideo = () => {
        if (videoRef.value) {
            videoRef.value.pause();
            videoRef.value.currentTime = 0;
            state.value = false;
        }
    };

    return {
        state,
        videoRef,
        playVideo,
        stopVideo,
    };
};

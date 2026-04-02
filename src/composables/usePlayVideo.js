import { ref, onMounted, onUnmounted } from 'vue';

export function usePlayVideo() {
    const videoRef = ref(null),
        state = ref(false),
        isPlaying = ref(false),
        isTablet = ref(window.innerWidth < 1200);

    const playVideo = () => {
        if (videoRef.value && !isTablet.value) {
            isPlaying.value = true;
            videoRef.value.play();
            state.value = true;
        }
    };

    const stopVideo = () => {
        if (videoRef.value) {
            isPlaying.value = false;
            videoRef.value.pause();
            videoRef.value.currentTime = 0;
            state.value = false;
        }
    };

    const updateIsTablet = () => {
        isTablet.value = window.innerWidth < 1200;
    };

    onMounted(() => {
        window.addEventListener('resize', updateIsTablet);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', updateIsTablet);
    });

    return {
        state,
        isPlaying,
        isTablet,
        videoRef,
        playVideo,
        stopVideo,
    };
}

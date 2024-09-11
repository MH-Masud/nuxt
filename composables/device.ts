import { ref, onMounted, onUnmounted } from 'vue';

export function device() {
    const isMobile = ref(false);

    const handleResize = () => {
        if (typeof window !== 'undefined') {
            isMobile.value = window.innerWidth <= 768; // Adjust breakpoint as needed
        }
    };

    onMounted(() => {
        if (typeof window !== 'undefined') {
            handleResize(); // Set initial value on mount
            window.addEventListener('resize', handleResize);
        }
    });

    onUnmounted(() => {
        if (typeof window !== 'undefined') {
            window.removeEventListener('resize', handleResize);
        }
    });

    return { isMobile };
}

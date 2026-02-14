import { ref, onMounted, onUnmounted, type Ref } from 'vue';

export interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useIntersectionObserver(options: UseIntersectionObserverOptions = {}) {
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px', once = true } = options;

  const elementRef: Ref<HTMLElement | null> = ref(null);
  const isIntersecting = ref(false);

  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    if (!elementRef.value) return;
    if (typeof IntersectionObserver === 'undefined') {
      isIntersecting.value = true;
      return;
    }

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            isIntersecting.value = true;
            if (once && observer && elementRef.value) {
              observer.unobserve(elementRef.value);
            }
          } else if (!once) {
            isIntersecting.value = false;
          }
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(elementRef.value);
  });

  onUnmounted(() => {
    observer?.disconnect();
    observer = null;
  });

  return { elementRef, isIntersecting };
}

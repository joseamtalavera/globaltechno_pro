import { ref, watch, type Ref } from 'vue';

/**
 * Animates a numeric counter from 0 to target when isVisible becomes true.
 * Returns a reactive ref with the current value.
 */
export function useAnimatedCounter(
  target: number,
  isVisible: Ref<boolean>,
  duration = 1600
) {
  const current = ref(0);
  let rafId: number | null = null;

  watch(
    isVisible,
    (visible) => {
      if (!visible) return;
      if (rafId) cancelAnimationFrame(rafId);

      const start = performance.now();
      const ease = (t: number) => 1 - Math.pow(1 - t, 3); // ease-out cubic

      const tick = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        current.value = Math.round(target * ease(progress));
        if (progress < 1) {
          rafId = requestAnimationFrame(tick);
        }
      };

      rafId = requestAnimationFrame(tick);
    },
    { immediate: true }
  );

  return current;
}

import { useIntersectionObserver, type UseIntersectionObserverOptions } from './useIntersectionObserver';

export function useScrollAnimation(options: UseIntersectionObserverOptions = {}) {
  const { elementRef, isIntersecting: isVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -80px 0px',
    once: true,
    ...options
  });

  return { elementRef, isVisible };
}

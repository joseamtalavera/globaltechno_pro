import type { ObjectDirective } from 'vue';

interface ElWithCleanup extends HTMLElement {
  __magneticCleanup?: () => void;
  __tiltCleanup?: () => void;
}

type DirectiveValue = boolean | undefined;

// Local declaration: avoids needing to extend .nuxt/tsconfig.json from
// the project tsconfig just to type a single Nuxt plugin entry point.
// At build time the actual Nuxt-bundled defineNuxtPlugin is used.
declare function defineNuxtPlugin(
  plugin: (nuxtApp: {
    vueApp: { directive: (name: string, def: ObjectDirective<HTMLElement, DirectiveValue>) => void };
  }) => void
): unknown;

function supportsHover(): boolean {
  if (typeof window === 'undefined') return false;
  if (window.matchMedia('(hover: none)').matches) return false;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
  return true;
}

function attachMagnetic(el: ElWithCleanup): void {
  let raf: number | null = null;
  let pending = '';

  const onMove = (e: MouseEvent): void => {
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    pending = `translate(${(x * 0.18).toFixed(2)}px, ${(y * 0.22).toFixed(2)}px)`;
    if (raf === null) {
      raf = requestAnimationFrame(() => {
        el.style.transform = pending;
        raf = null;
      });
    }
  };

  const onLeave = (): void => {
    if (raf !== null) {
      cancelAnimationFrame(raf);
      raf = null;
    }
    el.style.transform = '';
  };

  el.addEventListener('mousemove', onMove);
  el.addEventListener('mouseleave', onLeave);

  el.__magneticCleanup = (): void => {
    el.removeEventListener('mousemove', onMove);
    el.removeEventListener('mouseleave', onLeave);
    if (raf !== null) cancelAnimationFrame(raf);
    el.style.transform = '';
  };
}

function attachTilt(el: ElWithCleanup): void {
  let raf: number | null = null;
  let pending = '';

  const onMove = (e: MouseEvent): void => {
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    pending = `perspective(900px) rotateY(${(x * 4).toFixed(2)}deg) rotateX(${(-y * 4).toFixed(2)}deg)`;
    if (raf === null) {
      raf = requestAnimationFrame(() => {
        el.style.transform = pending;
        raf = null;
      });
    }
  };

  const onLeave = (): void => {
    if (raf !== null) {
      cancelAnimationFrame(raf);
      raf = null;
    }
    el.style.transform = '';
  };

  el.addEventListener('mousemove', onMove);
  el.addEventListener('mouseleave', onLeave);

  el.__tiltCleanup = (): void => {
    el.removeEventListener('mousemove', onMove);
    el.removeEventListener('mouseleave', onLeave);
    if (raf !== null) cancelAnimationFrame(raf);
    el.style.transform = '';
  };
}

const magneticDirective: ObjectDirective<ElWithCleanup, DirectiveValue> = {
  // No-op on the server. Without this, Vue's ssrGetDirectiveProps
  // crashes when it tries to call getSSRProps on an unregistered
  // directive — which kills SSR for any page that mounts a
  // <UiButton magnetic>, e.g. the navbar.
  getSSRProps() {
    return {};
  },
  mounted(el, binding) {
    if (binding.value === false) return;
    if (!supportsHover()) return;
    attachMagnetic(el);
  },
  updated(el, binding) {
    const wasOn = !!el.__magneticCleanup;
    const shouldOn = binding.value !== false && supportsHover();
    if (wasOn && !shouldOn) {
      el.__magneticCleanup?.();
      delete el.__magneticCleanup;
    } else if (!wasOn && shouldOn) {
      attachMagnetic(el);
    }
  },
  unmounted(el) {
    el.__magneticCleanup?.();
    delete el.__magneticCleanup;
  }
};

const tiltDirective: ObjectDirective<ElWithCleanup, DirectiveValue> = {
  getSSRProps() {
    return {};
  },
  mounted(el, binding) {
    if (binding.value === false) return;
    if (!supportsHover()) return;
    attachTilt(el);
  },
  updated(el, binding) {
    const wasOn = !!el.__tiltCleanup;
    const shouldOn = binding.value !== false && supportsHover();
    if (wasOn && !shouldOn) {
      el.__tiltCleanup?.();
      delete el.__tiltCleanup;
    } else if (!wasOn && shouldOn) {
      attachTilt(el);
    }
  },
  unmounted(el) {
    el.__tiltCleanup?.();
    delete el.__tiltCleanup;
  }
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive(
    'magnetic',
    magneticDirective as ObjectDirective<HTMLElement, DirectiveValue>
  );
  nuxtApp.vueApp.directive(
    'tilt',
    tiltDirective as ObjectDirective<HTMLElement, DirectiveValue>
  );
});

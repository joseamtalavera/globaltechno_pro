<script setup lang="ts">
const { init } = useTheme();

// Inline pre-mount script: read localStorage and apply data-theme +
// data-accent to <html> before first paint to avoid FOUC.
useHead({
  script: [
    {
      tagPriority: 'high',
      innerHTML:
        "(function(){try{var r=localStorage.getItem('gt:tweak');if(!r)return;var t=JSON.parse(r);var h=document.documentElement;if(typeof t.accent==='number'&&t.accent>=0&&t.accent<4)h.setAttribute('data-accent',String(t.accent));if(t.theme==='dark')h.setAttribute('data-theme','dark');}catch(e){}})();"
    }
  ]
});

onMounted(() => {
  init();
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <ClientOnly>
    <SharedThemeSwitcher />
  </ClientOnly>
</template>

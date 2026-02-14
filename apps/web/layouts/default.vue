<template>
  <div class="site-wrapper">
    <LayoutNavbar />
    <main id="content">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>

<style scoped>
.site-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>

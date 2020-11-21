<template>
  <div class="text-dark bg-light dark:text-light dark:bg-dark">
    <Navbar />
    <div class="nuxt-container">
      <Nuxt />
    </div>
  </div>
</template>

<style>
.nuxt-container {
  @apply relative;
}
@screen sm {
  .nuxt-container {
    left: 5rem;
    width: calc(100% - 5rem);
  }
}

</style>

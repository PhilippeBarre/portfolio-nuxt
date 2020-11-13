<template>
  <div class="transition duration-700 ease-in-out">
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
.dark-mode {
  @apply text-light bg-dark;
}
.light-mode {
  @apply text-dark bg-light;
}
</style>

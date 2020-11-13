<template>
  <div class="min-h-screen flex justify-center items-center text-center mx-auto">
    <div>
      <Logo />
      <h1 class="title text-light-primary dark:text-dark-primary">
        portfolio-nuxt
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-green-600 dark:bg-red-500"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  }
}
</script>

<style>
/* .container { */
  /* @apply min-h-screen flex justify-center items-center text-center mx-auto; */
/* } */

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  letter-spacing: 1px;
}
</style>

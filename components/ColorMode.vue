<template>
  <div>
    <button class="rounded-full h-16 w-16 absolute bottom-0 right-0 bg-dark dark:bg-light text-light dark:text-dark m-4 flex justify-center items-center" @click="changeMode">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        height="32"
        width="32"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path v-if="!isDark" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    isDark () {
      return this.$colorMode.preference === 'dark'
    }
  },
  methods: {
    changeMode () {
      this.$colorMode.preference = this.$colorMode.preference === 'light' ? 'dark' : 'light'
    }
  }
}
</script>

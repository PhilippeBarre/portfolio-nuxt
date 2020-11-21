export const state = () => ({
  currentTheme: 'light'
})

export const mutations = {
  setTheme(state, theme) {
    state.currentTheme = theme
    localStorage.theme = state.currentTheme
    mutations.reloadTheme()
  },
  toggle(state) {
    if (state.currentTheme === 'light') {
      mutations.setTheme(state, 'dark')
    } else {
      mutations.setTheme(state, 'light')
    }
  },
  reloadTheme() {
    document.querySelector('html').classList.remove('dark')
    if (localStorage.theme === 'dark' || (!'theme' in localStorage && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.querySelector('html').classList.add('dark')
    } else if (localStorage.theme === 'dark') {
      document.querySelector('html').classList.add('dark')
    }
  }
}
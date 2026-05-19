import { ref } from 'vue'

const saved     = localStorage.getItem('portfolio-theme')
const sysDark   = window.matchMedia('(prefers-color-scheme: dark)').matches
const isDark    = ref(saved ? saved === 'dark' : sysDark)

function applyTheme(dark) {
  document.documentElement.classList.toggle('dark',  dark)
  document.documentElement.classList.toggle('light', !dark)
}

applyTheme(isDark.value)

export function useDarkMode() {
  function toggle() {
    isDark.value = !isDark.value
    applyTheme(isDark.value)
    localStorage.setItem('portfolio-theme', isDark.value ? 'dark' : 'light')
  }

  return { isDark, toggle }
}

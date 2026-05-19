<template>
  <header
    class="fixed top-0 w-full z-50 backdrop-blur-md border-b u-border u-hdr"
    style="transition: background-color 0.35s ease;"
  >
    <div class="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20 w-full max-w-container-max mx-auto">

      <RouterLink
        to="/"
        class="font-display font-bold text-display-lg-mobile tracking-tighter u-text no-underline"
      >
        PORTFOLIO
      </RouterLink>

      <nav class="hidden md:flex items-center gap-gutter">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="font-display text-label-sm font-bold tracking-widest uppercase no-underline"
          :class="isActive(link.to)
            ? 'u-accent border-b-2 pb-1'
            : 'u-muted hover:u-text'"
          :style="isActive(link.to)
            ? { borderColor: 'var(--c-primary)', color: 'var(--c-primary)' }
            : { color: 'var(--c-on-sv)', transition: 'color 0.2s' }"
        >{{ link.label }}</RouterLink>
      </nav>

      <div class="flex items-center gap-3">
        <button
          class="theme-btn"
          @click="toggle"
          :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <span class="material-symbols-outlined" style="font-size: 20px;">
            {{ isDark ? 'light_mode' : 'dark_mode' }}
          </span>
        </button>

        <RouterLink
          to="/about"
          class="btn-solid hidden md:inline-flex no-underline"
          style="padding: 12px 24px; font-size: 11px;"
        >GET IN TOUCH</RouterLink>

        <button class="md:hidden theme-btn" @click="mobileOpen = !mobileOpen">
          <span class="material-symbols-outlined" style="font-size: 22px;">
            {{ mobileOpen ? 'close' : 'menu' }}
          </span>
        </button>
      </div>
    </div>

    <Transition name="nav-slide">
      <div
        v-if="mobileOpen"
        class="md:hidden px-margin-mobile pb-6 pt-2 flex flex-col gap-4 border-t u-border u-bg"
        style="transition: background-color 0.35s ease;"
      >
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="font-display text-label-sm font-bold tracking-widest uppercase py-3 no-underline"
          :style="{ color: isActive(link.to) ? 'var(--c-primary)' : 'var(--c-on-sv)' }"
          @click="mobileOpen = false"
        >{{ link.label }}</RouterLink>
        <RouterLink
          to="/about"
          class="btn-solid mt-2 no-underline"
          style="padding: 12px 24px;"
          @click="mobileOpen = false"
        >GET IN TOUCH</RouterLink>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useDarkMode } from '@/composables/useDarkMode.js'

const route = useRoute()
const mobileOpen = ref(false)
const { isDark, toggle } = useDarkMode()

const navLinks = [
  { to: '/', label: 'Work' },
  { to: '/about', label: 'About' },
]

function isActive(path) {
  return path === '/' ? route.path === '/' : route.path.startsWith(path)
}
</script>

<template>
  <footer
    class="border-t u-border u-bg mt-20"
    style="transition: background-color 0.35s ease;"
  >
    <div class="flex flex-col md:flex-row justify-between items-center py-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto gap-unit">

      <span class="font-display font-bold text-label-sm tracking-widest uppercase u-text">
        PORTFOLIO
      </span>

      <nav class="flex flex-wrap justify-center gap-gutter my-8 md:my-0">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="font-display text-label-sm uppercase tracking-widest no-underline"
          style="color: var(--c-on-sv); transition: color 0.2s;"
          @mouseover="(e) => (e.target.style.color = 'var(--c-primary)')"
          @mouseleave="(e) => (e.target.style.color = 'var(--c-on-sv)')"
        >{{ link.label }}</RouterLink>

        <a
          v-for="social in socials"
          :key="social.label"
          :href="social.href"
          target="_blank"
          rel="noopener noreferrer"
          class="font-display text-label-sm uppercase tracking-widest no-underline"
          style="color: var(--c-on-sv); transition: color 0.2s;"
          @mouseover="(e) => (e.target.style.color = 'var(--c-primary)')"
          @mouseleave="(e) => (e.target.style.color = 'var(--c-on-sv)')"
        >{{ social.label }}</a>
      </nav>

      <p class="font-display text-label-sm u-muted tracking-widest uppercase opacity-60 text-center">
        © 2026 PORTFOLIO
      </p>
    </div>
  </footer>
</template>

<script setup>
const navLinks = [
  { to: '/', label: 'Work' },
  { to: '/about', label: 'About' },
]

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/wachixii_/' },
]
</script>

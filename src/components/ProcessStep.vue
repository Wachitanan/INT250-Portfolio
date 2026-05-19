<template>
  <div
    class="p-12 border u-border flex flex-col"
    :class="offset ? 'md:translate-y-12' : ''"
    style="background-color: var(--c-surface);"
  >
    <span
      class="font-display font-bold u-accent opacity-20 block mb-8"
      style="font-size: 72px; line-height: 1;"
    >{{ num }}</span>
    <h3 class="font-display font-semibold text-headline-md mb-4 u-text">{{ title }}</h3>
    <p class="font-body text-body-md u-muted">{{ body }}</p>
  </div>
</template>

<script setup>
defineProps({
  num:    { type: String,  required: true },
  title:  { type: String,  required: true },
  body:   { type: String,  required: true },
  offset: { type: Boolean, default: false },
})
</script>

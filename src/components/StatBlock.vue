<template>
  <div class="flex flex-col">
    <span class="font-display font-bold text-headline-md u-text">{{ value }}</span>
    <span class="font-display text-label-sm tracking-widest uppercase mt-1 u-muted">{{ label }}</span>
  </div>
</template>

<script setup>
defineProps({
  value: { type: String, required: true },
  label: { type: String, required: true },
})
</script>

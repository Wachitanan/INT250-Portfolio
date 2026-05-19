<template>
  <div class="exp-row border-b u-border py-8 flex flex-col md:flex-row md:items-center justify-between">
    <div>
      <h3 class="font-body text-body-lg font-bold u-text">{{ title }}</h3>
      <p class="font-display text-label-sm tracking-wider mt-1 u-muted">{{ company }}</p>
    </div>
    <p class="font-display text-label-sm mt-4 md:mt-0 u-accent">{{ period }}</p>
  </div>
</template>

<script setup>
defineProps({
  title:   { type: String, required: true },
  company: { type: String, required: true },
  period:  { type: String, required: true },
})
</script>

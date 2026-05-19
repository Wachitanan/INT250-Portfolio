<template>
  <span class="chip">{{ label }}</span>
</template>

<script setup>
defineProps({
  label: { type: String, required: true },
})
</script>

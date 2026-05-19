<template>
  <RouterLink
    :to="`/project/${project.id}`"
    class="project-card cursor-pointer block no-underline"
    :class="[project.span, project.offset]"
  >
    <!-- Image wrapper -->
    <div
      class="relative overflow-hidden border u-border"
      :class="project.aspect"
    >
      <img
        :src="project.img"
        :alt="project.title"
        class="card-img w-full h-full object-cover"
      />
      <div class="card-overlay" />
    </div>

    <!-- Meta -->
    <div class="mt-6 flex justify-between items-start">
      <div>
        <h3 class="font-display font-semibold text-headline-md u-text" style="transition: color 0.3s;">
          {{ project.title }}
        </h3>
        <div class="flex gap-4 mt-2">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="font-display text-label-sm u-muted uppercase tracking-widest"
          >{{ tag }}</span>
        </div>
      </div>
      <span class="material-symbols-outlined u-muted" style="font-size: 36px;">
        arrow_outward
      </span>
    </div>
  </RouterLink>
</template>

<script setup>
defineProps({
  project: { type: Object, required: true },
})
</script>

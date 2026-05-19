<template>
  <main v-if="project" class="pt-20">

    <section class="w-full relative overflow-hidden" style="height: min(819px, 70vh);">
      <img
        :src="project.heroImg"
        :alt="project.title"
        class="w-full h-full object-cover grayscale"
      />
      <div
        class="absolute inset-0"
        style="background: linear-gradient(to top, rgba(0,0,0,.82) 0%, transparent 60%);"
      />
      <div
        class="absolute px-margin-mobile md:px-margin-desktop max-w-container-max"
        style="bottom: 80px; left: 0; right: 0; margin: auto;"
      >

        <h1
          class="font-display text-display-lg-mobile md:text-display-lg leading-tight mb-unit"
          style="color: #e1e3e4;"
        >{{ project.title }}</h1>
        <p class="font-body text-body-lg max-w-xl" style="color: #c1c7d3;">
          {{ project.subtitle }}
        </p>
      </div>
    </section>

    <section class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-section-gap">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div class="md:col-span-4">
          <h2 class="font-display text-label-sm u-accent tracking-widest uppercase mb-gutter">
            Overview
          </h2>
        </div>
        <div class="md:col-span-8">
          <p class="font-display text-headline-md u-text mb-gutter leading-tight">
            {{ project.brief }}
          </p>
          <p class="font-body text-body-lg u-muted" style="max-width: 720px;">
            {{ project.briefBody }}
          </p>
        </div>
      </div>
    </section>

    <section class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-section-gap">
      <div class="max-w-container-max mx-auto overflow-hidden rounded-2xl">
        <Transition name="fade">
          <img
            :src="project.fullImg"
            :alt="project.title + ' — ภาพรวมโปรเจกต์'"
            class="w-full rounded-2xl cursor-pointer transition duration-300 hover:scale-[1.01]"
            @click="selectedImage = project.fullImg"
          />
        </Transition>
        <Transition name="fade">
          <div v-if="showMore" class="space-y-4 mt-4">
            <img
              v-for="(img, index) in project.workImg"
              :key="index"
              :src="img"
              :alt="project.title + ' — ภาพงาน ' + (index + 1)"
              class="w-full rounded-2xl cursor-pointer transition duration-300 hover:scale-[1.01]"
              @click="selectedImage = img"
            />
          </div>
        </Transition>
        <Transition name="fade">
          <div v-if="showMore" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            <img
              v-for="(img, index) in project.workImgMB"
              :key="index"
              :src="img"
              :alt="project.title + ' — ภาพมือถือ ' + (index + 1)"
              class="w-full rounded-2xl cursor-pointer transition duration-300 hover:scale-[1.01]"
              @click="selectedImage = img"
            />
          </div>
        </Transition>
      </div>

      <div class="mt-6 flex justify-center">
        <button
          @click="showMore = !showMore"
          class="rounded-xl border px-5 py-2 transition hover:bg-black hover:text-white"
        >
          {{ showMore ? 'Show less' : 'See more...' }}
        </button>
      </div>
    </section>

    <section class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-section-gap">
      <h2 class="font-display text-label-sm u-accent tracking-widest uppercase mb-gutter">
        Benefits
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <ProcessStep
          v-for="(step, i) in project.process"
          :key="step.num"
          :num="step.num"
          :title="step.title"
          :body="step.body"
          :offset="i === 1"
        />
      </div>
    </section>

    <Transition name="fade">
      <div
        v-if="selectedImage"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        @click="selectedImage = null"
      >
        <img
          :src="selectedImage"
          class="max-h-[90vh] max-w-[90vw] rounded-2xl"
          @click.stop
        />
        <button
          class="absolute top-4 right-4 text-white text-3xl"
          @click="selectedImage = null"
        >
          ×
        </button>
      </div>
    </Transition>

    <section class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap text-center">
      <span class="font-display text-label-sm u-muted uppercase tracking-widest mb-gutter block">
        Next Project
      </span>
      <RouterLink
        :to="`/project/${nextProject.id}`"
        class="next-link inline-block no-underline"
      >
        <h2 class="next-title font-display text-display-lg-mobile md:text-display-lg u-text">
          {{ nextProject.title.toUpperCase() }}
        </h2>
        <div class="next-bar" />
      </RouterLink>
    </section>

  </main>

  <main v-else class="pt-40 text-center px-margin-mobile">
    <h1 class="font-display text-display-lg-mobile u-text mb-8">Project not found.</h1>
    <RouterLink to="/" class="btn-solid">← Back to Work</RouterLink>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import ProcessStep from '@/components/ProcessStep.vue'
import { PROJECTS } from '@/data/projects.js'

const showMore = ref(false)
const selectedImage = ref(null)
const props = defineProps({ id: String })
const route = useRoute()
const pid = computed(() => props.id || route.params.id)

const project = computed(() => PROJECTS.find(p => p.id === pid.value) || null)

const nextProject = computed(() => {
  const idx = PROJECTS.findIndex(p => p.id === pid.value)
  return PROJECTS[(idx + 1) % PROJECTS.length]
})
</script>

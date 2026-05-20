<template>
  <main class="pt-20" id="top">

    <section class="min-h-[819px] flex flex-col justify-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-section-gap">
      <div style="max-width: 900px;">
        <SectionLabel>Portfolio</SectionLabel>

        <h1 class="font-display text-display-lg-mobile md:text-display-lg u-text mb-gutter leading-tight">
          พื้นที่รวบรวมผลงาน<br class="hidden lg:block" />
          โปรเจกต์ และประสบการณ์ด้านการพัฒนาเว็บไซต์
        </h1>

        <div class="flex flex-col md:flex-row gap-gutter mt-12">
          <button class="btn-solid" @click="scrollToWork">View My Work</button>
          <RouterLink to="/about" class="btn-ghost">Profile</RouterLink>
        </div>
      </div>
    </section>

    <section
      id="work"
      class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-section-gap"
    >
      <div class="flex justify-between items-end mb-16">
        <div>
          <h2 class="font-display text-headline-md u-text">เลือกดูผลงาน</h2>
          <p class="font-body text-body-md u-muted mt-2">
            ผลงานรวมจากวิชา INT250 CSS FRAMEWORK เลือกดูผลงานที่สนใจ
          </p>
        </div>
        <span class="hidden md:block font-display text-label-sm u-muted">SCROLL TO EXPLORE</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter md:gap-y-32">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
    </section>

    <div class="border-y u-border py-5 overflow-hidden u-sl">
      <div class="marquee-track">
        <span
          v-for="(item, i) in marqueeItems"
          :key="i"
          class="font-display text-label-sm u-muted tracking-widest uppercase shrink-0"
        >
          <span class="u-accent">✦</span>&ensp;{{ item }}
        </span>
      </div>
    </div>

    <section
      class="u-cta py-section-gap px-margin-mobile md:px-margin-desktop"
      style="transition: background-color 0.35s ease;"
    >
      <div class="max-w-container-max mx-auto text-center">
        <h2 class="font-display text-display-lg-mobile md:text-display-lg u-text mb-8">
          This is only a small part of what I've created.
        </h2>
        <p class="font-body text-body-lg u-muted max-w-[600px] mx-auto mb-12">
          If you'd like to see more of my work, stay tuned for what's coming next.
        </p>
        <button class="btn-accent" @click="scrollToTop">Back to Top</button>
      </div>
    </section>

  </main>
</template>

<script setup>
import SectionLabel from '@/components/SectionLabel.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { PROJECTS, MARQUEE_ITEMS } from '@/data/projects.js'

const projects = PROJECTS
const marqueeItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

function scrollToWork() {
  document.getElementById('work').scrollIntoView({ behavior: 'smooth' })
}
function scrollToTop() {
  document.getElementById('top').scrollIntoView({ behavior: 'smooth' })
}
</script>

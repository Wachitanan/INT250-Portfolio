<template>
  <main class="pt-40">

    <section class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">

        <div class="md:col-span-5 relative group">
          <div
            class="aspect-[4/5] overflow-hidden border u-border"
            style="background-color: var(--c-surface);"
          >
            <img
              :src="portrait"
              alt="วชิตะนันท์ สุโพธิ์ — Frontend Developer"
              class="card-img w-full h-full object-cover"
            />
          </div>
          <div
            class="absolute -bottom-4 -right-4 w-24 h-24"
            style="background-color: rgba(164,201,255,.08); border: 1px solid rgba(164,201,255,.18); z-index: -1;"
          />
        </div>

        <div class="md:col-span-7 md:pl-gutter mt-12 md:mt-0">
          <SectionLabel>Profile</SectionLabel>

          <h1 class="font-display text-display-lg-mobile md:text-display-lg u-text mb-8 leading-tight">
            About me
          </h1>

          <div class="space-y-6 u-muted" style="max-width: 640px;">
            <p class="font-sans text-body-lg">
              สวัสดีครับผม ซี<br> นายวชิตะนันท์ สุโพธิ์
            </p>
            <p class="font-sans text-body-lg">
              กำลังศึกษาอยู่ที่มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี ปริญญาตรีชั้นปีที่2 ในคณะเทคโนโลยีสาระสนเทศ
              สาขาเทคโนโลยีสาระสนเทศ(IT30) เป็นนักศึกษาสาย Full stack
            </p>
            <p class="font-sans text-body-lg">
              ปัจจุบันสนใจการพัฒนาเว็บไซต์ฝั่ง Frontend โดยใช้ JavaScript, Vue และ TailwindCSS รวมถึงการออกแบบ Interface ที่เรียบง่ายแต่มีรายละเอียดที่น่าสนใจ
            </p>
          </div>

          <div class="mt-12 flex gap-gutter">
            <StatBlock
              v-for="s in stats"
              :key="s.label"
              :value="s.value"
              :label="s.label"
            />
          </div>
        </div>

      </div>
    </section>

    <section
      class="u-sl py-32 border-y u-border"
      style="transition: background-color 0.35s ease;"
    >
      <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter">

          <div class="lg:col-span-7">
            <h2 class="font-display text-headline-md u-text mb-12">Contact</h2>
            <div>
              <ExperienceRow
                v-for="job in experience"
                :key="job.company"
                :title="job.title"
                :company="job.company"
                :period="job.period"
              />
            </div>
          </div>

          <div class="lg:col-span-4 lg:col-start-9 mt-16 lg:mt-0">
            <h2 class="font-display text-headline-md u-text mb-12">Coding Skills</h2>

            <div class="flex flex-wrap gap-3">
              <SkillChip v-for="skill in skills" :key="skill" :label="skill" />
            </div>

            <div
              class="mt-16 p-8 border u-border"
              style="background-color: var(--c-bg); transition: background-color 0.35s ease;"
            >
              <h4 class="font-display text-label-sm u-accent tracking-widest uppercase mb-4">
                Currently Exploring
              </h4>
              <p class="font-body text-body-md u-muted">
                Still exploring, still learning, and still growing through new experiences.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="py-section-gap px-margin-mobile text-center">
      <h2 class="font-display text-display-lg-mobile md:text-display-lg u-text mb-12">
        Built from ideas,<br> improved through experience.
      </h2>
      <div class="flex flex-col md:flex-row justify-center gap-gutter">
        <RouterLink to="/" class="btn-solid">VIEW MY WORK</RouterLink>
      </div>
    </section>

  </main>
</template>

<script setup>
import SectionLabel from '@/components/SectionLabel.vue'
import StatBlock from '@/components/StatBlock.vue'
import SkillChip from '@/components/SkillChip.vue'
import ExperienceRow from '@/components/ExperienceRow.vue'
import { IMAGES, EXPERIENCE, SKILLS } from '@/data/projects.js'

const portrait = IMAGES.portrait
const experience = EXPERIENCE
const skills = SKILLS

const stats = [
  { value: '20', label: 'Years Old.' },
  { value: 'IT30', label: 'KMUTT' },
]
</script>

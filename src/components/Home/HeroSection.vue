<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goToDetailPage() {
  router.push({ name: 'BlogPost' })
}
</script>

<template>
  <!-- Cover -->
  <section class="hero relative flex flex-col w-full text-base font-bold text-white min-h-screen">
    <img loading="lazy" src="../../assets/images/misc/cover.png" alt="Hero background image"
      class="object-cover absolute inset-0 size-full" />
    <div class="relative flex flex-col items-start px-20 py-40 w-full max-md:px-5 max-md:py-24">
      <p class="font-semibold leading-none uppercase tracking-[3px]">
        <span class="font-medium">Posted on</span>
        <span class="font-black">startup</span>
      </p>
      <h1
        class="mt-6 text-6xl tracking-tighter leading-[64px] w-[803px] max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
        Step-by-step guide to choosing great font pairs
      </h1>
      <p class="mt-6 leading-7 text-blue-600">
        By <span>James West</span> | May 23, 2022
      </p>
      <p class="mt-4 leading-7 w-[599px] max-md:max-w-full">
        Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident.
      </p>

      <!-- Read More button with router push -->
      <button
        class="gap-3 px-12 py-4 mt-12 mb-0 text-lg leading-none bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 max-md:px-5 max-md:mt-10 max-md:mb-2.5 text-white"
        @click="goToDetailPage">
        Read More ->
      </button>
    </div>
  </section>
</template>

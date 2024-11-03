<script lang="ts">
interface Props {
  imageUrl: string;
  category: string;
  title: string;
  description: string;
}

export default {
  name: 'BlogCard',
  props: {
    imageUrl: { type: String, required: true },
    category: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true }
  }
}
</script>

<template>
  <article class="flex gap-5 max-md:flex-col gap-16">
    <div class="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
      <img :src="imageUrl" :alt="title" loading="lazy" class="object-contain grow w-full aspect-[1.54] max-md:mt-8 max-md:max-w-full" />
    </div>
    <div class="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
      <div class="flex flex-col self-stretch my-auto text-base max-md:mt-10 max-md:max-w-full">
        <span class="self-start font-semibold leading-none text-amber-300 uppercase tracking-[3px]">{{ category }}</span>
        <h2 class="mt-5 mr-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:mr-2.5 max-md:max-w-full">{{ title }}</h2>
        <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">{{ description }}</p>
      </div>
    </div>
  </article>
</template>


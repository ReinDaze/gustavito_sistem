<template>
    <article class="flex flex-col">
      <section class="p-20 w-full bg-x-lightengrey max-md:px-5 max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col">
          <div class="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
            <header class="flex flex-col items-start self-stretch my-auto w-full font-medium max-md:mt-10 max-md:max-w-full">
              <p class="text-base leading-none text-gray-800 uppercase tracking-[3px]">Featured Post</p>
              <h1 class="self-stretch mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:max-w-full">
                Step-by-step guide to choosing great font pairs
              </h1>
              <time datetime="2022-05-23" class="mt-4 text-sm leading-none text-amber-300">
                By <span class="text-amber-300">John Doe</span> l May 23, 2022
              </time>
              <p class="self-stretch mt-4 text-base leading-7 text-zinc-500 max-md:max-w-full">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
              <button 
                class="gap-3 px-12 py-4 mt-8 text-lg font-bold leading-none text-white bg-blue-600 max-md:px-5"
                @click="handleReadMore"
                aria-label="Read more about font pairs guide"
              >
                Read More &gt;
              </button>
            </header>
          </div>
          <figure class="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
            <img 
              loading="lazy" 
              src="../../assets/images/misc/priaputih.png" 
              alt="Visual representation of font pairing guide"
              class="object-contain grow w-full aspect-[1.43] max-md:mt-10 max-md:max-w-full"
            />
          </figure>
        </div>
      </section>
    </article>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'BlogHeader',
    methods: {
      handleReadMore(): void {
        this.$router.push({ name: 'BlogPost' })
      }
    }
  })
  </script>
  
  <style scoped>
  builder-component {
    max-width: none !important;
  }
  </style>
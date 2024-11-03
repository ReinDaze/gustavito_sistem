<template>
  <div class="flex flex-col items-center self-stretch px-20 mt-12 mb-32 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full ">
    <form class="w-[768px]">
        <label for="fullName" class="sr-only">Full Name</label>
        <input type="text" id="fullName" name="fullName" placeholder="Full Name" class="gap-2.5 self-stretch p-6 mt-8 text-base leading-7 text-gray-800 rounded-sm border border-solid border-zinc-500 border-opacity-50 max-md:px-5 w-full" required />

        <label for="email" class="sr-only">Your Email</label>
        <input type="email" id="email" name="email" placeholder="Your Email" class="gap-2.5 self-stretch p-6 mt-4 text-base leading-7 text-gray-800 rounded-sm border border-solid border-zinc-500 border-opacity-50 max-md:px-5 w-full" required />

        <div class="flex flex-wrap gap-4 items-center mt-3.5 w-full text-base leading-7 text-gray-800 whitespace-nowrap max-md:max-w-full">
          <div class="flex flex-1 shrink gap-10 justify-between items-center self-stretch p-6 my-auto border border-solid basis-0 border-zinc-500 border-opacity-50 min-w-[240px] max-md:px-5">
            <label for="province" class="sr-only">Province</label>
            <select id="province" name="province" class="w-full bg-transparent">
              <option value="">Province</option>
              <option value="">Jawa Tengah</option>
              <option value="">Jawa Barat</option>
              <option value="">Jawa Timur</option>
            </select>
          </div>

          <div class="flex flex-1 shrink gap-10 justify-between items-center self-stretch p-6 my-auto border border-solid basis-0 border-zinc-500 border-opacity-50 min-w-[240px] max-md:px-5">
            <label for="city" class="sr-only">City</label>
            <select id="city" name="city" class="w-full bg-transparent">
              <option value="">City</option>
              <option value="">Surakarta</option>
              <option value="">Surabayar</option>
            </select>
          </div>
        </div>

        <label for="message" class="sr-only">Message</label>
        <textarea id="message" name="message" placeholder="Message" class="gap-2.5 px-6 pt-6 pb-24 mt-5 text-base leading-7 text-gray-800 whitespace-nowrap rounded-sm border border-solid border-zinc-500 border-opacity-50 min-h-[144px] max-md:px-5 w-full" required></textarea>

        <button type="submit" class="w-full px-16 py-4 mt-4 text-2xl font-bold leading-none text-white bg-blue-600 hover:bg-blue-700 max-md:px-5 max-md:max-w-full">Send Message</button>
      </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ContactForm',
});
</script>
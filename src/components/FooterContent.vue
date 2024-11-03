<script setup lang="ts">
import SocialMedia from './Style/SocialMedia.vue';
</script>

<template>
<footer class="flex overflow-hidden flex-col justify-center px-20 py-14 w-full bg-gray-800 max-md:px-5">
      <div class="flex flex-wrap gap-5 justify-between items-start w-full text-base leading-7 text-white">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b86090eecc293afe9a71f3a454f5e61e35752578247a2d0b9054764a650c72b0?placeholderIfAbsent=true&apiKey=43173da6028646f7a188adcc787551eb" alt="Footer logo" class="object-contain shrink-0 max-w-full aspect-[5] w-[140px]" />
        <nav class="flex gap-6">
          <a href="/" class="hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300">Home</a>
          <a href="/blog" class="hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300">Blog</a>
          <a href="/about" class="hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300">About us</a>
          <a href="/contact" class="hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300">Contact us</a>
          <a href="/privacy" class="hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300">Privacy Policy</a>
        </nav>
      </div>

      <section class="newsletter px-16 py-20 mt-14 w-full bg-white bg-opacity-10 max-md:px-5 max-md:mt-10">
        <div class="flex gap-5 max-md:flex-col">
          <div class="w-6/12 max-md:w-full">
            <h2 class="text-4xl font-bold tracking-tighter leading-10 text-white">
              Subscribe to our newsletter to get latest updates and news
            </h2>
          </div>
          <div class="w-6/12 max-md:w-full">
            <form class="flex flex-wrap gap-6 mt-1 w-full" action="/subscribe" method="POST">
              <label for="email" class="sr-only">Enter Your Email</label>
              <input 
                type="email" 
                id="email"
                name="email"
                placeholder="Enter Your Email"
                class="grow px-6 py-6 text-base leading-loose border border-solid border-neutral-600 text-zinc-500"
                required
              />
              <button type="submit" class="gap-3 px-12 py-4 text-lg font-bold leading-none text-white whitespace-nowrap bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <address class="flex flex-wrap gap-5 justify-between mt-12 text-base leading-7 text-white not-italic">
        <p class="opacity-70">Finstreet 118 2561 Fintown</p>
        <div class="social-links mt-3">
          <SocialMedia></SocialMedia>
        </div>
      </address>
      <p class="text-base leading-7 text-white opacity-70">
        Hello@finsweet.com 020 7993 2905
      </p>
    </footer>
</template>

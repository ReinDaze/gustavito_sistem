<template>
    <main class="flex flex-col self-stretch px-20 mt-6 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <h1 class="self-center mt-32 px-24 text-4xl font-bold tracking-tighter leading-none text-gray-800 max-md:mt-10 mb-10 max-md:px-5 max-md:text-center">List Of Authors</h1>
    <section class="self-stretch mt-12 max-md:mt-10 max-md:max-w-full">
      <div class="flex gap-5 max-md:flex-col">
        <article class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
          <router-link to="/author" class="flex flex-col grow items-center px-14 py-10 w-full leading-none bg-zinc-100 max-md:px-5 max-md:mt-8 hover:bg-orange-100">
            <img loading="lazy" src="../../assets/images/AboutUsImg/org1.png" />
            <h3 class="mt-5 text-3xl font-bold tracking-tighter text-gray-800 text-center">Floyd Miles</h3>
            <p class="self-stretch text-sm text-center text-zinc-500">Content Writer @Company</p>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebc67470106e9d6ddb8d97607421331f6f354cb1b1e23797f2a80557f0a32123?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7" alt="" class="object-contain mt-5 w-28 max-w-full aspect-[6.58]" />
          </router-link>
        </article>

        <article class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <router-link to="/author" class="flex flex-col grow px-14 py-10 w-full leading-none bg-zinc-100 max-md:px-5 max-md:mt-8 hover:bg-orange-100">
            <img loading="lazy" src="../../assets/images/AboutUsImg/org2.png" alt="Dianne Russell profile picture" class="object-contain self-center w-32 max-w-full rounded-full aspect-square" />
            <h3 class="mt-5 text-3xl font-bold tracking-tighter text-gray-800 text-center">Dianne Russell</h3>
            <p class="text-sm text-center text-zinc-500 max-md:mx-1 text-center">Content Writer @Company</p>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c737a15e8641608f3bbb864c62419ea81bfd3f5952df9b3d45d82271639e19e3?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7" alt="" class="object-contain self-center mt-5 w-28 max-w-full aspect-[6.58]" />
          </router-link>
        </article>

        <article class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <router-link to="/author" class="flex flex-col grow px-14 py-10 w-full leading-none bg-zinc-100 max-md:px-5 max-md:mt-8 hover:bg-orange-100">
            <img loading="lazy" src="../../assets/images/AboutUsImg/org3.png" alt="Jenny Wilson profile picture" class="object-contain self-center w-32 max-w-full rounded-full aspect-square" />
            <h3 class="mt-5 text-3xl font-bold tracking-tighter text-center text-gray-800 max-md:mx-2 self-center">Jenny Wilson</h3>
            <p class="text-sm text-center text-zinc-500 self-center">Content Writer @Company</p>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc55ab028047697ab5b90532579bc7397e1c0e81d75d597937d10d08edea8e56?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7" alt="" class="object-contain self-center mt-5 w-28 max-w-full aspect-[6.58]" />
          </router-link>
        </article>

        <article class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <router-link to="/author" class="flex flex-col grow items-center px-11 py-10 w-full leading-none bg-zinc-100 max-md:px-5 max-md:mt-8 hover:bg-orange-100">
            <img loading="lazy" src="../../assets/images/AboutUsImg/org4.png" alt="Leslie Alexander profile picture" class="object-contain w-32 max-w-full rounded-full aspect-square" />
            <h3 class="self-center mt-5 text-3xl font-bold tracking-tighter text-gray-800">Leslie Alexander</h3>
            <p class="text-sm text-center text-zinc-500">Content Writer @Company</p>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/82c7e43556de8acc2afaa42d9cd1bd37a1c091eae64b9c97eb96c92b5aecc228?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7" alt="" class="object-contain mt-5 w-28 max-w-full aspect-[6.58]" />
          </router-link>
        </article>
      </div>
    </section>
    </main>
</template>
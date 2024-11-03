<template>
    <!-- Artikel -->
    <div class="flex flex-col items center self-stretch px-20 mt-32 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full ">
        <section class="rounded-none mb-32">
            <div class="flex items-center gap-8 max-md:flex-col">
                <div class="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
                    <header class="flex flex-col mt-20 font-bold text-gray-800 max-md:mt-10 max-md:max-w-full">
                        <h2 class="self-start text-4xl tracking-tighter leading-none text-gray-800">
                            Our team of creatives
                        </h2>
                        <p class="mt-4 text-2xl leading-8 max-md:max-w-full">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                        </p>
                        <p class="mt-4 text-base leading-7 max-md:max-w-full">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat.
                        </p>
                    </header>
                </div>
                <div class="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
                    <img loading="lazy" src="../../assets/images/misc/tangan.png" alt="Our team of creatives"
                        class="object-contain grow w-full rounded-none aspect-[1.42] max-md:mt-10 max-md:max-w-full" />
                </div>
            </div>
        </section>

        <section class="rounded-none ">
            <div class="flex gap-8 max-md:flex-col">
                <div class="flex flex-col mr-5 w-[57%] max-md:ml-0 max-md:w-full">
                    <img loading="lazy" src="../../assets/images/misc/3org.png"
                        alt="Illustration representing why we started this blog"
                        class="object-contain grow w-full rounded-none aspect-[1.42] max-md:mt-10 max-md:max-w-full" />
                </div>
                <div class="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
                    <article
                        class="flex z-10 flex-col self-stretch my-auto font-bold text-gray-800 max-md:mt-10 max-md:mr-0 max-md:max-w-full">
                        <h2 class="self-start text-4xl tracking-tighter leading-none text-gray-800">
                            Why we started this Blog
                        </h2>
                        <p class="mt-4 text-2xl leading-8 max-md:mr-2 max-md:max-w-full">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                        </p>
                        <p class="mt-4 text-base leading-7 max-md:max-w-full">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat.
                        </p>
                    </article>
                </div>
            </div>
        </section>


        <section class="mt-12 w-full max-w-screen-xl max-md:mt-10 max-md:max-w-full">
            <div class="flex gap-5 max-md:flex-col">
                <AuthorCard name="Floyd Miles"
                    image="https://cdn.builder.io/api/v1/image/assets/TEMP/cbb5b48e8a0e3435ce4903b4895eb803d0ff99360b8dbd5238033ee86b332802?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7"
                    socialImage="https://cdn.builder.io/api/v1/image/assets/TEMP/4a1fc50f46bf273a90b4bac8e4a88cc0c79964beb69e67e7e98bc6f7d8eed088?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7" />
                <AuthorCard name="Dianne Russell"
                    image="https://cdn.builder.io/api/v1/image/assets/TEMP/df167acd41ee793d00ba35e2ce34c50c5f652c16adcdf7949de617bea0c833ca?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7"
                    socialImage="https://cdn.builder.io/api/v1/image/assets/TEMP/bea1ee509ed6841870d79added88755dfd69384d03874b7db7b44e4ba1df5a4b?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7"
                    bgColor="bg-orange-50" />
                <AuthorCard name="Jenny Wilson"
                    image="https://cdn.builder.io/api/v1/image/assets/TEMP/17128d3f16192b6d9a2897ed55c2dd5653847191b32aede0d5eb2b2981001a2b?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7"
                    socialImage="https://cdn.builder.io/api/v1/image/assets/TEMP/880550dff75ad9d8c6b0eb6ceabe4bbcbc8d349005a5832be1cf3210b1665fcb?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7" />
                <AuthorCard name="Leslie Alexander"
                    image="https://cdn.builder.io/api/v1/image/assets/TEMP/49588a299ec37a02269b93840924e68c1cf9ceeff427886f687287c7b8ea0531?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7"
                    socialImage="https://cdn.builder.io/api/v1/image/assets/TEMP/8c515c053bfe0cd1820e4f4f411715c9e881bee99929ade04b5c3adcb77e039c?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7" />
            </div>
        </section>


        <section class="mt-8 w-full max-w-screen-xl max-md:max-w-full">
            <div class="flex gap-5 max-md:flex-col">
                <AuthorCard name="Guy Hawkins"
                    image="https://cdn.builder.io/api/v1/image/assets/TEMP/1bfedb1771dcafc9a4e6ee706eefd8b77e051aa4de1acb07eb9c8dd97ea8ab0f?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7"
                    socialImage="https://cdn.builder.io/api/v1/image/assets/TEMP/ed6b0a9eaa1230b867d49952fbdc5a1b4360869610e20f29d07169d9a324c50c?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7" />
                <AuthorCard name="Eleanor Pena"
                    image="https://cdn.builder.io/api/v1/image/assets/TEMP/dbcab6c4a5585af33780a0d19bc2b30c05aabf6a297ebeeaacaf01b30fe8b871?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7"
                    socialImage="https://cdn.builder.io/api/v1/image/assets/TEMP/f8094ff289f97110f4d0c62177f8c6aa4e8f9fa8d45e5de73e9137861ddda8aa?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7" />
                <AuthorCard name="Robert Fox"
                    image="https://cdn.builder.io/api/v1/image/assets/TEMP/02d1e4d58df9e5736c188bb6d71140f2139020415709b7549978c7752796fc71?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7"
                    socialImage="https://cdn.builder.io/api/v1/image/assets/TEMP/1f851b106541fc728993c757f0c97e4a55521d94e03a9df43dcb312d413ae375?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7" />
                <AuthorCard name="Jacob Jones"
                    image="https://cdn.builder.io/api/v1/image/assets/TEMP/d1810b65c03aa60060c84fef24f09a9e2bcdf924d905b7085184894fea7d1df8?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7"
                    socialImage="https://cdn.builder.io/api/v1/image/assets/TEMP/b5efd03e3fb0ecdddd846a3a27058bebb6d1c44a1a389f56c8778b49f25e0a26?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7" />
            </div>
        </section>

        <h2 class="self-center mt-24 text-4xl font-bold tracking-tighter leading-none text-gray-800 max-md:mt-10">List
            of Authors</h2>
        <main class="flex flex-col px-20 w-full max-md:px-5 max-md:max-w-full">
            <section class="self-stretch mt-12 max-md:mt-10 max-md:max-w-full">
                <div class="flex gap-5 max-md:flex-col">
                    <article class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                        <router-link to="/author"
                            class="flex flex-col grow items-center px-14 py-10 w-full leading-none bg-zinc-100 max-md:px-5 max-md:mt-8 hover:bg-orange-100">
                            <img loading="lazy" src="../../assets/images/AboutUsImg/org1.png" alt="Floyd Miles profile picture"
                                class="object-contain w-32 max-w-full rounded-full aspect-square" />
                            <h3 class="mt-5 text-3xl font-bold tracking-tighter text-center text-gray-800">Floyd Miles
                            </h3>
                            <p class="self-stretch text-sm text-center text-zinc-500">Content Writer @Company</p>
                            <img loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebc67470106e9d6ddb8d97607421331f6f354cb1b1e23797f2a80557f0a32123?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7"
                                alt="" class="object-contain mt-5 w-28 max-w-full aspect-[6.58]" />
                        </router-link>
                    </article>

                    <article class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                        <router-link to="/author"
                            class="flex flex-col grow px-14 py-10 w-full leading-none bg-zinc-100 max-md:px-5 max-md:mt-8 hover:bg-orange-100">
                            <img loading="lazy" src="../../assets/images/AboutUsImg/org2.png"
                                alt="Dianne Russell profile picture"
                                class="object-contain self-center w-32 max-w-full rounded-full aspect-square" />
                            <h3 class="mt-5 text-3xl font-bold tracking-tighter text-center text-gray-800">Dianne
                                Russell</h3>
                            <p class="text-sm text-center text-zinc-500 max-md:mx-1">Content Writer @Company</p>
                            <img loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c737a15e8641608f3bbb864c62419ea81bfd3f5952df9b3d45d82271639e19e3?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7"
                                alt="" class="object-contain self-center mt-5 w-28 max-w-full aspect-[6.58]" />
                        </router-link>
                    </article>

                    <article class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                        <router-link to="/author"
                            class="flex flex-col grow px-14 py-10 w-full leading-none bg-zinc-100 max-md:px-5 max-md:mt-8 hover:bg-orange-100">
                            <img loading="lazy" src="../../assets/images/AboutUsImg/org3.png"
                                alt="Jenny Wilson profile picture"
                                class="object-contain self-center w-32 max-w-full rounded-full aspect-square" />
                            <h3 class="mt-5 text-3xl font-bold tracking-tighter text-center text-gray-800 max-md:mx-2">
                                Jenny Wilson</h3>
                            <p class="text-sm text-center text-zinc-500">Content Writer @Company</p>
                            <img loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc55ab028047697ab5b90532579bc7397e1c0e81d75d597937d10d08edea8e56?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7"
                                alt="" class="object-contain self-center mt-5 w-28 max-w-full aspect-[6.58]" />
                        </router-link>
                    </article>

                    <article class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                        <router-link to="/author"
                            class="flex flex-col grow items-center px-11 py-10 w-full leading-none bg-zinc-100 max-md:px-5 max-md:mt-8 hover:bg-orange-100">
                            <img loading="lazy" src="../../assets/images/AboutUsImg/org4.png"
                                alt="Leslie Alexander profile picture"
                                class="object-contain w-32 max-w-full rounded-full aspect-square" />
                            <h3 class="self-center mt-5 text-3xl font-bold tracking-tighter text-gray-800">Leslie
                                Alexander</h3>
                            <p class="text-sm text-center text-zinc-500">Content Writer @Company</p>
                            <img loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/82c7e43556de8acc2afaa42d9cd1bd37a1c091eae64b9c97eb96c92b5aecc228?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7"
                                alt="" class="object-contain mt-5 w-28 max-w-full aspect-[6.58]" />
                        </router-link>
                    </article>

                </div>

                <div class="flex gap-5 max-md:flex-col mt-10">
                    <article class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                        <router-link to="/author"
                            class="flex flex-col grow items-center px-14 py-10 w-full leading-none bg-zinc-100 max-md:px-5 max-md:mt-8 hover:bg-orange-100">
                            <img loading="lazy" src="../../assets/images/AboutUsImg/org5.png" alt="Floyd Miles profile picture"
                                class="object-contain w-32 max-w-full rounded-full aspect-square" />
                            <h3 class="mt-5 text-3xl font-bold text-center tracking-tighter text-gray-800">Guy Hawkins
                            </h3>
                            <p class="self-stretch text-sm text-center text-zinc-500">Content Writer @Company</p>
                            <img loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebc67470106e9d6ddb8d97607421331f6f354cb1b1e23797f2a80557f0a32123?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7"
                                alt="" class="object-contain mt-5 w-28 max-w-full aspect-[6.58]" />
                        </router-link>
                    </article>

                    <article class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                        <router-link to="/author"
                            class="flex flex-col grow px-14 py-10 w-full leading-none bg-zinc-100 max-md:px-5 max-md:mt-8 hover:bg-orange-100">
                            <img loading="lazy" src="../../assets/images/AboutUsImg/org6.png"
                                alt="Dianne Russell profile picture"
                                class="object-contain self-center w-32 max-w-full rounded-full aspect-square" />
                            <h3 class="mt-5 text-3xl font-bold text-center tracking-tighter text-gray-800">Eleanor Pena
                            </h3>
                            <p class="text-sm text-center text-zinc-500 max-md:mx-1">Content Writer @Company</p>
                            <img loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c737a15e8641608f3bbb864c62419ea81bfd3f5952df9b3d45d82271639e19e3?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7"
                                alt="" class="object-contain self-center mt-5 w-28 max-w-full aspect-[6.58]" />
                        </router-link>
                    </article>

                    <article class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                        <router-link to="/author"
                            class="flex flex-col grow px-14 py-10 w-full leading-none bg-zinc-100 max-md:px-5 max-md:mt-8 hover:bg-orange-100">
                            <img loading="lazy" src="../../assets/images/AboutUsImg/org7.png"
                                alt="Jenny Wilson profile picture"
                                class="object-contain self-center w-32 max-w-full rounded-full aspect-square" />
                            <h3 class="mt-5 text-3xl font-bold text-center tracking-tighter text-gray-800 max-md:mx-2">
                                Robert Fox</h3>
                            <p class="text-sm text-center text-zinc-500">Content Writer @Company</p>
                            <img loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc55ab028047697ab5b90532579bc7397e1c0e81d75d597937d10d08edea8e56?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7"
                                alt="" class="object-contain self-center mt-5 w-28 max-w-full aspect-[6.58]" />
                        </router-link>
                    </article>

                    <article class="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                        <router-link to="/author"
                            class="flex flex-col grow items-center px-11 py-10 w-full leading-none bg-zinc-100 max-md:px-5 max-md:mt-8 hover:bg-orange-100">
                            <img loading="lazy" src="../../assets/images/AboutUsImg/org8.png"
                                alt="Leslie Alexander profile picture"
                                class="object-contain w-32 max-w-full rounded-full aspect-square" />
                            <h3 class="self-stretch mt-5 text-3xl font-bold text-center tracking-tighter text-gray-800">
                                Jacob Jones</h3>
                            <p class="text-sm text-center text-zinc-500">Content Writer @Company</p>
                            <img loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/82c7e43556de8acc2afaa42d9cd1bd37a1c091eae64b9c97eb96c92b5aecc228?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7"
                                alt="" class="object-contain mt-5 w-28 max-w-full aspect-[6.58]" />
                        </router-link>
                    </article>
                </div>
            </section>
        </main>
    </div>
</template>
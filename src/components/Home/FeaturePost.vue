<script setup lang="ts">
</script>

<template>
    <main class="flex flex-col self-stretch px-20 mt-32 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">

        <header
            class="flex gap-5 justify-between text-4xl font-bold leading-none text-gray-800 max-md:mr-0.5 max-md:max-w-full">
            <h1 class="tracking-tighter">Featured Post</h1>
            <h2 class="tracking-tighter">All Posts</h2>
            <a href="#all-posts" class="my-auto text-base leading-7 text-amber-300" tabindex="0">View All</a>
        </header>

        <section class="mt-8 max-md:max-w-full">
            <div class="flex gap-5 max-md:flex-col">
                <article class="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
                    <div
                        class="flex flex-col items-start p-8 mx-auto w-full font-bold max-md:px-5 max-md:mt-8 max-md:max-w-full">
                        <img loading="lazy" src="../../assets/images/misc/white-building.png" />
                        <p class="mt-8 text-sm font-medium leading-none text-amber-300">
                            By <a href="#author" class="text-amber-300">John Doe</a> | May 23, 2022
                        </p>
                        <h3
                            class="self-stretch mt-4 text-3xl tracking-tighter leading-10 text-gray-800 max-md:max-w-full">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                        </h3>
                        <p class="mt-4 text-base leading-7 text-zinc-500 max-md:max-w-full">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident.
                        </p>
                        <a href="#read-more"
                            class="gap-3 px-12 py-4 mt-8 text-lg leading-none text-white bg-blue-600 hover:bg-blue-700 max-md:px-5"
                            tabindex="0">
                            Read More &gt;
                        </a>
                    </div>
                </article>

                <aside class="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
                    <div class="flex flex-col grow max-md:mt-8 max-md:max-w-full">
                        <article
                            class="flex flex-col items-start py-7 pr-20 pl-8 bg-white hover:bg-orange-100 max-md:px-5 max-md:max-w-full">
                            <p class="text-sm font-medium leading-none text-amber-300">
                                By <a href="#author" class="text-amber-300">John Deo</a> | Aug 23, 2021
                            </p>
                            <h3 class="mt-2 text-2xl font-bold leading-8 text-gray-800">
                                8 Figma design systems that you can download for free today.
                            </h3>
                        </article>

                        <article
                            class="flex flex-col items-start py-7 pr-20 pl-8 bg-white hover:bg-orange-100 max-md:px-5 max-md:max-w-full">
                            <p class="text-sm font-medium leading-none text-amber-300">
                                By <a href="#author" class="text-amber-300">John Doe</a> | Aug 23, 2021
                            </p>
                            <h3 class="mt-2 text-2xl font-bold leading-8 text-gray-800">
                                8 Figma design systems that you can download for free today.
                            </h3>
                        </article>

                        <article
                            class="flex flex-col items-start py-7 pr-20 pl-8 bg-white hover:bg-orange-100 max-md:px-5 max-md:max-w-full">
                            <p class="text-sm font-medium leading-none text-amber-300">
                                By <a href="#author" class="text-amber-300">John Doe</a> | Aug 23, 2021
                            </p>
                            <h3 class="mt-2 text-2xl font-bold leading-8 text-gray-800">
                                8 Figma design systems that you can download for free today.
                            </h3>
                        </article>

                        <article
                            class="flex flex-col items-start py-7 pr-20 pl-8 bg-white hover:bg-orange-100 max-md:px-5 max-md:max-w-full">
                            <p class="text-sm font-medium leading-none text-amber-300">
                                By <a href="#author" class="text-amber-300">John Doe</a> | Aug 23, 2021
                            </p>
                            <h3 class="mt-2 text-2xl font-bold leading-8 text-gray-800">
                                8 Figma design systems that you can download for free today.
                            </h3>
                        </article>
                    </div>
                </aside>
            </div>
        </section>

    </main>
</template>
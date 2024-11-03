<template>

    <!-- Category -->
    <div class="flex flex-col self-stretch px-20 mt-12 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full ">
        <section class="flex flex-col self-stretch w-full max-md:px-5 max-md:mt-10">
            <h1
                class="self-center mt-32  text-4xl font-bold tracking-tighter leading-none text-gray-800 max-md:mt-10 mb-20 justify-center">
                Choose A Category</h1>
            <div class="flex gap-5 max-md:flex-col">
                <article class="flex flex-col w-3/12 max-md:w-full hover:text-white">
                    <router-link to="/category"
                        class="flex flex-col p-8 w-full border border-solid border-zinc-500 max-md:px-5 max-md:mt-8 transition duration-150 ease-in-out hover:bg-blue-600 hover:text-white">
                        <img loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5305de9d9e170e8c91de03eb22dba944f5ef03ac5f3a3adb6ce52eb1ad20b4ae?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7"
                            alt="Business icon" class="object-contain w-12" />
                        <h2 class="mt-4 text-3xl font-bold tracking-tighter text-gray-800 hover:text-white">Business
                        </h2>
                        <p class="mt-1 text-base leading-7 text-zinc-500 hover:text-white">Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit.</p>
                    </router-link>
                </article>

                <article class="flex flex-col w-3/12 max-md:w-full hover:text-white">
                    <router-link to="/category"
                        class="flex flex-col p-8 w-full border border-solid border-zinc-500 max-md:px-5 max-md:mt-8 transition duration-150 ease-in-out hover:bg-blue-600 hover:text-white">
                        <img loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c20d7479ee31a04a1a31bec00c9460459f8c90cc3f5c5157bd7d1658b5fd8f4?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7"
                            alt="Startup icon" class="object-contain w-12" />
                        <h2 class="mt-4 text-3xl font-bold tracking-tighter text-gray-800 hover:text-white">Startup</h2>
                        <p class="mt-1 text-base leading-7 text-zinc-500 hover:text-white">Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit.</p>
                    </router-link>
                </article>

                <article class="flex flex-col w-3/12 max-md:w-full hover:text-white">
                    <router-link to="/category"
                        class="flex flex-col p-8 w-full border border-solid border-zinc-500 max-md:px-5 max-md:mt-8 transition duration-150 ease-in-out hover:bg-blue-600 hover:text-white">
                        <img loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f9ea4d60ffc2ac2756619e99d7cecaf8ddaeb339932b51cb8ca04f00f6fe0e1?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7"
                            alt="Economy icon" class="object-contain w-12" />
                        <h2 class="mt-4 text-3xl font-bold tracking-tighter text-gray-800 hover:text-white">Economy</h2>
                        <p class="mt-1 text-base leading-7 text-zinc-500 hover:text-white">Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit.</p>
                    </router-link>
                </article>

                <article class="flex flex-col w-3/12 max-md:w-full hover:text-white">
                    <router-link to="/category"
                        class="flex flex-col p-8 w-full border border-solid border-zinc-500 max-md:px-5 max-md:mt-8 transition duration-150 ease-in-out hover:bg-blue-600 hover:text-white">
                        <img loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7711bc8c130ae05319b5189f87b223bc1125099c826ebd163e20da8da19f8af?placeholderIfAbsent=true&apiKey=e8011a4084744e0fbb615d9ad0bac9f7"
                            alt="Technology icon" class="object-contain w-12" />
                        <h2 class="mt-4 text-3xl font-bold tracking-tighter text-gray-800 hover:text-white">Technology
                        </h2>
                        <p class="mt-1 text-base leading-7 text-zinc-500 hover:text-white">Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit.</p>
                    </router-link>
                </article>
            </div>
        </section>

        <!-- Why We Started Section -->
        <section class="py-16">
            <div
                class="flex w-[1280px] h-[705px] relative flex-col ml-[120px] mt-[100px] items-start text-base font-bold">
                <div class="flex relative flex-col items-end px-20 pt-32 max-w-full min-h-[705px] w-[949px]">
                    <img loading="lazy" src="../../assets/images/misc/rangkulan.png"
                        class="object-cover absolute inset-0 w-full h-full" />
                    <div class="flex flex-col p-20 bg-white w-[706px] h-[584px] left-[574px] top-[121px] absolute">
                        <div class="font-semibold leading-tight text-gray-800 uppercase tracking-[3px]">
                            Why we started
                        </div>
                        <div class="mt-6 text-[48px] tracking-tighter w-[520px] text-gray-800 leading-[64px]">
                            It started out as a simple idea and evolved into our passion
                        </div>
                        <div class="mt-4 leading-7 text-base font-normal text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip.
                        </div>
                        <router-link to="/"
                            class="gap-3 self-start px-12 py-4 mt-8 text-lg leading-none text-white bg-blue-600 hover:bg-x-yellow transition duration-150 ease-in-out">
                            Discover our story &gt;
                        </router-link>
                    </div>
                </div>
            </div>
        </section>
    </div>

</template>
<script lang="ts">
export default {
    name: 'BlogHeader'
}
</script>

<style scoped>
:deep(builder-component) {
    max-width: none !important;
}
</style>

<template>
    <main
        class="flex flex-col items-center self-stretch px-20 mt-32 mb-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <article class="flex flex-col items-start font-bold text-gray-800 max-w-[666px]">
            <header class="flex gap-4 items-start text-3xl tracking-tighter leading-none text-amber-300">
                <img loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4739ac890b73095e3bdd81f59f180d48f77a9ff612de6f03073e615d6e60c90?placeholderIfAbsent=true&apiKey=43173da6028646f7a188adcc787551eb"
                    alt="Profile picture of Andrew Jonson"
                    class="object-contain shrink-0 mt-1.5 w-12 rounded-full aspect-square" />
                <h1 class="basis-auto opacity-[0.87]">Andrew Jonson</h1>
            </header>

            <h2
                class="self-stretch mt-9 text-5xl tracking-tighter leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-[60px]">
                Step-by-step guide to choosing great font pairs
            </h2>

            <section class="flex z-10 gap-2 mt-9 text-2xl leading-none whitespace-nowrap">
                <img loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/26c5bd907dfe56a149dc01d52e61fda38625fe5777e80e9a94b720bdff9b18ec?placeholderIfAbsent=true&apiKey=43173da6028646f7a188adcc787551eb"
                    alt="Startup category icon" class="object-contain shrink-0 my-auto w-6 aspect-square" />
                <p>Startup</p>
            </section>
        </article>
        <article>
            <img loading="lazy"
                src="../../assets/images/misc/wanitakacamata.png"
                class="object-contain w-full aspect-[2.2] mt-16" alt="Decorative header image" />
        </article>
    </main>
</template>

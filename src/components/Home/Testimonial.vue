<template>
    <main class="flex flex-col self-stretch px-20 mt-32 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">

        <section data-layername="testimonials" class="flex flex-col rounded-none">
            <div data-layername="background"
                class="flex flex-col justify-center items-center px-20 py-20 w-full bg-orange-50 max-md:px-5 max-md:max-w-full">
                <div class="flex flex-col w-full max-w-[1057px] max-md:max-w-full">
                    <article class="w-full max-w-[994px] max-md:max-w-full">
                        <div class="flex gap-5 max-md:flex-col">
                            <section class="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
                                <header
                                    class="flex flex-col grow items-start mt-3 text-base text-gray-800 max-md:mt-10">
                                    <h2 data-layername="testimoniaLs"
                                        class="font-semibold leading-none uppercase tracking-[3px]">
                                        TESTIMONIALS
                                    </h2>
                                    <h3 data-layername="whatPeopleSayAboutOurBlog"
                                        class="mt-3 text-4xl font-bold tracking-tighter leading-10">
                                        What people say about our blog
                                    </h3>
                                    <p data-layername="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTempor"
                                        class="self-stretch mt-4 leading-7">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                                    </p>
                                </header>
                            </section>
                            <section class="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
                                <blockquote
                                    data-layername="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTemporIncididuntUtLaboreEtDoloreMagnaAliqua"
                                    class="text-2xl font-bold leading-8 text-gray-800 max-md:mt-10 max-md:max-w-full">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </blockquote>
                            </section>
                        </div>
                    </article>
                    <footer class="flex flex-wrap gap-5 justify-between items-start self-end mt-8 max-w-full w-[532px]">
                        <div class="flex gap-4 mt-2">
                            <img loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4739ac890b73095e3bdd81f59f180d48f77a9ff612de6f03073e615d6e60c90?placeholderIfAbsent=true&apiKey=43173da6028646f7a188adcc787551eb"
                                alt="Profile picture of Jonathan Vallem"
                                class="object-contain shrink-0 self-start w-12 rounded-full aspect-square" />
                            <div class="flex flex-col">
                                <h4 data-layername="jonathanVallem"
                                    class="text-2xl font-bold leading-none text-gray-800">
                                    Jonathan Vallem
                                </h4>
                                <p data-layername="newYorkUsa" class="self-start text-base leading-7 text-zinc-500">
                                    New york, USA
                                </p>
                            </div>
                        </div>
                        <div class="flex gap-6">
                            <img loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3f5ae0b05f88175949425804e6e1196fc776b109748d2aa18fea9d1861879d4?placeholderIfAbsent=true&apiKey=43173da6028646f7a188adcc787551eb"
                                alt="" class="object-contain shrink-0 my-auto w-12 aspect-square" />
                            <img loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/07b676eb085c0c013528d5ff088726665c65f255584b47cb51e5c4e4b02268d0?placeholderIfAbsent=true&apiKey=43173da6028646f7a188adcc787551eb"
                                alt="" class="object-contain shrink-0 aspect-square w-[62px]" />
                        </div>
                    </footer>
                </div>
            </div>
        </section>
    </main>
</template>

<script lang="ts">
export default {
    name: 'TestimonialSection'
}
</script>

<style scoped>
builder-component {
    max-width: none !important;
}
</style>
<template>
    <div class="flex flex-col items-center self-stretch px-20 mt-12 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full ">
        <section data-layername="contactUs" class="flex flex-col w-[768px]">
            <div data-layername="background" class="px-16 py-12 w-full bg-amber-300 max-md:px-5 max-md:max-w-full">
                <div class="flex gap-5 max-md:flex-col">
                    <article data-layername="column" class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <div
                            class="flex flex-col grow items-start text-xl leading-relaxed text-neutral-600 max-md:mt-10">
                            <h2 data-layername="workingHours" class="text-sm leading-none opacity-60">Working hours</h2>
                            <hr data-layername="line"
                                class="shrink-0 self-stretch mt-4 h-px border border-solid opacity-10 bg-neutral-600 border-neutral-600" />
                            <p data-layername="mondayToFriday" class="mt-4 font-bold">Monday To Friday</p>
                            <p data-layername="900AmTo800Pm" class="font-bold">9:00 AM to 8:00 PM</p>
                            <p data-layername="ourSupportTeamIsAvailable247" class="text-base leading-7 opacity-60">Our
                                Support Team is available 24/7</p>
                        </div>
                    </article>
                    <article data-layername="column" class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <div class="flex flex-col items-start text-neutral-600 max-md:mt-10">
                            <h2 data-layername="contactUs" class="text-sm leading-none opacity-60">Contact Us</h2>
                            <hr data-layername="line"
                                class="shrink-0 self-stretch mt-4 h-px border border-solid opacity-10 bg-neutral-600 border-neutral-600" />
                            <p data-layername="02079932905" class="mt-4 text-xl font-bold leading-relaxed">020 7993 2905
                            </p>
                            <p data-layername="helloFinsweetCom" class="text-base leading-7 opacity-60">
                                hello@finsweet.com</p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ContactUs'
});
</script>
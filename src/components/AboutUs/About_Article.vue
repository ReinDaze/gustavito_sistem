<script lang="ts">
import { defineComponent } from 'vue';
import org1 from '../../assets/images/AboutUsImg/org1.png';
import org2 from '../../assets/images/AboutUsImg/org2.png';
import org3 from '../../assets/images/AboutUsImg/org3.png';
import org4 from '../../assets/images/AboutUsImg/org4.png';
import org5 from '../../assets/images/AboutUsImg/org5.png';
import org6 from '../../assets/images/AboutUsImg/org6.png';
import org7 from '../../assets/images/AboutUsImg/org7.png';
import org8 from '../../assets/images/AboutUsImg/org8.png';
import facebookIcon from '../../assets/images/logo/Facebook/Facebook.png';
import twitterIcon from '../../assets/images/logo/Twitter/Twitter.png';
import instagramIcon from '../../assets/images/logo/Instagram/Instagram.png';
import linkedinIcon from '../../assets/images/logo/LinkedIn/Linkedin.png';

interface SocialIcon {
    iconSrc: string;
    link: string;
}

interface Author {
    name: string;
    image: string;
    socialIcons: SocialIcon[];
}

export default defineComponent({
    name: 'AboutContent',
    data() {
        return {
            activeCard: null as number | null,
            authors: [
                {
                    name: 'Floyd Miles',
                    image: org1,
                    socialIcons: [
                        { iconSrc: facebookIcon, link: '#' },
                        { iconSrc: twitterIcon, link: '#' },
                        { iconSrc: instagramIcon, link: '#' },
                        { iconSrc: linkedinIcon, link: '#' },
                    ]
                },
                {
                    name: 'Dianne Russell',
                    image: org2,
                    socialIcons: [
                        { iconSrc: facebookIcon, link: '#' },
                        { iconSrc: twitterIcon, link: '#' },
                        { iconSrc: instagramIcon, link: '#' },
                        { iconSrc: linkedinIcon, link: '#' },
                    ]
                },
                {
                    name: 'Jenny Wilson',
                    image: org3,
                    socialIcons: [
                        { iconSrc: facebookIcon, link: '#' },
                        { iconSrc: twitterIcon, link: '#' },
                        { iconSrc: instagramIcon, link: '#' },
                        { iconSrc: linkedinIcon, link: '#' },
                    ]
                },
                {
                    name: 'Leslie Alexander',
                    image: org4,
                    socialIcons: [
                        { iconSrc: facebookIcon, link: '#' },
                        { iconSrc: twitterIcon, link: '#' },
                        { iconSrc: instagramIcon, link: '#' },
                        { iconSrc: linkedinIcon, link: '#' },
                    ]
                },
                {
                    name: 'Guy Hawkins',
                    image: org5,
                    socialIcons: [
                        { iconSrc: facebookIcon, link: '#' },
                        { iconSrc: twitterIcon, link: '#' },
                        { iconSrc: instagramIcon, link: '#' },
                        { iconSrc: linkedinIcon, link: '#' },
                    ]
                },
                {
                    name: 'Eleanor Pena',
                    image: org6,
                    socialIcons: [
                        { iconSrc: facebookIcon, link: '#' },
                        { iconSrc: twitterIcon, link: '#' },
                        { iconSrc: instagramIcon, link: '#' },
                        { iconSrc: linkedinIcon, link: '#' },
                    ]
                },
                {
                    name: 'Robert Fox',
                    image: org7,
                    socialIcons: [
                        { iconSrc: facebookIcon, link: '#' },
                        { iconSrc: twitterIcon, link: '#' },
                        { iconSrc: instagramIcon, link: '#' },
                        { iconSrc: linkedinIcon, link: '#' },
                    ]
                },
                {
                    name: 'Jacob Jones',
                    image: org8,
                    socialIcons: [
                        { iconSrc: facebookIcon, link: '#' },
                        { iconSrc: twitterIcon, link: '#' },
                        { iconSrc: instagramIcon, link: '#' },
                        { iconSrc: linkedinIcon, link: '#' },
                    ]
                }
            ] as Author[]
        };
    }
});
</script>

<style scoped>
.bg-active {
    background-color: #fde68a;
    transition: background-color 0.3s ease;
}
</style>


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
                    <img loading="lazy"
                        src="../../assets/images/misc/tangan.png"
                        alt="Our team of creatives"
                        class="object-contain grow w-full rounded-none aspect-[1.42] max-md:mt-10 max-md:max-w-full" />
                </div>
            </div>
        </section>

        <section class="rounded-none ">
            <div class="flex gap-8 max-md:flex-col">
                <div class="flex flex-col mr-5 w-[57%] max-md:ml-0 max-md:w-full">
                    <img loading="lazy"
                        src="../../assets/images/misc/3org.png"
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
                    image="org1"
                    socialIcons />
                <AuthorCard name="Dianne Russell"
                    image="org2"
                    socialIcons />
                <AuthorCard name="Jenny Wilson"
                    image="org3"
                    socialIcons />
                <AuthorCard name="Leslie Alexander"
                    image="org4"
                    socialIcons />
            </div>
        </section>


        <section class="mt-8 w-full max-w-screen-xl max-md:max-w-full">
            <div class="flex gap-5 max-md:flex-col">
                <AuthorCard name="Guy Hawkins"
                    image="org5"
                    socialIcons />
                <AuthorCard name="Eleanor Pena"
                    image="org6"
                    socialIcons />
                <AuthorCard name="Robert Fox"
                    image="org7"
                    socialIcons />
                <AuthorCard name="Jacob Jones"
                    image="org8"
                    socialIcons />
            </div>
        </section>

        <h2 data-layername="authorsTitle"
            class="self-center mt-24 text-4xl font-bold tracking-tighter leading-none text-gray-800 max-md:mt-10">List
            of
            Authors</h2>

        <section class="self-stretch mt-12 max-md:mt-10 max-md:max-w-full">
            <div class="grid grid-cols-4 gap-10 justify-center mt-12 max-md:grid-cols-2">
                <article v-for="author in authors" :key="author.id"
                    class="flex flex-col items-center w-full transition-transform duration-300 transform hover:scale-105"
                    @mousedown="activeCard = author.id" @mouseup="activeCard = null"
                    :class="{ 'bg-active': activeCard === author.id }">
                    <div class="flex flex-col grow items-center px-6 py-8 w-full leading-none rounded-lg bg-zinc-100">
                        <img :src="author.image" :alt="author.name" loading="lazy"
                            class="object-contain w-24 h-24 max-w-full rounded-full aspect-square" />
                        <h2 class="mt-5 text-xl font-bold tracking-tighter text-gray-800">
                            {{ author.name }}
                        </h2>
                        <p class="text-sm text-center text-zinc-500">
                            Content Writer @Company
                        </p>
                        <div class="flex gap-2 mt-3">
                            <a v-for="(icon, index) in author.socialIcons" :key="index" :href="icon.link"
                                class="text-gray-500 transition-colors duration-300 hover:text-blue-600">
                                <img :src="icon.iconSrc" class="w-5 h-5" alt="Social Icon" />
                            </a>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    </div>
</template>
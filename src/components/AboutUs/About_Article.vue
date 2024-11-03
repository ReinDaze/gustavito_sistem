<script lang="ts">
const org1 = require('../../assets/images/AboutUsImg/org1.png');
const org2 = require('../../assets/images/AboutUsImg/org2.png');
const org3 = require('../../assets/images/AboutUsImg/org3.png');
const org4 = require('../../assets/images/AboutUsImg/org4.png');
const org5 = require('../../assets/images/AboutUsImg/org5.png');
const org6 = require('../../assets/images/AboutUsImg/org6.png');
const org7 = require('../../assets/images/AboutUsImg/org7.png');
const org8 = require('../../assets/images/AboutUsImg/org8.png');
const facebookIcon = require('../../assets/images/logo/Facebook/Facebook.png');
const twitterIcon = require('../../assets/images/logo/Twitter/Twitter.png');
const instagramIcon = require('../../assets/images/logo/Instagram/Instagram.png');
const linkedinIcon = require('../../assets/images/logo/LinkedIn/Linkedin.png');

interface SocialIcon {
    iconSrc: string;
    link: string;
}

interface Author {
    id: number;
    name: string;
    image: string;
    socialIcons: SocialIcon[];
}

export default {
    name: 'AboutContent',
    data(): { activeCard: number | null; authors: Author[] } {
        return {
            activeCard: null,
            authors: [
                {
                    id: 1,
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
                    id: 2,
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
                    id: 3,
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
                    id: 4,
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
                    id: 5,
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
                    id: 6,
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
                    id: 7,
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
                    id: 8,
                    name: 'Jacob Jones',
                    image: org8,
                    socialIcons: [
                        { iconSrc: facebookIcon, link: '#' },
                        { iconSrc: twitterIcon, link: '#' },
                        { iconSrc: instagramIcon, link: '#' },
                        { iconSrc: linkedinIcon, link: '#' },
                    ]
                }
            ]
        };
    }
};
</script>

<template>
    <div class="flex flex-col items-center self-stretch px-20 mt-32 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <!-- Bagian konten tentang tim -->
        <section class="rounded-none mb-32">
            <div class="flex items-center gap-8 max-md:flex-col">
                <div class="flex flex-col w-[43%] max-md:w-full">
                    <header class="flex flex-col mt-20 font-bold text-gray-800 max-md:mt-10 max-md:max-w-full">
                        <h2 class="self-start text-4xl tracking-tighter leading-none text-gray-800">Our team of creatives</h2>
                        <p class="mt-4 text-2xl leading-8 max-md:max-w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        <p class="mt-4 text-base leading-7 max-md:max-w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                    </header>
                </div>
                <div class="flex flex-col ml-5 w-[57%] max-md:w-full">
                    <img loading="lazy" src="../../assets/images/misc/tangan.png" alt="Our team of creatives" class="object-contain grow w-full rounded-none aspect-[1.42] max-md:max-w-full" />
                </div>
            </div>
        </section>

        <!-- Bagian artikel mengapa memulai blog -->
        <section class="rounded-none">
            <div class="flex gap-8 max-md:flex-col">
                <div class="flex flex-col mr-5 w-[57%] max-md:w-full">
                    <img loading="lazy" src="../../assets/images/misc/3org.png" alt="Illustration representing why we started this blog" class="object-contain grow w-full rounded-none aspect-[1.42] max-md:max-w-full" />
                </div>
                <div class="flex flex-col ml-5 w-[45%] max-md:w-full">
                    <article class="flex z-10 flex-col my-auto font-bold text-gray-800 max-md:mt-10 max-md:max-w-full">
                        <h2 class="self-start text-4xl tracking-tighter leading-none text-gray-800">Why we started this Blog</h2>
                        <p class="mt-4 text-2xl leading-8 max-md:max-w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        <p class="mt-4 text-base leading-7 max-md:max-w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                    </article>
                </div>
            </div>
        </section>

        <!-- Daftar kartu penulis -->
        <section class="mt-12 w-full max-w-screen-xl max-md:max-w-full">
            <div class="grid grid-cols-4 gap-10 mt-12 max-md:grid-cols-2">
                <article v-for="author in authors" :key="author.id" class="flex flex-col items-center w-full transition-transform duration-300 transform hover:scale-105" @mousedown="activeCard = author.id" @mouseup="activeCard = null" :class="{ 'bg-active': activeCard === author.id }">
                    <div class="flex flex-col items-center px-6 py-8 w-full leading-none rounded-lg bg-zinc-100">
                        <img :src="author.image" :alt="author.name" loading="lazy" class="object-contain w-24 h-24 rounded-full" />
                        <h2 class="mt-5 text-xl font-bold tracking-tighter text-gray-800">{{ author.name }}</h2>
                        <p class="text-sm text-center text-zinc-500">Content Writer @Company</p>
                        <div class="flex gap-2 mt-3">
                            <a v-for="(icon, index) in author.socialIcons" :key="index" :href="icon.link" class="text-gray-500 transition-colors duration-300 hover:text-blue-600">
                                <img :src="icon.iconSrc" class="w-5 h-5" alt="Social Icon" />
                            </a>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    </div>
</template>

<style scoped>
.bg-active {
    background-color: #fde68a;
    transition: background-color 0.3s ease;
}
</style>

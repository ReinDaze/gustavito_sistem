<template>
    <div class="flex flex-col self-stretch px-20 mb-12 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full ">
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
<script>
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

export default {
    name: 'AboutContent',
    data() {
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

<style scoped>
.bg-active {
    background-color: #fde68a;
    /* Warna efek aktif */
    transition: background-color 0.3s ease;
}
</style>

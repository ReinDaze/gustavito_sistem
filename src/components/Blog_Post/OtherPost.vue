<template>
    <div class="flex flex-col self-stretch px-20 mt-12 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full ">
        <section class="flex flex-col">
            <div class="max-md:max-w-full">
                <h2 class="text-4xl tracking-tighter leading-none font-bold text-black mb-16 max-md:mb-10">
                    What to read next
                </h2>
                <div class="flex gap-5 max-md:flex-col">
                    <article v-for="(post, index) in posts" :key="index"
                        class="flex flex-col w-[33%] max-md:ml-0 max-md:w-full" @click="navigateToPost(post.id)">
                        <div class="flex flex-col grow items-start font-bold text-gray-800 cursor-pointer">
                            <img :src="post.imageSrc" :alt="post.imageAlt" loading="lazy"
                                class="object-contain self-stretch w-full aspect-[1.27]" />
                            <p class="mt-8 text-sm font-medium leading-none text-amber-300">
                                By <span class="text-amber-300">{{ post.author }}</span> l
                                {{ post.date }}
                            </p>
                            <h3 class="mt-4 text-3xl tracking-tighter leading-10">
                                {{ post.title }}
                            </h3>
                            <p class="self-stretch mt-4 text-base leading-7 opacity-70">
                                {{ post.excerpt }}
                            </p>
                        </div>
                    </article>
                </div>
            </div>
            <div
                class="mt-16 w-full border border-solid opacity-30 bg-zinc-500 border-zinc-500 min-h-[1px] max-md:mt-10 max-md:max-w-full">
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

interface Post {
    id: number;
    imageSrc: string;
    imageAlt: string;
    author: string;
    date: string;
    title: string;
    excerpt: string;
}

export default defineComponent({
    name: 'OtherPosts',
    setup() {
        const router = useRouter();

        const navigateToPost = (postId: number) => {
            router.push(`/post/${postId}`);
        };

        return {
            navigateToPost,
        };
    },
    data() {
        return {
            posts: [
                {
                    id: 1,
                    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3bfa0cf84fc442059826bd9f76278afa81bd08f6d57a69b794e3dbd5efea571f?placeholderIfAbsent=true&apiKey=43173da6028646f7a188adcc787551eb",
                    imageAlt: "Illustration for UX Case Study",
                    author: "John Doe",
                    date: "Aug 23, 2021",
                    title: "A UX Case Study Creating a Studious Environment for Students:",
                    excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
                },
                {
                    id: 2,
                    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ee5137d714ab4fbefd5634fccd81db15016ada3286a6e57d081ec33c5f5a9a51?placeholderIfAbsent=true&apiKey=43173da6028646f7a188adcc787551eb",
                    imageAlt: "Illustration for UX Case Study",
                    author: "John Doe",
                    date: "Aug 23, 2021",
                    title: "A UX Case Study Creating a Studious Environment for Students:",
                    excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
                },
                {
                    id: 3,
                    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/54f3c6da26b8addb95781284bb17f805243e5ad198a2c0357d17519cf4021a0e?placeholderIfAbsent=true&apiKey=43173da6028646f7a188adcc787551eb",
                    imageAlt: "Illustration for UX Case Study",
                    author: "John Doe",
                    date: "Aug 23, 2021",
                    title: "A UX Case Study Creating a Studious Environment for Students:",
                    excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
                }
            ] as Post[]
        };
    }
});
</script>

<style scoped>
builder-component {
    max-width: none !important;
}
</style>
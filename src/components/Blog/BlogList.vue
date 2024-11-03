<script lang="ts">
import BlogCard from './BlogCard.vue'


interface Blog {
  imageUrl: string;
  category: string;
  title: string;
  description: string;
}

export default {
  name: 'BlogCards',
  components: {
    BlogCard
  },
  data() {
    return {
      blogs: [
        {
          imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a819735de3773a88c18e36606fa5375e245ea6fd510629f6be427762b46cddbf?placeholderIfAbsent=true&apiKey=43173da6028646f7a188adcc787551eb',
          category: 'Startup',
          title: 'Design tips for designers that cover everything you need',
          description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
        },
        {
          imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/eacb2adf4a1a46e2a388ab3f29c43997e85af95886d2d65654e1acce9c0f704f?placeholderIfAbsent=true&apiKey=43173da6028646f7a188adcc787551eb',
          category: 'Business',
          title: 'How to build rapport with your web design clients',
          description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
        },
        {
          imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/64ba77152fd48222861cc7b742a3a9306d800b286c184eb3eb60045d29e6a2aa?placeholderIfAbsent=true&apiKey=43173da6028646f7a188adcc787551eb',
          category: 'Startup',
          title: 'Logo design trends to avoid in 2022',
          description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
        },
        {
          imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cc022489dd223f95ce0ac2323d51ddc152cbcba99ec8fa6e4884feb0258782fe?placeholderIfAbsent=true&apiKey=43173da6028646f7a188adcc787551eb',
          category: 'Technology',
          title: '8 Figma design systems you can download for free today',
          description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
        },
        {
          imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a819735de3773a88c18e36606fa5375e245ea6fd510629f6be427762b46cddbf?placeholderIfAbsent=true&apiKey=43173da6028646f7a188adcc787551eb',
          category: 'Economy',
          title: 'Font sizes in UI design: The complete guide to follow',
          description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
        }
      ] as Blog[]
    }
  }
}
</script>

<template>

  <div class="flex flex-col self-stretch px-20 mt-32 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
    <section data-layername="allBlogs"
      class="flex flex-col text-5xl font-bold tracking-tighter leading-none text-gray-800 rounded-none max-md:text-4xl">
      <h1 data-layername="allPosts" class="self-start max-md:text-4xl text-left">
        All posts
      </h1>
      <hr data-layername="allBlogsDivider"
        class="mt-8 mb-8 w-full border border-solid bg-zinc-500 border-zinc-500 min-h-[1px] opacity-[0.32] max-md:max-w-full"
        aria-hidden="true" />
    </section>
    <div class="flex flex-col items-center self-stretch px-20 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">

      <section v-for="(blog, index) in blogs" :key="index" :class="{ 'mt-16 max-md:mt-10': index > 0 }"
        class="max-w-full w-[1146px] ">
        <BlogCard :imageUrl="blog.imageUrl" :category="blog.category" :title="blog.title"
          :description="blog.description" />
      </section>
      <div class="flex items-center justify-center space-x-4 mt-16 ">
        <!-- Previous Button -->
        <button class="text-gray-500 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed">
          &lt; Prev
        </button>

        <!-- Current Page Indicator -->
        <span class="font-bold text-gray-800">Page</span>

        <!-- Next Button -->
        <button class="text-gray-800 hover:text-black disabled:opacity-50 disabled:cursor-not-allowed">
          Next &gt;
        </button>
      </div>
    </div>
  </div>
</template>

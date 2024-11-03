<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import BlogPost_Hero from '@/components/Blog_Post/BlogPost_Hero.vue';
import BlogContent from '@/components/Blog_Post/BlogContent.vue';
import OtherPost from '@/components/Blog_Post/OtherPost.vue';
import Join from '@/components/Home/Join.vue';
</script>

<template>
  <MainLayout>
    <BlogPost_Hero></BlogPost_Hero>
    <BlogContent></BlogContent>
    <OtherPost></OtherPost>
    <Join></Join>
  </MainLayout>
</template>

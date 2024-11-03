<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import BlogHeroSection from '@/components/Blog/BlogHeroSection.vue';
import BlogList from '@/components/Blog/BlogList.vue';
import BlogCategory from '@/components/Blog/BlogCategory.vue';
import Join from '@/components/Home/Join.vue';
</script>

<template>
  <MainLayout>
    <BlogHeroSection></BlogHeroSection>
    <BlogList></BlogList>
    <BlogCategory></BlogCategory>
    <Join></Join>
  </MainLayout>
</template>

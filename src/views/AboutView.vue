<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import AboutUs_Hero from '@/components/AboutUs/AboutUs_Hero.vue';
import About_Article from '@/components/AboutUs/About_Article.vue';
import About_Author from '../components/AboutUs/About_Author.vue';
import Join from '@/components/Home/Join.vue';

</script>

<template>
  <MainLayout>
    <AboutUs_Hero></AboutUs_Hero>
    <About_Article></About_Article>
    <About_Author></About_Author>
    <Join></Join>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import HeroSection from '@/components/Home/HeroSection.vue';
import FeaturePost from '@/components/Home/FeaturePost.vue';
import About from '@/components/Home/About.vue';
import Category from '@/components/Home/Category.vue';
import Logo from '@/components/Home/Logo.vue';
import Join from '@/components/Home/Join.vue';
import AuthorList from '@/components/Home/AuthorList.vue';
import Testimonial from '@/components/Home/Testimonial.vue';
</script>

<template>
  <MainLayout>
      <HeroSection></HeroSection>
      <FeaturePost></FeaturePost>
      <About></About>
      <Category></Category>
      <AuthorList></AuthorList>
      <Logo></Logo>
      <Testimonial></Testimonial>
      <Join></Join>
      
  </MainLayout>
</template>

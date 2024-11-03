<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import ContactHero from '@/components/ContactUs/ContactHero.vue';
import WorkingHour from '@/components/ContactUs/WorkingHour.vue';
import ContactForm from '@/components/ContactUs/ContactForm.vue';
</script>

<template>
  <MainLayout>
    <ContactHero />
    <WorkingHour />
    <ContactForm />
  </MainLayout>
</template>

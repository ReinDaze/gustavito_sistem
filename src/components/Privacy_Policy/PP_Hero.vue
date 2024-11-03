<template>
    <header data-layername="privacyPolicyHeader" class="flex flex-col text-center text-gray-800">
      <div data-layername="background" class="flex flex-col justify-center items-center p-20 w-full bg-x-lightengrey max-md:px-5 max-md:max-w-full">
        <div class="flex flex-col max-w-full w-[302px]">
          <h1 data-layername="privacyPolicy" class="text-5xl font-bold tracking-tighter leading-none max-md:text-4xl">
            Privacy Policy
          </h1>
          <p data-layername="lastUpdatedOn27thJanuary2022" class="self-center mt-1 text-base leading-7 opacity-60">
            Last Updated on 27th January 2022
          </p>
        </div>
      </div>
    </header>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'PrivacyPolicyHeader',
  });
  </script>
  
  <style scoped>
  .builder-component {
    max-width: none !important;
  }
  </style>
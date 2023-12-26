<script setup lang="ts">
import HeaderLayout from '@/layouts/HeaderLayout.vue'
import FooterLayout from '@/layouts/FooterLayout.vue'
const isLogin:boolean = false;
</script>

<template>
  <header-layout :isLogin="isLogin"/>
  <router-view>
  </router-view>
  <footer-layout />
</template>
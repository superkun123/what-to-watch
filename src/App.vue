<script setup lang="ts">
import HomeView from '@/views/HomeView.vue'
import HeaderMain from '@/layouts/HeaderMain.vue'
</script>

<template>
  <header-main/>
  <router-view>
    <HomeView/>
  </router-view>
</template>
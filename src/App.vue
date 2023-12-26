<script setup lang="ts">
import HeaderMain from '@/layouts/HeaderMain.vue'
const isLogin:boolean = false;
</script>

<template>
  <header-main :isLogin="isLogin"/>
  <router-view>
  </router-view>
</template>
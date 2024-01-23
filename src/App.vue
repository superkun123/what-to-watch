<script setup lang="ts">
import HeaderLayout from '@/layouts/HeaderLayout.vue'
import FooterLayout from '@/layouts/FooterLayout.vue'
import { Transition } from 'vue';
const isLogin: boolean = false
</script>

<template>
  <header-layout :isLogin="isLogin" v-if="!$route.meta.hideHeader" />
  <router-view></router-view>
  <footer-layout v-if="!$route.meta.hideFooter" />
</template>
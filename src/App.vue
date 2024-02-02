<script setup lang="ts">
import HeaderLayout from '@/layouts/HeaderLayout.vue'
import FooterLayout from '@/layouts/FooterLayout.vue'

</script>

<template>
  <header-layout v-if="!$route.meta.hideHeader" />
  <router-view></router-view>
  <footer-layout v-if="!$route.meta.hideFooter" />
</template>
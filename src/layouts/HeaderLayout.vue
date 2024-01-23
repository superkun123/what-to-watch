<script setup lang="ts">
import AvatarUser from '@/components/BaseUserAvatar.vue'
type Props = {
  isLogin: boolean
}

defineProps<Props>()
</script>

<template>
  <header class="page-header movie-card__head">
    <router-link to="/">
      <div class="logo">
        <a class="logo__link">
          <span class="logo__letter logo__letter--1">W</span>
          <span class="logo__letter logo__letter--2">T</span>
          <span class="logo__letter logo__letter--3">W</span>
        </a>
      </div>
    </router-link>

    <router-link to="/Login">
      <AvatarUser v-if="isLogin" />
      <slot v-else>
        <div class="user-block">
          <a href="#" class="user-block__link">Sign in</a>
        </div>
      </slot>
    </router-link>
  </header>
</template>

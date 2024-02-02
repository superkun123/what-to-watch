<script setup lang="ts">
import AvatarUser from '@/components/BaseUserAvatar.vue'
import { useAuthStore } from '@/stores/AuthStore';

const store = useAuthStore();

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

  <AvatarUser v-if="store.isAuth" />
    <router-link to="/Login" v-else>
      <slot>
        <div class="user-block">
          <a href="#" class="user-block__link">Sign in</a>
        </div>
      </slot>
    </router-link>
  </header>
</template>

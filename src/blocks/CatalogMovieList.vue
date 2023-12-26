<script setup lang="ts">
import { catalogMovieData } from '@/mocks/catalogMovieData';
import CatalogMovieCardItem from '@/blocks/CatalogMovieCardItem.vue'
</script>

<template>
  <div class="catalog__movies-list">
    <slot v-for="movie in catalogMovieData">
      <catalog-movie-card-item :src=movie.src :title=movie.title :key="movie.title" />
    </slot>
  </div>
</template>
<script setup lang="ts">
import CatalogMovieCardItem from '@/blocks/CatalogMovieCardItem.vue'
import type { CatalogMovieData } from '@/types/types'

defineProps<{
  movieListData: CatalogMovieData | null
}>()
</script>

<template>
  <div class="catalog__movies-list" v-if="movieListData && movieListData.length">
    <slot v-for="movie in movieListData">
      <CatalogMovieCardItem
        :preview-image="movie.previewImage"
        :name="movie.name"
        :key="movie.name"
        :genre="movie.genre"
        :preview-video-link="movie.previewVideoLink"
        :id="movie.id"
      />
    </slot>
  </div>
  <div v-else>
    <h2>Nothing found</h2>
  </div>
</template>
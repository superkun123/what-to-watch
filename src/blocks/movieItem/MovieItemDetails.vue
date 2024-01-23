<script setup lang="ts">
import type { movieDetails } from '@/types/types'

defineProps<{
  movieDetailsContent: movieDetails
}>()
</script>

<template>
  <div class="movie-card__text-col">
    <p class="movie-card__details-item">
      <strong class="movie-card__details-name">Director</strong>
      <span class="movie-card__details-value">{{ movieDetailsContent.director }}</span>
    </p>
    <div class="movie-card__details-item">
      <strong class="movie-card__details-name">Starring</strong>
      <ul class="movie-card__details-value">
        <li v-for="(item, index) in movieDetailsContent.starring" :key="item + index">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>

  <div class="movie-card__text-col">
    <p class="movie-card__details-item">
      <strong class="movie-card__details-name">Run Time</strong>
      <span class="movie-card__details-value">{{ movieDetailsContent.runtime }}</span>
    </p>
    <p class="movie-card__details-item">
      <strong class="movie-card__details-name">Genre</strong>
      <span class="movie-card__details-value">{{ movieDetailsContent.genre }}</span>
    </p>
    <p class="movie-card__details-item">
      <strong class="movie-card__details-name">Released</strong>
      <span class="movie-card__details-value">{{ movieDetailsContent.release }}</span>
    </p>
  </div>
</template>

<style scoped></style>

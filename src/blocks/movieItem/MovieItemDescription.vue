<script setup lang="ts">
import type { movieDescription } from '@/types/types'

defineProps<{
  movieDescriptionContent: movieDescription
}>()
</script>

<template>
  <div>
    <div class="movie-rating">
      <div class="movie-rating__score">{{ movieDescriptionContent.rating }}</div>
      <p class="movie-rating__meta">
        <span class="movie-rating__level">Very good</span>
        <span class="movie-rating__count">{{ movieDescriptionContent.scoresCount }}</span>
      </p>
    </div>

    <div class="movie-card__text">
      <p>{{ movieDescriptionContent.description }}</p>

      <p class="movie-card__director">
        <strong>Director: {{ movieDescriptionContent.director }}</strong>
      </p>

      <p class="movie-card__starring">
        <strong>Starring: {{ movieDescriptionContent.starring.join(', ') }}</strong>
      </p>
    </div>
  </div>
</template>

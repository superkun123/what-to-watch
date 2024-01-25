<script setup lang="ts">
import type { movieDescription } from '@/types/types'
import { computed } from 'vue';
import { ratingTitle } from '@/consts';

const props = defineProps<{
  movieDescriptionContent: movieDescription
}>()

const { rating } = props.movieDescriptionContent

const getRatingTitle = computed(() => {
  const ratingIndex = ratingTitle.length - (Math.round(rating/2))
  return ratingTitle[ratingIndex === ratingTitle.length ? ratingIndex - 1 : ratingIndex]
})
</script>

<template>
  <div>
    <div class="movie-rating">
      <div class="movie-rating__score">{{ movieDescriptionContent.rating }}</div>
      <p class="movie-rating__meta">
        <span class="movie-rating__level">{{ getRatingTitle }}</span>
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

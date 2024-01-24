<script setup lang="ts">
import type { movieDescription } from '@/types/types'
import { computed } from 'vue';
import { ratingTitle } from '@/consts';

const props = defineProps<{
  movieDescriptionContent: movieDescription
}>()

const { rating } = props.movieDescriptionContent

const getRatingTitle = computed(() => {
  let ratingName;
  if (rating > 0 && rating < 2) {
    ratingName = ratingTitle[4]
  } else if (rating >= 2 && rating < 4) {
    ratingName = ratingTitle[3]
  } else if (rating >= 4 && rating < 6) {
    ratingName = ratingTitle[2]
  } else if (rating >= 6 && rating < 8) {
    ratingName = ratingTitle[1]
  } else {
    ratingName = ratingTitle[0]
  }
  return ratingName
 
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

<script setup lang="ts">
import MovieItemDetails from '@/blocks/movieItem/MovieItemDetails.vue'
import MovieItemDescription from '@/blocks/movieItem/MovieItemDescription.vue'
import MovieItemReviews from '@/blocks/movieItem/MovieItemReviews.vue'
import BaseTabs from '@/components/BaseTabs.vue'
import type { movieDescription, movieDetails, movieData } from '@/types/types'
import { movieItemTabsTitles } from '@/consts'
import { useActiveItem } from '@/hooks/useActiveItem'

const props = defineProps<{
  movieDataContent: movieData
}>()

const {rating, scoresCount, description, director, starring, runTime, genre, released} = props.movieDataContent

const movieDescriptionContent: movieDescription = {
  rating,
  scoresCount,
  description,
  director,
  starring
}

const movieDetailsContent: movieDetails = {
  director,
  starring,
  runtime:runTime,
  genre,
  release:released
}

const { activeElemIndex, highlightActiveElem } = useActiveItem()
</script>

<template>
  <BaseTabs :tabsNames="movieItemTabsTitles" @activeTabIndex="highlightActiveElem">
    <MovieItemDescription
      v-if="activeElemIndex === 0"
      :movieDescriptionContent="movieDescriptionContent"
    />
    <MovieItemDetails
      v-if="activeElemIndex === 1"
      :movieDetailsContent="movieDetailsContent"
    />
    <MovieItemReviews v-if="activeElemIndex === 2" />
  </BaseTabs>
</template>

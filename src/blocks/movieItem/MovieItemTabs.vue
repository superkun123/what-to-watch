<script setup lang="ts">
import MovieItemDetails from '@/blocks/movieItem/MovieItemDetails.vue'
import MovieItemDescription from '@/blocks/movieItem/MovieItemDescription.vue'
import MovieItemReviews from '@/blocks/movieItem/MovieItemReviews.vue'
import BaseTabs from '@/components/BaseTabs.vue'
import type { movieDescription, movieDetails, movieData } from '@/types/types'
import { ref } from 'vue'

const props = defineProps<{
  movieDataContent: movieData
}>()

const movieDescriptionContent: movieDescription = {
  rating: props.movieDataContent.rating,
  scoresCount: props.movieDataContent.scoresCount,
  description: props.movieDataContent.description,
  director: props.movieDataContent.director,
  starring: props.movieDataContent.starring
}

const movieDetailsContent: movieDetails = {
  director: props.movieDataContent.director,
  starring: props.movieDataContent.starring,
  runtime: props.movieDataContent.runTime,
  genre: props.movieDataContent.genre,
  release: props.movieDataContent.released
}

const tabsNames: string[] = ['overview', 'details', 'reviews']

let activeTab = ref<string>(tabsNames[0])

const activeItem = (item:string) => {
  activeTab.value = item;
}
</script>

<template>
  <BaseTabs :tabsNames="tabsNames" @activeTabIndex="activeItem">
    <MovieItemDescription
      v-if="activeTab === tabsNames[0]"
      :movieDescriptionContent="movieDescriptionContent"
    />
    <MovieItemDetails
      v-if="activeTab === tabsNames[1]"
      :movieDetailsContent="movieDetailsContent"
    />
    <MovieItemReviews v-if="activeTab === tabsNames[2]" />
  </BaseTabs>
</template>

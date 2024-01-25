<script setup lang="ts">
import CatalogMovieList from '@/blocks/catalogMovie/CatalogMovieList.vue'
import { useRoute } from 'vue-router'
import MovieItemTabs from '@/blocks/movieItem/MovieItemTabs.vue'
import { useFilmPageStore } from '@/stores/FilmPageStore'
import HomeMovieCard from '@/blocks/HomeMovieCard.vue'
import { onBeforeMount, onBeforeUnmount, watch} from 'vue'

const route = useRoute()
const store = useFilmPageStore();
console.log(route);
onBeforeMount(() => store.fetchFilmData(route.params.id))
watch(() => route.params.id, () => {
  store.$reset();
  store.fetchFilmData(route.params.id);
  window.scrollTo(0,0);
})
onBeforeUnmount(() => store.$reset())
</script>

<template>
  <main :style="{ backgroundColor: store?.filmData?.backgroundColor }">

    <template v-if="store.filmData && store.isLoaded">
      <HomeMovieCard :movie-data="store.filmData" class="movie-card--full" :isFilmPage="true" />

      <div class="movie-card__wrap movie-card__translate-top">
          <div class="movie-card__info">
            <div class="movie-card__poster movie-card__poster--big">
              <img
                :src="store.filmData.posterImage"
                :alt="store.filmData.name"
                width="218"
                height="327"
              />
            </div>

            <div class="movie-card__desc">
              <MovieItemTabs :movieDataContent="store.filmData" />
            </div>
          </div>
        </div>

      <div class="page-content">
        <section class="catalog catalog--like-this" v-if="store.similarFilmsData && store.similarFilmsData.length">
          <h2 class="catalog__title">More like this</h2>
          <CatalogMovieList :movieListData="store.similarFilmsData" />
        </section>
      </div>

  </template>

  <template v-else-if="!store.isLoaded && !store.isError">
    <div>Загрузка</div>
  </template>

  <template v-else>
    <h1>404</h1>
  </template>

  </main>
</template>

<script setup lang="ts">
import CatalogMovieList from '@/blocks/catalogMovie/CatalogMovieList.vue'
import { useRoute } from 'vue-router'
import MovieItemTabs from '@/blocks/movieItem/MovieItemTabs.vue'
import AddReviewModal from '@/blocks/AddReviewModal.vue'
import { useFilmPageStore } from '@/stores/FilmPageStore'
import { useAuthStore } from '@/stores/AuthStore'
import MovieCard from '@/blocks/MovieCard.vue'
import { onBeforeMount, onBeforeUnmount, ref, watch } from 'vue'

const route = useRoute()
const store = useFilmPageStore();
const authStore = useAuthStore();
const showReviewModal = ref<boolean>(false)

function toggleModalReview() {
  showReviewModal.value = !showReviewModal.value;
  document.querySelector('body')?.classList.toggle('hold')
}

onBeforeMount(async () => {
  await store.fetchFilmData(<string>route.params.id)
  store.getSimilarFilms();
})
watch(() => route.params.id, () => {
  store.$reset();
  store.fetchFilmData(<string>route.params.id);
  window.scrollTo(0, 0);
})
onBeforeUnmount(() => store.$reset())
</script>

<template>
  <main :style="{ backgroundColor: store?.filmData?.backgroundColor }">

    <template v-if="store.filmData && store.isLoaded">
      <MovieCard :movie-data="store.filmData" :is-auth="authStore.isAuth" class="movie-card--full" :isFilmPage="true" @toggle-modal="toggleModalReview()" />
      <AddReviewModal :show-modal=showReviewModal @toggle-modal="toggleModalReview()" />
      <div class="movie-card__wrap movie-card__translate-top">
        <div class="movie-card__info">
          <div class="movie-card__poster movie-card__poster--big">
            <img :src="store.filmData.posterImage" :alt="store.filmData.name" width="218" height="327" />
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

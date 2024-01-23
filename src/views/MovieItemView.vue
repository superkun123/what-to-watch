<script setup lang="ts">
import CatalogMovieList from '@/blocks/catalogMovie/CatalogMovieList.vue'
import { useRoute } from 'vue-router'
import MovieItemTabs from '@/blocks/movieItem/MovieItemTabs.vue'
import { useFilmPageStore } from '@/stores/FilmPageStore'
import { onBeforeMount, onBeforeUnmount, onMounted, watch} from 'vue'

const route = useRoute()
const store = useFilmPageStore();
onBeforeMount(() => store.fetchFilmData(route.params.id))
watch(() => route.params.id, () => {
  store.$reset();
  store.fetchFilmData(route.params.id);
  window.scrollTo(0,0);
})
onBeforeUnmount(() => store.$reset())
</script>

<template>
  <main>
    <template v-if="store.filmData && store.isLoaded">
    <section
      class="movie-card movie-card--full"
      :style="{ backgroundColor: store.filmData.backgroundColor }"
    >
      <div class="movie-card__hero">
        <div class="movie-card__bg">
          <img :src="store.filmData.backgroundImage" alt="The Grand Budapest Hotel" />
        </div>

        <h1 class="visually-hidden">WTW</h1>

        <div class="movie-card__wrap">
          <div class="movie-card__desc">
            <h2 class="movie-card__title">{{ store.filmData.name }}</h2>
            <p class="movie-card__meta">
              <span class="movie-card__genre">{{ store.filmData.genre }}</span>
              <span class="movie-card__year">{{ store.filmData.released }}</span>
            </p>

            <div class="movie-card__buttons">
              <button class="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlink:href="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button class="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlink:href="#add"></use>
                </svg>
                <span>My list</span>
              </button>
              <a href="add-review.html" class="btn movie-card__button">Add review</a>
            </div>
          </div>
        </div>
      </div>

      <div class="movie-card__wrap movie-card__translate-top">
        <div class="movie-card__info">
          <div class="movie-card__poster movie-card__poster--big">
            <img
              :src="store.filmData.posterImage"
              alt="The Grand Budapest Hotel poster"
              width="218"
              height="327"
            />
          </div>

          <div class="movie-card__desc">
            <MovieItemTabs :movieDataContent="store.filmData" />
          </div>
        </div>
      </div>
    </section>

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

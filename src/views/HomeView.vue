<script setup lang="ts">
import CatalogMovieList from '@/blocks/catalogMovie/CatalogMovieList.vue'
import CatalogMovieFilter from '@/blocks/catalogMovie/CatalogMovieFilter.vue'
import { catalogFilterList } from '@/mocks/catalogFilterList'
import { onMounted, ref, computed, toRef } from 'vue'
import { useFilmsStore } from '@/stores/FilmsPreviewStore'
import { useAuthStore } from '@/stores/AuthStore'
import MovieCard from '@/blocks/MovieCard.vue'
import { DEFAULT_FILMS_COUNT, DEFAULT_GENRE } from '@/consts'

const filmsShowedCount = ref<number>(DEFAULT_FILMS_COUNT)
const filterGenre = ref<string>(DEFAULT_GENRE)
const store = useFilmsStore();
const authStore = useAuthStore();

onMounted(async () => {
  if (!store.filmsListResponse.data) {
    store.fetchFilmsPreview();
  }

  if (!store.filmPromoResponse.data) {
    store.fetchFilmPromo();
  }
})


const filteredFilmsByGenre = computed(() => {
  if (filterGenre.value === DEFAULT_GENRE) {
    console.log(store.filmsListResponse.data);
    return store.filmsListResponse.data
  } else {
    return store.filmsListResponse.data ? store.filmsListResponse.data.filter((elem) => elem.genre === filterGenre.value) : null
  }
})

const filteredFilmsByGenreLength = computed(() => { return filteredFilmsByGenre.value ? filteredFilmsByGenre.value.length : 0})

const shortListFilms = computed(() => filteredFilmsByGenre.value ? filteredFilmsByGenre.value.slice(0, filmsShowedCount.value) : null)


function changeFilterGenre(genreTitle: string) {
  filterGenre.value = genreTitle
}

function movieFilterChangeItem(item: string) {
  changeFilterGenre(item);
  updateShowedFilmsCount(true);
}

function updateShowedFilmsCount(reset: boolean = false) {
  if (reset) {
    return filmsShowedCount.value = DEFAULT_FILMS_COUNT
  } else {
    return filmsShowedCount.value = filmsShowedCount.value + DEFAULT_FILMS_COUNT
  }
}
</script>

<template>
  <div>
    <main>
      <MovieCard :movie-data="store.filmPromoResponse.data" :isAuth="authStore.isAuth" />
      <div class="page-content">
        <section class="catalog">
          <h2 class="catalog__title visually-hidden">Catalog</h2>
          <CatalogMovieFilter :filter-list="catalogFilterList" @active-filter-item="movieFilterChangeItem" />
          <div v-if="!store.filmsListResponse.isLoaded">Загрузка</div>
          <CatalogMovieList :movie-list-data="shortListFilms"
            v-else-if="!store.filmsListResponse.isError && store.filmsListResponse.data" />
          <div v-else>Ошибка</div>
          <div class="catalog__more" v-if="!(filteredFilmsByGenreLength < filmsShowedCount)">
            <button @click="updateShowedFilmsCount();" class="catalog__button" type="button">Show more</button>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import CatalogMovieList from '@/blocks/catalogMovie/CatalogMovieList.vue'
import CatalogMovieFilter from '@/blocks/catalogMovie/CatalogMovieFilter.vue'
import { catalogFilterList } from '@/mocks/catalogFilterList'
import { onMounted, ref, computed } from 'vue'
import { useFilmsStore } from '@/stores/FilmsPreviewStore'
import HomeMovieCard from '@/blocks/HomeMovieCard.vue'
import { DEFAULT_FILMS_COUNT, DEFAULT_GENRE } from '@/consts'

const filmsShowedCount = ref<number>(DEFAULT_FILMS_COUNT)
const filterGenre = ref<string>(DEFAULT_GENRE)
const store = useFilmsStore();

onMounted(() => {
  store.fetchFilmsPreview();
  store.fetchFilmPromo();
})


const filteredFilmsByGenre = computed(() => {
  if (filterGenre.value === DEFAULT_GENRE) {
    return store.fetchedfilmsPreviewList
  } else {
    return store.fetchedfilmsPreviewList ? store.fetchedfilmsPreviewList.filter((elem) => elem.genre === filterGenre.value) : null
  }
})

const filteredFilmsByGenreLength = computed(() => {
  return filteredFilmsByGenre.value ? filteredFilmsByGenre.value.length : 0
})

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
      <HomeMovieCard :movie-data="store.filmPromoData" />
      <div class="page-content">
        <section class="catalog">
          <h2 class="catalog__title visually-hidden">Catalog</h2>
          <CatalogMovieFilter :filter-list="catalogFilterList" @active-filter-item="movieFilterChangeItem" />
          <div v-if="!store.isLoaded">Загрузка</div>
          <CatalogMovieList :movie-list-data="shortListFilms"
            v-else-if="!store.isError && store.fetchedfilmsPreviewList" />
          <div v-else>Ошибка</div>
          <div class="catalog__more" v-if="!(filteredFilmsByGenreLength < filmsShowedCount)">
            <button @click="updateShowedFilmsCount();" class="catalog__button" type="button">Show more</button>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>
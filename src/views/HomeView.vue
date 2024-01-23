<script setup lang="ts">
import CatalogMovieList from '@/blocks/CatalogMovieList.vue'
import CatalogMovieFilter from '@/blocks/CatalogMovieFilter.vue'
import { catalogFilterList } from '@/mocks/catalogFilterList'
import { onMounted, ref} from 'vue'
import { useFilmsStore } from '@/stores/FilmsPreviewStore'
import HomeMovieCard from '@/blocks/HomeMovieCard.vue'
import { DEFAULT_FILMS_COUNT } from '@/consts'
import { getFilmsPromo } from '@/api/films'
import type { AxiosResponse, AxiosError } from 'axios'

const store = useFilmsStore();
onMounted(() => store.fetchFilmsPreview())

function movieFilterChangeItem(item:string) {
  store.changeFilterGenre(item);
  store.updateShowedFilmsCount(true);
}
</script>

<template>
  <div>
    <main>
    <HomeMovieCard />
    <div class="page-content">
      <section class="catalog">
        <h2 class="catalog__title visually-hidden">Catalog</h2>
        <CatalogMovieFilter :filter-list="catalogFilterList" @active-filter-item="movieFilterChangeItem" />
        <div v-if="!store.isLoaded">Загрузка</div>
        <CatalogMovieList :movie-list-data="store.shortListFilms" v-else-if="!store.isError && store.fetchedfilmsPreviewList" />
        <div v-else>Ошибка</div>
        <div class="catalog__more" v-if="!(store.filteredFilmsByGenreLength < store.filmsShowedCount)">
          <button @click="store.updateShowedFilmsCount();" class="catalog__button" type="button">Show more</button>
        </div>
      </section>
    </div>
  </main>
  </div>
</template>
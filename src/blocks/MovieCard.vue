<script setup lang="ts">
import type { PromoFilm } from '@/types/types';
import { RouterLink } from 'vue-router';
defineProps<{
  movieData: PromoFilm | null
  isFilmPage?: boolean
}>()
</script>

<template>
  <section class="movie-card">
    <div class="movie-card__bg">
      <img :src=movieData?.backgroundImage :alt=movieData?.name />
    </div>

    <h1 class="visually-hidden">WTW</h1>

    <div class="movie-card__wrap">
      <div class="movie-card__info" :class="!isFilmPage ? '' : 'movie-card__hero'">
        <div class="movie-card__poster" v-if="!isFilmPage">
          <img :src=movieData?.posterImage :alt=movieData?.name width="218" height="327" />
        </div>

        <div class="movie-card__desc">
          <h2 class="movie-card__title">{{ movieData?.name }}</h2>
          <p class="movie-card__meta">
            <span class="movie-card__genre">{{ movieData?.genre }}</span>
            <span class="movie-card__year">{{ movieData?.released }}</span>
          </p>

          <div class="movie-card__buttons">
            <RouterLink class="btn btn--play movie-card__button" :to="{ name: 'play', params: { id: movieData?.id } }" v-if="movieData?.id">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlink:href="#play-s"></use>
              </svg>
              <span>Play</span>
            </RouterLink>
            <button class="btn btn--list movie-card__button" type="button">
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlink:href="#add"></use>
              </svg>
              <span>My list</span>
            </button>
            <button class="btn btn--list movie-card__button" type="button" v-if="isFilmPage">
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlink:href="#add"></use>
              </svg>
              <span>Add review</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
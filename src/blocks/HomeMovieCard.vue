<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <section class="movie-card">
      <div class="movie-card__bg">
        <img src="../assets/img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
      </div>

      <h1 class="visually-hidden">WTW</h1>

      <div class="movie-card__wrap">
        <div class="movie-card__info">
          <div class="movie-card__poster">
            <img
              src="../assets/img/the-grand-budapest-hotel-poster.jpg"
              alt="The Grand Budapest Hotel poster"
              width="218"
              height="327"
            />
          </div>

          <div class="movie-card__desc">
            <h2 class="movie-card__title">The Grand Budapest Hotel</h2>
            <p class="movie-card__meta">
              <span class="movie-card__genre">Drama</span>
              <span class="movie-card__year">2014</span>
            </p>

            <div class="movie-card__buttons">
              <RouterLink  class="btn btn--play movie-card__button" :to="{ name: 'play', params: { id: '123' } }">
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
            </div>
          </div>
        </div>
      </div>
    </section>
</template>
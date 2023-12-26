<script setup lang="ts">
import type { CatalogMovieCard } from '@/types/types';

withDefaults(defineProps<CatalogMovieCard>(), {
  src: '/src/assets/img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
  title: 'Fantastic Beasts: The Crimes of Grindelwald',
  link: '#',
  width: '280',
  height: '175'
})
</script>

<template>
  <article class="small-movie-card catalog__movies-card">
    <div class="small-movie-card__image">
      <img :src=src :alt="title" :width=width :height=height />
    </div>
    <h3 class="small-movie-card__title">
      <a class="small-movie-card__link" :href=link>{{title}}</a>
    </h3>
  </article>
</template>
<script setup lang="ts">
import { useFilmPageStore } from '@/stores/FilmPageStore';
import { onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import { commentsDateFormat } from '@/helpers/timeFormatter'

const route = useRoute();
const store = useFilmPageStore();
onBeforeMount(() => {
  if (!store.filmCommentsResponse.data) {
    store.fetchFilmComments(<string>route.params.id);
  }
})
</script>

<template>
  <div class="review-col" v-for="review in store.filmCommentsResponse.data">
    <div class="review">
      <blockquote class="review__quote">
        <p class="review__text">
          {{ review.comment }}
        </p>

        <footer class="review__details">
          <cite class="review__author">{{ review.user }}</cite>
          <time class="review__date" :datetime="review.date">{{commentsDateFormat( review.date) }}</time>
        </footer>
      </blockquote>

      <div class="review__rating">{{ review.rating }}</div>
    </div>
  </div>
</template>

<style scoped>
.review-col {
  width: 45%;
  padding:0 15px;
}
</style>

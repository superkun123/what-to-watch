<script setup lang="ts">
import type { CatalogMovieCard } from '@/types/types'
import { ref, watch } from 'vue'
import BaseVideo from '@/components/BaseVideo.vue'

let isActive = ref<boolean>(false)
let timeoutId:undefined | number = undefined
const movieCardElement = ref<HTMLDivElement | null>(null)

const playPreviewVideo = () => {
  const video:HTMLVideoElement | null | undefined = movieCardElement.value?.querySelector('video')
  if (isActive.value) {
    timeoutId = setTimeout(() => {
      video?.play()
    }, 300)
  } else {
    clearTimeout(timeoutId)
    video?.pause()
    video?.currentTime ? video.currentTime = 0 :
    video?.load()
  }
}

watch(isActive, () => {
  playPreviewVideo()
})

defineProps<CatalogMovieCard>()
</script>

<template>
  <article
    ref="movieCardElement"
    class="small-movie-card catalog__movies-card"
    @mouseover="isActive = true"
    @mouseleave="isActive = false"
  >
    <div class="small-movie-card__image">
      <img
        :src="previewImage"
        alt="preview"
        :class="isActive ? 'fade' : ''"
        class="previewImage"
      />
      <BaseVideo
        width="280"
        height="175"
        :src="previewVideoLink"
        video-format="video/mp4"
        :muted="true"
        :loop="true"
        :poster="previewImage"
      />
    </div>
    <h3 class="small-movie-card__title">
      <router-link class="small-movie-card__link" :to="{ name: 'moviePage', params: { id: id } }">{{
        name
      }}</router-link>
    </h3>
  </article>
</template>

<style scoped>
.fade {
  transition: all 0.3s linear;
  opacity: 0;
}
.previewImage {
  z-index: 2;
  position: relative;
}
video {
  object-fit: cover;
  position: absolute;
  left: 0;
  top: 0;
}
</style>

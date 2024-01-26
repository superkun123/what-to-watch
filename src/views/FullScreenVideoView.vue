<script setup lang="ts">
import BaseVideo from '@/components/BaseVideo.vue';
import { useFilmPageStore } from '@/stores/FilmPageStore';
import { computed, onMounted, ref, defineExpose, watch } from 'vue';
import { useRoute } from 'vue-router';

const store = useFilmPageStore();
const route = useRoute();
onMounted(async () => {
  await store.fetchFilmData(<string>route.params.id)
})
const videoPlayerContainer = ref<HTMLDivElement | null>(null)
const video = ref<HTMLVideoElement | null | undefined>(null)
const isPlaying = ref<boolean>(false)
const playTime = ref<number | undefined>(0)
const duration = ref<number | undefined>(32)
watch(videoPlayerContainer, () => {
  video.value = videoPlayerContainer?.value?.querySelector('video');
})
</script>

<template>
  <div class="player" v-if="store.filmData" ref="videoPlayerContainer">
    <BaseVideo class="player__video" width="100%" :poster="store.filmData.posterImage" height="100%" video-format="video/mp4"
      :src=store.filmData.videoLink  @timeupdate="playTime = video?.currentTime" @onloadedmetadata="duration = video?.duration" />

    <RouterLink class="button player__exit" to="/">
      Exit
    </RouterLink>

    <div class="player__controls">
      <div class="player__controls-row">
        <div class="player__time">
          <progress class="player__progress" value="0" max="100"></progress>
          <div class="player__toggler" style="left: 0%;">Toggler</div>
        </div>
        <div class="player__time-value">{{ playTime?.toFixed() }} / {{duration}}</div>
      </div>

      <div class="player__controls-row">
        <button type="button" class="player__play" @click="() => {video?.play(); isPlaying = true; }" v-if="!isPlaying">
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlink:href="#play-s"></use>
          </svg>
          <span>Play</span>
        </button>
        <button type="button" class="player__play" @click="() => {video?.pause(); isPlaying = false}" v-else>
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlink:href="#play-s"></use>
          </svg>
          <span>pause</span>
        </button>
        
        <div class="player__name">{{ store.filmData.name }}</div>

        <button type="button" class="player__full-screen" @click="video?.requestFullscreen()">
          <svg viewBox="0 0 27 27" width="27" height="27">
            <use xlink:href="#full-screen"></use>
          </svg>
          <span>Full screen</span>
        </button>
      </div>
    </div>
  </div>
</template>
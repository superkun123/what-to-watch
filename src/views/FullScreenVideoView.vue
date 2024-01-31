<script setup lang="ts">
import BaseVideo from '@/components/BaseVideo.vue';
import { useFilmPageStore } from '@/stores/FilmPageStore';
import { onBeforeMount, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { secondsToMinutes } from '@/helpers/timeFormatter'

const store = useFilmPageStore();
const route = useRoute();
onBeforeMount(async () => {
  await store.fetchFilmData(<string>route.params.id)
})
const videoPlayerContainer = ref<HTMLDivElement | null>(null)
const video = ref<HTMLVideoElement | null | undefined>(null)
const isPlaying = ref<boolean>(false)
const playTime = ref<number | undefined>(0)
const duration = ref<number | undefined>(undefined)
const value = ref<string>("0")

watch(videoPlayerContainer, () => {
  video.value = videoPlayerContainer?.value?.querySelector('video');
    video.value?.addEventListener("loadedmetadata", () => {
      if (video.value?.duration) {
        duration.value = parseInt(video.value?.duration.toFixed());
      }
  });
})


function setTime() {
  if (video.value && playTime.value) {
    video.value.currentTime = parseInt(value.value);
    playTime.value = parseInt(value.value);
    console.log(playTime.value)
    console.log(video.value.currentTime)
  }
}

function playPause() {
  isPlaying.value ? video?.value?.pause() : video?.value?.play();
  isPlaying.value = !isPlaying.value;
}
</script>

<template>
  <div class="player" v-if="store.filmResponse.data" ref="videoPlayerContainer">
    <BaseVideo class="player__video" width="100%" :poster="store.filmResponse.data.posterImage" height="100%" video-format="video/mp4"
      :src=store.filmResponse.data.videoLink @timeupdate="playTime = video?.currentTime" @ended="isPlaying = false"  @click="playPause()"  />

    <RouterLink class="button player__exit" to="/">Exit</RouterLink>

    <div class="player__controls">
      <div class="player__controls-row" v-if="playTime !== undefined && duration">
        <div class="player__time">
          <input class="range" type="range" step="any" @click="setTime()"  min="0" v-model="value" :max=duration />
          <progress class="player__progress" :value=playTime></progress>
          <div class="player__toggler" :style="{ left: `${(playTime / duration * 100)}%` }">Toggler</div>
        </div>
        <div class="player__time-value">{{ secondsToMinutes(playTime) }} / {{secondsToMinutes(duration)}}</div>
      </div>

      <div class="player__controls-row">
        <button type="button" class="player__play" @click="playPause()" v-if="!isPlaying">
          <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0L19 9.5L0 19V0Z" fill="#EEE5B5"/>
          </svg>
          <span>Play</span>
        </button>
        <button type="button" class="player__play" @click="playPause()" v-else="isPlaying">
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlink:href="#pause"></use>
          </svg>
          <span>pause</span>
        </button>
        
        <div class="player__name">{{ store.filmResponse.data.name }}</div>

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
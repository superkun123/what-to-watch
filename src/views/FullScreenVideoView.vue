<script setup lang="ts">
import BaseVideo from '@/components/BaseVideo.vue';
</script>

<template>
    <div class="player">
      <BaseVideo class="player__video" width="100%" height="100%" video-format="video/mp4" src="https://13.design.htmlacademy.pro/static//film/video/dog.mp4" />


      <RouterLink class="button player__exit" to="/">
        Exit
      </RouterLink>

      <div class="player__controls">
        <div class="player__controls-row">
          <div class="player__time">
            <progress class="player__progress" value="30" max="100"></progress>
            <div class="player__toggler" style="left: 30%;">Toggler</div>
          </div>
          <div class="player__time-value">1:30:29</div>
        </div>

        <div class="player__controls-row">
          <button type="button" class="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlink:href="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div class="player__name">Transpotting</div>

          <button type="button" class="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlink:href="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>

</template>
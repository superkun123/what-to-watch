<script setup lang="ts">
import type { VideoType } from '@/types/types'

defineProps<VideoType>()
</script>

<template>
  <video
    :width="width"
    :height="height"
    :controls="controls"
    :autoplay="autoplay"
    :loop="loop"
    :muted="muted"
  >
    <source :src="src" :type="videoFormat" />
  </video>
</template>

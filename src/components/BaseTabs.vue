<script setup lang="ts">
import { ref } from 'vue';
defineProps<{
  tabsNames: string[]
}>()

const emit = defineEmits<{
  (e: 'activeTabIndex', activeItem: string): string
}>()

const activeElemIndex = ref<number>(0)

const higlightActiveElem = (itemIndex:number) => {
  activeElemIndex.value = itemIndex
}
</script>

<template>
  <nav class="movie-nav movie-card__nav">
    <ul class="movie-nav__list">
      <li class="movie-nav__item" v-for="(item, index) in tabsNames" :key="item + index" @click="higlightActiveElem(index)" :class="index === activeElemIndex ? 'active-tab' : ''">
        <a
          href="#"
          class="movie-nav__link"
          @click.prevent="emit('activeTabIndex', item)"
          :data-index="item + '_' + index"
          >{{ item }}</a
        >
      </li>
    </ul>
  </nav>

  <div class="movie-card__text movie-card__row">
    <slot></slot>
  </div>
</template>

<style scoped>
.active-tab {
  position: relative;
}

.active-tab::after {
  content: '';
    position: absolute;
    z-index: 1;
    left: 0;
    right: 0;
    height: 4px;
    bottom: 0;
    background: #d9cd8d;
}
</style>

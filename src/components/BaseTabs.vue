<script setup lang="ts">
import { useActiveItem } from '@/hooks/useActiveItem';
defineProps<{
  tabsNames: string[]
}>()

const { activeElemIndex, highlightActiveElem } = useActiveItem()

const emit = defineEmits<{
  (e: 'activeTabIndex', activeItemIndex: number) : number
}>()
</script>

<template>
  <nav class="movie-nav movie-card__nav">
    <ul class="movie-nav__list">
      <li class="movie-nav__item" v-for="(item, index) in tabsNames" :key="item + index" @click="highlightActiveElem(index)" :class="index === activeElemIndex ? 'active-tab' : ''">
        <a
          href="#"
          class="movie-nav__link"
          @click.prevent="emit('activeTabIndex', index)"
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

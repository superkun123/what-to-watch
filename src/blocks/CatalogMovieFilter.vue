<script setup lang="ts">
import { ref } from 'vue';
import { DEFAULT_GENRE } from '@/consts';
defineProps<{
  filterList: string[]
}>()

const activeElemIndex = ref<number>(-1)

const highlightActiveElem = (itemIndex:number) => {
  activeElemIndex.value = itemIndex
}

const emit = defineEmits<{
  (e: 'activeFilterItem', activeItem: string): string
}>()
</script>

<template>
  <ul class="catalog__genres-list">
    <li class="catalog__genres-item" @click="highlightActiveElem(-1)" :class="-1 === activeElemIndex ? 'active-tab' : ''" >
      <a @click.prevent="emit('activeFilterItem', DEFAULT_GENRE)" href="#" class="catalog__genres-link"
        >All genres</a
      >
    </li>
    <li class="catalog__genres-item" v-for="(item, index) in filterList" :key="item + index"  @click="highlightActiveElem(index)" :class="index === activeElemIndex ? 'active-tab' : ''">
      <a @click.prevent="emit('activeFilterItem', item)" href="#" class="catalog__genres-link">{{
        item.charAt(0).toUpperCase() + item.slice(1)
      }}</a>
    </li>
  </ul>
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
    height: 1px;
    bottom: 0;
    background: #d9cd8d;
}

</style>

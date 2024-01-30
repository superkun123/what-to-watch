<script setup lang="ts">
import { ref } from 'vue';
defineProps<{
    showModal: boolean
}>();

const emit = defineEmits<{
  (e: 'toggleModal') : void
}>()
</script>

<template>
    <div v-if="showModal">
        <div class="shadow" @click="$emit('toggleModal')"></div>
        <div class="add-review">
            <form action="#" class="add-review__form">
                <div class="rating">
                    <div class="rating__stars">
                        <input class="rating__input" id="star-1" type="radio" name="rating" value="1" />
                        <label class="rating__label" for="star-1">Rating 1</label>

                        <input class="rating__input" id="star-2" type="radio" name="rating" value="2" />
                        <label class="rating__label" for="star-2">Rating 2</label>

                        <input class="rating__input" id="star-3" type="radio" name="rating" value="3" checked />
                        <label class="rating__label" for="star-3">Rating 3</label>

                        <input class="rating__input" id="star-4" type="radio" name="rating" value="4" />
                        <label class="rating__label" for="star-4">Rating 4</label>

                        <input class="rating__input" id="star-5" type="radio" name="rating" value="5" />
                        <label class="rating__label" for="star-5">Rating 5</label>
                    </div>
                </div>

                <div class="add-review__text">
                    <textarea class="add-review__textarea" name="review-text" id="review-text"
                        placeholder="Review text"></textarea>
                    <div class="add-review__submit">
                        <button class="add-review__btn" type="submit" @click.prevent="$emit('toggleModal')">Post</button>
                    </div>
                </div>

            </form>
        </div>
    </div>
</template>
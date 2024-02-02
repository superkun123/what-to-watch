<script setup lang="ts">
import { ref } from 'vue';
import { postReview } from '@/api/films';
const props = defineProps<{
    showModal: boolean
}>();

const emit = defineEmits<{
  (e: 'toggleModal') : void
}>()

const rating = ref<number>(3)
const availableRatingValues:number[] = [1, 2, 3, 4, 5]
const reviewText = ref<string>('')
const statusText = ref<string | null>(null)

async function submitHandler () {
    if (reviewText.value.length < 40 || reviewText.value.length > 500) {
        statusText.value = 'The review must be at least 40 characters long and 500 maximum'
    } else {
        try {
            await postReview(reviewText.value, rating.value);
            statusText.value = 'Review was successfuly sended'
        } catch (error) {
            statusText.value = 'Error'
        }
    }
}
</script>

<template>
    <div v-if="showModal">
        <div class="shadow" @click="$emit('toggleModal')"></div>
        <div class="add-review">
            <form action="#" class="add-review__form" @submit.prevent="submitHandler()">
                <div class="rating">
                    <div class="rating__stars">
                        <template v-for="ratingValue in availableRatingValues">
                            <input class="rating__input" :class="rating >= ratingValue ? 'active' : ''" :id="'star-' + ratingValue" type="radio" name="rating" :value="ratingValue" v-model="rating" />
                            <label class="rating__label" :for="'star-' + ratingValue">Rating {{ ratingValue }}</label>
                        </template>
                    </div>
                </div>

                <div class="add-review__text">
                    <textarea class="add-review__textarea" name="review-text" id="review-text"
                        placeholder="Review text" v-model="reviewText"></textarea>
                    <div class="add-review__submit">
                        <button class="add-review__btn" type="submit">Post</button>
                    </div>
                </div>

            </form>
            <div class="message" v-if="statusText">{{ statusText }}</div>
        </div>
    </div>
</template>

<style scoped>
    .active + .rating__label::after {
        color: #cbb92c;
    }

    .message {
        background: #e8c3c4;
        margin-top: -10px;
        border-radius: 0 0 10px 10px;
        padding: 10px;
    }
</style>
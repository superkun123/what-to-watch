<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '@/stores/AuthStore';


const store = useAuthStore();
const email = ref<string | null>(null);
const password= ref<string | null>(null);

async function signIn () {
  if (email.value && password.value) {
    await store.auth({name: email.value, password: password.value})
  }
}
</script>

<template>
  <div class="user-page">
    <div class="sign-in user-page__content" v-if="!store.isAuth && !store.isLoaded">
      <form action="#" class="sign-in__form">
        <div class="sign-in__fields">
          <div class="sign-in__field">
            <input class="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" v-model="email" />
            <label class="sign-in__label visually-hidden" for="user-email">Email address</label>
          </div>
          <div class="sign-in__field">
            <input class="sign-in__input" type="password" placeholder="Password" name="user-password"
              id="user-password" v-model="password" />
            <label class="sign-in__label visually-hidden" for="user-password">Password</label>
          </div>
        </div>
        <div class="sign-in__submit">
          <button class="sign-in__btn" @click.prevent="signIn()" type="submit">Sign in</button>
        </div>
      </form>
      <div v-if="store.isLoading">Loading...</div>
    </div>
    <div v-else-if="store.isAuth && store.isLoaded">successful login!</div>
    <div v-else>Error</div>
  </div>
</template>

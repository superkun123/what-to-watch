<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '@/stores/AuthStore';
import { validateEmail, validatePassword } from '@/helpers/formValidator'


const store = useAuthStore();
const email = ref<string | null>(null);
const password = ref<string | null>(null);
const isValidEmail = ref<boolean | null>(null);
const isValidPassword = ref<boolean | null>(null);

async function signIn () {
  isValidEmail.value = validateEmail(email.value ?? '');
  isValidPassword.value = validatePassword(password.value ?? '');

  if (email.value && password.value) {
    if (isValidEmail.value && isValidPassword.value) {
      await store.auth({name: email.value, password: password.value})
    }
  }
}
</script>

<template>
  <div class="user-page">
    <div class="sign-in user-page__content" v-if="!store.isAuth && !store.isLoaded">
      <form action="#" class="sign-in__form">
        <div class="sign-in__fields">
          <div class="sign-in__field">
            <input class="sign-in__input" :class="isValidEmail === false ? 'not-valid' : ''" type="email" placeholder="Email address" name="user-email" id="user-email" v-model="email" />
            <label class="sign-in__label visually-hidden" for="user-email">Email address</label>
            <span v-if="isValidEmail === false">Enter valid Email</span>
          </div>
          <div class="sign-in__field">
            <input class="sign-in__input" :class="isValidPassword === false ? 'not-valid' : ''" type="password" placeholder="Password" name="user-password"
              id="user-password" v-model="password" />
              <span v-if="isValidPassword === false">Enter valid password</span>
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

<style scoped>
.not-valid {
  border-color: red;
}
</style>
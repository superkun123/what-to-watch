<script setup lang="ts"></script>

<template>
  <div class="user-page">
    <div class="sign-in user-page__content">
      <form action="#" class="sign-in__form">
        <div class="sign-in__fields">
          <div class="sign-in__field">
            <input class="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
            <label class="sign-in__label visually-hidden" for="user-email">Email address</label>
          </div>
          <div class="sign-in__field">
            <input class="sign-in__input" type="password" placeholder="Password" name="user-password"
              id="user-password" />
            <label class="sign-in__label visually-hidden" for="user-password">Password</label>
          </div>
        </div>
        <div class="sign-in__submit">
          <button class="sign-in__btn" type="submit">Sign in</button>
        </div>
      </form>
    </div>
  </div>
</template>

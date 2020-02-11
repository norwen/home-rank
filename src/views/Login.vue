<template>
  <div class="flex min-h-full">
    <div class="md:w-2/4 min-h-full flex-1 flex flex-col items-center m-auto">
      <form
              @submit.prevent="onSubmit(email, name)"
              class="w-full max-w-sm m-auto"
      >
        <div class="form-field">
          <label class="form-input-label" for="form-email">
            Email address
          </label>
          <input
                  id="form-email"
                  type="text"
                  placeholder="email@aite.com"
                  class="form-input"
                  v-model="email"
          />
        </div>
        <div class="form-field">
          <label class="form-input-label" for="form-name">
            Name
          </label>
          <input
                  id="form-name"
                  type="text"
                  placeholder="Your name"
                  class="form-input"
                  v-model="name"
          />
        </div>
        <button class="login-button">
          Sign in
        </button>
      </form>
    </div>
    <div class="hidden md:flex items-center min-h-full flex-col right-col w-2/4">
      <img class="m-auto" src="@/assets/bg-login.png" alt="Home rank app login">
    </div>
  </div>
</template>

<script>
import { LOGIN } from '@/store/actions.type'

export default {
  name: 'UserLogin',
  data: function () {
    return {
      name: '',
      email: ''
    }
  },
  methods: {
    onSubmit (email, name) {
      this.$store
        .dispatch(LOGIN, { email, name })
        .then(() => this.$router.push({ name: 'catalog' }))
    }
  }
}
</script>

<style scoped>
  .form-field {
    @apply w-full mb-6
  }

  .form-input {
    @apply w-full appearance-none border-2 border-gray-200 rounded w-full py-3 px-6 text-gray-700 leading-tight;
  }

  .form-input:focus {
    @apply outline-none border-form-accent;
  }

  .form-input-label {
    @apply block text-gray-800 mb-1 pr-4;
  }

  .login-button {
    @apply w-full flex items-center outline-none inline-block text-white bg-button-primary font-bold text-xl py-4 px-6 capitalize rounded-lg leading-none;
  }
  .login-button:hover {
    @apply bg-button-primary-hover;
  }

  .right-col {
    @apply bg-background-secondary;
  }
</style>

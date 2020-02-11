<template>
    <router-link
      to="/login"
      class="loginLink"
    >
      Log in
    </router-link>
</template>

<script>
export default {
  name: 'LoginButton',
  props: {}
}
</script>

<style scoped>
  .loginLink {
    @apply inline-block bg-button-primary font-bold py-3 px-5 capitalize rounded leading-none;
  }
  .loginLink:hover {
    @apply bg-button-primary-hover;
  }
</style>

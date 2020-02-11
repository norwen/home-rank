<template>
  <button class="btn" @click="onClick">
    <slot>Button</slot>
  </button>
</template>

<script>
  export default {
    name: "VButton",
    props: {
      onClick: {
        type: Function,
        required: true
      }
    }
  }
</script>

<style scoped>
  .btn {
    @apply inline-block bg-button-primary font-bold py-3 px-5 capitalize rounded leading-none;
  }

  .btn:hover {
    @apply bg-button-primary-hover;
  }
</style>

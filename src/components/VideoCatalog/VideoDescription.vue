<template>
  <div class="description flex-1 pt-6 md:pl-6 md:pt-0">
    <div
      class="descriptionText"
      v-html="description"
    >
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoDescription',
  props: {
    description: {
      type: String
    }
  }
}
</script>

<style scoped>
  .description >>> a {
    @apply text-link-primary;
  }

  .description >>> a:active,
  .description >>> a:hover {
    @apply text-link-primary-hover;
  }
</style>

<template>
  <div
    class="description pt-6 md:pl-3 md:pt-0"
    :class="{short: isDescriptionShort}"
  >
    <div
      class="descriptionText"
      v-html="description"
    >
    </div>
    <div class="descriptionSizeToggle" @click="toggleDescriptionSize">{{ descriptionSizeToggleTitle }}</div>
  </div>
</template>

<script>
export default {
  name: 'VideoDescription',
  props: {
    description: {
      type: String
    }
  },
  data () {
    return {
      isDescriptionShort: true
    }
  },
  computed: {
    descriptionSizeToggleTitle () {
      return this.isDescriptionShort ? '>>>Show more' : '<<<Show less'
    }
  },
  methods: {
    toggleDescriptionSize: function () {
      this.isDescriptionShort = !this.isDescriptionShort
    }
  }
}
</script>

<style scoped>
  .description {
    @apply flex-1;
  }

  .description.short {
    overflow: hidden;
    max-height: 20rem;
    @apply relative;
  }

  .descriptionSizeToggle {
    @apply absolute h-8 text-accent bottom-0;
  }

  .description >>> a {
    @apply text-link-primary;
  }

  .description >>> a:active,
  .description >>> a:hover {
    @apply text-link-primary-hover;
  }
</style>

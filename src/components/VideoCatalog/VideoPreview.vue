<template>
  <div class="videoPreviewWrapper" @mouseenter="toggleHover" @mouseleave="toggleHover">
    <span v-if="duration" class="duration">{{ duration }}</span>
    <img
      :alt="title"
      class="videoPreview"
      v-lazy="mainPoster"
      v-show="!isHovered"
    />
    <img class="video" :src="video" v-show="isHovered" alt="video preview" >
  </div>
</template>

<script>

export default {
  name: 'VideoPreview',
  data () {
    return {
      isHovered: false
    }
  },
  props: {
    title: {
      type: String
    },
    mainPoster: {
      type: String,
      default: 'https://dtsvkkjw40x57.cloudfront.net/350xnull/images/programs/302453/horizontal/2506_2Fcatalog_image_2F409682_2FSM7aONXQRmg0kBstk2Lj_02_2020_Vlog_20Thumbnail.jpg'
    },
    video: {
      type: String
    },
    isLoaded: {
      type: Boolean,
      default: false
    },
    duration: {
      type: String,
      default: ''
    }
  },
  methods: {
    toggleHover () {
      this.isHovered = !this.isHovered
    }
  }
}
</script>

<style scoped>
  .videoPreviewWrapper {
    @apply overflow-hidden relative rounded;
    width: 350px;
    height: 197px;
  }

  .videoPreview {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .duration {
    @apply absolute py-1 px-2 rounded bg-background-accent text-white;
    bottom: 4px;
    right: 4px;
  }

  .video {
    width: 100%;
    height: auto;
  }
</style>

<template>
  <div class="videoPreviewWrapper">
    <img
      :src="src"
      :alt="title"
      class="videoPreview"
      loading="lazy"
    />
  </div>
</template>

<script>
export default {
  name: 'VideoPreview',
  props: {
    title: {
      type: String
    },
    src: {
      type: String,
      default: 'https://dtsvkkjw40x57.cloudfront.net/350xnull/images/programs/302453/horizontal/2506_2Fcatalog_image_2F409682_2FSM7aONXQRmg0kBstk2Lj_02_2020_Vlog_20Thumbnail.jpg'
    }
  }
}
</script>

<style scoped>
  .videoPreviewWrapper {
    height: 195px;
    width: auto;
    border-radius: 3px;
    overflow: hidden;
  }

  .videoPreview {
    width: 100%;
    height: 100%;
    object-fit: cover
  }
</style>

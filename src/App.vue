<template>
  <div id="app" :class="theme" class="font-sans app-container bg-background-primary">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      theme: ''
    }
  },
  mounted: function () {
    this.theme = localStorage.getItem('theme') || 'theme-light'
  }
}

</script>

<style scoped>
  .app-container {
    @apply min-h-screen h-full;
  }
</style>

<template>
  <div class="LayoutDefault">
    <TheHeader />
      <div class="container container-main">
        <slot/>
      </div>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/Header/TheHeader'
import TheFooter from '@/components/TheFooter'

export default {
  name: 'layout-default',
  components: {
    TheFooter,
    TheHeader
  }
}
</script>

<style scoped>
  .container-main {
    @apply mx-auto;
    min-height: 100vh;
  }
</style>

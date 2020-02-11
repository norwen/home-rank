<template>
  <layout-default>
    <div class="w-full mr-auto pt-12 pb-8">
      <h1 class="text-primary text-2xl uppercase">
        {{ pageName }}
      </h1>
    </div>
    <VideoList />
  </layout-default>
</template>

<script>
import VideoList from '@/components/VideoList'
import LayoutDefault from '@/layouts/LayoutDefault'

export default {
  name: 'catalog',
  data () {
    return {
      pageName: 'Video Catalog'
    }
  },
  components: {
    LayoutDefault,
    VideoList
  },
  computed: {
  }
}
</script>

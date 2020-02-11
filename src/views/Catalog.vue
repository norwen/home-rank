<template>
  <layout-default>
    <div class="w-full mr-auto pt-12 pb-8">
      <h1 class="text-primary text-2xl uppercase px-4 md:px-0">
        {{ pageName }}
      </h1>
    </div>
    <VideoList />
  </layout-default>
</template>

<script>
import VideoList from '@/components/VideoCatalog/VideoList'
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

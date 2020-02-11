<template>
  <div class="container">
    <div v-if="isLoading">
      <VideoCardLoading v-for="n in 3" :key="n" />
    </div>
    <div v-if="!isLoading">
      <VideoCard
        v-for="video in sortedVideos"
        :key="video.id"
        :video="video"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { FETCH_CATALOG, FETCH_USER_VIDEOS } from '@/store/actions.type'
import orderBy from 'lodash/orderBy'
import VideoCard from './VideoCard'
import VideoCardLoading from './VideoCardLoading'

export default {
  name: 'VideoList',
  components: {
    VideoCard,
    VideoCardLoading
  },
  computed: {
    ...mapGetters(['videos', 'isLoading']),
    sortedVideos () {
      return orderBy(this.videos, ['likesCount'], ['desc'])
    }
  },
  mounted () {
    this.fetchCatalog()
  },
  methods: {
    fetchCatalog () {
      this.$store.dispatch(FETCH_CATALOG)
      this.$store.dispatch(FETCH_USER_VIDEOS)
    }
  }
}
</script>

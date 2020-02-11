<template>
  <div class="container">
    <VideoCard
      v-for="video in videos"
      :key="video.id"
      :video="video"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { FETCH_CATALOG, FETCH_USER_VIDEOS } from '@/store/actions.type'
import VideoCard from './VideoCard'

export default {
  name: 'VideoList',
  components: {
    VideoCard
  },
  props: {

  },
  computed: {
    ...mapGetters(['videos', 'isLoading'])
  },
  data () {
    return {
      // state
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

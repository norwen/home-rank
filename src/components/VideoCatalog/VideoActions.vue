<template>
  <div class="videoActions">
    <div class="pl-4 flex items-center">
      <div class="likeCounter text-accent">
        {{ userLikeCount }}
      </div>
      <div @click="rankVideo" class="px-2 hover:cursor-pointer">
        <icon-video-like disabled="isLikeLocked" :isActive="!isLikeLocked" />
      </div>
      <div class="likeCounter text-primary">
        {{ totalVideoLikes }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import debounce from 'lodash/debounce'
import { RANK_USER_VIDEO } from '@/store/actions.type'
import IconVideoLike from '../Icon/IconVideoLike'

export default {
  name: 'VideoActions',
  components: {
    IconVideoLike
  },
  data () {
    return {
      freshLikes: 0
    }
  },
  props: {
    id: {
      type: Number
    },
    src: {
      type: String
    },
    videoLikeCount: {
      type: Number,
      default: 0
    }
  },
  computed: {
    userVideo () {
      return this.getUserVideoById(this.id)
    },
    userLikeCount () {
      return this.userVideo && this.userVideo.userLikeCount + this.freshLikes
    },
    totalVideoLikes () {
      return this.videoLikeCount + this.freshLikes
    },
    isLikeLocked () {
      return !((this.userLikeCreditsActive - this.freshLikes) > 0)
    },
    ...mapGetters(['getUserVideoById', 'userLikeCreditsActive'])
  },
  methods: {
    rankVideo () {
      if (!this.isLikeLocked) {
        this.freshLikes++

        this.debouncedRankVideo()
      }
    },
    debouncedRankVideo: debounce(function () {
      this.$store.dispatch(RANK_USER_VIDEO, { id: this.id, addLikesCount: this.freshLikes })
      this.freshLikes = 0
    }, 700)
  }
}
</script>

<style scoped>
  .videoActions {
    @apply flex justify-between py-4 rounded-b-lg bg-background-primary;
    margin-top: -3px;
  }
  .likeCounter {
    @apply text-xl font-bold
  }
</style>

<template>
  <div class="videoActions">
    <div class="vote">
      <div class="userLikes">
        {{ userLikeCount }}
      </div>
      <div @click="debouncedRankVideo" class="hover:cursor-pointer">
        <icon-video-like disabled="isLikeLocked" :isActive="!isLikeLocked" />
      </div>
      <div class="totalLikes">
        {{ totalVideoLikes }}
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex"
  import debounce from 'lodash/debounce'
  import { RANK_USER_VIDEO } from "@/store/actions.type"
  import IconVideoLike from './Icon/IconVideoLike'

  export default {
    name: "VideoActions",
    components: {
      IconVideoLike
    },
    data() {
      return {
        freshLikes: 0
      };
    },
    props: {
      id: {
        type: Number
      },
      src: {
        type: String,
        default: "https://dtsvkkjw40x57.cloudfront.net/350xnull/images/programs/302453/horizontal/2506_2Fcatalog_image_2F409682_2FSM7aONXQRmg0kBstk2Lj_02_2020_Vlog_20Thumbnail.jpg"
      },
      videoLikeCount: {
        type: Number
      },
    },
    computed: {
      videoId() {
        return this.id;
      },
      userVideo() {
        return this.getUserVideoById(this.videoId);
      },
      userLikeCount() {
        return this.userVideo && this.userVideo.userLikeCount + this.freshLikes;
      },
      totalVideoLikes() {
        return this.videoLikeCount + this.userLikeCount + this.freshLikes;
      },
      isLikeLocked() {
        return !((this.userLikeCreditsActive - this.freshLikes) > 0);
      },
      ...mapGetters(["getUserVideoById", "userLikeCreditsActive"])
    },
    methods: {
      rankVideo(addLikesCount) {
        this.$store.dispatch(RANK_USER_VIDEO, { id: this.videoId, addLikesCount });
      },
      debouncedRankVideo() {
        if (!this.isLikeLocked) {
          this.freshLikes++;

          debounce(() => {
            this.rankVideo(this.freshLikes)
            this.freshLikes = 0;
          }, 700)()
        }
      }
    }
  };
</script>

<style scoped>
  .videoActions {
    @apply flex justify-between pt-4
  }
</style>

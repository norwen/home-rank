<template>
  <div class="videoCardContainer container md:flex flex-wrap">
    <div class="videoTitle">
      <span class="title">{{ title }}</span>
      <span class="author">{{ authorNameStr }}</span>
    </div>
    <div class="flex flex-col">
      <VideoPreview :title="title" />
      <VideoActions :id="id" :videoLikeCount="videoLikeCount" />
    </div>
    <VideoDescription :description="description" />
  </div>
</template>

<script>
import VideoPreview from './VideoPreview'
import VideoDescription from './VideoDescription'
import VideoActions from './VideoActions'

export default {
  name: "VideoCard",
  components: {
    VideoPreview,
    VideoDescription,
    VideoActions
  },
  props: {
    video: {
      id: {
        type: Number
      },
      title: {
        type: String,
        default: 'Watch video'
      },
      description: {
        type: String
      },
      duration: {
        type: String
      },
      main_poster: {
        type: String
      },
      gif_preview: {
        type: String
      },
      author: {
        type: Object,
        default: {
          title: '',
          url: ''
        }
      },
      videoLikeCount: {
        type: Number,
        default: 0
      }
    }
  },
  computed: {
    id() {
      return this.video && this.video.id
    },
    title() {
      return this.video && this.video.title
    },
    description() {
      return this.video && this.video.description
    },
    authorName() {
      return this.video.author && this.video.author.title
    },
    authorNameStr() {
      return (this.authorName && `by ${this.authorName}`) || ''
    },
    videoLikeCount() {
      return this.video && this.video.likesCount
    }
  }
};
</script>

<style scoped>
.videoCardContainer {
  @apply bg-background-neutral mb-4 px-6 pt-6 pb-10;
}

.videoTitle {
  @apply flex w-full mb-6
}

.title {
  @apply text-accent text-xl mr-1;
}

.author {
  @apply text-xl text-neutral;
}
</style>

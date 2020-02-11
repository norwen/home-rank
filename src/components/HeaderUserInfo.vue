<template>
  <div class="userInfo flex justify-between">
    <div class="likesCredits">{{ userLikesStr }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HeaderUserInfo',
  computed: {
    ...mapGetters(['userLikeCreditsActive', 'userLikeCreditsTotal']),
    userLikesStr () {
      return `${this.userLikeCreditsActive} / ${this.userLikeCreditsTotal}`
    }
  }
}
</script>

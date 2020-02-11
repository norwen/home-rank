<template>
  <div class="bg-background-secondary p-6 text-secondary">
    <nav class="w-full xl:max-w-screen-xl xl:mx-auto flex items-center justify-between">
      <div class="font-bold text-xl">Home Rank app</div>
      <HeaderUserInfo />
      <div>
        <LoginButton v-if="!isAuthenticated" />
        <LogoutButton v-if="isAuthenticated" />
      </div>
    </nav>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import HeaderUserInfo from './HeaderUserInfo'

export default {
  name: 'TheHeader',
  components: {
    LoginButton,
    LogoutButton,
    HeaderUserInfo
  },
  computed: {
    ...mapGetters(['currentUser', 'isAuthenticated'])
  }
}
</script>

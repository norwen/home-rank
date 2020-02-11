<template>
  <VButton :onClick="logout">Logout</VButton>
</template>

<script>
import VButton from '@/components/VButton';
import { LOGOUT } from "../store/actions.type";
import { PATHS } from "../router";

export default {
  name: "LogoutButton",
  components: {
    VButton
  },
  methods: {
    logout() {
      this.$store.dispatch(LOGOUT).then(() => {
        this.$router.push({ name: PATHS.login });
      });
    }
  }
}
</script>

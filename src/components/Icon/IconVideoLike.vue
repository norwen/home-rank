<template>
  <div>
    <font-awesome-icon :icon="icon" :style="{ color }" size="2x" />
  </div>
</template>

<script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { faHeart } from '@fortawesome/free-regular-svg-icons'

  export default {
    name: 'IconVideoLike',
    props: {
      isActive: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        icon: faHeart
      }
    },
    computed: {
      color() { return this.isActive ? 'green' : 'gray' }
    },
    components: {
      FontAwesomeIcon
    }
  }
</script>

<template>
  <div>{{ count }}</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "onur",
  computed:{
    ...mapState([
      'count', 'videos'
    ])
  }
}
</script>

<style scoped>
div{

}
</style>
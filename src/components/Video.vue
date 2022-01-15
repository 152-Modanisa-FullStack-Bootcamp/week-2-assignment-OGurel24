<template>
  <div id="wrapper">
    <br>
    <button type="submit" @click="toggleFavorites(videoContent.id)">Add Favorites</button>
    <div class="video-box">{{ videoContent }}</div>
    <br>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {

  name: "VideoContent",
  props: ['videoContent'],
  methods:{...mapMutations([
      'toggleFavorites'
    ])
  }
}

</script>

<style scoped>
#wrapper{
  margin: 20px;
}
.video-box{
  background-color: red;
}

</style>
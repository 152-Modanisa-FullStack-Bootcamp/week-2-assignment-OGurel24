<template>
  <div id="favpage">
    <router-link to="/">HomePage</router-link>
    <div class="video-wrapper">
      <video-content v-for="video in favVideos" :key="video.title" :video-content="video">>{{ video.title }}></video-content>
    </div>

  </div>
</template>

<script>
import VideoContent from "./Video";
import {mapActions, mapState} from "vuex";

export default {
  name: "HomePage",
  components: {
    VideoContent
  },
  computed: {
    ...mapState([
      'favVideos'
    ]),
  },

  methods: {
    ...mapActions(['getVideos'])
  },
}
</script>

<style scoped>
.video-wrapper{
  display: flex;
}

</style>
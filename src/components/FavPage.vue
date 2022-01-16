<template>
  <div id="favpage">
    <video-content v-for="video in favVideos" :key="video.title" :video-content="video">>{{ video.title }}></video-content>
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

</style>
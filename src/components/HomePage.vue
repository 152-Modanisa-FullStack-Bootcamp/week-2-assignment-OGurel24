<template>
  <div id="homepage">
    <router-link to="/fav">Favorites</router-link>
    <video-content v-for="video in videos" :key="video.title" :video-content="video">>{{ video.title }}></video-content>
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
      "videos"
    ]),
  },

  methods: {
    ...mapActions(['getVideos'])
  },
}
</script>


<style scoped>

</style>
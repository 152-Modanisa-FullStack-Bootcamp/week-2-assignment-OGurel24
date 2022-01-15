<template>
  <div id="app">
    <video-content v-for="video in videos" :key="video.title" :video-content="video">>{{ video.title }}></video-content>
  </div>
</template>

<script>
import {mapState, mapActions} from "vuex";
import VideoContent from "./components/Video";

export default {
  name: 'App',
  computed: {
    ...mapState([
      "videos"
    ]),
  },
  components: {
    VideoContent
  },
  methods: {
    ...mapActions(['getVideos'])
  },

  created() {
    this.getVideos();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

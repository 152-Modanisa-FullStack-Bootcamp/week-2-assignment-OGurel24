<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1 v-for="video in videos" :key="video.title">>{{video.title}}</h1>
    <div>{{ count }}</div>
  </div>
</template>

<script>
//import VideoContent from './components/Video.vue'
import {mapState, mapActions} from "vuex";

export default {
  name: 'App',
  computed: {
    ...mapState([
      'count', "videos"
    ]),
  },
  components: {
    //VideoContent
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

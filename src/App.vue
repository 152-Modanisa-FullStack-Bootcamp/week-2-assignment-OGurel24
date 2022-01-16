<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import {mapState, mapActions} from "vuex";

export default {
  name: 'App',
  computed: {
    ...mapState([
      "videos"
    ]),
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

<template>
  <div id="wrapper">
    <br>
    <div :class="{fav:isFav}">{{ videoContent }}</div>
    <button type="submit" @click="favButton">
      Add Favorites
    </button>
    <br>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {

  name: "VideoContent",
  props: ['videoContent'],
  data() {
    return {
      isFav: false
    }
  },
  methods: {
    ...mapMutations([
      'toggleFavorites'
    ]),
    favButton() {
      this.isFav = !this.isFav;
      this.toggleFavorites(this.videoContent.id)
    }
  }
}

</script>

<style scoped>
#wrapper {
  margin: 20px;
}

.fav {
  background-color: red;
}

</style>
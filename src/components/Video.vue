<template>
  <div id="wrapper">
    <br>
    <button type="submit" @click="favButton">
      Add Favorites
    </button>
    <div :class="{fav:isFav}">{{ videoContent }}</div>
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
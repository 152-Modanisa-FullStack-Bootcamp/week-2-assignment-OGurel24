<template>
  <div class="video-wrapper">
    <img class="image-cover" @mouseover="hoverImageSet()" @mouseout="resetImage" :src="imgUrl" alt="">
    <img class="owner-image" :src="videoContent['ownerImage']" alt="">
    <p class="video-title">{{ videoContent.title }}</p>
    <p class="owner-name">{{ videoContent['ownerName'] }}</p>
    <p class="view-count">{{ videoContent['viewCount'] }}</p>
    <p class="published">{{ videoContent['publishDateInMonth'] }}</p>
    <button type="submit" @click="favButton">Add Favorites</button>
    <br><br>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {

  name: "VideoContent",
  props: ['videoContent'],
  data() {
    return {
      isFav: false,
      imgUrl: this.videoContent['coverImage']
    }
  },
  methods: {
    ...mapMutations([
      'toggleFavorites'
    ]),
    favButton() {
      this.isFav = !this.isFav;
      this.toggleFavorites(this.videoContent.id)
    },
    hoverImageSet() {
      //console.log("hover");
      this.imgUrl = this.videoContent['hoverImage'];
    },
    resetImage() {
      //console.log("out");
      this.imgUrl = this.videoContent['coverImage']
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

.image-cover {
  width: 360px;
  height: 200px;
}

.owner-image {
  width: 36px;
  height: 36px;
}

</style>
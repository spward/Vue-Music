<template>
  <div id="tracks">
    <h5 class="header">Top tracks</h5>

    <select name="range" v-model="range">
      <option value="day">Day</option>
      <option value="week">Week</option>
      <option value="month">Month</option>
      <option value="year">Year</option>
      <option value="life">Life</option>
    </select>
    <br>
    <div id="top-tracks">
      <div id="track" v-for="track in tracks" :key="track.id">
        <img
          @click="currentTrack(track), loadTrack()"
          class="cover"
          :src="'https://api.napster.com/imageserver/v2/albums/' + track.albumId  + '/images/500x500.jpg'"
        >

          <p class="content-name" @click="currentTrack(track), loadTrack()">{{track.name}}</p>
          
          <p class="artist-name">{{track.artistName}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Tracks",
  data() {
    return {
      range: "day"
    };
  },
  computed: {
    // Global Variables
    ...mapGetters(["songName", "songArtist", "songAlbum", "tracks"])
  },
  watch: {
    // Tracks the range to update the DOM on change
    range: function() {
      this.getTracks(this.range);
    }
  },
  created() {
    // Retrieve track data on page load
    this.getTracks(this.range);
  },
  methods: {
    // Global Functions
    ...mapActions(["loadTrack", "getTracks"]),
    // Commits the current track to vuex, player.js
    currentTrack: function(track) {
      this.$store.commit("setName", track.name);
      this.$store.commit("setArtist", track.artistName);
      this.$store.commit("setAlbum", track.albumId);
      this.$store.commit("setSong", track.previewURL);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#top-tracks {
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
}

#track {
  margin: 30px;
}

.cover {
  border-radius: 5%;
  width: 200px;
  height: 200px;

  &:hover {
    cursor: pointer;
  }
}

h5 {
  font-size: 1.4rem;
  color: #ddd;
  margin: 12px 30px;
}

select {
  font-size: 15px;
  margin: 0 30px;
}

p {
  max-width: 200px;
  overflow: hidden;
  white-space: nowrap;
  margin: 5px 0;
}

.content-name {
  cursor: pointer;
  font-weight: 700;
  color: #fff;
  font-size: 0.9375rem;
}

.artist-name {
  font-size: 0.85rem;
}
</style>

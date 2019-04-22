<template>
  <div id="albums">
    <h5 class="header">Top Albums</h5>
    <select name="range" v-model="range">
      <option value="day">Day</option>
      <option value="week">Week</option>
      <option value="month">Month</option>
      <option value="year">Year</option>
      <option value="life">Life</option>
    </select>
    <br>
    <div id="top-albums">
      <div class="album" v-for="album in albums" :key="album.id">
        <img
          class="album__cover"
          :src="'https://api.napster.com/imageserver/v2/albums/' + album.id  + '/images/500x500.jpg'"
        >
        <div class="album__content-name">
          <p>{{album.name}}</p>
        </div>
        <div class="album__artist-name">
          <p>{{album.artistName}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "albums",
  data() {
    return {
      range: "day"
    };
  },
  computed: {
    // Global Variable
    ...mapGetters(["albums"])
  },
  created() {
    // Outputs the albums on webpage load
    this.getAlbums(this.range);
  },
  watch: {
    // Tracks the range selector to update the DOM
    range: function() {
      this.getAlbums(this.range);
    }
  },
  methods: {
    // Global Function
    ...mapActions(["getAlbums"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#top-albums {
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
}

.album {
  margin: 30px;

  &__cover {
    border-radius: 5%;
    width: 200px;
    height: 200px;
  }

  &__content-name {
    font-weight: 700;
    color: #fff;
    font-size: 0.9375rem;
  }

  &__artist-name {
    font-size: 0.85rem;
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
</style>

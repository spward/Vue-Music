<template>
<div id="playlists">
  <h5 class="header">Top Playlists</h5>

  <br>
  <div id="top-playlists">
  <div id="playlist"  v-for="playlist in playlists" :key='playlist.id'>
    <img class="cover" :src="'https://api.napster.com/imageserver/v2/playlists/' + playlist.id  + '/artists/images/500x500.jpg'">
    <div class=content-name><p>{{playlist.name}}</p></div>
    <div class="artist-name"><p>{{playlist.description}}</p></div>
  </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'playlists',
  data () {
    return {
      playlists: [],
    }
  },
  created() {
    this.playlistData();
  },
  methods: {
    playlistData: function () {
      axios.get('http://api.napster.com/v2.2/playlists/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&limit=13')
      .then(response => {
        // JSON responses are automatically parsed.
        this.playlists = response.data.playlists
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#top-playlists {
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
}

#playlist {
margin: 30px;
}

.cover {
  border-radius: 5%;
  width: 200px;
  height: 200px;
}

h5 {
  font-size: 1.4rem;
  color: #ddd;
  margin: 0 30px;
  margin-bottom: -20px;
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
  font-weight: 700;
  color: #fff;
  font-size: .9375rem;
}

.artist-name {
  font-size: .85rem;
}

</style>

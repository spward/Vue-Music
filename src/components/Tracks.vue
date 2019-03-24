<template>
<div id="tracks">

  <div id="track"  v-for="track in tracks" :key='track.id'>
    <img class="cover" :src="'http://direct.rhapsody.com/imageserver/v2/albums/' + track.albumId  + '/images/300x300.jpg'">
    <audio controls class= "audio">
      <source :src="track.previewURL" type="audio/mpeg">
    </audio>
    <div class=content-name><p>{{track.name}}</p></div>
    <div class="artist-name"><p>{{track.artistName}}</p></div>

  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  props: ['range'],
  name: 'Tracks',
  data () {
    return {
      tracks: []
    }
  },
  created() {
    this.trackData();
  },
  watch: {
    range : function () {
      this.trackData();
    }
  },
  methods: {
    trackData: function () {
      axios.get('http://api.napster.com/v2.2/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&range=' + this.range)
      .then(response => {
        // JSON responses are automatically parsed.
        this.tracks = response.data.tracks
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
#tracks {
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
}

#track {
margin: 30px;
}

audio {
  position: absolute;
  display: none;
  z-index: 100;
  margin-top: -58px;
}

#track:hover > audio{
  display: block;
} 

p {
  max-width: 300px;
  overflow: hidden;
  white-space: nowrap;
  margin: 5px 0;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
}
</style>

<template>
  <div id="app">
      <h1 class="header">Top tracks of the {{range}}</h1>
      <div id="center">
      <select name="range" v-model="range">
        <option value="day">Day</option>
        <option value="week">Week</option>
        <option value="month">Month</option>
        <option value="year">Year</option>
        <option value="life">Life</option>
      </select>
      </div>
      <tracks :range="range"></tracks>
  </div>
</template>

<script>
import Tracks from './components/Tracks.vue'

export default {
  name: 'app',
  components: {
    'tracks' : Tracks
  },
  data () {
    return {
      range: 'day'
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Arimo:400,700');

body {
  font-family: 'Arimo', sans-serif;
  background-color: #1f2833;
  color: #c5c6c7;
}
h1 {
  font-size: 50px;
  text-align: center;
  color: #fca266;
}

select {
  font-size: 20px;
}

#center {
  text-align: center;
}
</style>

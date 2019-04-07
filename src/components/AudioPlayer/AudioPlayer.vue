<template>
  <div id="audio-player">
    <div class="player__inner" v-show="this.$root.$data.track.song">

      <current-track class="player__left"/>

      <div class="player__center">
        <player-controls />
        <!-- <player-playback/> -->
      </div>

      <div class="player__right">
        <!-- <device-picker/> -->
        <!-- <volume-bar/> -->
      </div>
    </div>
    <audio id="player" ref="player" :src="this.$root.$data.track.song"></audio>
  </div>
</template>

<script>
  import CurrentTrack from './CurrentTrack';
  import PlayerControls from './PlayerControls';
  // import PlayerPlayback from './PlayerPlayback';

  export default {
      name: "audio-player",
      components: {
        CurrentTrack,
        PlayerControls,
        // PlayerPlayback
      },
      data () {
        return {
        }
      }
  }
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';

#audio-player {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 75px;
    z-index: 2;
    background-color: $primary-d;
  
    .player__inner {
      display: flex;
      align-items: center;
      height: 100%;
    }

    .player__left {
      width: 30%;
      min-width: 180px;
    }

    .player__right {
      display: flex;
      width: 30%;
      min-width: 180px;
    }

    .player__center {
      width: 60%;
    }

      // .volume-bar {
      //   margin: 0 15px 0 5px
      // }


}
</style>
<template>
    <div id="player-controls">
        <i class="fas fa-step-backward control-btn"  id="prev-btn"></i>
        <i class="fas fa-pause control-btn" v-if="this.$root.$data.track.isPlaying"  id="pause-btn" @click="toggleStatus()"></i>
        <i class="fas fa-play control-btn" v-else id="play-btn" @click="toggleStatus()"></i>
        <i class="fas fa-step-forward control-btn" id="next-btn"></i>
    </div>
</template>

<script>
  export default {
      name: 'player-controls',
      data () {
        return {
          audioElement: null,
          volume: 0.5,
        }
      },
    methods: {
      toggleStatus: function () {
        this.$root.$data.track.isPlaying = !this.$root.$data.track.isPlaying;
        if (!this.isTrackLoaded) {
          this.loadTrack(this.$root.$data.track.song || 0);
          }

          if(this.$root.$data.track.changeSong) {
            this.loadTrack();
          }

          if (this.$root.$data.track.isPlaying) {
            this.play();
            return;
          }
          this.pause();
        },
      loadTrack: function () {
        if (this.audioElement) this.audioElement.pause();
        this.audioElement = new Audio(this.$root.$data.track.song);
        this.$root.$data.track.changeSong = false;
      },
      play: function () {
        this.audioElement.play();
      },
      pause: function () {
        this.audioElement.pause();
      }
    },
    computed: {
      isTrackLoaded: function () {
        return (this.$root.$data.track.song !== null) && this.audioElement !== null;
      }
    }
  }
</script>

<style lang="scss" scoped>
  #player-controls {
    display: flex;
    justify-content: center;

    .control-btn {
      margin: auto 10px;
      font-size: 18px;
      cursor: pointer;
      outline: none;
      color: rgb(211, 211, 211);
      &:hover {
        color: #fff;
      }
    }

      #play-btn,
      #pause-btn{
        font-size: 24px;
        padding: 9px;
        &:hover {
          color: #fff;
          transform: scale(1.1);
        }
      }
  }
</style>
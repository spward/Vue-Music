<template>
    <div id="player-controls">
        <i class="fas fa-step-backward control-btn"  id="prev-btn"></i>
        <i class="fas fa-pause control-btn" v-if="this.$root.$data.track.isPlaying"  id="pause-btn" @click="pause(), togglePlay()"></i>
        <i class="fas fa-play control-btn" v-else id="play-btn" @click="play(), togglePlay()"></i>
        <i class="fas fa-step-forward control-btn" id="next-btn"></i>
    </div>
</template>

<script>
    export default {
      name: 'player-controls',
      data () {
        return {
        audioElement: null
        }
      },
      created() {
        this.loadTrack();
      },
      methods: {
        loadTrack () {
        this.audioElement = new Audio(this.$root.$data.track.song);
        },
        pause() {
          this.audioElement.pause();
        },

        play() {
          this.audioElement.play();
        },
        togglePlay() {
          this.$root.$data.track.isPlaying = !this.$root.$data.track.isPlaying;

          if ( !this.isPlaying ) {
            this.play();
            return;
          }else {
            this.pause();
          }
        }
      },
      computed: {
        isTrackLoaded: function () {
          return (this.activeTrack !== null) && this.audioElement;
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
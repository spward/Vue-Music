// Set all global data necessary for Audio Player
const state = {
  name: "",
  artist: "",
  album: "",
  song: "",
  volume: 0.5,
  audioElement: null,
  isPlaying: false,
  playbackProgress: 0,
  songDuration: null
};

// Gets data to send to components
const getters = {
  songName: state => state.name,
  songArtist: state => state.artist,
  songAlbum: state => state.album,
  song: state => state.song,
  audioElement: state => state.audioElement,
  isPlaying: state => state.isPlaying,
  volume: state => state.volume,
  playbackProgress: state => state.playbackProgress,
  songDuration: state => state.songDuration
};

const actions = {
  // Changes the song when song is selected
  loadTrack({ commit, dispatch }) {
    if (state.isPlaying && state.audioElement !== null) {
      commit("setIsPlaying", false);
      state.audioElement.pause();
      state.audioElement.currentTime = 0;
      commit("setSongDuration", 0);
    }
    let audioInstance = new Audio(state.song);

    commit("setPlaybackProgress", 0);
    commit("setAudio", audioInstance);
    commit("setVolume", state.volume);
    state.audioElement.load();
    state.audioElement.onloadedmetadata = () => {
      setTimeout(() => {
        state.audioElement.play();
        dispatch("toggleIsPlaying");
      }, 10);
      commit("setSongDuration", Math.round(state.audioElement.duration));
    };
  },
  // Toggles the playing boolean
  toggleIsPlaying({ commit }) {
    let newPlayState = !state.isPlaying;
    commit("setIsPlaying", newPlayState);
    if (state.isPlaying) {
      state.audioElement.play();
      //add event listener to update the playback time
      state.audioElement.ontimeupdate = () => {
        commit("setPlaybackProgress", state.audioElement.currentTime);
      };
    } else {
      state.audioElement.pause();
    }
  },
  // Change the volume of the song
  changeVolume({ commit }, changeVolume) {
    commit("setVolume", changeVolume / 10);
    state.audioElement.volume = state.volume;
  },
  //manually change the play back time
  changePlaybackProgress({ commit }, playbackTime) {
    let playbackNewTime = 0;
    if (playbackTime > state.audioElement.duration) {
      playbackNewTime = state.audioElement.duration;
    } else if (playbackTime <= 0) {
      playbackNewTime = 0;
    } else {
      playbackNewTime = playbackTime;
    }
    commit("setPlaybackProgress", playbackNewTime);
    state.audioElement.currentTime = state.playbackProgress;
  }
};

// Any changes to the data is updated
const mutations = {
  setName: (state, songName) => (state.name = songName),
  setArtist: (state, songArtist) => (state.artist = songArtist),
  setAlbum: (state, songAlbum) => (state.album = songAlbum),
  setSong: (state, song) => (state.song = song),
  setAudio: (state, audioInstance) => (state.audioElement = audioInstance),
  setIsPlaying: (state, isPlaying) => (state.isPlaying = isPlaying),
  setVolume: (state, volume) => (state.volume = volume),
  setPlaybackProgress: (state, playbackTime) =>
    (state.playbackProgress = playbackTime),
  setSongDuration: (state, duration) => (state.songDuration = duration)
};

// Exports all of the data from Vuex
export default {
  state,
  getters,
  actions,
  mutations
};

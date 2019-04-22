// Set all global data necessary for the Audio Player
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
    // If the song is not playing init the song
    if (state.isPlaying && state.audioElement !== null) {
      commit("setIsPlaying", false);
      state.audioElement.pause();
      state.audioElement.currentTime = 0;
      commit("setSongDuration", 0);
    }
    // Create new song Audio
    let audioInstance = new Audio(state.song);

    // Set song to the start.
    commit("setPlaybackProgress", 0);
    // Set song to play
    commit("setAudio", audioInstance);
    // Set volume to desired level
    commit("setVolume", state.volume);

    // Load the song and volume.
    state.audioElement.load();
    state.audioElement.volume = state.volume;
    state.audioElement.onloadedmetadata = () => {
      // Play audio
      setTimeout(() => {
        state.audioElement.play();
        dispatch("toggleIsPlaying");
      }, 10);
      // Sets the songs full duration.
      commit("setSongDuration", Math.round(state.audioElement.duration));
    };
  },
  // Toggles the playing boolean
  toggleIsPlaying({ commit }) {
    // Updates and commits the current play state
    let newPlayState = !state.isPlaying;
    commit("setIsPlaying", newPlayState);

    // Checks to ensure the current song is playing
    if (state.isPlaying) {
      state.audioElement.play();

      //add event listener to update the playback time
      state.audioElement.ontimeupdate = () => {
        // Stops the song if the song has reached the songs length
        if (state.audioElement.currentTime >= state.songDuration) {
          commit("setPlaybackProgress", state.songDuration);
          commit("setIsPlaying", false);
        } else {
          // Updates the current song position
          commit("setPlaybackProgress", state.audioElement.currentTime);
        }
      };
    } else {
      // Pauses the song if isPlaying is false
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
      // if the Playback time is les than 1 start song from 0
      playbackNewTime = 0;
    } else {
      // Set song location to wherever dragged to
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

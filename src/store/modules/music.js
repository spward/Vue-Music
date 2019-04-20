import axios from "axios";
// Set all global data necessary for Audio Player
const state = {
  tracks: [],
  albums: [],
  artists: [],
  playlists: []
};

// Gets data to send to components
const getters = {
  tracks: state => state.tracks,
  albums: state => state.albums,
  artists: state => state.artists,
  playlists: state => state.playlists
};

const actions = {
  // Retrieves all of the Tracks Data
  async getTracks({ commit }, range) {
    await axios
      .get(
        "http://api.napster.com/v2.2/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&limit=10&range=" +
          range
      )
      .then(response => {
        // JSON responses are automatically parsed.
        commit("setTracks", response.data.tracks);
      });
  },
  // Retrieves all of the Albums Data
  async getAlbums({ commit }, range) {
    await axios
      .get(
        "http://api.napster.com/v2.2/albums/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&limit=10&range=" +
          range
      )
      .then(response => {
        // JSON responses are automatically parsed.
        commit("setAlbums", response.data.albums);
      });
  },
  // Retrieves all of the Artists Data
  async getArtists({ commit }, range) {
    await axios
      .get(
        "http://api.napster.com/v2.2/artists/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&limit=10&range=" +
          range
      )
      .then(response => {
        commit("setArtists", response.data.artists);
      });
  },
  // Retrieves all of the Playlists Data
  async getPlaylists({ commit }) {
    await axios
      .get(
        "http://api.napster.com/v2.2/playlists/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&limit=13"
      )
      .then(response => {
        commit("setPlaylists", response.data.playlists);
      });
  }
};

// Any changes to the data is updated
const mutations = {
  setTracks: (state, tracks) => (state.tracks = tracks),
  setAlbums: (state, albums) => (state.albums = albums),
  setArtists: (state, artists) => (state.artists = artists),
  setPlaylists: (state, playlists) => (state.playlists = playlists)
};

// Exports all of the data from Vuex
export default {
  state,
  getters,
  actions,
  mutations
};

export default {
    getPlaylist(state, { playlists }) {
        state.playlists = playlists;
    },
    getPlaylistDetail(state, { playlistDetail }) {
        state.playlistDetail = playlistDetail;
    }
}
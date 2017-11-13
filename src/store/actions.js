import axios from 'axios';
import { PLAYLIST } from './axios.url';

function handleResponse(response) {
    if (response.status === 200) {
        return response.data;
    } else {
        throw ('request error', response);
    }
}
export default {
    getPlaylist({ commit }) {
        axios({
            method: 'GET',
            url: PLAYLIST,
        }).then(response => {
            let data = handleResponse(response);
            commit("getPlaylist", { playlists: data.playlists });
        })
    },
    getPlaylistDetail({ commit }, { id }) {
        axios({
            method: 'GET',
            url: 'https://api.imjad.cn/cloudmusic/?type=playlist&id=' + id
        }).then(response => {
            let data = handleResponse(response);
            commit("getPlaylistDetail", { playlistDetail: data.playlist });
        })
    }
}
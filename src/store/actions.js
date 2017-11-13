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
    async getPlaylistDetail({ commit }, { id }) {
        let response = await axios({
            method: 'GET',
            url: 'https://api.imjad.cn/cloudmusic/?type=playlist&id=' + id
        });
        let data = handleResponse(response);
        commit("getPlaylistDetail", { playlistDetail: data.playlist });
    }
}
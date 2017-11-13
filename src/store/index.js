import Vuex from 'vuex';
import Vue from 'vue';
import mutations from './mutations';
import getters from './getters';
import actions from './actions';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        tabs: [
            { value: "rank", path: "/rank", title: "rank" },
            { value: "tab1", path: "/list", title: "tab1" },
            { value: "tab2", path: "/unsure", title: "tab2" }
        ],
        banners: [
            { img: '/static/banner1.jpg' },
            { img: '/static/banner2.jpg' },
            { img: '/static/banner3.jpg' },
            { img: '/static/banner4.jpg' }
        ],
        playlists: [],
        playlistDetail: {}
    },
    mutations,
    getters,
    actions
});

export default store;
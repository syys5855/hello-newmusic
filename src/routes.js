import Home from '@views/home.vue';
import Rank from '@views/rank.vue';
import PlaylistDetail from '@views/playlist-detail'
export default [{
        path: '/',
        component: Home,
        children: [{
            path: 'rank',
            component: Rank,
        }]
    },
    {
        path: '/playlist-detail/:id',
        name: 'playlist-detail',
        component: PlaylistDetail
    },
    { path: '*', redirect: '/rank' }
]
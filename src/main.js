import Vue from 'vue';
import VueRouter from 'vue-router';
import MuseUI from 'muse-ui';
import 'muse-components/styles/base.less';
// swiper 
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import App from './app';
import routes from './routes';
import store from './store/';
// components
import { tabs, tab } from 'muse-components/tabs';
import { swiper, swiperSlide } from 'vue-awesome-swiper'

Vue.use(VueRouter);
Vue.use(MuseUI);
Vue.use(VueAwesomeSwiper);

Vue.component(tabs.name, tabs);
Vue.component(tab.name, tab);

Vue.component(swiper.name, swiper);
Vue.component(swiperSlide.name, swiperSlide);



const router = new VueRouter({
    routes
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
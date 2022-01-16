import Vue from 'vue'

import Vuex from 'vuex'
import axios from "axios";
import VueRouter from 'vue-router'

import App from './App.vue'
import HomePage from "./components/HomePage";
import FavPage from "./components/FavPage";

Vue.use(Vuex)
Vue.use(VueRouter);

Vue.config.productionTip = false

const store = new Vuex.Store({
    state: {
        videos: [],
        favVideos: []
    },
    mutations: {
        setVideos(state, videos) {
            state.videos = videos;
        },
        toggleFavorites(state, videoId) {
            let video = state.videos[videoId]
            if (!state.favVideos.includes(video)) {
                console.log('Add', videoId);
                state.favVideos.push(state.videos[videoId]);
                console.log(state.favVideos)
            } else {
                console.log('Remove', videoId);
                let deletePosition = state.favVideos.indexOf(video)
                if (deletePosition >= 0) {
                    state.favVideos.splice(deletePosition, 1)
                    console.log(state.favVideos)
                }
            }
        }
    },
    actions: {
        async getVideos(context) {
            const response = await axios
                .get('https://my-json-server.typicode.com/modanisa/bootcamp-video-db/videos');
            console.log(response.data);
            context.commit('setVideos', response.data);
        }
    }
})

const routes = [
    {path: '/', component: HomePage},
    {path: '/fav', component: FavPage}
]
const router = new VueRouter({
    routes // short for `routes: routes`
})

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)
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
                .get('https://my-json-server.typicode.com/modanisa/bootcamp-video-db/videos')
            context.commit('setVideos', response.data)
        }
    }
})

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')

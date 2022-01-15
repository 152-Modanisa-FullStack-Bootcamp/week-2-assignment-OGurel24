import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
    state: {
        count: 5,
        videos: []
    },
    mutations: {
        setVideos(state,videos) {
            state.videos=videos;
        },
    },
    actions:{
        async getVideos(context){
            const response=await axios
                .get('https://my-json-server.typicode.com/modanisa/bootcamp-video-db/videos')
            context.commit('setVideos',response.data)
        }
    }
})

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')

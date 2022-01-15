import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
    state: {
        count: 5,
        videos: axios.get('https://my-json-server.typicode.com/modanisa/bootcamp-video-db/videos')
            .then(function (response){
                console.log(response.data);
                return response.data
            }
        )
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')

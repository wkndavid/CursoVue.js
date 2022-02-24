import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const store = createStore({
    state(){
        return{
            first_name: 'David',
            last_name: 'Jesus',
            email: 'wkndavid@wkn.com',
            counter: 0,
        }
    },
    mutations: {
        increment(state, value){
            state.counter += value;
        },
        decrement(state, value){
            state.counter -= value;
        },
    },
})

createApp(App)
.use(store)
.mount('#app')

import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const store = createStore({
    state(){
        return{
            first_name: 'David',
            last_name: 'Jesus',
            email: 'wkndavid@wkn.com'
        }
    },
    mutation: {
        updateName(){
        },
    },
});

createApp(App)
.use(store)
.mount('#app')


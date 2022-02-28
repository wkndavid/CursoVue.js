import { setTimeout } from 'core-js'
import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import { INCREMENT } from './components/mutations'

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
        [INCREMENT](state, value){
            state.counter += value;
        },
        DECREMENT(state, value){
            state.counter -= value;
        },
        },
        actions: {
            counter({ commit }, { type, value }) {
                    return new Promise( (resolve) => {
                        setTimeout(() => {
                            commit(type, value)


                            resolve()
                        }, 3000)
                    });
                }
            },
            getters: {
                fullName(state) {
                    return `${state.first_name} ${state.last_name}`
                }
            }
    })

createApp(App)
.use(store)
.mount('#app')

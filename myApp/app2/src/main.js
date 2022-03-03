import { setTimeout } from 'core-js'
import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import { INCREMENT } from './components/mutations'

const store = createStore({
    strict: true,
    modules: {
        users: {
            namespaced: true,
            state: () => ({
                first_name: 'Aya',
                last_name: 'Stark',
                email: 'arya@stark.com'
            }),
            mutatios: {},
            actions: {},
            geterrs: {} 
        },
        counter: {
            namespaced: true,
            state: () => ({
                counter: 0
            }),
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
                },
            },
    state(){
        return{
            first_name: 'David',
            last_name: 'Jesus',
            email: 'wkndavid@wkn.com',
            posts: [
                { id: 1, title: 'Hello' },
                { id: 2, title: 'Bye' }
            ],
            counter: 0,
        }
    },
    getters: {
        fullName(state) {
            return `${state.first_name} ${state.last_name}`
        },
        getPostById(state) {
            return function(id){
                return state.posts.find(o => o.id === id);
            }
        }
    }
})

createApp(App)
.use(store)
.mount('#app')

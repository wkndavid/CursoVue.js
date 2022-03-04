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
            getters: {
                fullName(state) {
                    return `${state.first_name} ${state.last_name}`
                },
            } 

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
    posts: {
        namespaced: true,
        state: () => ({
            posts: [
                    { id: 1, title: 'helloWold' },
                    { id: 2, title: 'byeeee!' },
                ]
            }),
            getters: {
                getPostById: (state) => (id) => {
                        return state.posts.find(o => o.id === id);
                    },
        }
    }
})

createApp(App)
.use(store)
.mount('#app')

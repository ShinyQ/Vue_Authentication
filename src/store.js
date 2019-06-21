import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        data: {
            user: [],
            error: ''
        },
    },
    mutations: {
        setUser(state, payload) {
            state.data.user = payload
        },
        setError(state, payload) {
            state.data.error = payload
        }
    },
    actions: {
        doLogin({ commit }, payload) {
            axios.post('http://localhost:8000/api/login', {
                email: payload.email,
                password: payload.password
            }).then(function (response) {
                commit('setError', '');
                commit('setUser', response.data);
                const dataUser = JSON.stringify(response.data);
                localStorage.setItem("dataUser", dataUser);
                this.$router.push('/');
            }).catch(function (error) {
                if (error.response.status == 422) {
                    commit('setError', error.response.data.errors)
                }
            });
        }
    }
})

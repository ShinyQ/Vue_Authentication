<template>
    <div style="background:white; padding:5%">
        <h1>Login</h1>

            <input type="text" v-model="email" placeholder="email">
        <br><br>
  
            <input type="password" v-model="password" placeholder="password">
        <br><br>
        <button @click="login()">Login</button> <br><br>
        {{ user }}
    </div>
</template>

<script>
import checkLogin from '@/mixins/checkLogin.js'

export default {
    name: 'login',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    computed: {
        user() {
            return this.$store.state.data.user
        },
        error() {
            return this.$store.state.data.error
        }
    },
    methods: {
        login() {
            const payload = {
                email: this.email,
                password: this.password
            }
            this.$store.dispatch('doLogin', payload);
        }
    },
    mixins: [checkLogin]
}
</script>
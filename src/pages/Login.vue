<template>
    <div class="login">
        <p>email: admin@gmail.com</p>
        <p>password: 123</p>
        <h1>Login</h1>
        <div class="form-group">
            <input type="text" v-model="email" placeholder="email">
            {{ email }}
            {{ error.email }}
        </div>
        <div class="form-group">
            <input type="password" v-model="password" placeholder="password">
            {{password}}
            {{ error.password }}
        </div>
        <button @click="login()">Login</button>
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
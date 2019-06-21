export default {
    mounted() {
        if (this.$router.currentRoute.name == 'login') {
            if (localStorage.getItem("dataUser")) {
                this.$router.push('/');
            } else {
                return true;
            }
        } else {
            if (localStorage.getItem("dataUser") == null) {
                this.$router.push('/login');
            } else {
                return true;
            }
        }
    }
}
<template>
        <tr>
        <td>{{ film.id }}</td>
        <td><img :src="'https://image.tmdb.org/t/p/w500' + film.poster_path" width="200px"></td>
        <td>{{ film.title }}</td>
        <td>{{ film.popularity }}</td> 
        <td>{{ film.vote_average }}</td>
        <td>{{ film.release_date }}</td>
        <td><router-link class="button button-detail" :to="'detail/' + film.id ">Detail Film</router-link></td>
        <!-- <td><a :href="film.url" target="_blank">{{film.url}}</a></td> -->
        </tr>

</template>

<script>
    export default {
        name: 'GetApi',
        props: {
            film: Object,
            index: Number
        },
    }
</script>
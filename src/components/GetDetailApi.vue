<template>
      
        <div class="row">

            <div v-if="loading" class="col-md-12">
                <span class="progress">
                    Sedang Mengambil Data ...
                </span>
            </div>
            
            <div v-else>
                <h1>{{ films.title }}</h1>
                <div class="col-md-3">
                    <img :src="'https://image.tmdb.org/t/p/w500' + films.poster_path" width="250px">
                </div>
                <div class="col-md-9">
                    <h4>Rate : {{ films.vote_average }}</h4>
                    <h4>Vote : {{ films.vote_count }}</h4>
                    <h4>Popularitas : {{ films.popularity }}</h4>
                    <h4>Budget Film : ${{ films.budget.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')  }} </h4>
                    <h4>Penghasilan Film : ${{ films.revenue.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') }}</h4>
                    <h4>Produksi : {{ films.production_companies[0].name }}</h4>
                    <h4>Deskripsi :</h4> <p>{{ films.overview }}</p>
                </div>
            </div>

        </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'GetDetailApi',
    props: {
            film: String,
    },
    data: function () {
        return {
            films:[],
            loading: true,
            errored: false,
        }
    },
    methods: {
      fetchDetailFilms: function () {
        axios.get('https://api.themoviedb.org/3/movie/' + this.$route.params.id +'?api_key=56598d890c1a31aeed1fc0a5daddec30&language=en').then((response) => {
          this.films = response.data
          console.log(response.data)
        }, (error) => {
          console.log(error)
        }).catch(error => {
            console.log(error)
            this.errored = true
        })
        .finally(() => this.loading = false)
      }
    },
    mounted: function () {
      this.fetchDetailFilms()
    }
  }
</script>
<template>
  <div id="app">
        <h1>Marvel Movie API</h1>
         <div v-if="loading" class="col-md-12">
                <span class="progress">
                        Sedang Mengambil Data ...
                </span>
        </div>
        <div v-else>
            <table>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Poster</th>
                    <th>Title</th>
                    <th>Popularity</th>
                    <th>Rating</th>
                    <th>Release Date</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <GetApi :film="film" v-for="(film, index) in films" :key="index"></GetApi>
            </table>
        </div> 
  </div>
</template>

<script>
  import axios from 'axios'
  import GetApi from '../components/GetApi'
  export default {
    name: 'app',
    components: {    
      GetApi
    },
    data: function () {
      return {
        films: [],
        loading: true,
        errored: false,
      }
    },
    methods: {
      fetchFilms: function () {
        axios.get('https://api.themoviedb.org/3/list/1?api_key=56598d890c1a31aeed1fc0a5daddec30').then((response) => {
          this.films = response.data.items
          console.log(response.data.items)
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
      this.fetchFilms()
    }
  }
</script>


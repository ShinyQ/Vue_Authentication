<template>
   <div id="app" style="margin-top:5%!important">
     <link href="https://cdn.jsdelivr.net/npm/bootstrap-grid-only@1.0.0/bootstrap.css" rel="stylesheet" />

        <router-link class="button button-detail" to="/"><- Kembali Ke Home</router-link>
        <GetDetailApi ></GetDetailApi>
  </div>
</template>

<script>
  import axios from 'axios'
  import GetDetailApi from '../components/GetDetailApi'
  export default {
    name: 'DetailFilm',
    components: {    
        GetDetailApi
    },
    data: function () {
        return {
            films:[] 
        }
    }, 
  }
</script>
<style>
    .back{
        text-decoration: none!important;
    }
</style>
<template>
  <div class="hello">
      <ul>
          <li><router-link to="/">Sunset</router-link></li>
             <li><router-link to="Sunrise">Sunrise</router-link></li>
    </ul> 
      
    <h1>{{ msg }}</h1>
       <form v-on:submit.prevent="sunTimes">
      <p>Latitude <input type="text" v-model="rhyme"> Longitude <input type="text" v-model="phrase"> <button type="submit">Search</button></p>
    </form>
     
   
    <h2>API Credit</h2>
      
    <ul>
      <li>
        <a href="https://sunrise-sunset.org/api"
          target="_blank"
        >
          Sunset and sunrise times API
        </a>
      </li>
      
    </ul>
  </div>
</template>

<script>
    import axios from 'axios';

    
    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Sunset Times'
            }
        },
    methods: {
  findWords: function(){
    axios.get('https://api.sunrise-sunset.org/json', {
      params: {
        lt: this.lat,
        lg: this.long
      }
    })
    .then(response => {
      this.results = response.data;
    })
    .catch(error => {
      this.errors.push(error);
    });
  }
}
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1,
    h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

</style>

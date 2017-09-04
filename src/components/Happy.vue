<template>
<div>
<h1 v-for="me in them"> {{me}}</h1>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'happy',
  data () {
    return {
      them: []
    }
    
  },
  mounted: function(){
  	this.get_them();
  },
  methods: {
    	get_them: function(){
    axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
        
        this.them = ["first one", "second one", "thirld one", "happy one"];
      }).catch((error) => {
      console.log("error occured");
        console.log(error);
      });
    		
    	}
    },
    computed: {
      all_of_them: function(){
        
          const them = this.them;
          them.push("computed_one")
          return them;
        
      },
      computed_first: function(){
        return 'happy';
      }    
    }
}
</script>
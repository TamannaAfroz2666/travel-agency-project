<template>
    <Header />
    <div>
        <h1>Welcome to my Add Page</h1>

    </div>
   <div class="">
    <form class="add-form" action="">
        <div class="add">
        <!-- <input type="number" name="name" v-model=" resturant.name" placeholder="Enter Your Id Number"> -->
        <input type="number" name="number" v-model=" resturant.number" placeholder="Enter Your User ID">
        <input type="text" name="title" v-model=" resturant.title" placeholder="Enter Your Title">
        <textarea name="description" class="form-control" rows="10" cols="50" type="text" v-model=" resturant.description"></textarea>
        <button type="button" v-on:click="addResturant">Add</button>
        <!-- <p class="btn add">
             <button><router-link class="button" to="/">Submit</router-link></button> 
        </p> -->
    </div>
    </form>
   </div>
  <div>
    
  </div>
</template>
<script>
   

import Header from './Header.vue'
import axios from 'axios';


    export default {
    name: "AddPage",
    component: {
        Header
    },
    data(){
        return {
            resturant: {
                // name: '',
                number: '',
                title:'',
                description:''
            },

            

                                         

        }
    },
    methods: {
        async addResturant(){
            console.warn(this.resturant);
            const result = await axios.post("https://jsonplaceholder.typicode.com/posts",{
                title:this.resturant.title,
                description:this.resturant.description,
                number:this.resturant.number,

            });
            if(result.status == 201){
                this.$router.push({name:'HomePage'});
            }

            console.warn("result is: ", result)
        }
    },
    // computed: {
    //   rows() {
    //     return this.items.length
    //   }
    // },
    
    components: { Header }
}
</script>
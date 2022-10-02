<template>
    <div>
        <img class="logo" src="../assets/download.png" alt=""/>
        <h1>Update Your Information Here</h1>
    <!-- <h3>{{name}}</h3> -->
    </div>
    <form class="update-form" action="">
        <div class="update">
        <input type="text" v-model="name" placeholder="Enter Your Name">
        <input type="text" v-model="text" placeholder="Enter Your User ID">
        <input type="text" v-model="title" placeholder="Enter Your Title">
        <textarea class="form-control" rows="10" cols="50" type="text" v-model="description"></textarea>
        <!-- <button v-on:click="singUp">Submit</button> -->
        <p class="btn">
            <button><router-link class="button" to="/">Submit</router-link></button>
        </p>
    </div>
    </form>
    </template>
    
    <script>
        import axios from 'axios'
    
        export default {
            name : 'SingUp',
            data()
            {
                return{
                    name: '',
                    email: '',
                    password: ''
                }
            },
            methods: {
               async singUp()
                {
                    let result = await axios.post("http://localhost:3000/user",{
                        email:this.email,
                        password:this.password,
                        name:this.name
    
                    });
                    
                    console.warn(result);
                    if(result.status == 201){
                        alert('Sing Up Done');
                        this.$router.push({name:'Login'})
                    }
                }
            },
    
        
        };
    
    </script>
    
    <style>
        
    </style>





<!-- <template>
    <Header />
    <div>
        <h1>Welcome to my Update</h1>
    </div>
</template>
<script>
   

import Header from './Header.vue'


    export default {
    name: "UpdatePage",
    component: {
        Header
    }
    // mounted() {
    //     if(!user){
    //         this.$router.push({name :'SingUp'})
    //     }
    // },
    ,
    components: { Header }
}
</script> -->
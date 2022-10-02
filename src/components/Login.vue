<template>
    <!-- <h1>This Is Login Page</h1> -->
    <div>
    <img class="logo" src="../assets/download.png" alt=""/>
    <h1>Login Here</h1>
<!-- <h3>{{name}}</h3> -->
</div>
<div class="login">
    
    <input type="email" v-model="email" placeholder="Enter Your Email">
    <input type="password" v-model="password" placeholder="Enter Your Password">
    <button v-on:click="login">Login</button>
    <p>
        <router-link to="/sing-up">Go Register</router-link>
    </p>
</div>
</template>
<script>
    import axios from 'axios';
    export default{
        name: 'LoginPage',
        data(){
            return{
                email:'',
                password:''
            }
        },
        methods: {
            async login(){
                //API fetch 
                let result = await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`
                    )
                    if(result.status == 200 && result.data.length>0){
                    alert('Login Done');
                    this.$router.push({name:'HomePage'})
                }
                console.warn(result);
            }
        },

    }
</script>
<template>
<div>
    <img class="logo" src="../assets/download.png" alt=""/>
    <h1>SingUp Here</h1>
<!-- <h3>{{name}}</h3> -->
</div>
<div class="register">
    <input type="text" v-model="name" placeholder="Enter Your Name">
    <input type="email" v-model="email" placeholder="Enter Your Email">
    <input type="password" v-model="password" placeholder="Enter Your Password">
    <button v-on:click="singUp"  >Submit</button>
</div>
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
                console.log('st ',result.status)
                console.warn(result);
                if(result.status == 201){
                    alert('Sing Up Done');
                    this.$router.push({name:'HomePage'})
                }
            }
        },

    
    };

</script>

<style>
    .logo{
        width: 100px;
    }
    .register input{
        width: 400px;
        height: 40px;
        padding-left: 20px;
        display: block;
        margin-bottom: 30px;
        margin-left: auto;
        margin-right: auto;
        border: 1px solid #ccc;
    }
    .register button{
        width: 100px;
        height: 30px;
        border: 1px solid #ccc;
        background-color: #ddaefa;
    }
</style>
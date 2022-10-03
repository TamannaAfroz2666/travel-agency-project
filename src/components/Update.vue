<template>
<div>
    <img class="logo" src="../assets/download.png" alt="" />
    <h1>Update Your Information Here</h1>
    <!-- <h3>{{name}}</h3> -->
</div>
<form class="add-form" action="">
    <div class="add">
        <!-- <input type="number" name="name" v-model=" resturant.name" placeholder="Enter Your Id Number"> -->
        <input type="number" name="userId" v-model="user.userId" placeholder="Enter Your User ID" />
        <input type="text" name="title" v-model="user.title" placeholder="Enter Your Title" />
        <textarea name="body" class="form-control" rows="10" cols="50" type="text" v-model="user.body"></textarea>
        <button type="button" v-on:click="updateUser">Update</button>
        <!-- <p class="btn add">
             <button><router-link class="button" to="/">Submit</router-link></button> 
        </p> -->
    </div>
</form>
</template>


<script>


    import Header from './Header.vue'
    import axios from "axios";

    export default {
        name: "UpdatePage",
        component: {
            Header
        },
        data() {
            return {
                user: {
                    // name: '',
                    userId: "",
                    title: "",
                    body: "",
                },
            };
        },
        methods:{
            async updateUser(){
            console.warn(this.user);
            const result = await axios.put("https://jsonplaceholder.typicode.com/posts/"+this.$route.params.id,{
                title:this.user.title,
                userId:this.user.userId,
                body:this.user.body,

            });
            console.log('result = ', result);
            if(result.status == 200){
                this.$router.push({name:'HomePage'});
            }

            console.warn("result is: ", result)
        }

        },
       
       async mounted() {
            let user = localStorage.getItem('user-info');
            console.log('user = ', user);
            if (!user) {
                this.$router.push({
                    name: "SingUp"
                })
                
            }
            const result =  await axios .get('https://jsonplaceholder.typicode.com/posts/'+this.$route.params.id )
            // console.warn(this.$route.params.id)
            console.warn(result.data);
            this.user = result.data

        },
        // components: { Header }
    }
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

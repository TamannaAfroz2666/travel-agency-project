<template>
    <Header />
    <div>
        <h1>Welcome to my HomePage</h1>
        <table border="1">
            <tr class="table-header">
                <td>ID</td>
                <td>User ID</td>
                <td>Title</td>
                <td>Body</td>
                <td>Update</td>
                <td>Delete</td>
            </tr>
            <tr class="table-body" v-for="item in FlightDetail.slice(1, 10)" :key="item.id">
                
                <td>{{item.id}} </td>
                <td>{{item.userId}}</td>
                <td>{{item.title}}</td>
                <td>{{item.body}}  </td>
                <td><button>Update</button></td>
                <td><button>Delete</button></td>
              
                

            </tr>
        </table>
    </div>
</template>
<script>
   

import Header from './Header.vue'
import axios from 'axios';


    export default {
    name: "HomePage",
        data(){
            return{
                name:'',
                FlightDetail:[],
            }
        },

    component: {
        Header
    },
    async mounted() {
        
        let result = await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.warn(result);
        this.FlightDetail = result.data;
    },
    
    components: { Header }
}
</script>
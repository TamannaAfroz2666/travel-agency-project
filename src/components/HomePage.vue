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
        <td>Action</td>
        <!-- <td>Delete</td> -->
      </tr>
      <tr class="table-body" v-for="item in FlightDetail.slice(1, 10)" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.userId }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.body }}</td>
        <td class="action-main"><router-link :to="'/update/' + item.id"  class="action">Edit</router-link>
        <button type="button" v-on:click="deleteUser(item.id)">Delete</button></td>
      </tr>
    </table>
  </div>
</template>
<script>
import Header from "./Header.vue";
import axios from "axios";

export default {
  name: "HomePage",
  data() {
    return {
      name: "",
      FlightDetail: [],
    };
  },

  component: {
    Header,
  },
  methods:{
    async deleteUser(id){
      // console.warn(id)
      let result = await axios.delete("https://jsonplaceholder.typicode.com/posts/"+id);
      console.warn(result)
      if(result.status== 200)
      {
        this.loadData();
      }

    },
    async loadData(){
      console.log('load data call');
      let result = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.warn(result);
    this.FlightDetail = result.data;

    }

  },
  async mounted() {
    this.loadData();
   
  },

  components: { Header },
};
</script>

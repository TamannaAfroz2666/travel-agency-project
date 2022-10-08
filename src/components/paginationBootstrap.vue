
<template>
  <h1 class="text-center text-danger mt-5"> Ambor Data table</h1>
  
  <div class="container">
    <table id="table" class="table table table-bordered mt-5 border border-2">
      <thead>
        <tr>
          <th class="text-center">Order ID</th>
          <th class="text-center">User name</th>
          <th class="text-center">Order Status</th>
          <th class="text-center">Delivery Status</th>
        </tr>
      </thead>
      <tbody>

      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
// import { response } from 'express'
  export default {
    mounted() {
      this.getUsers();
    },
    
    methods: {
      getUsers(){
        axios.get('https://api.ambor.com.bd/ambor/Cart/admin_pending_orders/')
        .then(response =>{
          console.log(response.data.results);
          $("#table").DataTable({
            // dom: "Bfrtip",
            // buttons: ["colvis", "excel", "print", "CSV"],
            data: response.data.results,
            
            columns: [
              // :this.user.title,
              {data: "id"},
              {data: "billing_address.name"},
              {data: "order_status"},
              {data: "delivery_status"},
            ]
            
          })
        })
      }
    }
  }
</script>
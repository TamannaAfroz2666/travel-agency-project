<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <router-view/>
</template>

<script>


export default {
  name: 'App', 
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.logo{
        width: 100px;
    }
    .body{
      padding: 0;
      margin: 0;
    }
    .register input,.login input{
        width: 400px;
        height: 40px;
        padding-left: 20px;
        display: block;
        margin-bottom: 30px;
        margin-left: auto;
        margin-right: auto;
        border: 1px solid #ccc;
    }
    .register button, .login button{
        width: 100px;
        height: 30px;
        border: 1px solid #ccc;
        background-color: #ddaefa;
    }
    .table-header{
      background-color: aquamarine;
    }
    .table-header td {
      font-weight: 700;
    }
    .table-body td button {
      background-color: plum;
    }
    .update input {
        width: 60%;
        height: 40px;
        padding-left: 20px;
        display: block;
        margin-bottom: 30px;
        margin-left: auto;
        margin-right: auto;
        border: 1px solid #ccc;
      
    }
    .update textarea {
      width: 60%;
        height: 70px;
        padding-left: 20px;
        display: block;
        margin-bottom: 30px;
        margin-left: auto;
        margin-right: auto;
        border: 1px solid #ccc;
       
    }
    .btn button{
      width: 100px;
      height: 40px;
      font-weight: 700;
      font-size: 20px;
      background-color: aquamarine;
    }

    .button {
      text-decoration: none;
    

    }



</style>

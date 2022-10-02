<template>
    <Header />
    <div>
        <h1>Welcome to my Add Page</h1>
    </div>
</template>
<script>
   

import Header from './Header.vue'


    export default {
    name: "AddPage",
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
</script>
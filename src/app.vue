<template>
  <div>
    <router-view class='container'></router-view>
  </div>
</template>

<script>
  export default {
   created () {
     console.log(this.$store.state)
   } 
  }
</script>

<style scoped>
  .container {
    max-width: 1000px;
    margin: 0 auto;
    border: 1px solid #f00;
  }
</style>

<template>
  <div>
    <text class='text'>{{title}}</text>
  </div>
</template>
<script>
  export default {
    props: {
      title: ''
    }
  }
</script>
<style scoped>
  .text {
    font-size: 60px;
    /* color: #fff; */
    flex: 1;
  }
</style>

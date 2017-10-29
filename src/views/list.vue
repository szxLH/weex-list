<template>
  <div>
    <header :title="title"></header>
    <text>123</text>
  </div>
</template>
<script>
  import Header from '../components/header.vue'
  export default {
    components: {Header},
    data () {
      return {
        title: '文章列表'
      }
    },
  }
</script>
<style>

</style>

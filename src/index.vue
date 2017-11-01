<template>
  <div class="wrapper">
    <topheader :title="title"></topheader>
  </div>
</template>

<style>
  .wrapper {
    display: flex;
  }
</style>

<script>
  import topheader from './topheader.vue'
  export default {
    data () {
      return {
        title: '文章列表'
      }
    },
    components: {topheader}
  }
</script>
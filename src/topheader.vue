<template>
  <div class='header'>
    <text class='left'>&lt;back</text>
    <text class='center c'>{{title}}</text>
    <text class='right'>szxlh</text>
  </div>
</template>
<script>
  export default {
    props: {
      title: ''
    }
  }
</script>
<style src='./include/index.css'></style>
<style>
  .header {
    flex-direction: row;
    background-color: blue;
  }
  .left {
    flex-basis: 90px;
  }
  .center {
    flex: 1;
    color: #0f0;
  }
  .right {
    flex-basis: 90px;
  } 
</style>

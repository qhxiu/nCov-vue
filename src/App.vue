<template>
  <div id="app">
    <n-header></n-header>
    <router-view/>
  </div>
</template>
<script>
import NHeader from './views/Header.vue';
  export default {
    components: {
      NHeader
    }
  }
</script>
<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
</style>

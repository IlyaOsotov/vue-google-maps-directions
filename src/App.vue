<template>
  <div id="app">
    <google-map></google-map>
  </div>
</template>

<script>
import googleMap from './components/googleMap.vue';

export default {
  name: 'app',
  components: {
    googleMap,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

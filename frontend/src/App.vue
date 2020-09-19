<template>
  <div id="app">
    <img src="./assets/hq720.jpg" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
@import '../node_modules/bulma/bulma.sass';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3333;
  margin-top: 60px;
}
</style>

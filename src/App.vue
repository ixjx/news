<template>
  <div id="app">
    <news></news>
  </div>
</template>

<script>
import News from './components/News'
export default {
  name: 'App',
  components: {
    News
  }
}
</script>

<style>
#app {
  font-family: '微软雅黑', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

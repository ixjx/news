<template>
  <div id="app">
    <baidu></baidu>
    <sina></sina>
  </div>
</template>

<script>
import Baidu from './components/Baidu'
import Sina from './components/Sina'
export default {
  name: 'App',
  components: {
    Baidu,
    Sina
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

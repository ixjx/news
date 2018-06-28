<template>
  <div id="app">
    <div id="tabs">
      <ul>
        <li><a href="#tabs-1">新浪</a></li>
        <li><a href="#tabs-2">百度</a></li>
      </ul>
      <div id="tabs-1">
        <sina></sina>
      </div>
      <div id="tabs-2">
        <baidu></baidu>
      </div>
    </div>
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

$(function(){
  $("#tabs").tabs();
});
</script>

<style>
#app {
  font-family: '微软雅黑', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#tabs>ul {
  white-space:nowrap;
}
#tabs>ul li {
  display:inline-block;
  float: none;
  width: 50%;
  margin: 0 -0.1em;
}
#tabs>ul li a {
  width: 100%;
  text-align: center;
}
.ui-widget-content a {
  color: #003eff
}
</style>

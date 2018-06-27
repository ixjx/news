<template>
  <div class="news">
    <ul>
      <li v-for="news in arrs">
        热度:{{news.index}} &nbsp; {{news.title}} <a :href=news.url target="_blank">浏览</a>
      </li>
        
    </ul>
  </div>
</template>
 
<script>
export default {
  name: 'baidu',
  data () {
    return {
      arrs: []
    }
  },
  mounted: function(){
    this.$http.get('http://117.59.6.29/api/baidu', {}, {
    headers: {

    },
    emulateJSON: true
    }).then(function(response) {
      // 这里是处理正确的回调
      this.arrs = response.data
 
    }, function(response) {
      // 这里是处理错误的回调
      console.log(response)
    })
  }
}
</script>

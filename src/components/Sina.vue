<template>
  <div class="news">
    <ul>
      <li v-for="news in arrs">
        {{news.index}} &nbsp; {{news.title}} &nbsp;<a :href=news.url target="_blank">浏览</a>
      </li>
        
    </ul>
  </div>
</template>
 
<script>
export default {
  name: 'sina',
  data () {
    return {
      arrs: []
    }
  },
  mounted: function(){
    this.$http.get('http://47.107.40.88/api/sina', {}, {
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

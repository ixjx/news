<template>
  <div class="news">
    <ul>
      <li v-for="news in arrs">
        {{news.title}} <a :href=news.url target="_blank">浏览</a>
      </li>
        
    </ul>
  </div>
</template>
 
<script>
export default {
  name: 'news',
  data () {
    return {
      arrs: []
    }
  },
  mounted: function(){
    this.$http.get('http://117.59.6.29/api/news', {}, {
    headers: {
 
    },
    emulateJSON: true
    }).then(function(response) {
      // 这里是处理正确的回调
      this.arrs = response.data
 
    }, function(response) {
      // 这里是处理错误的回调
      console.log(response)
    });
  }
}
</script>
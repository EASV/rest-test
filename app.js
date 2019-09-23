var app = new Vue({ 
  el: '#app',
  data: {
      posts: null,
      loading: true,
      errored: false
  },
  mounted () {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/')
      .then(response => (this.posts = response.data))
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
});

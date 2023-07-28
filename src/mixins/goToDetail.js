export default {
  methods: {
    goToDetail (id, name, pic) {
      this.$router.push({
        path: '/songlistdetail',
        query: {
          id,
          name,
          pic
        }
      })
    }
  }
}

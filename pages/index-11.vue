<template>
  <div class="container">
    <el-container>
      <el-header>
        <NuxtLinkCard />
      </el-header>
      <el-container>
        <el-aside width="200px">
          Aside
        </el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NuxtLinkCard from '~/components/simple-component/NuxtLinkCard'
export default {
  components: {
    NuxtLinkCard
  },
  mounted() {
    const id = 6
    const query = `
    query getMessage($id: ID!) {
      getMessage(id: $id) {
        id
      }
      foo
    }`
    this.$axios
      .$post('/graphql', {
        query,
        variables: { id }
      })
      .then(console.log)
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
}
</style>

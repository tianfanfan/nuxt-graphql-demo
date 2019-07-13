<template>
  <div class="scroll-t">
    <ol>
      <li v-for="(item, index) in 7" :key="index">
        <span> {{ item }} - {{ index }} </span>
      </li>
    </ol>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style lang="less" scoped>
.scroll-t {
}
</style>

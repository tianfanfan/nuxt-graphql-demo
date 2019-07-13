<template>
  <div class="introduction">
    <div class="fullpage-container">
      <div class="button-group">
        <button
          type="button"
          :class="{ active: index == 0 }"
          @click="moveTo(0)"
        >
          first page
        </button>
        <button
          type="button"
          :class="{ active: index == 1 }"
          @click="moveTo(1)"
        >
          Second page
        </button>
        <button
          type="button"
          :class="{ active: index == 2 }"
          @click="moveTo(2)"
        >
          Third page
        </button>
        <button
          v-for="(btn, btnIndex) in pageNum"
          :key="btnIndex"
          type="button"
          :class="{ active: index == btn + 2 }"
          @click="moveTo(btn + 2)"
        >
          page {{ btn + 2 }}
        </button>
        <button type="button" @click="showPage()">
          add page
        </button>
      </div>
      <div ref="fullpage" v-fullpage="opts" class="fullpage-wp">
        <div class="page-1 page">
          <h1 v-animate="{ value: 'bounceInLeft' }" class="part-1">
            vue-fullpage.js
          </h1>
          <h3 v-animate="{ value: 'bounceInLeft' }" class="">
            A sigle-page scroll plugin based on vue@2.x,support for mobile and
            PC .
          </h3>
          <div>
            <p v-animate="{ value: 'bounceInRight' }" class="part-1">
              vue-fullpage
            </p>
          </div>
        </div>
        <div class="page-2 page">
          <h2 v-animate="{ value: 'bounceInRight' }" class="part-2">
            Easy to use plugin
          </h2>
        </div>
        <div class="page-3 page">
          <h2 v-animate="{ value: 'bounceInTop' }" class="">
            Working On Tablets
          </h2>
          <h3 v-animate="{ value: 'bounceInBotton' }" class="">
            Designed to fit different screen sizes as well as tablet and mobile
            devices.
          </h3>
          <p v-animate="{ value: 'bounceInLeft', delay: 0 }" class="part-3">
            vue-fullpage
          </p>
          <p v-animate="{ value: 'bounceInRight', delay: 300 }" class="part-3">
            vue-fullpage
          </p>
          <p v-animate="{ value: 'bounceInDown', delay: 600 }" class="part-3">
            vue-fullpage
          </p>
          <p v-animate="{ value: 'zoomInDown', delay: 900 }" class="part-3">
            vue-fullpage
          </p>
        </div>
        <div
          v-for="(page, pageIndex) in pageNum"
          :key="pageIndex"
          class="page-2 page"
        >
          <h2 v-animate="{ value: 'bounceInRight' }" class="part-2">
            page {{ page }}
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    const that = this
    return {
      index: 0,
      pageNum: 0,
      opts: {
        start: 0,
        dir: 'v',
        loop: false,
        duration: 300,
        beforeChange: function (ele, current, next) {
          console.log('before', current, next)
          that.index = next
        },
        afterChange: function (ele, current) {
          that.index = current
          console.log('after', current)
        }
      }
    }
  },
  methods: {
    moveTo: function (index) {
      this.$refs.fullpage.$fullpage.moveTo(index, true)
    },
    showPage: function () {
      this.pageNum++
      this.$refs.fullpage.$fullpage.$update()
    }
  }
}
</script>
<style lang="less" >
body {
  margin: 0;
}

.fullpage-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.page {
  display: block;
  text-align: center;
  font-size: 26px;
  color: #eee;
}

.page-1 {
  padding-top: 100px;
  background: #1bbc9b;
}

.page-2 {
  padding-top: 100px;
  background-color: rgb(75, 191, 195);
}

.page-3 {
  padding-top: 50px;
  background: #aabbcc;
}

h3,
p {
  font-size: 16px;
}

.button-group {
  position: absolute;
  top: 30px;
  left: 30px;
  z-index: 9;
}

.button-group button {
  display: inline-block;
  margin: 10px;
  color: #000;
  background: #fff;
  background: rgba(255, 255, 255, 0.5);
  -webkit-border-radius: 10px;
  border-radius: 10px;
  padding: 9px 18px;
  border: none;
  outline: none;
}

.button-group button.active {
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
}
</style>

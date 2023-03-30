<template>
  <div class="main">
    <h3>面试题一</h3>
      <p>arr: {{ num }}</p>
      <p>target: {{ target }}</p>
      <button @click="handelclick">输出结果</button>
    <h3>面试题二</h3>
    <Count />
    <h3>面试题三</h3>
    <p>PC端查看未兼容h5\(^o^)/~</p>
    <x-dropdown :selectData='selectData' @changeData="getchangeData" :isClick="true" />
     <h3>面试题四</h3>
     <router-link to="/activity">go   to H5页面</router-link>
  </div>
</template>

<script>
import Count from '../components/Count.vue'
import dropdown from '../components/dropdown.vue'

import { twoSum } from '../util/answer'
export default {
  name: 'home',
  data() {
    return {
      total: 0,
      num: [3, 11, 15, 3, 5, 5, 7, 6, 9, 10],
      target: 9,
      selectData: ['选项1', '选项2', '选项3']
    }
  },
  components: {
    Count,
    'x-dropdown': dropdown
  },
  methods: {
    handelclick() {
      let rows = twoSum(this.num, this.target);
      alert(rows);
    },
    getchangeData(res) {
      console.log(res)
    }
  }
}
</script>

<style scoped>
  .main {
    padding: 20px;
  }
</style>

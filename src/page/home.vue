<template>
  <div>
    <h3>面试题一</h3>
      <button @click="handelclick">输出结果</button>
    <h3>面试题二</h3>
    <Count />
    <h3>面试题三</h3>
    <x-dropdown :selectData='selectData' @changeData="getchangeData" :isClick="true" />
     <h3>面试题四</h3>
     <router-link to="/activity">activity</router-link>
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
      num: [2, 7, 11, 15],
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

</style>

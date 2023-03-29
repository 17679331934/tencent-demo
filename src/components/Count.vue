<template>
  <div class="box">
    <button @click="handelClick">加一</button>
    <span>{{num}}</span>
  </div>
</template>

<script>
export default {
  name: 'count',
  data () {
    return {
      num: 0
    }
  },
  methods: {
    handelClick() {
      // 点击按钮时，数字加一，并在控制台打印出当前数字
      this.num += 1;
      console.log(`num = ${this.num}`)
    }
  },
  mounted() {
    // 在组件被挂载到DOM后，在控制台打印出"the component is now mounted."
    console.log('the component is now mounted.');
  },
  beforeDestroy() {
    // 在组件被卸载前，在控制台打印出"the component is now unmounted."
    console.log('the component is now unmounted.');
  }
}
</script>

<style scoped>
  .box {
    padding: 20px;
    display: flex;
    justify-content:space-evenly;
  };
  
</style>
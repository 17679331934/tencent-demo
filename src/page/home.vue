<template>
  <div>
    <Count />
  </div>
</template>

<script>
import Count from '../components/Count.vue'
export default {
  name: 'home',
  data() {
    return {
      total: 0,
      num: [2, 7, 11, 15],
      target: 9
    }
  },
  components: {
    Count
  }
}
</script>

<style scoped>

</style>

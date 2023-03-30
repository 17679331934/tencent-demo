<template>
  <!-- 实现的dropdown因为时间原因有很多不足 有机会可以口述补充。。。。 -->
  <div class="dropdown-view" id="dropdown">
    <div class="dropdown-box" @click="showClick">
      <span>{{ selectData[current]}}</span>
      <div class="icon" :class="{'icon-hover' : !isClick}" :style="getIconStyle()"></div>
      <div></div>
    </div>
    <div class="drop-view" :class="{'drop-view-hover' : !isClick}" :style="getDropStyle()">
      <div class="drop-item" v-for="(item, index) in selectData" :key="index">
        <input class="drop-radio" type="radio" name="article" @change="setChangeData(item, index)"
          :id="getHover(index)" @click="current=index" :checked="current==index" hidden>
        <label class="drop-label" :for="getHover(index)">
          <span>{{ item }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectData: Array,
    isClick: Boolean  // 默认hover展开
  },
  data() {
    return {
      current: 0,
      isShow: false
    }
  },
  methods: {
    getHover(value) {
      return `article${value}`
    },
    getDropStyle() {
      if (!this.isClick) return
      if (this.isShow) {
        return 'transform: scaleY(1)'
      } else {
        return 'transform: scaleY(0)'
      }
      
    },
    getIconStyle() {
      if (!this.isClick) return
      if (this.isShow) {
        return 'transform: rotate(45deg);'
      } else {
        return 'transform: rotate(225deg);'
      }
    },
    showClick() {
      if (!this.isClick) return
      this.isShow = !this.isShow
    },
    setChangeData(value, index) {
      let res = {value: value, index: index}
      this.isShow = false
      this.$emit('changeData', res)
    }
  }
  
}
</script>

<style scoped>
  .dropdown-view {
    padding-left: 10px;
    position: relative;
    width: 100px;
    cursor: pointer;
  }
  .dropdown-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding-right: 10px;
    margin-bottom: 10px;
  }
  .icon {
    border-top: 2px solid #353535;
    border-left: 2px solid #353535;
    height: 5px;
    width: 5px;
    transform: rotate(225deg);
    transition: 0.2s;
  }
  /* .icon-hover {
    transform: rotate(45deg);
  } */
  .dropdown-box:hover > .icon-hover {
    transform: rotate(45deg);
  }
  .dropdown-box:hover + .drop-view-hover,
  .drop-view-hover:hover
   {
    transform: scaleY(1);
  }
  .drop-view {
    box-shadow: 0 0 5px #525252;
    height: auto;
    width: 100px;
    border-radius: 5px;
    box-sizing: border-box;
    cursor: pointer;
    padding: 10px 0;
    transform: scaleY(0);
    transition: 0.2s;
    transform-origin: top;
    position: absolute;
    background-color: #fff;
  }
  .drop-item {
    height: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .drop-label {
    width: 100%;
    height: 100%;
    transition: 0.2s;
    box-sizing: border-box;
    padding-left: 10px;
    display: flex;
    align-items: center;
  }
  .drop-label span {
    position: absolute;
    transition: .2s;
  }
  .drop-label:hover > span {
    transform: translateX(15px);
  }
  .drop-radio:checked + .drop-label {
    background: #b4b8b4;
  }
</style>
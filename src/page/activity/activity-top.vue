<template>
  <div class="activity-slider">

    <div class="activity-top-icon">
      <div class="icon-box-left">
        <img src="../../assets/wangzhelog.png" alt="">
      </div>
      <div class="icon-box-right">
        <img src="../../assets/wangzherenshenright.png" alt="">
      </div>
    </div>

    <div class="slider-info">
      <div class="info-title">
        <img src="../../assets/slogan.png" alt="">
      </div>
      <div class="info-subsidiary-title">
        <div>
          <img src="../../assets/subsidiary-title.png" alt="">
        </div>
      </div>
      <div class="infoname-box">
        <div class="name">
          <span>欢迎</span>
          <span>{{ name }}</span>
        </div>
        <div class="check">
          <span>切换角色</span>
          <div class="border_bottom"></div>
        </div>
      </div>
    </div>

    <div class="zongzi-box">
      <div class="zongzi-item" v-for="item in 3" :key="item">
        <div class="pig-box">
          <div class="boji">
            <div class="zongzi">
              <img class="zongzi-img" src="../../assets/zongzi.png" alt="">
            </div>
            <img class="boji-img" src="../../assets/boji.png" alt="">
          </div>
        </div>
        <div class="brand-name">
          <div class="brand-name-text">
            <span>品牌名称名称</span>
          </div>
        </div>
      </div>
      <!-- <div class="zongzi-item"></div>
      <div class="zongzi-item"></div> -->
    </div>

    <div class="slider-point">
      <div>
        <span>
          不同口味的粽子，不同的惊喜！
        </span>
      </div>
      <div>
        <span>
          点击拆开粽子，有机会获得品牌端午粽子礼，端午红包！
        </span>
      </div>
    </div>

    <div class="slider-next">
      <div class="slider-bottom">
        <div @click="nextSlider">
          <img src="../../assets/glide-tip.png" alt="">
        </div>
      </div>
    </div>
    <div class="atmosphere">
      <!-- <img src="../../assets/氛围.png" alt=""> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'xxxx'
    }
  },
  methods: {
    nextSlider() {
      // console.log(e)
      this.$emit('nextSlider')
    }
    // orientation() {
    //   window.addEventListener("orientationchange", function() {
    //     if(window.orientation === 90){
    //         console.log('这是竖屏')
    //       }
    //       if(window.orientation === 0){
    //         console.log('这是横屏')
    //       }
    //   }, false)
    // }
  }
}
</script>


<style scoped>
  .activity-slider {
    height: 100%;
    position: relative;
    background-image: url('../../assets/slider1-bg(1).png');
    background-repeat: no-repeat;
    background-size: 100% 100% ;
    background-attachment: fixed;
  }
  .activity-top-icon {
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    
  }
  .activity-top-icon img {
    height: 20px;
  }
  .icon-box-left {
    margin-left: 11px;
  }
  .icon-box-right {
    margin-right: 11px;
  }

  .slider-info {

  }
  .slider-info .info-title {
    display: flex;
    justify-content: center;
  }
  .slider-info .info-title img {
    height: 10vh;
  }
  .slider-info .info-subsidiary-title {
    margin-top: -1vh;
  }
  .slider-info .info-subsidiary-title > div {
    display: flex;
    justify-content: center;
  }
  .slider-info .info-subsidiary-title img {
    height: 4.4vh;
  }
  .infoname-box {
    display: flex;
    justify-content: center;
    color: #3c7051;
    font-size: 12px;
  }
  .infoname-box {
    transform: scale(0.8)
  }
  .infoname-box .name {
    margin-right: 10px;
  }
  .infoname-box .check {
    /* border-bottom: 1px solid #3c7051;
    transform:scaleY(0.5) */
  }
  .infoname-box .border_bottom {
    width: 100%;
    height: 1px;
    background-color: #3c7051;
    transform: scaleY(0.5)
  }

  .zongzi-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .pig-box {
    width: 146px;
    height: 124px;
    position: relative;
  }
  .zongzi-box .boji .boji-img {
    width: 146px;
    position: absolute;
    bottom: 0;
  }
  .zongzi-box .boji .zongzi {
    width: 146px;
    height: 124px;
    text-align: center;
    position: absolute;
    z-index: 10;
  }
  .zongzi-box .boji .zongzi .zongzi-img {
    width: 115px;
  }
  .brand-name {
    display: flex;
    justify-content: center;
    padding: 6px 0;
  }
  .brand-name-text {
    width: 130px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    color: #FFF;
    font-size: 12px;
    background-image: url('../../assets/brand-bg.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .slider-point {
    padding: 10px 0;
    text-align: center;
    color: #FFF;
    font-size: 12px;
  }

  .slider-next {
    width: 100%;
    position: absolute;
    bottom: 2vh;
    z-index: 20;
  }
  .slider-bottom {
    display: flex;
    justify-content: center;
  }
  .slider-bottom img {
    height: 16px;
  }

  .atmosphere {
    width: 100%;
    position: absolute;
    top:0
  }
  .atmosphere {
    width: 100%;
    height: 100%;
    background-image: url('../../assets/氛围.png');
    background-size: 150% 150%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position-x: -130px;
    /* z-index: 20; */
  }

</style>
<template>
  <div class="activity">
    <div v-if="verticalScreen">
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <div class="goBack" @click="goBack"><span>返回</span></div>
            <div class="title">王者人生</div>
            <div class="right"></div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div v-else>
      <div class="Horizontal_goback" @click="goBack">
        <img src="../../assets/gobackLogo.png" alt="">
      </div>
    </div>
    
    <div class="activity-main">
      <el-carousel :height="carouselHeight" direction="vertical" :autoplay="false" indicator-position="none" :loop="false" ref="slideCarousel">
        <el-carousel-item>
          <activityTop @nextSlider="nextSlider"/>
        </el-carousel-item>
        <el-carousel-item>
          <activityBottom />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
// let VerticalScreen = window.orientation
import activityTop from './activity-top.vue'
import activityBottom from './activity-bottom.vue'
export default {
  components: {
    activityTop,
    activityBottom
  },
  data() {
    return {
      verticalScreen: true,
      carouselHeight: 'calc(100vh - 40px)'
    }
  },
  mounted() {
    // 初始化verticalScreen
    this.renderOrientati()
    // 滑块触移
    if (this.$refs.slideCarousel) this.slideBanner();
    // 监听页面旋转
    window.addEventListener("orientationchange", this.renderOrientati, false);
  },  
  methods:{
    slideBanner() {
      //选中的滑块
      let box = document.querySelector('.el-carousel__container');
      let startPoint = 0;
      let stopPoint = 0;
      //重置坐标
      let resetPoint = function () {
        startPoint = 0;
        stopPoint = 0;
      }
      //手指按下
      box.addEventListener("touchstart", function (e) {
        //手指点击位置的Y坐标
        startPoint = e.changedTouches[0].pageY;
      });
      //手指滑动
      box.addEventListener("touchmove", function (e) {
        //手指滑动后终点位置Y的坐标
        stopPoint = e.changedTouches[0].pageY;
      });
      //当手指抬起的时候，判断滑块滚动离上下的距离
      let that = this
      box.addEventListener("touchend", function () {
        if (stopPoint == 0 || startPoint - stopPoint == 0) {
          resetPoint();
          return;
        }
        if (startPoint - stopPoint > 0) {
          resetPoint();
          that.$refs.slideCarousel.next();
          return;
        }
        if (startPoint - stopPoint < 0) {
          resetPoint();
          that.$refs.slideCarousel.prev();
          return;
        }
      });
    },
    nextSlider() {
      this.$refs.slideCarousel.next();
    },
    renderOrientati() {
      // 竖屏
      if (window.orientation === 0) {
        this.verticalScreen = true;
        this.carouselHeight = 'calc(100vh - 40px)'
      }
      // 横屏
      if (window.orientation === 90) {
        this.verticalScreen = false;
        this.carouselHeight = '100vh'
      }
    },
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>


<style scoped>
  .grid-content {
    height: 40px;
    background-color: #1a1b2f;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .goBack {
    margin-left: 16px;
    float: left;
    width: 100px;
  }
  .title {
    color: #fff;
  }
  .right {
    float: right;
    width: 100px;
  }

  .Horizontal_goback {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 30;
  }
  .Horizontal_goback img {
    height: 28px;
  }

  .activity-main {
    background-color: #d3dce6;
  }
</style>
<template>
  <div class="activity">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <div class="goBack" @click="goBack"><span>返回</span></div>
          <div>王者人生</div>
          <div></div>
        </div>
      </el-col>
    </el-row>
    <el-carousel height="calc(100vh - 40px)" direction="vertical" :autoplay="false" indicator-position="none" :loop="false" ref="slideCarousel">
      <el-carousel-item>
        <activityTop />
      </el-carousel-item>
      <el-carousel-item>
        <activityBottom />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import activityTop from './activity-top.vue'
import activityBottom from './activity-bottom.vue'
export default {
  components: {
    activityTop,
    activityBottom
  },
  data() {
    return {}
  },
  mounted() {
      if (this.$refs.slideCarousel) this.slideBanner()
  },  
  methods:{
    slideBanner() {
      //选中的轮播图
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
        //手指点击位置的X坐标
        startPoint = e.changedTouches[0].pageY;
      });
      //手指滑动
      box.addEventListener("touchmove", function (e) {
        //手指滑动后终点位置X的坐标
        stopPoint = e.changedTouches[0].pageY;
      });
      //当手指抬起的时候，判断图片滚动离左右的距离
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
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>


<style scoped>
  .grid-content {
    height: 40px;
    background-color: #475669;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .goBack {
    margin-left: 16px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
<template>
  <div class="slider">
    <div class="slider_header">
      <div class="header-bg">
        <div class="title">更多专属优惠</div>
      </div>
    </div>

    <div class="slider-info">
      <div class="info-box">
        <div class="container">
          <div class="info-item" v-for="item in 4" :key="item">
            <div class="item-title">
              <div class="logo">
                <img src="../../assets/logo-advertisement.png" alt="">
              </div>
              <div class="name">桂源铺</div>
              <div class="distance">156m</div>
            </div>
            <div class="item-content">
              <div class="advertisement">
                <img src="../../assets/advertisement.png" alt="">
              </div>
              <div class="advertisement-text">
                <div class="text1">满十元减五元满十元减五元卷卷</div>
                <div class="text2">黑松露太阳茶套餐</div>
              </div>
              <div class="advertisement-opsti">
                <div class="detal">2/3</div>
                <div class="btn">
                  <img src="../../assets/draw-redBt.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="slider-footer">
      <div class="footer-btn">
        <img src="../../assets/bottom-more.png" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .slider {
    height: 100%;
    position: relative;
    background-image: url('../../assets/slider1-bg(1).png');
    background-repeat: no-repeat;
    background-size: 100% 100% ;
    background-attachment: fixed;
    padding-top: 25px;
    .slider_header {
      display: flex;
      justify-content: center;
      margin-bottom: 12px;
      .header-bg {
        height: 25px;
        width: 350px;
        background-image: url('../../assets/ornament.png');
        background-repeat: no-repeat;
        background-size: 100%;
        background-position-y: center;
      }
      .title {
        color: #fff;
        font-size: 24px;
        text-align: center;
        line-height: 24px;
      }
    }

    .slider-info {
      display: flex;
      justify-content: center;
      .info-box {
        width: 90vw;
        min-width: 300px;
        height: 72vh;
        background-image: url('../../assets/di-bg.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding: 14px;
        box-sizing: border-box;
        .container {
          height: 100%;
          width: 100%;
          overflow-y: auto;
           display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        }
        .info-item {
          width: 260px;
          height: 110px;
          background-image: url('../../assets/advertisement-bg.png');
          background-repeat: no-repeat;
          background-size: 100% 100%;
          padding: 8px;
          box-sizing: border-box;
           color: #c65841;
          .item-title {
            height: 30px;
            display: flex;
            align-items: center;
            color: #c65841;
            .logo {
              height: 36px;
              width: 36px;
              border: 1px solid #c65841;
              transform: scale(0.5);
              img {
                width: 100%;
              }
            }
            .name {
              font-size: 12px;
              transform: scale(0.8);
              margin-left: -10px;
              font-weight: 600;
            }
            .distance {
              font-size: 12px;
              transform: scale(0.5);
              margin-top: 6px;
              margin-left: -10px;
            }
          }
          .item-content {
            display: flex;
            height: 60px;
            padding: 0 6px;
            align-items: center;
            font-size: 12px;
            .advertisement {
              width: 50px;
              height: 50px;
              border: 1px solid #c65841;
              img {
                height: 100%;
                width: 100%;
              }
            }
            .advertisement-text {
              margin: 0 6px;
              width: 100px;
              padding-right: 6px;
              .text1 {
                font-weight: 600;
                width: 100%;
                text-overflow :ellipsis; 
                white-space :nowrap; 
                overflow : hidden; 
              }
              .text2 {
                transform: scale(0.8);
                margin-left: -10px;
              }
            }
            .advertisement-opsti {
              .detal {
                text-align: center;
                transform: scale(0.8);
              }
              .btn {
                width: 60px;
                height: 25px;
                img {
                  width: 100%;
                }
              }
            }
          }
        }
      }
    }


    .slider-footer {
      position: absolute;
      bottom: 30px;
      width: 100%;
      display: flex;
      justify-content: center;
      .footer-btn {
       img {
        height: 46px;
       }
      }
    }
  }
</style>
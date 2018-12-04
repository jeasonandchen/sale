<template>
  <div class="homepage">
    <Row type="flex" justify="center" align="middle">
      <Col span="17">
      <ul class="menugroup">
        <li>
          <i class="iconfont icon-daohang"></i>
          <span>全部商品分类</span>
        </li>
        <li>
          <span>首页</span>
        </li>
        <li>
          <span>企业服务</span>
        </li>
        <li>
          <span>办公装潢</span>
        </li>
        <li>
          <span>物流服务</span>
        </li>
        <li>
          <span>设备共享</span>
        </li>
      </ul>
      </Col>
    </Row>
    <Row>
      <Col span="24">
        <div class="homebanner">
          <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
              <swiper-slide class="mswiper">I'm Slide 1</swiper-slide>
              <swiper-slide class="mswiper">I'm Slide 2</swiper-slide>
              <swiper-slide class="mswiper">I'm Slide 3</swiper-slide>
            </swiper>
        </div>
      </Col>
    </Row>
    <Row type="flex" justify="center">
      <Col span="18">
        <ul class="which">
          <li>
            <img  src="./../assets/首页_slices/微信截图_20181130170852@2x.png" alt="">
            <span>铜版纸名片</span>
          </li>
          <li>
            <img  src="./../assets/首页_slices/微信截图_20181130170852@2x.png" alt="">
            <span>铜版纸名片</span>
          </li>
          <li>
            <img  src="./../assets/首页_slices/微信截图_20181130170852@2x.png" alt="">
            <span>铜版纸名片</span>
          </li>
          <li>
            <img  src="./../assets/首页_slices/微信截图_20181130170852@2x.png" alt="">
            <span>铜版纸名片</span>
          </li>

          <li>
            <img  src="./../assets/首页_slices/微信截图_20181130170852@2x.png" alt="">
            <span>铜版纸名片</span>
          </li>
          <li>
            <img  src="./../assets/首页_slices/微信截图_20181130170852@2x.png" alt="">
            <span>铜版纸名片</span>
          </li>
          <li>
            <img  src="./../assets/首页_slices/微信截图_20181130170852@2x.png" alt="">
            <span>铜版纸名片</span>
          </li>
          <li>
            <img  src="./../assets/首页_slices/微信截图_20181130170852@2x.png" alt="">
            <span>铜版纸名片</span>
          </li>
        </ul>
      </Col>
    </Row>
    <br>
    <br>
    <Row type="flex" justify="center" align="middle">
      <Col span="18">
        <div class="mostlike">
          <h2>人气单品</h2>
          <br>
          <Row :gutter="16">
            <Col span="6">
              <div class="mostlike_img"></div>
              <p>铜版纸名片</p>
              <p>
                <span>最低价：¥ </span>
                <i class="iconfont icon-gouwuche"></i>
              </p>
            </Col>
            <Col span="6">
              <div class="mostlike_img"></div>
              <p>铜版纸名片</p>
              <p>
                <span>最低价：¥ </span>
                <i class="iconfont icon-gouwuche"></i>
              </p>
            </Col>
            <Col span="6">
              <div class="mostlike_img"></div>
              <p>铜版纸名片</p>
              <p>
                <span>最低价：¥ </span>
                <i class="iconfont icon-gouwuche"></i>
              </p>
            </Col>
            <Col span="6">
              <div class="mostlike_img"></div>
              <p>铜版纸名片</p>
              <p>
                <span>最低价：¥ </span>
                <i class="iconfont icon-gouwuche"></i>
              </p>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
    <br>
    <Row type="flex" justify="center" align="middle">
      <Col span="18">
        <div class="newin">
          <h2>新品上市</h2>
          <br>
          <Row :gutter="16">
            <Col span="9">
              <div class="mostlike_img"></div>
              <p>铜版纸名片</p>
              <p>
                <span>最低价：¥ </span>
                <i class="iconfont icon-gouwuche"></i>
              </p>
            </Col>
            <Col span="5">
              <div class="mostlike_img"></div>
              <p>铜版纸名片</p>
              <p>
                <span>最低价：¥ </span>
                <i class="iconfont icon-gouwuche"></i>
              </p>
            </Col>
            <Col span="5">
              <div class="mostlike_img"></div>
              <p>铜版纸名片</p>
              <p>
                <span>最低价：¥ </span>
                <i class="iconfont icon-gouwuche"></i>
              </p>
            </Col>
            <Col span="5">
              <div class="mostlike_img"></div>
              <p>铜版纸名片</p>
              <p>
                <span>最低价：¥ </span>
                <i class="iconfont icon-gouwuche"></i>
              </p>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        // autoplay: true
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

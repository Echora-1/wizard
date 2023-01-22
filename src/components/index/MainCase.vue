<template>
  <section>
    <div class="section-wrap container">
      <div class="case">
        <div class="case__header">
          <h2 class="base-title">Case</h2>
          <a href="/#contact">
            <base-button> consultation </base-button>
          </a>
        </div>
        <div class="list">
          <swiper
            :scrollbar="{
              hide: false,
              dragClass: 'swiper-scroll',
            }"
            :modules="modules"
            :slides-per-view="2"
            :space-between="13"
            class="mySwiper"
          >
            <swiper-slide>
              <div class="case__item case__item--1">
                <p class="case__item-title">Tesla Model Y</p>
                <p class="case__item-text">Promo site</p>
              </div></swiper-slide
            ><swiper-slide
              ><div class="case__item case__item--2">
                <p class="case__item-title">Trading App</p>
                <p class="case__item-text">Full stack development</p>
              </div></swiper-slide
            ><swiper-slide
              ><div class="case__item case__item--3">
                <p class="case__item-title">Trading App</p>
                <p class="case__item-text">Full stack development</p>
              </div></swiper-slide
            ><swiper-slide
              ><div class="case__item case__item--4">
                <p class="case__item-title">CodingLab</p>
                <p class="case__item-text">Promo site</p>
              </div></swiper-slide
            >
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import BaseButton from "@/components/base/BaseButton";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";
export default {
  components: { BaseButton, Swiper, SwiperSlide },

  data() {
    return {
      modules: [Scrollbar],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-left: calc((100% - 985px) / 2);
  max-width: none;
  overflow: hidden;
}

.section-wrap {
  justify-content: flex-start;
  overflow: hidden;
}

.list {
  width: 760px;
}

.case {
  width: 945px;

  .base-title {
    margin: 0;
  }

  &__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 65px;
    max-width: 945px;
  }

  &__item {
    width: 350px;
    height: 455px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    margin-bottom: 52px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-left: 34px;
    padding-bottom: 40px;

    &--1 {
      background-image: url("../../assets/images/case/1.jpg");

      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
        background-image: url("../../assets/images/case/1@2x.jpg");
      }
    }
    &--2 {
      background-image: url("../../assets/images/case/2.jpg");
      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
        background-image: url("../../assets/images/case/2@2x.jpg");
      }
    }
    &--3 {
      background-image: url("../../assets/images/case/4.jpg");
      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
        background-image: url("../../assets/images/case/4@2x.jpg");
      }
    }
    &--4 {
      background-image: url("../../assets/images/case/3.jpg");
      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
        background-image: url("../../assets/images/case/3@2x.jpg");
      }
    }
  }

  &__item-title {
    font-weight: 700;
    font-size: 32px;
    line-height: 115%;
    letter-spacing: -0.03em;
    color: #ffffff;
    margin: 0 0 14px -6px;
  }

  &__item-text {
    font-weight: 500;
    font-size: 16px;
    line-height: 115%;
    letter-spacing: -0.03em;
    margin: 0;
    color: rgba(255, 255, 255, 0.4);
    position: relative;
    width: 100%;

    &::before {
      content: "";
      position: absolute;
      width: 18px;
      height: 14px;
      top: 50%;
      transform: translateY(-50%);
      right: 40px;
      background-image: url("../../assets/images/whiteArrow.svg");
      background-position: center;
      background-repeat: no-repeat;
    }
  }
}
</style>

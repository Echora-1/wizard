<template>
  <div class="item">
    <p class="item__title">
      <span>{{ content.number }}</span> / {{ content.total }}
    </p>
    <p class="item__text">{{ content.text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  font-weight: 500;
  font-size: 20px;
  line-height: 135%;
  letter-spacing: -0.03em;
  color: #000000;
  margin-bottom: 60px;

  &__title {
    color: rgba(0, 0, 0, 0.3);
    margin: 0 0 17px;

    span {
      font-weight: 600;
      color: #6200ee;
    }
  }

  &__text {
    margin: 0;
    max-width: 230px;
    padding-left: 34px;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      width: 18px;
      height: 14px;
      top: 6px;
      left: 5px;
      background-image: url("../../assets/images/arrow.svg");
      background-position: center;
      background-repeat: no-repeat;
    }
  }
}
</style>

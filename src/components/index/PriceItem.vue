<template>
  <div class="item">
    <p class="item__title">
      {{ content.title }}
    </p>
    <p class="item__price">from {{ content.price }}</p>
    <p class="item__text">
      {{ content.text }}
    </p>
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
  margin-bottom: 60px;

  &__title {
    font-weight: 500;
    font-size: 18px;
    line-height: 135%;
    letter-spacing: -0.03em;
    margin: 0 0 10px;
  }

  &__price {
    font-weight: 600;
    font-size: 32px;
    line-height: 115%;
    letter-spacing: -0.03em;
    color: #6200ee;
    margin: 0 0 10px;
  }

  &__text {
    font-weight: 500;
    font-size: 16px;
    line-height: 135%;
    letter-spacing: -0.03em;
    color: rgba(0, 0, 0, 0.3);
    margin: 0;
  }
}
</style>

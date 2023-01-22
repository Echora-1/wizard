<template>
  <section class="container main-screen section-wrap">
    <div class="main-screen__wrap">
      <h1 class="main-screen__title">
        Design &<br />
        Development Studio
      </h1>
      <div class="main-screen__list">
        <div class="main-screen__list-item">
          <p>4</p>
          <span>years of experience</span>
        </div>
        <div class="main-screen__list-item">
          <p>8</p>
          <span>people in team</span>
        </div>
        <div class="main-screen__list-item">
          <p>32</p>
          <span>projects completed</span>
        </div>
      </div>
      <div class="main-screen__btns">
        <a href="/#contact">
          <base-button> order </base-button>
        </a>
        <a href="/#contact">
          <base-button transparent> callback </base-button>
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.main-screen {
  &__wrap {
    width: 100%;
    min-width: 945px;
  }

  &__title {
    font-weight: 700;
    font-size: 72px;
    line-height: 115%;
    letter-spacing: -0.03em;
    margin: 0 0 52px;
  }

  &__list {
    display: flex;
    margin-bottom: 70px;
    width: 100%;
  }

  &__list-item {
    width: 33.33%;
    p {
      font-weight: 700;
      font-size: 32px;
      line-height: 115%;
      letter-spacing: -0.03em;
      color: #6200ee;
      margin: 0 0 6px;
    }

    span {
      font-weight: 400;
      font-size: 16px;
      line-height: 115%;
      letter-spacing: -0.03em;
    }
  }

  &__btns {
    display: flex;

    a:first-child {
      margin-right: 26px;
    }
  }
}
</style>
<script>
import BaseButton from "../base/BaseButton.vue";
export default {
  components: { BaseButton },
};
</script>

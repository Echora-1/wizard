<template>
  <div class="layout">
    <BaseHeader />
    <main class="layout__main">
      <div class="layout__nav-page">
        <div class="layout__nav-list container">
          <a
            v-for="(item, index) in items"
            :key="index"
            :href="item.link"
            :aria-label="item.hash.split('#')[1]"
            :class="[
              'layout__nav-item',
              { 'layout__nav-item--active': item.hash === currentHash },
            ]"
          ></a>
        </div>
      </div>
      <slot />
    </main>
    <BaseFooter />
  </div>
</template>

<script>
import BaseHeader from "@/components/base/BaseHeader";
import BaseFooter from "@/components/base/BaseFooter";
export default {
  components: { BaseFooter, BaseHeader },

  data() {
    return {
      items: [
        {
          link: "/#home",
          hash: "#home",
        },
        {
          link: "/#services",
          hash: "#services",
        },
        {
          link: "/#case",
          hash: "#case",
        },
        {
          link: "/#howDoWe",
          hash: "#howDoWe",
        },
        {
          link: "/#prices",
          hash: "#prices",
        },
        {
          link: "/#contact",
          hash: "#contact",
        },
      ],
    };
  },

  computed: {
    currentHash() {
      return this.$route.hash;
    },
  },
};
</script>

<style lang="scss" scoped>
.layout {
  background-image: url("../../assets/images/Bg.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow: hidden;

  &__nav-page {
    position: fixed;
    left: 0;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 9;
  }

  &__nav-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__nav-item {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #000000;

    &:not(:last-child) {
      margin-bottom: 9px;
    }

    &--active {
      background: white;
      width: 10px;
      height: 10px;
      border: 1px solid #000000;
      transform: translateX(-2px);
    }
  }
}
</style>

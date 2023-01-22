<template>
  <section class="container section-wrap">
    <div class="services">
      <div class="services__header">
        <h2 class="base-title">Services</h2>
        <a href="/#contact">
          <base-button> contact us </base-button>
        </a>
      </div>
      <div class="services__list">
        <service-item
          v-for="(item, index) in list"
          :key="index"
          :content="item"
          class="services__list-item"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.services {
  width: 945px;

  .base-title {
    margin: 0;
  }

  &__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 78px;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 150px;
  }

  &__list-item {
    width: 33.33%;
  }
}
</style>
<script>
import ServiceItem from "@/components/index/ServiceItem";
import BaseButton from "@/components/base/BaseButton";
export default {
  components: { BaseButton, ServiceItem },

  computed: {
    list() {
      return [
        {
          number: "01",
          total: "05",
          text: "Development of the corporate sites",
        },
        {
          number: "02",
          total: "05",
          text: "Development of Promo sites",
        },
        {
          number: "03",
          total: "05",
          text: "Development of eCommerce sites",
        },
        {
          number: "04",
          total: "05",
          text: "Site development from scratch",
        },
        {
          number: "05",
          total: "05",
          text: "Development of Landing Page",
        },
      ];
    },
  },
};
</script>

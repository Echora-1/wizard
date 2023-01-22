<template>
  <section class="container section-wrap">
    <div class="prices">
      <h2 class="base-title">Prices</h2>
      <div class="prices__list">
        <price-item
          v-for="(item, index) in list"
          :key="index"
          :content="item"
          class="prices__list-item"
        />
      </div>
    </div>
  </section>
</template>

<script>
import PriceItem from "@/components/index/PriceItem";
export default {
  components: { PriceItem },

  computed: {
    list() {
      return [
        {
          title: "Landings & Onepage sites",
          price: "$7 000",
          text: "~1-2 months",
        },
        {
          title: "Multipage web-sites",
          price: "$15 000",
          text: "~2-3 months",
        },
        {
          title: "Ecommerce & SaaS Platfroms",
          price: "$25 000",
          text: "~4-5 months",
        },
        {
          title: "Awards-winning wow sites",
          price: "$20 000",
          text: "~3-4 months",
        },
        {
          title: "Logo & Brand Identity",
          price: "$10 000",
          text: "~1,5-2 months",
        },
        {
          title: "Hourly rate",
          price: "$30-60",
          text: "per hour",
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.prices {
  width: 945px;

  .base-title {
    margin: 0 0 78px;
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

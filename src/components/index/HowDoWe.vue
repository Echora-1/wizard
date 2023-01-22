<template>
  <section class="container section-wrap">
    <div class="how-do">
      <div class="how-do__header">
        <h2 class="base-title">How do we</h2>
        <a href="/#contact">
          <base-button>CONSULTATION</base-button>
        </a>
      </div>
      <div class="how-do__list">
        <service-item
          v-for="(item, index) in list"
          :key="index"
          :content="item"
          class="how-do__list-item"
          :arrow="false"
        />
      </div>
    </div>
  </section>
</template>
<script>
import BaseButton from "@/components/base/BaseButton";
import ServiceItem from "@/components/index/ServiceItem";
export default {
  components: { ServiceItem, BaseButton },

  computed: {
    list() {
      return [
        {
          number: "01",
          total: "09",
          text: "Call us or order a free consultation",
        },
        {
          number: "02",
          total: "09",
          text: "Discuss the project with the manager: format, purpose, timeline",
        },
        {
          number: "03",
          total: "09",
          text: "We analyze the idea, niche, competitors, audience",
        },
        {
          number: "04",
          total: "09",
          text: "Prepare a UX site prototype - preliminary layout",
        },
        {
          number: "05",
          total: "09",
          text: "Plan UI design after prototype approval",
        },
        {
          number: "06",
          total: "09",
          text: "Program and impose functionality on the site",
        },
        {
          number: "07",
          total: "09",
          text: "Place on the domain, do the initial SEO-optimization",
        },
        {
          number: "08",
          total: "09",
          text: "Test the finished project and transfer it to you",
        },
        {
          number: "09",
          total: "09",
          text: "Provide 60 days of free support",
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-left: calc((100% - 985px) / 2);
}

.section-wrap {
  align-items: flex-start;
}

.how-do {
  max-width: 1150px;
  width: 100%;

  .base-title {
    margin: 0;
  }

  &__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 78px;
    max-width: 945px;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
  }

  &__list-item {
    width: 33.333%;
  }

  &__list-item::v-deep {
    .item__text {
      max-width: 300px;
    }
  }
}
</style>

<template>
  <full-page :options="options">
    <MainScreen class="section" />
    <MainServices class="section" />
    <MainCase class="section" />
    <HowDoWe class="section" />
    <MainPrices class="section" />
    <ContactUs class="section" />
  </full-page>
</template>

<script>
import MainScreen from "@/components/index/MainScreen";
import MainServices from "@/components/index/MainServices";
import MainCase from "@/components/index/MainCase";
import HowDoWe from "@/components/index/HowDoWe";
import MainPrices from "@/components/index/MainPrices";
import ContactUs from "@/components/index/ContactUs";
export default {
  components: {
    ContactUs,
    MainPrices,
    HowDoWe,
    MainCase,
    MainServices,
    MainScreen,
  },
  data() {
    return {
      options: {
        menu: "#menu",
        anchors: ["home", "services", "case", "howDoWe", "prices", "contact"],
      },
    };
  },
};
</script>

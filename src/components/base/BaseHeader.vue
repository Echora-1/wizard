<template>
  <header class="header">
    <div class="container header__container">
      <icon-logo />

      <menu-button
        @click="showMenu = !showMenu"
        :open="showMenu"
        v-show="!showMenu"
      />
      <nav :class="['header__nav', { 'header__nav--open': showMenu }]">
        <menu-button
          class="header__nav-btn"
          @click="showMenu = !showMenu"
          :open="showMenu"
        />
        <ul class="header__nav-list">
          <li class="header__nav-item">
            <a href="/#" @click="closeMenu">Home</a>
          </li>
          <li class="header__nav-item">
            <a href="/#" @click="closeMenu">Services</a>
          </li>
          <li class="header__nav-item">
            <a href="/#" @click="closeMenu">Cases</a>
          </li>
          <li class="header__nav-item">
            <a href="/#" @click="closeMenu">How do we</a>
          </li>
          <li class="header__nav-item">
            <a href="/#" @click="closeMenu">Prices</a>
          </li>
          <li class="header__nav-item">
            <a href="/#" @click="closeMenu">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
import IconLogo from "../icon/IconLogo.vue";
import MenuButton from "../common/MenuButton.vue";
export default {
  components: { MenuButton, IconLogo },

  data() {
    return {
      showMenu: false,
    };
  },

  methods: {
    closeMenu() {
      this.showMenu = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  z-index: 10;
  display: flex;
  align-items: center;
  min-height: 55px;
  position: fixed;
  top: 30px;
  width: 100%;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__nav {
    position: fixed;
    top: 0;
    right: 0;
    max-width: 410px;
    width: 100%;
    min-height: 100vh;
    background: white;
    transform: translateX(200%);
    transition: all 0.3s;
    padding: 36px 75px 86px 0;
    display: flex;
    flex-direction: column;
    box-shadow: 0 12px 42px rgba(0, 0, 0, 0.16);

    &--open {
      transform: translateX(0);
    }
  }

  &__nav-btn {
    margin-left: auto;
  }

  &__nav-list {
    margin: auto 0;
  }

  &__nav-item {
    text-align: end;

    a {
      font-weight: 600;
      font-size: 20px;
      line-height: 72px;
      text-align: right;
      font-feature-settings: "liga" off;
    }
  }
}
</style>

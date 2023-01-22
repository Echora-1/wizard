<template>
  <footer class="footer">
    <div class="container footer__container">
      <div class="footer__social">
        <a href="" aria-label="linked-in" class="footer__social-item">
          <icon-linked-in />
        </a>
        <a href="" aria-label="google" class="footer__social-item">
          <icon-google />
        </a>
        <a href="" aria-label="telegram" class="footer__social-item">
          <icon-telegram />
        </a>
      </div>
      <a class="footer__email" href="mailto:hello@uxwizards.studio"
        >hello@uxwizards.studio</a
      >
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  z-index: 9;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 58px;
  width: 100%;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__social {
    display: flex;
  }

  &__social-item {
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-right: 36px;
    }
  }

  &__email {
    font-weight: 500;
    font-size: 16px;
    line-height: 115%;
    text-align: right;
    letter-spacing: -0.03em;
    color: rgba(0, 0, 0, 0.6);
    margin: 0;
  }
}
</style>
<script>
import IconLinkedIn from "@/components/icon/IconLinkedIn";
import IconGoogle from "@/components/icon/IconGoogle";
import IconTelegram from "@/components/icon/IconTelegram";
export default {
  components: { IconTelegram, IconGoogle, IconLinkedIn },
};
</script>

<template>
  <button
    :class="[
      'common-button',
      {
        'common-button--transparent': transparent,
        'common-button--disabled': disabled,
        'common-button--loading': loading,
      },
    ]"
    :disabled="disabled"
    @click="click"
  >
    <slot></slot>
    <span class="loader-wrap">
      <span v-if="loading" class="loader"></span>
    </span>
  </button>
</template>

<script>
export default {
  props: {
    transparent: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    click() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
.common-button {
  background: #6200ee;
  border-radius: 6px;
  cursor: pointer;
  color: #ffffff;
  font-weight: 700;
  font-size: 15px;
  line-height: 115%;
  text-align: center;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  padding: 17px 24px;
  justify-content: center;
  border: 1px solid #6200ee;
  position: relative;
  text-transform: uppercase;
  min-width: 172px;

  &--transparent {
    border: 1px solid rgba(0, 0, 0, 0.25);
    color: #000000;
    background: transparent;

    .loader {
      color: #6200ee;
    }
  }

  &--disabled {
    background: rgba(0, 0, 0, 0.3);
    border-color: transparent;
    cursor: not-allowed;
  }

  &--loading {
    color: transparent;
    pointer-events: none;
  }
}

.loader-wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.loader {
  width: 4px;
  height: 25px;
  border-radius: 4px;
  display: block;
  margin: 20px auto;
  position: relative;
  background: currentColor;
  color: #fff;
  box-sizing: border-box;
  animation: animloader 0.45s 0.3s linear infinite alternate;
}

.loader::after,
.loader::before {
  content: "";
  width: 4px;
  height: 25px;
  border-radius: 4px;
  background: currentColor;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 11px;
  box-sizing: border-box;
  animation: animloader 0.45s 0.45s linear infinite alternate;
}
.loader::before {
  left: -11px;
  animation-delay: 0s;
}

@keyframes animloader {
  0% {
    height: 28px;
  }
  100% {
    height: 3px;
  }
}
</style>

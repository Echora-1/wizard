<template>
  <div
    :class="['wrap', { 'input-focused': focused, invalid: touched && invalid }]"
  >
    <label :for="id" :class="['base-label']">
      {{ label }}
    </label>
    <div class="base-input-wrapper">
      <template v-if="textarea">
        <textarea
          :id="id"
          class="base-input"
          v-bind="$attrs"
          :placeholder="$attrs.placeholder"
          :value="modelValue"
          @focus="focusHandler"
          @input="inputHandler"
          @blur="blurHandler"
        />
      </template>
      <template v-else>
        <input
          :id="id"
          class="base-input"
          v-bind="$attrs"
          :placeholder="$attrs.placeholder"
          :value="modelValue"
          @focus="focusHandler"
          @input="inputHandler"
          @blur="blurHandler"
        />
      </template>
    </div>
    <p v-show="touched && invalid" class="invalid-text">{{ errorList[0] }}</p>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: "",
    },

    id: {
      type: String,
      default: "",
    },

    label: {
      type: String,
      default: "",
    },

    errorList: {
      type: Array,
      default: () => [],
    },
    textarea: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      focused: false,
      touched: false,
    };
  },

  computed: {
    invalid() {
      return this.errorList.length > 0;
    },
  },

  methods: {
    inputHandler(event) {
      this.$emit("update:modelValue", event.target.value);
    },

    focusHandler() {
      this.focused = true;
    },

    blurHandler() {
      this.touched = true;
      this.focused = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  position: relative;
}

.base-input-wrapper {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  transition: all 0.5s;
  position: relative;
  margin-bottom: 18px;
  overflow: hidden;
}

.base-input {
  width: 100%;
  margin: 0;
  border: none;
  outline: none;
  padding: 20px 14px;
  background: transparent;
  font-weight: 600;
  font-size: 15px;
  line-height: 115%;
  letter-spacing: 0.05em;
  color: rgba(0, 0, 0, 0.6);
  -webkit-box-shadow: inset 0 0 0 50px #ffffff;
  -webkit-text-fill-color: rgba(0, 0, 0, 0.6);
  position: relative;
  transition: color 0.3s;
  resize: none;

  @media (max-width: 767px) {
    padding: 10px 20px;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background-color: #ffffff !important;
    background-image: none !important;
    color: #000000 !important;
  }
}

.base-input::placeholder {
  color: rgba(0, 0, 0, 0.6);
  text-transform: uppercase;
}

.base-label {
  display: none;

  &--show {
    opacity: 1;
  }
}

.input-focused {
  .base-input-wrapper {
    border-color: #000000;
  }

  .base-input {
    -webkit-text-fill-color: #000000 !important;
  }
}

.invalid {
  .base-input-wrapper {
    border-color: #db0d00;
  }
}

.invalid-text {
  color: #db0d00;
  position: absolute;
  bottom: -40px;
  left: 0;
  font-size: 13px;
  line-height: 19px;
}
</style>

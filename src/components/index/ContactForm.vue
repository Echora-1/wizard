<template>
  <div class="form">
    <form class="form__form" v-if="!loading && !success" @submit.prevent="send">
      <base-input
        v-model="form.name"
        type="name"
        id="name"
        name="name"
        class="form__input"
        label="name"
        placeholder="name"
        :error-list="nameErrors"
      />
      <base-input
        v-model="form.email"
        type="email"
        id="email"
        name="email"
        class="form__input"
        label="email"
        placeholder="email"
        :error-list="emailErrors"
      />
      <base-input
        textarea
        rows="5"
        v-model="form.message"
        type="message"
        id="message"
        name="message"
        class="form__input textarea"
        label="message"
        placeholder="message"
        :error-list="messageErrors"
      />
      <base-button class="form__btn" type="submit" :disabled="!formIsValid">
        send
      </base-button>
    </form>
    <base-loader v-if="loading && !success" class="form__loader" />
    <icon-form-success v-if="success" width="250" height="250" />
  </div>
</template>

<script>
import BaseInput from "@/components/base/BaseInput";
import BaseButton from "@/components/base/BaseButton";
import BaseLoader from "@/components/base/BaseLoader";
import IconFormSuccess from "@/components/icon/IconFormSuccess";
export default {
  components: { IconFormSuccess, BaseLoader, BaseButton, BaseInput },
  data() {
    return {
      loading: false,
      success: false,
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.form.name.length > 0) errors.push("Required field");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.form.email.length > 0) errors.push("Required field");
      return errors;
    },
    messageErrors() {
      const errors = [];
      if (!this.form.message.length > 0) errors.push("Required field");
      return errors;
    },

    formIsValid() {
      return (
        this.nameErrors.length === 0 &&
        this.emailErrors.length === 0 &&
        this.messageErrors.length === 0
      );
    },
  },

  methods: {
    send() {
      if (this.formIsValid) {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.success = true;
        }, 1500);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  width: 674px;
  height: 506px;
  background: #ffffff;
  border-radius: 19px;
  padding: 25px 55px 55px;
  display: flex;
  justify-content: center;
  align-items: center;

  &__form {
    width: 100%;
  }

  &__input {
    margin-bottom: 40px;
  }

  &__btn {
    margin-top: auto;
  }

  &__loader {
    margin: auto;
  }
}
</style>

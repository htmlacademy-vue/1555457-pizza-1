<template>
  <div class="counter counter--orange ingredients__counter">
    <button
      type="button"
      class="counter__button counter__button--minus"
      :disabled="isDisabledMinusBtn"
      @click="decreaseCount"
    >
      <span class="visually-hidden">Меньше</span>
    </button>
    <input type="text" name="counter" class="counter__input" :value="count" />
    <button
      type="button"
      class="counter__button counter__button--plus"
      @click="increaseCount"
      :disabled="isDisabledPlusBtn"
    >
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "ItemCounter",
  props: {
    classValue: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      count: 0,
      isDisabledMinusBtn: true,
      isDisabledPlusBtn: false,
    };
  },
  methods: {
    increaseCount() {
      if (this.count < 3) {
        this.count++;
        this.isDisabledMinusBtn = false;
      }
      if (this.count == 3) {
        this.isDisabledPlusBtn == true;
      }
      this.$emit("increaseCount", this.count, this.classValue);
    },
    decreaseCount() {
      if (this.count > 0) {
        this.count--;
      }
      if (this.count == 0) {
        this.isDisabledMinusBtn = true;
      }
      this.$emit("decreaseCount", this.count, this.classValue);
    },
  },
};
</script>

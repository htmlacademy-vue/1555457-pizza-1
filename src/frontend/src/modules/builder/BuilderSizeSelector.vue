<template>
  <div class="content__diameter">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите размер</h2>

      <div class="sheet__content diameter">
        <label
          :class="'diameter__input diameter__input--' + getSizeValue(size.id)"
          v-for="size in pizza.sizes"
          :key="size.id"
        >
          <RadioButton
            type="radio"
            name="diameter"
            :value="getSizeValue(size.id)"
            class="visually-hidden"
          />
          <span>{{ size.name }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import RadioButton from "../../common/components/RadioButton.vue";
export default {
  name: "BuilderSizeSelector",
  components: {
    RadioButton,
  },
  props: {
    pizza: {
      type: Object,
      required: true,
    },
    getSizeValue: {
      type: Function,
      required: true,
    },
  },
};
</script>

<template>
  <div class="content__diameter">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите размер</h2>

      <div class="sheet__content diameter">
        <label
          :class="'diameter__input diameter__input--' + getSizeValue(size.id)"
          v-for="size in sizes"
          :key="size.id"
          @click="changeSize(size.id)"
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
  methods: {
    getSizeValue(id) {
      switch (id) {
        case 1:
          return "small";
        case 2:
          return "normal";
        case 3:
          return "large";
      }
    },
    changeSize(id) {
      this.$emit("onSizeChange", id);
    },
  },
  props: {
    sizes: {
      type: Array,
      required: true,
    },
  },
};
</script>

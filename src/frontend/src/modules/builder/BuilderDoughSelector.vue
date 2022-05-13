<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>

      <div class="sheet__content dough">
        <label
          :class="'dough__input dough__input--' + getDoughValue(dough.id)"
          v-for="dough in pizza.dough"
          v-bind:key="dough.id"
        >
          <RadioButton
            name="dought"
            :value="getDoughValue(dough.id)"
            class="visually-hidden"
            checked
          />
          <b>{{ dough.name }}</b>
          <span>{{ dough.description }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import RadioButton from "../../common/components/RadioButton.vue";

export default {
  name: "BuilderDoughSelector",
  components: {
    RadioButton,
  },
  props: {
    pizza: {
      type: Object,
      required: true,
    },
    getDoughValue: {
      type: Function,
      required: true,
    },
  },
};
</script>

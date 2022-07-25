<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>

      <div class="sheet__content dough">
        <label
          :class="'dough__input dough__input--' + getDoughValue(dough.id)"
          v-for="dough in doughs"
          v-bind:key="dough.id"
          @click="changeDough(dough.id)"
        >
          <RadioButton
            name="dought"
            :value="getDoughValue(dough.id)"
            class="visually-hidden"
            :checked="dough.id == selectedDoughId"
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
  methods: {
    getDoughValue(id) {
      return id == 1 ? "light" : "large";
    },
    changeDough(id) {
      this.$emit("onDoughChange", id);
    },
  },
  name: "BuilderDoughSelector",
  components: {
    RadioButton,
  },
  props: {
    doughs: {
      type: Array,
      required: true,
    },
    selectedDoughId: {
      type: Number,
      required: true,
    },
  },
};
</script>

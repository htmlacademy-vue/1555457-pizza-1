<template>
  <div class="content__ingredients">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>
      <div class="sheet__content ingredients">
        <div class="ingredients__sauce">
          <p>Основной соус:</p>

          <label
            class="radio ingredients__input"
            v-for="sauce in sauces"
            v-bind:key="sauce.id"
          >
            <input
              type="radio"
              name="sauce"
              :value="getSauceValue(sauce.id)"
              :checked="sauce.id == selectedSauceId"
              @click="changeSauce(sauce.id)"
            />
            <span>{{ sauce.name }}</span>
          </label>
        </div>

        <div class="ingredients__filling">
          <p>Начинка:</p>

          <ul class="ingredients__list">
            <li
              class="ingredients__item"
              v-for="ingredient in ingredients"
              v-bind:key="ingredient.id"
            >
              <span
                :class="'filling filling--' + fillingClasses[ingredient.id]"
                draggable
                @dragstart="onDrag"
              >
                {{ ingredient.name }}
              </span>

              <ItemCounter
                :classValue="fillingClasses[ingredient.id]"
                @changeCount="changeIngredient($event)"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ItemCounter from "../../common/components/ItemCounter.vue";
export default {
  name: "BuilderIngredientsSelector",
  components: {
    ItemCounter,
  },
  props: {
    sauces: {
      type: Array,
      required: true,
    },
    ingredients: {
      type: Array,
      required: true,
    },
    selectedSauceId: {
      type: Number,
      required: false,
    },
  },
  methods: {
    onDrag(evt) {
      evt.dataTransfer.dropEffect = "move";
    },
    getSauceValue(id) {
      return id == 1 ? "tomato" : "creamy";
    },
    changeIngredient(changedIngredient) {
      this.$emit("onIngredientChange", changedIngredient);
    },
    changeSauce(id) {
      this.$emit("onSauceChange", id);
    },
  },
  data() {
    return {
      fillingClasses: {
        1: "mushrooms",
        2: "cheddar",
        3: "salami",
        4: "ham",
        5: "ananas",
        6: "bacon",
        7: "onion",
        8: "chile",
        9: "jalapeno",
        10: "olives",
        11: "tomatoes",
        12: "salmon",
        13: "mozzarella",
        14: "parmesan",
        15: "blue_cheese",
      },
    };
  },
};
</script>

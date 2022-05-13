<template>
  <div class="content__ingredients">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>
      <div class="sheet__content ingredients">
        <div class="ingredients__sauce">
          <p>Основной соус:</p>

          <label
            class="radio ingredients__input"
            v-for="sauce in pizza.sauces"
            v-bind:key="sauce"
          >
            <input
              type="radio"
              name="sauce"
              :value="getSauceValue(sauce.id)"
              checked
            />
            <span>{{ sauce.name }}</span>
          </label>
        </div>

        <div class="ingredients__filling">
          <p>Начинка:</p>

          <ul class="ingredients__list">
            <li
              class="ingredients__item"
              v-for="ingredient in pizza.ingredients"
              v-bind:key="ingredient"
            >
              <span
                :class="'filling filling--' + fillingClasses[ingredient.id]"
                draggable
                @dragstart="onDrag"
                >{{ ingredient.name }}</span
              >

              <ItemCounter
                :classValue="fillingClasses[ingredient.id]"
                @increaseCount="test"
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
    pizza: {
      type: Object,
      required: true,
    },
    getSauceValue: {
      type: Function,
      required: true,
    },
    fillingClasses: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onDrag: function (evt) {
      evt.dataTransfer.dropEffect = "move";
    },
  },
};
</script>

<template>
  <div>
    <AppLayout />
    <main class="content">
      <form action="#" method="post">
        <div class="content__wrapper">
          <h1 class="title title--big">Конструктор пиццы</h1>
          <BuilderDoughSelector :pizza="pizza" :getDoughValue="getDoughValue" />
          <BuilderSizeSelector :pizza="pizza" :getSizeValue="getSizeValue" />
          <BuilderIngredientsSelector
            :pizza="pizza"
            :getSauceValue="getSauceValue"
            :fillingClasses="fillingClasses"
          />
          <div class="content__pizza">
            <label class="input">
              <span class="visually-hidden">Название пиццы</span>
              <input
                type="text"
                name="pizza_name"
                placeholder="Введите название пиццы"
              />
            </label>
            <BuilderPizzaView />
            <BuilderPriceCounter />
          </div>
        </div>
      </form>
    </main>
  </div>
</template>

<script>
import pizza from "../static/pizza.json";
import BuilderDoughSelector from "../modules/builder/BuilderDoughSelector.vue";
import BuilderSizeSelector from "../modules/builder/BuilderSizeSelector.vue";
import BuilderIngredientsSelector from "../modules/builder/BuilderIngredientsSelector.vue";
import BuilderPizzaView from "../modules/builder/BuilderPizzaView.vue";
import BuilderPriceCounter from "../modules/builder/BuilderPriceCounter.vue";
import AppLayout from "../layouts/AppLayout.vue";
export default {
  components: {
    BuilderDoughSelector,
    BuilderSizeSelector,
    BuilderIngredientsSelector,
    BuilderPizzaView,
    BuilderPriceCounter,
    AppLayout,
  },
  data() {
    return {
      pizza: pizza,
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
  methods: {
    getDoughValue(id) {
      return id == 1 ? "light" : "large";
    },
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
    getSauceValue(id) {
      return id == 1 ? "tomato" : "creamy";
    },
  },
};
</script>
<style></style>

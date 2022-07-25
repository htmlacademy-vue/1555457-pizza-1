<template>
  <div>
    <main class="content">
      <form action="#" method="post">
        <div class="content__wrapper">
          <h1 class="title title--big">Конструктор пиццы</h1>
          <BuilderDoughSelector
            :doughs="pizza.dough"
            @onDoughChange="onDoughChange"
            :selectedDoughId="currentPizzaState.selectedDoughId"
          />
          <BuilderSizeSelector
            :sizes="pizza.sizes"
            @onSizeChange="onSizeChange"
          />
          <BuilderIngredientsSelector
            :sauces="pizza.sauces"
            :ingredients="pizza.ingredients"
            :selectedSauceId="currentPizzaState.selectedSauceId"
            @onIngredientChange="changeIngredients"
            @onSauceChange="changeSauce"
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
export default {
  components: {
    BuilderDoughSelector,
    BuilderSizeSelector,
    BuilderIngredientsSelector,
    BuilderPizzaView,
    BuilderPriceCounter,
  },
  data() {
    return {
      pizza: pizza,
      currentPizzaState: {
        selectedDoughId: 1,
        selectedSizeId: 1,
        selectedSauceId: 1,
        ingredients: {
          mushrooms: 0,
          cheddar: 0,
          salami: 0,
          ham: 0,
          ananas: 0,
          bacon: 0,
          onion: 0,
          chile: 0,
          jalapeno: 0,
          olives: 0,
          tomatoes: 0,
          salmon: 0,
          mozzarella: 0,
          parmesan: 0,
          blue_cheese: 0,
        },
      },
    };
  },
  methods: {
    onDoughChange(id) {
      this.currentPizzaState.selectedDoughId = id;
    },
    onSizeChange(id) {
      this.currentPizzaState.selectedSizeId = id;
    },
    changeIngredients({ ammount, ingredientName }) {
      this.currentPizzaState.ingredients[ingredientName] = ammount;
    },
    changeSauce(id) {
      this.currentPizzaState.selectedSauceId = id;
    },
  },
};
</script>

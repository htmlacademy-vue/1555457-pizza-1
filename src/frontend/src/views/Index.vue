<template>
  <div>
    <header class="header">
      <div class="header__logo">
        <a href="index.html" class="logo">
          <img
            src="../assets/img/logo.svg"
            alt="V!U!E! Pizza logo"
            width="90"
            height="40"
          />
        </a>
      </div>
      <div class="header__cart">
        <a href="cart.html">0 ₽</a>
      </div>
      <div class="header__user">
        <a href="#" class="header__login"><span>Войти</span></a>
      </div>
    </header>

    <main class="content">
      <form action="#" method="post">
        <div class="content__wrapper">
          <h1 class="title title--big">Конструктор пиццы</h1>

          <div class="content__dough">
            <div class="sheet">
              <h2 class="title title--small sheet__title">Выберите тесто</h2>

              <div class="sheet__content dough">
                <label
                  :class="
                    'dough__input dough__input--' + getDoughValue(dough.id)
                  "
                  v-for="dough in pizza.dough"
                  v-bind:key="dough"
                >
                  <input
                    type="radio"
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

          <div class="content__diameter">
            <div class="sheet">
              <h2 class="title title--small sheet__title">Выберите размер</h2>

              <div class="sheet__content diameter">
                <label
                  :class="
                    'diameter__input diameter__input--' + getSizeValue(size.id)
                  "
                  v-for="size in pizza.sizes"
                  :key="size"
                >
                  <input
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

          <div class="content__ingredients">
            <div class="sheet">
              <h2 class="title title--small sheet__title">
                Выберите ингредиенты
              </h2>

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
                        :class="
                          'filling filling--' + fillingClasses[ingredient.id]
                        "
                        >{{ ingredient.name }}</span
                      >

                      <div class="counter counter--orange ingredients__counter">
                        <button
                          type="button"
                          class="counter__button counter__button--minus"
                          disabled
                        >
                          <span class="visually-hidden">Меньше</span>
                        </button>
                        <input
                          type="text"
                          name="counter"
                          class="counter__input"
                          value="0"
                        />
                        <button
                          type="button"
                          class="counter__button counter__button--plus"
                        >
                          <span class="visually-hidden">Больше</span>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="content__pizza">
            <label class="input">
              <span class="visually-hidden">Название пиццы</span>
              <input
                type="text"
                name="pizza_name"
                placeholder="Введите название пиццы"
              />
            </label>

            <div class="content__constructor">
              <div class="pizza pizza--foundation--big-tomato">
                <div class="pizza__wrapper">
                  <div class="pizza__filling pizza__filling--ananas"></div>
                  <div class="pizza__filling pizza__filling--bacon"></div>
                  <div class="pizza__filling pizza__filling--cheddar"></div>
                </div>
              </div>
            </div>

            <div class="content__result">
              <p>Итого: 0 ₽</p>
              <button type="button" class="button" disabled>Готовьте!</button>
            </div>
          </div>
        </div>
      </form>
    </main>
  </div>
</template>

<script>
import pizza from "../static/pizza.json";
export default {
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

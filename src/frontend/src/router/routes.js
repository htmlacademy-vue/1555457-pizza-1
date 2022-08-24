export default [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Index.vue"),
    meta: { layout: "DefaultLayout" },
    children: [
      {
        path: "/login",
        name: "login",
        meta: { layout: "DefaultLayout" },
        component: () => import("../views/Login.vue"),
      },
    ],
  },
  {
    path: "/cart",
    name: "cart",
    meta: { layout: "SidebarLayout" },
    component: () => import("../views/Cart.vue"),
  },
  {
    path: "/orders",
    name: "orders",
    meta: { layout: "SidebarLayout" },
    component: () => import("../views/Orders.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    meta: { layout: "SidebarLayout" },
    component: () => import("../views/Profile.vue"),
  },
];

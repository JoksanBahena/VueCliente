import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  //la ruta base
  {
    path: "/",
    redirect: "/inicio",
  },
  {
    path: "/",
    component: {
      render(c) {
        return c("router-view");
      },
    },
    children: [
      {
        path: "/tienda-de-juguetes",
        name: "juguetes",
        component: () => import("../components/TiendaDeJuguetes.vue"),
      },
      {
        path: "/tienda-de-juguetes/juegos-electronicos",
        name: "electronicos",
        component: () => import("../components/JuegosElectronicos.vue"),
      },
      {
        path: "/tienda-de-juguetes/juegos-electronicos/juegos-de-video",
        name: "videojuegos",
        component: () => import("../components/JuegosDeVideo.vue"),
      },
      {
        path: "/tienda-de-electrodomesticos",
        name: "electrodomesticos",
        component: () => import("../components/TiendaDeElectrodomesticos.vue"),
      },
      {
        path: "/tienda-de-electrodomesticos/para-la-cocina",
        name: "cocina",
        component: () => import("../components/ParaLaCocina.vue"),
      },
      {
        path: "/tienda-de-electrodomesticos/para-la-cocina/estufas",
        name: "estufas",
        component: () => import("../components/Estufas.vue"),
      },
      {
        path: "/tienda-de-productos-para-el-hogar",
        name: "hogar",
        component: () =>
          import("../components/TiendaDeProductosParaElHogar.vue"),
      },
    ],
  },
];

const router = new VueRouter({ routes });
export default router;

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
    path: "*",
    component: () => import("../views/ErrorPages/Error404.vue"),
  },
  {
    path: "/paginacion",
    name: "paginacion",
    component: () => import("../components/Persona.vue"),
  },
  {
    path: "/formulario",
    name: "formulario",
    component: () => import("../components/Formulario.vue"),
  },
  {
    path: "/inicio",
    component: () => import("../components/Inicio.vue"),
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

<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Tienda de electrodomesticos",
          href: "http://localhost:5173/#/tienda-de-electrodomesticos",
          name: "electrodomesticos",
        },
        {
          text: "Para la cocina",
          href: "http://localhost:5173/#/tienda-de-electrodomesticos/para-la-cocina",
          name: "cocina",
        },
        {
          text: "Estufas",
          href: "#",
          name: "Estufas",
        },
      ],
    };
  },
};
</script>

<style>
</style>
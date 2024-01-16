<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-button
      variant="success"
      class="me-2"
      href="http://localhost:5173/#/tienda-de-electrodomesticos/para-la-cocina/estufas"
      >Estufas</b-button
    >
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
          href: "#",
          name: "cocina",
        },
      ],
    };
  },
};
</script>

<style>
</style>
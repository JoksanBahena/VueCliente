<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-button
      variant="success"
      class="me-2"
      href="http://localhost:5173/#/tienda-de-juguetes/juegos-electronicos"
      >Juegos electronicos</b-button
    >
    <b-button variant="success" href="http://localhost:5173/#/paginacion">Juegos de mesa</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Tienda de juguetes",
          href: "#",
          name: "juguetes",
        },
      ],
    };
  },
};
</script>

<style>
</style>
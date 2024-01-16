<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-button
      variant="success"
      class="me-2"
      href="http://localhost:5173/#/tienda-de-juguetes/juegos-electronicos/juegos-de-video"
      >Juegos de video</b-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Tienda de juguetes",
          href: "http://localhost:5173/#/tienda-de-juguetes",
          name: "juguetes",
        },
        {
            text: "Juegos electronicos",
            href: "#",
            name: "electronicos"
        }
      ],
    };
  },
};
</script>

<style>

</style>
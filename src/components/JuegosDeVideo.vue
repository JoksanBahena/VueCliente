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
          text: "Tienda de juguetes",
          href: "http://localhost:5173/#/tienda-de-juguetes",
          name: "juguetes",
        },
        {
            text: "Juegos electronicos",
            href: "http://localhost:5173/#/tienda-de-juguetes/juegos-electronicos",
            name: "electronicos"
        },
        {
            text: "Juegos de video",
            href: "#",
            name: "videojuegos"
        }
      ],
    };
  },
};
</script>

<style>

</style>
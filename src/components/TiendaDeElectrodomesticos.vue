<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-button
      variant="success"
      class="me-2"
      href="http://localhost:5173/#/tienda-de-electrodomesticos/para-la-cocina"
      >Para la cocina</b-button
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
          href: "#",
          name: "electrodomesticos",
        },
      ],
    };
  },
};
</script>

<style>
</style>
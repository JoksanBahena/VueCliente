<template>
  <div>
    <form
      id="app"
      @submit="checkForm"
      action="https://vuejs.org/"
      method="post"
    >
      <p>
        <label for="marca">Marca</label>
        <input id="marca" v-model="marca" type="text" name="marca" />
      </p>

      <p>
        <label for="modelo">Modelo</label>
        <input id="modelo" v-model="modelo" type="text" name="modelo" />
      </p>

      <p>
        <label for="fabricacion">Año de fabricación</label>
        <input id="fabricacion" v-model="fabricacion" type="number" name="fabricacion" />
      </p>

      <p>
        <label for="serie">Numero de serie</label>
        <input id="serie" v-model="serie" type="text" name="serie" />
      </p>

      <p>
        <input type="submit" value="Submit" />
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file1: null,
      file2: null,
    };
  },
};
</script>

<style>
</style>
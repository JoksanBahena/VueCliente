<template>
  <div>
    <b-form id="app" @submit="checkForm" method="post">
      <!-- <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
            <li v-for="error in errors" :key="error.id">{{ error }}</li>
            </ul>
        </p> -->
      <b-form-group label="Nombre completo" label-for="name">
        <b-form-input
          id="name"
          type="text"
          placeholder="Ingrese su nombre completo"
          required
        />
      </b-form-group>
      <b-form-group label="Dirección" label-for="address">
        <b-form-input
          id="address"
          type="text"
          placeholder="Ingrese su dirección"
          required
        />
      </b-form-group>
      <b-form-group label="Fecha de nacimiento" label-for="birthday">
        <b-form-input
          id="birthday"
          type="date"
          placeholder="Ingrese su fecha de nacimiento"
          required
        />
      </b-form-group>
      <b-form-group label="Correo electronico" label-for="email">
        <b-form-input
          id="email"
          type="email"
          placeholder="Ingrese su correo electronico"
          required
        />
      </b-form-group>
      <b-form-group label="Teléfono" label-for="phone">
        <b-form-input
          id="phone"
          type="number"
          placeholder="Ingrese su numero de telefono"
          required
        />
      </b-form-group>
      <!-- <b-form-group label="Fotografía" label-for="photo">
        <b-form-input
          id="photo"
          type="file"
          required
        />
      </b-form-group> -->
      <b-form-group label="Fotografía">
        <!-- Styled -->
        <b-form-file
          v-model="file1"
          :state="Boolean(file1)"
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Drop file here..."
        ></b-form-file>
        <div class="mt-3">Selected file: {{ file1 ? file1.name : "" }}</div>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
export default {
    data() {
      return {
        file1: null,
        file2: null
      }
    }
  }
</script>

<style>
</style>
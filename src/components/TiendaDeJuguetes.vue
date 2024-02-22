<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-button
      variant="success"
      class="me-2"
      href="http://localhost:5173/#/tienda-de-juguetes/juegos-electronicos"
      >Juegos electronicos</b-button
    >
    <b-button variant="success" href="http://localhost:5173/#/paginacion"
      >Juegos de mesa</b-button
    >

    <div class="container mt-2">
      <form @submit.prevent="submitForm">
        <label for="name">Nombre:</label>
        <input type="text" id="name" v-model="formData.name" required />
        <div
          ref="container"
          class="frc-captcha mt-2"
          data-sitekey="FCMII3HVVENOU1DT"
          data-lang="es"
        ></div>
        <button class="mt-2" type="submit">Enviar</button>
      </form>
    </div>
  </div>
</template>

<script>
import { WidgetInstance } from "friendly-challenge";
import { ref } from "vue";
import CaptchaService from "../services/captchaService";

export default {
  data() {
    return {
      container: ref("container"),
      widget: ref(),
      formData: {
        name: "",
        captchaToken: null,
      },
      items: [
        {
          text: "Tienda de juguetes",
          href: "#",
          name: "juguetes",
        },
      ],
    };
  },
  methods: {
    submitForm: () => {},
    async verifyCaptcha(solution) {
      let response = await CaptchaService.verificarCaptcha(solution);
      console.log(response);
    },
    doneCallback: (solution) => {
      console.log("Captcha was solved. The form can be submitted.");
      console.log(solution);
    },
    errorCallback: (err) => {
      console.log("There was an error when trying to solve the Captcha.");
      console.log(err);
    },
  },
  mounted() {
    if (this.$refs.container) {
      this.widget = new WidgetInstance(this.$refs.container, {
        startMode: "auto",
        doneCallback: this.doneCallback,
        errorCallback: this.errorCallback,
      });
    }
  },
  beforeDestroy() {
    if (this.widget) {
      this.widget.destroy();
    }
  },
};
</script>

<style>
</style>
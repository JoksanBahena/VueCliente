<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
</script>

<template>
  <div id="app">
    <div>
      <b-navbar type="dark" variant="dark" style="z-index: 999">
        <b-navbar-brand>
          <img
            class="ms-2"
            src="src/assets/img/capi.jpg"
            alt="not found"
            style="width: 50px"
          />
        </b-navbar-brand>
        <b-navbar-nav>
          <b-nav-item href="#">Home</b-nav-item>

          <!-- Navbar dropdowns -->
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="User" right>
            <b-dropdown-item href="#">Account</b-dropdown-item>
            <b-dropdown-item href="#">Settings</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-navbar>
    </div>
    <div class="row">
      <div class="col-2" style="background-color: gray; height: 85vh"></div>
      <div class="col-9">
        <b-row>
          <b-col md="auto">
            <b-calendar
              v-model="value"
              @context="onContext"
              locale="en-US"
            ></b-calendar>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>

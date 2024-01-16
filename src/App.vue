<template>
  <div id="app">
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
    <div class="row">
      <div class="col-3">
        <b-nav vertical class="pt-5">
          <b-nav-item
            ><b-link :to="{ name: 'juguetes' }">
              Tienda de jueguetes
            </b-link>
          </b-nav-item>

          <b-nav-item
            ><b-link :to="{ name: 'electrodomesticos' }"
              >Tienda de electrodomesticosa</b-link
            >
          </b-nav-item>

          <b-nav-item
            ><b-link :to="{ name: 'tercero' }"
              >Tienda de productos para el hogar</b-link
            >
          </b-nav-item>
        </b-nav>
      </div>
      <div class="col-9">
        <router-view />
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>

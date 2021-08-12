<template>
  <div id="aplication">
    <Navbar />
    <Lista-personajes />
    <Card-personajes />


    <router-view />
  </div>
</template>
<script>
import ListaPersonajes from '@/components/ListaPersonajes'
import Navbar from "@/components/Navbar";
import CardPersonajes from './components/CardPersonajes.vue';
export default {
  components: {
    Navbar,
    CardPersonajes,
    ListaPersonajes
  },
  setup() {},
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "poppins", sans-serif;
}
body {
  background: #000;
  color: #00ffff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
h1 {
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  margin: 12px;
}

a {
  font-weight: bold;
  color: #ff0000;

  &.router-link-exact-active {
    color: #ffffff;
  }
}
</style>

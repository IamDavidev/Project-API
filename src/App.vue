<template>
  <div id="aplication">
    <Navbar />
    <router-view />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar";
export default {
  components: {
    Navbar,
  },
  setup() {},
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  background: #000;
  color: #00ffff;
}

a {
  font-weight: bold;
  color: #ff0000;

  &.router-link-exact-active {
    color: #ffffff;
  }
}
</style>

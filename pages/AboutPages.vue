<template>
  <div class="app">
    <Header />
    <About />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";
export default {
  name: "AboutPages",
  components: {
    Header,
    About,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.app {
  background-color: #fff;
  position: relative;
}
</style>

<template>
  <div class="app">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
export default {
  name: "IndexPage",
  components: {
    Header,
    Main,
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

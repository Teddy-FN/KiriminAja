<!-- Please remove this file from your project -->
<template>
  <header class="header">
    <div class="container">
      <NuxtLink to="/">
        <img
          :src="require('../../assets/svg-logo-primary.svg')"
          class="img-logo"
        />
      </NuxtLink>
      <nav class="nav-list">
        <a href="#">Beranda</a>
        <a href="#">Blog</a>
        <a href="#">Kabar</a>
        <a href="#">Layanan</a>
        <a href="#">Cek Ongkir</a>

        <NuxtLink to="/about"> About </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 10;
  background-color: #fff;
  box-shadow: 2px 0px 6px rgba($color: #f5f5f5, $alpha: 0.5);
}

.container {
  width: 90%;
  max-width: 85%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0px;

  .img-logo {
    width: 26%;
    margin-bottom: 10px;
  }

  .nav-list {
    display: flex;
    gap: 40px;
  }
}
</style>

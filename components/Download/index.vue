<template>
  <div class="download-wrapper">
    <img
      src="https://kiriminaja.com/assets/home-2/call-to-action.png"
      class="img-download"
    />
    <div class="download-container">
      <h2>Gratis daftar dalam hitungan detik</h2>
      <p class="text-white text-opacity-50 fw-medium me-lg-8 text-opacity-50">
        Semua bisa mulai kirim paket tanpa ribet. Jadikan pengalaman pengiriman
        paket lebih mudah dengan KiriminAja.
      </p>
      <div class="donwload-img-wrapper">
        <img
          :src="require('../../assets/appstore.png')"
          class="img-download-app"
        />
        <img
          :src="require('../../assets/googleplay.png')"
          class="img-download-app"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Download",
};
</script>

<style lang="scss" scoped>
.download-wrapper {
  background-color: #6f2fab;
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  .img-download {
    width: 50%;
  }

  .download-container {
    width: 40%;
    padding-top: 180px;

    h2 {
      font-size: 40px;
      color: #fff;
      font-weight: 500;
      line-height: 1.2;
      margin-bottom: 10px;
    }

    p {
      line-height: 1.5;
    }

    .donwload-img-wrapper {
      margin-top: 20px;
      display: flex;
      gap: 10px;

      .img-download-app {
        width: 25%;
      }
    }
  }
}
</style>

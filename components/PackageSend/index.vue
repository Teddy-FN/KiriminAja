<template>
  <div class="package-container">
    <h3>Kirim Paket Makin Singkat</h3>
    <p>Masih kurang? Yuk explore sekarang biar ngga penasaran</p>
    <div class="package-description-wrapper">
      <img :src="require('../../assets/package-send.png')" />
      <ul class="list-items">
        <li>Berbagai service expedisi sameday, kargo dan lainnya.</li>
        <li>Penjemputan paket tanpa minimal kiriman.</li>
        <li>Fitur dropoff atau cashless.</li>
        <li>Kirim paket COD dengan pencairan tercepat.</li>
        <li>Platform mudah digunakan (user friendly).</li>
        <li>Meminimalisir rasio retur.</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "PackageSend",
  data: () => ({
    images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    amount: 0,
  }),

  mounted() {
    let i = 0;
    setInterval(() => {
      if (i > this.images.length - 1) {
        i = 0;
      }
      this.amount = i;
      i++;
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
.package-container {
  margin-bottom: 120px;
  h3 {
    font-size: 28px;
    color: #000;
    text-align: center;
    margin-bottom: 16px;
  }

  p {
    text-align: center;
    font-size: 19px;
    color: #000;
    margin-bottom: 48px;
  }

  .package-description-wrapper {
    display: flex;

    .list-items {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .list-items li {
      border: 2px solid rgba(0, 0, 0, 0.125);
      padding: 12px 44px;
      font-size: 16px;
      margin-bottom: 12px;
      border-radius: 8px;
    }

    .list-items li::before {
      content: "";
      display: block;
      width: 30px;
      height: 30px;
      background: url("../../assets/checklist.png");
      background-size: 20px;
      background-repeat: no-repeat;
      border-radius: 50%;
      position: absolute;
      margin-left: -30px;
      margin-top: 2px;
    }
  }
}
</style>

<template>
  <div class="container">
    <h2>Our Teams</h2>

    <div class="grid cols teams-section">
      <div class="card">
        <img
          src="https://kiriminaja.com/assets/team/budi_isman.jpg"
          class="img-fluid w-100 mb-2 main-radius"
        />
        <div class="author-wrapper">
          <h5>Budi Satria Isman</h5>
          <p>President Commisioner</p>
        </div>
      </div>
      <div class="card">
        <img
          src="https://kiriminaja.com/assets/team/fariz_gtj.jpg"
          class="img-fluid w-100 mb-2 main-radius"
        />
        <div class="author-wrapper">
          <h5>Fariz Gustanjung Jaya</h5>
          <p>Chief Executive Officer & Founder</p>
        </div>
      </div>
      <div class="card">
        <img
          src="https://kiriminaja.com/assets/team/paras_nasution.jpg"
          class="img-fluid w-100 mb-2 main-radius"
        />
        <div class="author-wrapper">
          <h5>Paras M. Nasution</h5>
          <p>Chief Operation Officer</p>
        </div>
      </div>
      <div class="card">
        <img
          src="https://kiriminaja.com/assets/team/yuliana_afrizal.jpg"
          class="img-fluid w-100 mb-2 main-radius"
        />
        <div class="author-wrapper">
          <h5>Yulian Afrizal</h5>
          <p>Chief Marketing Officer & Co-Founder</p>
        </div>
      </div>
      <div class="card">
        <img
          src="https://kiriminaja.com/assets/team/muh_irfan_herawan.jpg"
          class="img-fluid w-100 mb-2 main-radius"
          alt="Muh Irfan Herawan"
        />
        <div class="author-wrapper">
          <h5>Muh. Irfan Herawan</h5>
          <p>Chief Technology Officer & Founder</p>
        </div>
      </div>
      <div class="card">
        <img
          src="https://kiriminaja.com/assets/team/arief_ardinugroho.jpg"
          class="img-fluid w-100 mb-2 main-radius"
        />
        <div class="author-wrapper">
          <h5>Arief Ardinugroho</h5>
          <p>Chief People Officer</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  // data: () => ({
  //   images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  //   amount: 0,
  // }),
};
</script>

<style lang="scss" scoped>
.container {
  width: 90%;
  max-width: 85%;
  margin: 0 auto;

  h2 {
    text-align: center;
    font-size: 40px;
    font-weight: 500;
  }

  .grid {
    display: grid;

    .card {
      border-radius: 8px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 10px;

      img {
        border-radius: 8px;
      }

      .author-wrapper {
        h5 {
          font-size: 20px;
          font-weight: 500;
        }
        p {
          font-size: 16px;
          margin-bottom: 16px;
        }
      }
    }
  }

  .cols {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 20px;
  }

  .teams-section {
    padding-top: 50px;
    margin-bottom: 78px;
  }
}
</style>

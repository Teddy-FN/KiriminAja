<template>
  <div class="container">
    <div class="relative slide">
      <div
        class="carousel-indicators absolute bottom-0 flex h-10 w-full justify-center items-center"
      >
        <ol class="z-50 flex w-4/12 justify-center">
          <li
            v-for="(img, i) in images"
            :key="i"
            class="md:w-4 md:h-4 bg-gray-300 rounded-full cursor-pointer mx-2"
          ></li>
        </ol>
      </div>
      <div class="carousel-inner relative overflow-hidden w-full">
        <div
          v-for="(img, i) in images"
          :id="`slide-${i}`"
          :key="i"
          :class="`${active === i ? 'active' : 'left-full'}`"
          class="carousel-item inset-0 relative w-full transform transition-all duration-500 ease-in-out"
        >
          <div class="items">
            <img :src="img" alt="First slide" />
            <div class="description-wrapper">
              <span class="btn btn-sm">#5 Info</span>
              <h2>Gebyar Pesta Pora KiriminAja</h2>
              <p class="lead">
                Eits siapa nih yang belum berkesempatan memenangkan lucky draw
                Pestapora KiriminAja? Yuk coba lagi dibulan Juni siapa tau kamu
                bisa mendadak hepi
              </p>
              <ul class="list-check">
                <li>Tanpa Biaya Pendaftaran</li>
                <li>Bebas Pilih Ekspedisi</li>
                <li>Banyak Hadiahnya</li>
              </ul>
              <a class="btn btn-lg">Selengkapnya</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Destination />
    <SliderClient />
    <PackageRequirement />
    <PackageSend />
    <Download />
  </div>
</template>

<script>
import SliderClient from "../SliderClient";
import Destination from "../Destination";
import Download from "../Download";
import PackageSend from "../PackageSend";
import PackageRequirement from "../PackageRequirement";
export default {
  name: "Main",
  components: {
    SliderClient,
    Destination,
    PackageSend,
    Download,
    PackageRequirement,
  },
  data: () => ({
    images: [
      "https://kiriminaja.com/storage/Slider/April22/1650526232_NCS%20(Slider)%20(1)%20(1).png",
      "https://kiriminaja.com/storage/Slider/April22/1648798905_Slider2%20(3)%20(1).png",
      "https://kiriminaja.com/storage/Slider/June22/1654855912_Small.png",
      "https://kiriminaja.com/storage/Slider/April22/1651137429_Gosend%20Silder%20(4)%20(1).png",
      "https://kiriminaja.com/storage/Slider/June22/1654855912_Small.png",
    ],
    active: 0,
  }),
  mounted() {
    let i = 0;
    setInterval(() => {
      if (i > this.images.length - 1) {
        i = 0;
      }
      this.active = i;
      i++;
    }, 2000);
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 85%;
  max-width: 85%;
  margin: 0 auto 60px auto;
}

.dots-carousel {
  margin-top: 40px;
  display: inline-block;
}

.left-full {
  left: -100%;
}

.carousel-item {
  float: left;
  position: relative;
  display: block;
  width: 100%;
  margin-right: -100%;
  backface-visibility: hidden;
}

.carousel-item.active {
  left: 0;
}

.items {
  width: 80%;
  display: block;
  margin: 0 auto;
  display: flex;
  height: 90vh;
  align-items: center;
  gap: 50px;

  img {
    width: 40%;
    height: 80%;
  }

  .description-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 60%;

    .btn {
      border-radius: 30px;
      text-align: center;
    }

    .btn-lg {
      background-color: #6f2fab;
      padding: 15px 10px;
      color: #fff;
      width: 40%;
      border-color: #6f2fab;
      font-weight: 500;
    }

    .btn-sm {
      padding: 6px 2px;
      width: 15%;
      background-color: rgba(255, 106, 0, 0.2);
      color: rgb(255, 106, 0);
    }

    h2 {
      font-size: 40px;
      font-weight: 700;
      letter-spacing: 1px;
    }

    p {
      font-size: 20px;
      color: #000;
    }

    .list-check {
      margin: 20px 0;
    }

    .list-check li::before {
      content: "";
      display: block;
      width: 30px;
      height: 30px;
      background: url("../../assets/checklist.png");
      background-size: 20px;
      background-repeat: no-repeat;
      border-radius: 50%;
      position: absolute;
      margin-left: -25px;
    }

    .list-check li {
      margin-left: 20px;
      margin-top: 10px;
    }

    .list-check li:first-child {
      margin-left: 20px;
      margin-top: 0px;
    }
  }
}
</style>

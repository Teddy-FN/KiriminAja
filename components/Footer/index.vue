<template>
  <footer class="container">
    <div class="footer-wrapper">
      <NuxtLink to="/">
        <img
          :src="require('../../assets/svg-logo-primary.svg')"
          class="img-logo"
        />
      </NuxtLink>
      <div class="cols">
        <div class="product-wrapper">
          <h4>PT. Selalu Siap Solusi</h4>
          <div class="descrition-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-map"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="currentColor"
              fill-opacity="0.3"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="12" cy="11" r="3"></circle>
              <path
                d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"
              ></path>
            </svg>
            <p>
              Jl. Palagan Tentara Pelajar No. 30 KM 08, Mudal, Kelurahan
              Sariharjo, Kecamatan Ngaglik, Kabupaten Sleman, Provinsi Daerah
              Istimewa Yogyakarta
            </p>
          </div>
          <div class="descrition-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="currentColor"
              fill-opacity="0.3"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M10 21v-6.5a3.5 3.5 0 0 0 -7 0v6.5h18v-6a4 4 0 0 0 -4 -4h-10.5"
              ></path>
              <path d="M12 11v-8h4l2 2l-2 2h-4"></path>
              <path d="M6 15h1"></path>
            </svg>
            <p>support@kiriminaja.com</p>
          </div>
          <div class="descrition-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="currentColor"
              fill-opacity="0.3"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
              ></path>
              <path d="M15 6l2 2l4 -4"></path>
            </svg>
            <p>0274 8000 123</p>
          </div>
          <div class="registered">
            <h6>Terdaftar di</h6>
            <img
              :src="require('../../assets/logo-kominfo.svg')"
              class="img-logo"
            />
          </div>
        </div>
        <div class="list-container">
          <h4>Tautan Cepat</h4>
          <div class="list-items">
            <p>Cek Tarif Aja</p>
            <p>Kabar Buatmu</p>
            <p>Manajemen Order</p>
            <p>Integrasi API</p>
          </div>
        </div>
        <div class="send-container">
          <h4>Kirimin Aja</h4>
          <div class="list-items">
            <p>Cek Tarif Aja</p>
            <p>Kabar Buatmu</p>
            <p>Manajemen Order</p>
          </div>
        </div>
      </div>
      <div class="copyright-container">
        <p>Copyright © 2022 KiriminAja.com. All rights reserved.</p>
        <div class="icons-container">
          <a href="#" class="text-muted m3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-tiktok"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5"></path>
            </svg>
          </a>
          <a href="#" class="text-muted m3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-facebook"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="currentColor"
              fill-opacity="0.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
              ></path>
            </svg>
          </a>
          <a href="#" class="text-muted m3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="currentColor"
              fill-opacity="0.2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <rect x="4" y="4" width="16" height="16" rx="4"></rect>
              <circle cx="12" cy="12" r="3"></circle>
              <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
            </svg>
          </a>
          <a href="#" class="text-muted m3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="currentColor"
              fill-opacity="0.2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <rect x="4" y="4" width="16" height="16" rx="2"></rect>
              <line x1="8" y1="11" x2="8" y2="16"></line>
              <line x1="8" y1="8" x2="8" y2="8.01"></line>
              <line x1="12" y1="16" x2="12" y2="11"></line>
              <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
            </svg>
          </a>
          <a href="#" class="text-muted m3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="currentColor"
              fill-opacity="0.2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <rect x="3" y="5" width="18" height="14" rx="4"></rect>
              <path d="M10 9l5 3l-5 3z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.container {
  width: 85%;
  max-width: 85%;
  margin: 0 auto;

  .footer-wrapper {
    padding: 50px 0;

    .cols {
      display: flex;

      .product-wrapper {
        width: 50%;

        .descrition-wrapper {
          margin-top: 15px;
          display: flex;
          width: 60%;
          justify-content: flex-start;

          .icon-map {
            width: 20%;
          }

          p {
            color: #6c757d;
            padding-left: 10px;
            font-size: 16px;
          }
        }

        .registered {
          margin-top: 20px;
          h6 {
            color: #6c757d;
            font-size: 16px;
            font-weight: 500;
            margin-bottom: 5px;
          }
        }
      }

      .send-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        flex: 1;

        h4 {
          align-items: flex-start;
          margin-right: 50px;
        }
      }
    }

    .img-logo {
      width: 12%;
      margin-bottom: 10px;
    }

    h4 {
      color: #6c757d;
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 20px;
    }

    .copyright-container {
      padding: 48px 0 0 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icons-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 40px;
      }
    }

    .list-items {
      display: flex;
      flex-direction: column;
      gap: 15px;

      p {
        color: #333;
        font-size: 16px;
      }
    }
  }
}
</style>

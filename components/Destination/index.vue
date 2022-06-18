<template>
  <div class="count-destination-container">
    <div class="items-container">
      <div class="text-bold" style="display: inline-block">From</div>
      <div class="text-bold" style="display: inline-block; color: red">
        &nbsp;*&nbsp;
      </div>

      <div
        v-on:click="toggleDropdownRegionFrom()"
        ref="btnDropdownRef"
        class="btn btn-region"
      >
        Kecamatan Asal
      </div>
      <div
        v-bind:class="{
          hidden: !dropdownFrom,
          block: dropdownFrom,
        }"
        ref="popoverDropdownRef"
        class="text-dropdown-wrapper"
      >
        <input type="text" placeholder="" />
        <p>Masukan 3 Huruf Lagi</p>
      </div>
    </div>
    <div class="items-container">
      <div class="text-bold" style="display: inline-block">Destination</div>
      <div class="text-bold" style="display: inline-block; color: red">
        &nbsp;*&nbsp;
      </div>
      <div
        v-on:click="toggleDropdown()"
        ref="btnDropdownRef"
        class="btn btn-region"
      >
        Kecamatan Tujuan
      </div>
      <div
        v-bind:class="{
          hidden: !dropdownRegion,
          block: dropdownRegion,
        }"
        ref="popoverDropdownRef"
        class="text-dropdown-wrapper"
      >
        <input type="text" placeholder="" />
        <p>Masukan 3 Huruf Lagi</p>
      </div>
    </div>
    <div class="items-container contain-container">
      <div class="searching-wrapper">
        <div class="text-bold" style="display: inline-block">Berat</div>
        <div class="text-bold" style="display: inline-block; color: red">
          &nbsp;*&nbsp;
        </div>
        <div class="btn">
          <input
            type="number"
            name=""
            id=""
            placeholder="1000"
            class="text-input-number"
          />
        </div>
      </div>
      <button class="btn-search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <circle cx="10" cy="10" r="7"></circle>
          <line x1="21" y1="21" x2="15" y2="15"></line>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Destination",
  data: () => ({
    dropdownRegion: false,
    dropdownFrom: false,
  }),
  methods: {
    toggleDropdown: function () {
      if (this.dropdownRegion) {
        this.dropdownRegion = false;
      } else {
        this.dropdownRegion = true;
      }
    },

    toggleDropdownRegionFrom: function () {
      if (this.dropdownFrom) {
        this.dropdownFrom = false;
      } else {
        this.dropdownFrom = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.count-destination-container {
  margin-top: 20px;
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 3px 3px 2px;
  box-shadow: 0 2px 10px -1px rgba(0, 0, 0, 0.2),
    0 1px 1px 0 rgba(0, 0, 0, 0.14);
  position: relative;
  gap: 10px;
  width: 100%;
  margin-bottom: 65px;

  .btn {
    padding: 10px 0;
    color: #757575;
    font-size: 16px;
    cursor: pointer;

    .text-input-number {
      width: 100%;
    }
  }

  .text-dropdown-wrapper {
    position: absolute;
    z-index: 10;
    bottom: -50px;
    width: 30%;
    margin-left: 5px;

    input {
      width: 100%;
      border: 1px solid #ced4da;
      padding: 5px;
      border-radius: 4px;
      margin-bottom: 10px;
    }

    p {
      color: #6c757d;
      font-size: 16px;
      font-weight: normal;
    }
  }
}
.items-container {
  flex: 1;
  border-right: dotted 1px #757575;
}

.items-container:nth-child(3) {
  flex: 1;
  border-right: dotted 0px #757575;
}

.contain-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn-search {
  background-color: #6f2fab;
  padding: 8.8px 12px;
  font-size: 18px;
  color: #fff;
  border-radius: 10px;
}
</style>

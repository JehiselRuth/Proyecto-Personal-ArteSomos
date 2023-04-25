<script setup></script>
<template>
  <div
    id="carouselExampleInterval"
    class="carousel-fade"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="5000">
        <img
          src="../assets/images/carousel/img1.jpg"
          class="image-slider 3 d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item" data-bs-interval="5000">
        <img
          src="../assets/images/carousel/image-02.jpg"
          class="image-slider d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item" data-bs-interval="5000">
        <img
          src="../assets/images/carousel/image-03.jpg"
          class="image-slider d-block w-100"
          alt="..."
        />
      </div>

      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <div class="control-button">
          <span class="carousel-control-prev-icon"></span>
        </div>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <div class="control-button">
          <span class="carousel-control-next-icon"></span>
        </div>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/sass/home/slider.scss";
</style>

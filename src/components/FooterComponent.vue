<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <footer class="footer  ">
    <!-- <div class="footer__container-log"></div> -->
    <div class="footer__container-title">
      <p class="footer__container-title__copyright">&copy; ArteSomos</p>
    </div>

    <div class="footer__container-social-media">
      <div class="footer__container-navigation">
        <RouterLink class="nav-link" to="/"></RouterLink>
        <a
          href=" https://www.facebook.com/profile.php?id=100051181520137"
          target="_blank"
          ><img
            class="image-icon icons"
            src="../assets/images/iconFacebook.png"
            alt="facebbok-icon"
        /></a>

        <a
          href="https://instagram.com/xareu_d_ochobre?igshid=YmMyMTA2M2Y="
          target="_blank"
          ><img
            class="image-icon icons"
            src="../assets/images/icon-Instagram.png"
            alt="instagram-icon"
        /></a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "../assets/sass/variables";

.footer {
  background-color: $background-white;
  display: flex;
  gap: 2rem;
  align-items: end;
  color: #9b5830;
  padding: 0.5em;
  font-size: larger;
  font-family: Arial, Helvetica, sans-serif;
  justify-content: space-between;
   
  &__container-social-media {
    cursor: pointer;
  }
  .icons {
    margin: 2vh;
    // opacity: 100%;
  }
  .icons a:hover {
    opacity: .5;
    line-height: 5em;
  }

  a.router-link-exact-active,
  a:hover {
    color: $background-mustard;
    letter-spacing: 1px;
  }

  
 
}
</style>

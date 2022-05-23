<template>
  <header>
    <nav class="hamburger__navbar">
      <a href="#" class="hamburger__logo">
        <img src="../../assets/logo.png" alt="Vue logo" />
      </a>

      <ul class="hamburger__nav__menu">
        <li class="hamburger__nav__item">
          <a href="#" class="hamburger__nav__link">Home</a>
        </li>
        <li class="hamburger__nav__item">
          <a href="#" class="hamburger__nav__link">About</a>
        </li>
        <li class="hamburger__nav__item">
          <a href="#" class="hamburger__nav__link">Contact</a>
        </li>
      </ul>

      <div class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@import "burger-menu";
</style>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  let mountBurger = document.createElement("script");
  mountBurger.setAttribute("src", "./src/modules/burger-menu/burger-menu.js");
  document.head.appendChild(mountBurger);
});
</script>

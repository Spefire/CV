<template>
  <div>
    <Header />
    <div id="nav-home" class="home-page">
      <div class="home-background"></div>
      <h1>{{ name }}</h1>
      <vue-typed-js
        :strings="profile"
        :contentType="'html'"
        :typeSpeed="35"
        :backSpeed="15"
        :backDelay="2000"
        :loop="true"
      >
        <p class="typing"></p>
      </vue-typed-js>
      <p v-html="description"></p>
      <div class="home-links">
        <a href="https://www.facebook.com/spefire/" target="_blank">
          <span class="icon home-icon icon-facebook"></span>
        </a>
        <a href="https://twitter.com/Spefire" target="_blank">
          <span class="icon home-icon icon-twitter"></span>
        </a>
        <a href="https://instagram.com/spefireflies/" target="_blank">
          <span class="icon home-icon icon-instagram"></span>
        </a>
        <a href="https://github.com/Spefire" target="_blank">
          <span class="icon home-icon icon-github"></span>
        </a>
        <a
          href="https://www.linkedin.com/in/nicholas-brun-1689a879/"
          target="_blank"
        >
          <span class="icon home-icon icon-linkedin"></span>
        </a>
      </div>
    </div>
    <div class="nav-page-button" v-scroll-to="{ el: '#nav-about', offset: 0 }">
      <span class="icon home-icon icon-circle-down"></span>
    </div>
    <About />
    <Education />
    <Experiences />
    <Skills />
    <Languages />
    <Hobbies />
    <Contact />
    <div
      class="nav-page-button inverted"
      v-scroll-to="{ el: '#nav-home', offset: 0 }"
    >
      <span class="icon home-icon icon-circle-down"></span>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" src="./Home.ts"></script>

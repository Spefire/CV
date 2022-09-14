<template>
  <div>
    <Header />
    <div
      id="nav-home"
      class="home-page">
      <div class="home-background" />
      <h1>{{ name }}</h1>
      <p v-html="txtProfile" />
      <!--vue-typed-js
        :strings="profile"
        :content-type="'html'"
        :type-speed="35"
        :back-speed="15"
        :back-delay="2000"
        :loop="true">
        <p class="typing" />
      </vue-typed-js-->
      <p v-html="description" />
      <div class="home-links">
        <a
          href="https://www.facebook.com/spefire/"
          target="_blank">
          <span class="icon home-icon icon-facebook" />
        </a>
        <a
          href="https://twitter.com/Spefire"
          target="_blank">
          <span class="icon home-icon icon-twitter" />
        </a>
        <a
          href="https://instagram.com/spefireflies/"
          target="_blank">
          <span class="icon home-icon icon-instagram" />
        </a>
        <a
          href="https://github.com/Spefire"
          target="_blank">
          <span class="icon home-icon icon-github" />
        </a>
        <a
          href="https://www.linkedin.com/in/nicholas-brun-1689a879/"
          target="_blank">
          <span class="icon home-icon icon-linkedin" />
        </a>
      </div>
    </div>
    <div class="nav-page-button">
      <span class="icon home-icon icon-circle-down" />
    </div>
    <About />
    <Education />
    <Experiences />
    <Skills />
    <Languages />
    <Hobbies />
    <Contact />
    <div class="nav-page-button inverted">
      <span class="icon home-icon icon-circle-down inverted" />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" src="./Home.ts"></script>

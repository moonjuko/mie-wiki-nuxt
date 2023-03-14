<template>
  <div class="Parent">
    <div class="aboutDesc">
      <p class="aboutTitle">Hello, my name is Juliana Matsumura.</p>
      <h1 class="aboutText">
        I'm a Front-End Developer and Designer from Mie-ken, Japan.
      </h1>
      <a class="button" href="https://jujuhideko.com">See my work</a>
    </div>
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap");

.Parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.aboutTitle {
  margin-bottom: 25px;
  font-weight: 100;
  font-size: 24px;
}

.aboutText {
  font-style: italic;
  padding-bottom: 30px;
}

.aboutDesc {
  padding: 60px;
  margin: auto;
  color: black;
  line-height: 30px;
  justify-content: center;
  text-align: left;
}

/* Responsive layout - makes a one column layout instead of a two-column layout */
@media (max-width: 800px) {
  .Parent {
    flex-direction: column;
    text-align: center;
    align-items: center;
    position: relative;
  }
  .aboutImg {
    display: none;
  }
  .aboutText {
    font-size: 30px;
    margin-bottom: 20px;
  }
  .aboutDesc {
    text-align: center;
    align-items: center;
    margin: 0;
    position: absolute;
    margin-top: 160%;
  }
  .aboutTitle {
    font-size: 25px;
  }
}
</style>

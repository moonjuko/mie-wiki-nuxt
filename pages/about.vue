<template>
  <div class="Parent">
    <div class="aboutDesc">
      <p class="aboutTitle">Hello, my name is Juliana Matsumura.</p>
      <h1 class="aboutText">
        I'm a Front-End Developer and Designer from Mie-ken, Japan.
      </h1>
      <a class="button" href="#">See my work</a>
    </div>
    <div class="imgView">
      <img class="aboutImg" src="~/assets/img/about.jpg" alt="Card Image" />
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
  font-weight: 500;
  font-size: 20px;
  color: #555;
}

.aboutText {
  font-family: "Playfair Display", serif;
  padding-bottom: 30px;
}

.aboutDesc {
  padding: 60px;
  margin: auto;
  width: 50%;
  color: black;
  line-height: 30px;
  justify-content: center;
  text-align: left;
}

.imgView {
  width: 50%;
  display: flex;
  justify-content: center;
}

.aboutImg {
  height: 600px;
  margin-top: 70px;
  margin-right: -100px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
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
    font-size: 20px;
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
    font-size: 15px;
  }
}
</style>

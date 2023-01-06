<script setup>
// get object by id from json
import cards from "../../assets/cards.json";

const route = useRoute();
const id = route.params.id;

const detailCard = getCardById(id);

function getCardById(idToFind) {
  if (idToFind > cards.length) return;
  let card = cards.find((x) => x.id == idToFind);
  return card;
}

function formatText() {
  return detailCard.longDescription.replace(/\n/g, "<br />");
}
</script>

<template>
  <div v-if="detailCard">
    <div class="some-page-wrapper">
      <div class="row">
        <div class="column">
          <div class="blue-column">
            <h1 class="detailTitle">{{ detailCard.name }}</h1>
            <p class="detailText" v-html="formatText()"></p>
            <!-- <p class="detailText">{{ detailCard.longDescription }}</p> -->
          </div>
        </div>
        <div class="column">
          <div class="green-column">
            <div class="slider">
              <span id="slide-1"></span>
              <span id="slide-2"></span>
              <span id="slide-3"></span>
              <div class="image-container">
                <img
                  :src="'/images/' + detailCard.img1"
                  class="slide"
                  width="660"
                  height="460"
                />
                <img
                  :src="'/images/' + detailCard.img2"
                  class="slide"
                  width="660"
                  height="460"
                />
                <img
                  :src="'/images/' + detailCard.img3"
                  class="slide"
                  8
                  width="660"
                  height="460"
                />
              </div>
              <div class="buttons">
                <a href="#slide-1"></a>
                <a href="#slide-2"></a>
                <a href="#slide-3"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.detailTitle {
  margin-bottom: 20px;
}

.detailText {
  font-size: 20px;
}
.some-page-wrapper {
  margin: 60px;
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}

.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
}

.blue-column {
  margin-right: 60px;
}

@media screen and (min-width: 800px) {
  .column {
    flex: 1;
  }
}

.slider {
  width: 660px;
  height: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  text-align: center;
  overflow: hidden;
}
.image-container {
  width: 1980px;
  background-color: pink;
  height: 460px;
  clear: both;
  position: relative;
  -webkit-transition: left 2s;
  -moz-transition: left 2s;
  -o-transition: left 2s;
  transition: left 2s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.slide {
  float: left;
  margin: 0px;
  padding: 0px;
  position: relative;
}
#slide-1:target ~ .image-container {
  left: 0px;
}
#slide-2:target ~ .image-container {
  left: -660px;
}
#slide-3:target ~ .image-container {
  left: -1320px;
}
.buttons {
  top: 50px;
}
.buttons a {
  display: inline-block;
  height: 20px;
  width: 20px;
  border-radius: 50px;
  margin: 20px 5px;
  background-color: #abb6d6;
}

.buttons a:hover {
  background-color: black;
}

@media only screen and (max-width: 600px) {
  .detailTitle {
    margin-top: 20px;
  }
  .detailText {
    font-size: 18px;
  }
  .some-page-wrapper {
    margin: 10px 50px;
  }
  .blue-column {
    margin-right: 0px;
  }
  .green-column {
    margin-bottom: 0px;
  }
  .slider {
    width: 300px;
    height: 300px;
  }
  .slide {
    width: 300px;
    height: 200px;
  }
  #slide-1:target ~ .image-container {
    left: 0px;
  }
  #slide-2:target ~ .image-container {
    left: -300px;
  }
  #slide-3:target ~ .image-container {
    left: -600px;
  }
  .image-container {
    width: 900px;
    height: 200px;
  }
}
</style>

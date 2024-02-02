<script setup>
// get object by id from json
import cards from "../../assets/cards.json";

const route = useRoute();
const id = route.params.id; //gives id of the route back

const detailCard = getCardById(id);

function getCardById(idToFind) {
  //could this be a v-if ?
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
            <h1
              style="font-size: 30px; text-align: left; font-weight: 800"
              class="detailTitle"
            >
              {{ detailCard.name }}
            </h1>
            <p
              style="font-size: 20px; text-align: left"
              class="detailText"
              v-html="formatText()"
            ></p>
            <div class="table-wrapper" style="padding: 100px 0">
              <table style="width: 100%; text-align: left; height: 100%">
                <tr>
                  <th>Overall Rating</th>
                  <th>Category</th>
                  <th>Opening Times</th>
                  <th>Location</th>
                </tr>
                <tbody>
                  <tr>
                    <td>{{ detailCard.rating }}</td>
                    <td>{{ detailCard.Category }}</td>
                    <td>{{ detailCard.openingTime }}</td>
                    <td>{{ detailCard.mapsLink }}</td>
                  </tr>
                  <tr>
                    <td><i class="fa-solid fa-star" color="black"></i></td>
                    <td><i class="fa-solid fa-list"></i></td>
                    <td><i class="fa-solid fa-clock"></i></td>
                    <td><i class="fa-regular fa-map"></i></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="green-column">
            <UCarousel
              v-slot="{ item }"
              :items="[detailCard.img1, detailCard.img2, detailCard.img3]"
              :ui="{ item: 'basis-full' }"
              class="rounded-lg overflow-hidden"
              arrows
            >
              <img :src="`/images/${item}`" class="w-full" draggable="false" />
            </UCarousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.detailTitle {
  margin-bottom: 20px;
  font-size: 60px;
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
}
</style>

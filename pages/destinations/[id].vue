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
            <h1 class="detailTitle">
              {{ detailCard.name }}
            </h1>
            <p class="detailText" v-html="formatText()"></p>
            <div class="table-wrapper">
              <table>
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
  font-size: 40px;
  font-weight: 600;
}

.detailText {
  font-size: 23px;
}

.some-page-wrapper {
  margin: 60px;
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap; /* Updated: Set flex-wrap to nowrap */
  width: 100%;
}

.column {
  display: flex;
  flex-direction: column;
  flex-basis: 50%; /* Updated: Set flex-basis to 50% for both columns */
}

.blue-column {
  margin-right: 60px;
}

.green-column {
  margin-right: 60px;
}

table {
  width: 100%;
  text-align: left;
  height: 100%;
  gap: 10px;
  margin-top: 80px;
}
th {
  font-size: 18px;
}
tr {
  font-size: 18px;
}

@media all and (max-width: 1600px) {
  table {
    width: 100%;
    text-align: left;
    height: 100%;
    gap: 10px;
    margin-top: 30px;
  }
  th {
    font-size: 12px;
  }
  tr {
    font-size: 12px;
  }
  .detailTitle {
    margin-bottom: 10px;
    font-size: 14.5px;
  }

  .detailText {
    font-size: 14px;
  }

  .some-page-wrapper {
    margin: 50px;
  }

  .row {
    /* No change in the row styles for this breakpoint */
  }

  .column {
    flex-basis: 100%; /* Change back to full width for stacking on smaller screens */
  }

  .blue-column,
  .green-column {
    margin-right: 50px;
  }
}

@media only screen and (max-width: 600px) {
  .detailTitle {
    margin-top: 20px;
  }

  .detailText {
    font-size: 13px;
  }

  .some-page-wrapper {
    margin: 10px 50px;
  }

  .row {
    /* No change in the row styles for this breakpoint */
  }

  .column {
    flex-basis: 100%; /* Change back to full width for stacking on smaller screens */
  }

  .blue-column,
  .green-column {
    margin-right: 0px;
  }
}
</style>

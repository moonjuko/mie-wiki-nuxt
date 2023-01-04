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

// get object by id from json
</script>

<template>
  <div v-if="detailCard">
    <p>{{ detailCard.name }}</p>
    <p>{{ detailCard.description }}</p>
  </div>
</template>

<style></style>

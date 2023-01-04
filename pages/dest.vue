<script setup>
import cards from "../assets/cards.json";
</script>

<template>
  <header class="masthead clear">
    <div class="centered">
      <div class="site-branding">
        <h1 class="site-title">Everything About The Mie-Ken in Your Pocket</h1>
        <p class="destText">
          First-time visitors to Japan undoubtedly have to go to Tokyo and
          Kyoto, but if you’re looking for somewhere a little quieter with fewer
          tourists, there are so many great options on the island nation. For
          those who are seeking out delectable fare, Mie boasts exceptional
          seafood thanks to its ocean-side location and is also home to one of
          the three best types of Japanese beef. And then there’s its natural
          beauty, with dense ancient forests that meet cascading waterfalls.
          tourists, there are so many great options on the island nation. For
          those who are seeking out delectable fare, Mie boasts exceptional
          seafood thanks to its ocean-side location and is also home to one of
          the three best types of Japanese beef. And then there’s its natural
          beauty, with dense ancient forests that meet cascading waterfalls.
        </p>
        <h3 class="bestDest">The Best Places to Visit</h3>
      </div>
      <!-- .site-title -->
    </div>
    <!-- .centered -->
  </header>
  <!-- .masthead -->

  <main class="main-area">
    <div class="centered">
      <section class="cards">
        <Card
          v-for="card in cards"
          :img="card.img"
          :name="card.name"
          :description="card.description"
          :id="card.id"
          :key="card.id"
        />
      </section>
      <!-- .cards -->
    </div>
    <!-- .centered -->
  </main>
</template>

<script setup>
import cards from "../assets/cards.json";
</script>

<template>
  <header class="masthead clear">
    <div class="centered">
      <div class="site-branding">
        <h1 class="site-title">Everything About The Mie-Ken in Your Pocket</h1>
        <p class="destText">
          Mie boasts exceptional seafood thanks to its ocean-side location and
          is also home to one of the three best types of Japanese beef.
          <br />And then there’s its natural beauty, with dense ancient forests
          that meet cascading waterfalls.
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

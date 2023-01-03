<template>
  <header class="masthead clear">
    <div class="centered">
      <div class="site-branding">
        <h1 class="site-title">Everything About The Mie-Ken in Your Pocket</h1>
        <p class="destText">
          First-time visitors to Japan undoubtedly have to go to Tokyo and
          Kyoto, but if you’re looking for somewhere a little quieter with fewer
          tourists, there are so many great options on the island nation. Part
          of the Kansai region, the area has some of the most historical and
          sacred sites in Japan, providing an opportunity to really immerse in
          the culture and learn about what the locals value. For those who are
          seeking out delectable fare, Mie boasts exceptional seafood thanks to
          its ocean-side location and is also home to one of the three best
          types of Japanese beef. And then there’s its natural beauty, with
          dense ancient forests that meet cascading waterfalls.
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
        <div class="card">
          <div class="image">
            <!-- You can add an image here using the <img> element -->
            <img src="~/assets/img/kumano.webp" alt="Card Image" />
          </div>
          <div class="content">
            <h3 class="cardTitle">Kumano Kodo</h3>
            <p class="description">
              For over 1000 years, people from all levels of society, have made
              the pilgrimage to Kumano. It's a fantastic way to experience the
              cultural landscape of Kumano’s spiritual countryside.
            </p>
            <button class="button">Explore</button>
          </div>
        </div>
        <div class="card">
          <div class="image">
            <!-- You can add an image here using the <img> element -->
            <img src="~/assets/img/akame.jpeg" alt="Card Image" />
          </div>
          <div class="content">
            <h3 class="cardTitle">Akame 48 Waterfalls</h3>
            <p class="description">
              The Akame 48 Waterfalls offer a unique mix of ninja excitement,
              mysterious trails, the waterfalls themselves and enormous
              amphibians. A recreational path of about 4 km long.
            </p>
            <button class="button">Explore</button>
          </div>
        </div>
        <div class="card">
          <div class="image">
            <!-- You can add an image here using the <img> element -->
            <img src="~/assets/img/meoto-iwa.jpeg" alt="Card Image" />
          </div>
          <div class="content">
            <h3 class="cardTitle">Meoto Iwa</h3>
            <p class="description">
              Meoto Iwa are two sacred rocks representing a husband and a wife.
              Both rocks are connected by a shimenawa rope which acts as the
              division between the spiritual and earthly realms.
            </p>
            <button class="button">Explore</button>
          </div>
        </div>
        <div class="card">
          <div class="image">
            <!-- You can add an image here using the <img> element -->
            <img src="~/assets/img/amanemu-spa.webp" alt="Card Image" />
          </div>
          <div class="content">
            <h3 class="cardTitle">Amanemu</h3>
            <p class="description">
              A paradisiacal retreat nestled within Ise-Shima National Park
              overlooking Ago Bay, Amanemu is the place to stay if you’re
              looking to take a break from the hustle and bustle of city life.
            </p>
            <button class="button">Explore</button>
          </div>
        </div>
        <div class="card">
          <div class="image">
            <!-- You can add an image here using the <img> element -->
            <img src="~/assets/img/nabana.jpeg" alt="Card Image" />
          </div>
          <div class="content">
            <h3 class="cardTitle">Nabana no Sato</h3>
            <p class="description">
              At "Nabana-no-Sato", you can see various flowers and trees through
              the four seasons. The seasonal events which can be enjoyed from
              spring to winter are popular.
            </p>
            <a class="button" href="#">Explore</a>
          </div>
        </div>
      </section>
      <!-- .cards -->
    </div>
    <!-- .centered -->
  </main>
</template>

<style>
/* Style the card container */

.centered {
  margin: 60px;
}

.site-branding {
  margin: 0 30px 0 30px;
}

.site-title {
  font-size: 50px;
  padding-bottom: 10px;
}

.bestDest {
  padding-top: 40px;
  margin-bottom: -60px;
  font-size: 30px;
}
.destText {
  max-width: 1000px;
  color: #555;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  max-height: 600px;
  margin: auto;
  text-align: center;
  transition: 0.3s;
  margin-bottom: 40px;
}

/* Style the image container */
.image {
  width: 100%;
  height: 200px;
  background-color: #555;
  overflow: hidden;
  position: relative;
}

/* Style the image */
.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.3s;
}

/* Style the card content */
.content {
  padding: 10px;
}

/* Style the card title */
.cardTitle {
  color: rgb(0, 0, 0);
  font-size: 18px;
  padding: 6px;
  text-align: left;
}

/* Style the card description */
.description {
  color: black;
  font-size: 14px;
  padding: 6px;
  margin-bottom: 15px;
  text-align: left;
}

/* Style the card button */
.button {
  border: 1px solid rgb(0, 0, 0);
  padding: 10px 25px;
  text-decoration: none;
  font-size: 15px;
  margin: 20px 0 30px 0;
  display: inline-block;
  color: rgb(0, 0, 0);
  font-weight: 900;
  background-color: white;
}

/* Style the hover state of the card */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

/* Style the hover state of the image */
.image:hover img {
  transform: scale(1.1);
}

/* Style the hover state of the button */
.button:hover {
  background: #e6ecfe;
  color: black;
}

/* Flexbox stuff */

@media screen and (min-width: 40em) {
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .card {
    flex: 0 1 calc(50% - 1em);
  }
}

@media screen and (min-width: 60em) {
  .card {
    flex: 0 1 calc(25% - 1em);
    margin-top: 30px;
  }
}
</style>

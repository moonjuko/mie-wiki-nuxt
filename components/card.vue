<script>
export default {
  props: ["id", "img", "name", "description"],
};
</script>

<template>
  <div class="card">
    <div class="image">
      <!-- You can add an image here using the <img> element -->
      {{ img }}
    </div>
    <div class="content">
      <h3 class="cardTitle">{{ name }}</h3>
      <p class="description">{{ description }}</p>
      <button class="button">Explore</button>
    </div>
  </div>
</template>

<style>
/* Style the card container */

.centered {
  margin: 30px 0 0px 0;
  padding: 5px 50px;
}

.site-branding {
  margin: 0 30px 0 30px;
}

.site-title {
  font-size: 50px;
  padding-bottom: 10px;
}

.bestDest {
  margin-top: 40px;
  margin-bottom: -50px;
}
.destText {
  max-width: 1000px;
  color: #555;
}
.cards {
  margin: 0 20px 0 20px;
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
  margin: 10px 0 20px 0;
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
@media all and (max-width: 600px) {
  .site-title {
    font-size: 30px;
  }
  .bestDest {
    margin-top: 40px;
    margin-bottom: 0px;
  }
}
</style>

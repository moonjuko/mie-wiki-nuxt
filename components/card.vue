<template>
  <div class="card">
    <div class="image">
      <!-- You can add an image here using the <img> element -->
      <img src="~/assets/img/kumano.webp" alt="Card Image" />
    </div>
    <div class="content">
      <h3 class="cardTitle">Kumano Kodo</h3>
      <p class="description">
        Connecting sacred grounds the ancient trails of Kumano Kodo have been
        used for more than 1,000 years
      </p>
      <button class="button">Explore</button>
    </div>
  </div>
</template>

<style>
/* Style the card container */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  max-height: 600px;
  margin: auto;
  text-align: center;
  transition: 0.3s;
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
  border: none;
  outline: none;
  padding: 12px;
  margin-bottom: 16px;
  color: #3464ff;
  background-color: #e6ecfe;
  text-align: center;
  cursor: pointer;
  width: 80%;
  font-size: 18px;
  border-radius: 4px;
  transition: 0.3s;
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
  background-color: #dadff2;
}
</style>

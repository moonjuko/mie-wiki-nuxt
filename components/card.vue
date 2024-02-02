<script>
export default {
  props: ["id", "img", "name", "description"],
};
</script>

<template>
  <div class="card">
    <div class="image">
      <img :src="'/images/' + img" alt="Destination Image" />
    </div>
    <div class="content">
      <h3 class="cardTitle">{{ name }}</h3>
      <p class="description">{{ description }}</p>
      <a :href="'/destinations/' + id" class="button">Explore</a>
    </div>
  </div>
</template>

<style>
.centered {
  padding: 0 50px;
}

.bestDest {
  font-size: 25px;
  padding: 40px 0 20px 0;
}

.destText {
  font-size: 20px;
}

.site-title {
  font-size: 45px;
  margin-top: 40px;
}

.cards {
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 55px;
  margin: 0;
  width: 100%;
  justify-content: center;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 320px;
  height: fit-content;
  text-align: left;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
}
.image {
  width: 100%;
  height: 200px;
  background-color: #555;
  overflow: hidden;
  position: relative;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.3s;
}
.content {
  padding: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center; /* Center the text */
  height: 100%;
}
.cardTitle {
  color: rgb(0, 0, 0);
  font-size: 23px;
  text-align: left;
}

.description {
  color: black;
  font-size: 18px;
  margin-bottom: 15px;
  text-align: left;
}

.button {
  border: 1px solid rgb(0, 0, 0);
  padding: 10px 25px;
  text-decoration: none;
  font-size: 15px;
  margin-top: auto; /* Align button to the bottom */
  display: inline-block;
  color: rgb(0, 0, 0);
  font-weight: 900;
  background-color: white;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.image:hover img {
  transform: scale(1.1);
}

.button:hover {
  background: #e6ecfe;
  color: black;
}

/* Media queries for smaller screens */
@media all and (max-width: 1600px) {
  .centered {
    padding: 0 25px;
  }

  .destText {
    font-size: 15px;
  }
  .bestDest {
    font-size: 16px;
    padding: 20px 0 10px 0;
  }

  .site-title {
    font-size: 25px;
    margin-top: 30px;
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 0;
    width: 100%;
    justify-content: center;
  }
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 230px;
    max-height: fit-content;
    text-align: left;
    transition: 0.3s;
  }
  .image {
    width: 100%;
    height: 150px;
    background-color: #555;
    overflow: hidden;
    position: relative;
  }

  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.3s;
  }
  .cardTitle {
    color: rgb(0, 0, 0);
    font-size: 17px;
    padding: 10px;
    text-align: left;
  }

  .description {
    color: black;
    font-size: 14px;
    padding: 10px;
    margin-bottom: 15px;
    text-align: left;
  }

  .button {
    border: 1px solid rgb(0, 0, 0);
    padding: 5px 10px;
    text-decoration: none;
    font-size: 12px;
    display: inline-block;
    color: rgb(0, 0, 0);
    font-weight: 900;
    background-color: white;
  }
}
</style>

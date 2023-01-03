<script></script>

<template>
  <div class="wrapper">
    <div class="bg"></div>
    <div class="welcome-text">
      <h3>三重県</h3>
      <h1>Mie-Ken</h1>
      <p class="homeDesc">
        Immerse in the japanese culture and learn about what the locals values.
      </p>
      <a class="homeBtn" href="/dest">Discover</a>
    </div>
  </div>
</template>

<style>
@import url(https://fonts.googleapis.com/css?family=Dosis:200,300,400,500,600,700,800);
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap");

* {
  margin: 0;
  padding: 0;
}
body {
  font-family: "Dosis";
}

.homeDesc {
  color: rgb(255, 255, 255);
  text-shadow: rgb(0, 0, 0) 5px;
  font-weight: 300;
  font-size: 25px;
  text-align: center;
  margin-bottom: 40px;
  margin-top: 10px;
}

.bg {
  background: url(~/assets/img/home.webp);
  height: 730px;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center center;
}

.welcome-text {
  width: 100%;
  position: absolute;
  text-align: center;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.welcome-text h1 {
  text-align: center;
  color: rgb(255, 255, 255);
  text-transform: uppercase;
  font-size: 120px;
  font-family: "Dosis";
  font-weight: 900;
  text-shadow: rgb(69, 1, 1) 3px 0 10px;
}

.welcome-text h3 {
  text-align: center;
  color: rgb(255, 255, 255);
  text-transform: uppercase;
  font-size: 50px;
  font-weight: 100;
  font-family: "Dosis";
  text-shadow: rgb(0, 0, 0) 5px 0 10px;
}
.welcome-text a {
  border: 2px solid rgb(0, 0, 0);
  padding: 10px 25px;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 24px;
  margin-top: 20px;
  display: inline-block;
  color: rgb(0, 0, 0);
  font-weight: 500;
  background-color: white;
}
.welcome-text a:hover {
  background: #e6ecfe;
  color: black;
}

/*resposive*/

@media (max-width: 600px) {
  .wrapper {
    width: 100%;
  }
  .logo {
    float: none;
    width: 20%;
    text-align: center;
    margin: auto;
  }
  .nav-area {
    float: none;
    margin-top: 0;
  }
  .nav-area li a {
    padding: 5px;
    font-size: 11px;
  }
  .nav-area {
    text-align: center;
  }

  .welcome-text h1 {
    font-size: 40px;
  }

  .welcome-text h3 {
    font-size: 30px;
  }
}
</style>

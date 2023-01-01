<script></script>

<template>
  <div class="bg"></div>
  <div class="welcome-text">
    <h3>JAPAN</h3>
    <h1>Mie-Ken</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <a href="#">Discover</a>
  </div>
</template>

<style>
@import url(https://fonts.googleapis.com/css?family=Dosis:200,300,400,500,600,700,800);

* {
  margin: 0;
  padding: 0;
}
body {
  font-family: "Dosis";
}

p {
  color: rgb(0, 0, 0);
}

.bg {
  background: url(~/assets/img/homeBGG.webp);
  height: 100vh;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center center;
}

.welcome-text {
  width: 100%;
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.welcome-text h1 {
  text-align: center;
  color: rgb(0, 0, 0);
  text-transform: uppercase;
  font-size: 90px;
  font-family: "Dosis";
}

.welcome-text h3 {
  text-align: center;
  color: rgb(0, 0, 0);
  text-transform: uppercase;
  font-size: 40px;
  font-family: "Dosis";
}
.welcome-text a {
  border: 1px solid rgb(0, 0, 0);
  padding: 10px 25px;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
  margin-top: 20px;
  display: inline-block;
  color: rgb(0, 0, 0);
  font-weight: 900;
}
.welcome-text a:hover {
  background: #ffffff;
  color: rgb(0, 0, 0);
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

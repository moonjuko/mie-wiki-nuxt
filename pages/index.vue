<script></script>

<template>
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
.wrapper {
  width: 1170px;
  margin: auto;
}
header {
  background: url(1.jpg);
  height: 100vh;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center center;
  position: relative;
}
.nav-area {
  float: right;
  list-style: none;
  margin-top: 30px;
}
.nav-area li {
  display: inline-block;
}
.nav-area li a {
  color: black;
  text-decoration: none;
  padding: 5px 20px;
  font-family: "Dosis";
  font-size: 16px;
  text-transform: uppercase;
  border-radius: 50px;
}
.nav-area li a:hover {
  background: black;
  color: #fff;
}
.logo {
  float: left;
}
.logo img {
  width: 100%;
  padding: 15px 0;
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
  color: black;
  text-transform: uppercase;
  font-size: 90px;
  font-family: "Dosis";
}

.welcome-text h3 {
  text-align: center;
  color: black;
  text-transform: uppercase;
  font-size: 40px;
  font-family: "Dosis";
}
.welcome-text a {
  border: 1px solid black;
  padding: 10px 25px;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
  margin-top: 20px;
  display: inline-block;
  color: black;
  font-weight: 900;
}
.welcome-text a:hover {
  background: #565656;
  color: #fff;
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

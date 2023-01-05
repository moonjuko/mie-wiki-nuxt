<template>
  <div class="header">
    <div class="logo">MIE-KEN</div>
    <div class="menu">
      <NuxtLink class="link" to="/">
        <div class="title">Home</div>
        <div class="bar"></div>
      </NuxtLink>
      <NuxtLink class="link" to="/dest">
        <div class="title">Destinations</div>
        <div class="bar"></div>
      </NuxtLink>
      <NuxtLink class="link" to="/about">
        <div class="title">About</div>
        <div class="bar"></div>
      </NuxtLink>
    </div>
  </div>
</template>

<style>
@import url(https://fonts.googleapis.com/css?family=Dosis:200,300,400,500,600,700,800);
html,
body {
  font-family: "Dosis";
  font-weight: 300;
  color: black;
}

.header {
  width: 100%;
  border-bottom: 1px solid black;
  text-align: right;
  position: relative;
  display: flex;
  justify-content: space-around;
}

.logo {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 32px;
  font-weight: 300;
  padding: 25px;
  border-right: 1px solid black;
}

.link {
  display: inline-block;
  padding: 15px 0;
  margin: 15px 25px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 24px;
  color: black;
  flex: auto;
  text-align: center;
}

.link:hover {
  background-color: #e6ecfe;
  color: black;
  padding: 5px;
  transition: all 0.3s ease-in-out;
  border-radius: 4px;
}

.bar {
  width: 100%;
  display: inline-block;
  border-bottom: 5px solid black;
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;
  transition: all 300ms;
}

/* Responsive Nav Bar */
@media all and (max-width: 600px) {
  .header {
    flex-direction: column;
  }
  .link {
    text-align: center;
    font-size: 12px;
    margin: 20px;
  }
  .logo {
    text-align: center;
    font-size: 18px;
    padding: 30px 20px 32px 20px;
  }
}
</style>

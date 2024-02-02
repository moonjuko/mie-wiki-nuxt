<template>
  <header>
    <title>MIE-WIKI</title>
    <Navbar></Navbar>
    <slot />
  </header>
  <footer>
    <div class="footer">
      &copy;<span id="year"> </span
      ><span>2024 Moonjuko. All rights reserved.</span>
    </div>
  </footer>
</template>

<style>
:root {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
body {
  height: 100vh;
  overflow: hidden;
}
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.5rem;
  background: #2f3924;
  color: white;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
}
</style>

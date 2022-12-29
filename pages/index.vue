<script></script>

<template>
  <!-- Main Content -->
  <main>
    JAPAN
    <div class="flex-container">
      <!-- Content -->
      <section class="content">MIE-KEN</section>
      <!-- Desc -->
      <section class="desc">Desc</section>
      <!-- Sidebar -->
      <aside class="sidebar">Sidebar ...</aside>
    </div>
  </main>
</template>

<style>
@import url(https://fonts.googleapis.com/css?family=Dosis:200,300,400,500,600,700,800);

main,
section,
aside {
  margin: 0;
  padding: 20px;
}

.content {
  background: #129a22;
}

.desc {
  background: #ad6eff;
}

.sidebar {
  border: 1px solid #000000;
  background: #673ab7;
}

@media screen and (min-width: 640px) {
  .flex-container {
    display: flex;
  }
}
.content {
  flex: 1;
}

.desc {
  flex: 0 3;
}

.sidebar {
  flex: 0 1 300px;
}
</style>

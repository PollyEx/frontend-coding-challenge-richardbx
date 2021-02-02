<template>
  <div id="app">
    <div id="nav">
      <router-link to="/instructions">Instructions</router-link>
      <router-link to="/challenge-1">Challenge 1</router-link>
      <router-link to="/challenge-2">Challenge 2</router-link>
      <router-link to="/challenge-3">Challenge 3</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
#app {
  margin: auto;
  max-width: 762px;
  padding: 24px;
}

#nav {
  a {
    margin: 8px;
    color: #2491eb;
  }
}
</style>

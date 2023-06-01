<script setup>
import { RouterLink, RouterView } from 'vue-router'

const version = appVersion
</script>

<template>
  <header id="header">
  </header>

  <nav id="nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/vessels">Vessels</RouterLink>
    <RouterLink to="/weapons">Weapons</RouterLink>
    <RouterLink to="/cards">Cards</RouterLink>
  </nav>

  <RouterView id="main" />

  <footer id="footer">
    <p>The Steam and Iron Vessel Constructor (v{{version}}) is open source and maintained on <a href="https://github.com/dsusco/steam-and-iron-vessel-constructor" target="_blank">GitHub</a>.</p>

    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="ADMR9VQE2JRTE" />
      <button type="submit">Donate</button>
    </form>
  </footer>
</template>

<style lang="scss" scoped>
</style>

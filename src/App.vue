<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',




}
</script>
<style>
.background-container {
  background-image: url('./assets/card_checkout.png');
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  min-height: 100vh;
}

.text-center {
  color: #0282CA;
}


.font-weight-medium {
  font-size: 16px;
}
</style>
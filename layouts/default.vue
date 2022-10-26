<template>
  <v-app>
    <v-main>
      <AppNavbar />
      <v-container class="debug px-7" fluid>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppNavbar from '@/components/base/AppNavbar'

export default {
  name: 'DefaultLayout',
  components: {
    AppNavbar
  },
  data () {
    return {
    }
  }
}
</script>

<style>
.debug {
  border: 1px solid red;
}
</style>



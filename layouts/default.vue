<template>
  <v-app>
    <v-main>
      <AppNavbar />
      <div>
        <Nuxt />
      </div>
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
</style>



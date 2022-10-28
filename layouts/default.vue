<template>
  <v-app>
    <v-main>
      <AppNavbar />
      <div>
        <Nuxt />
      </div>
      <Footer/>
    </v-main>
  </v-app>
</template>

<script>
import AppNavbar from '@/components/base/AppNavbar'
import Footer from '@/components/base/Footer'

export default {
  name: 'DefaultLayout',
  components: {
    AppNavbar,
    Footer
  },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>



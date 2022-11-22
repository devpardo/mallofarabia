<template>
  <v-app>
    <v-main v-if="!isLoading">
      <Loading :loading="isLoading"/>
      <AppNavbar />
      <div>
        <Nuxt />
      </div>
      <Footer/>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AppNavbar from '@/components/base/AppNavbar'
import Footer from '@/components/base/Footer'
import Loading from '@/components/Loading'

export default {
  name: 'DefaultLayout',
  components: {
    AppNavbar,
    Footer,
    Loading
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters('settings', ['siteSettings', 'isLoading'])
  },
  mounted() {
    if(process.browser) {
      this.setSettings();
    }
  },
  methods: {
    ...mapActions('settings', ['setSettings', 'setLang']),
  }
}
</script>

<style>
</style>



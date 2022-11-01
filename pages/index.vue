<template>
      <div>
          <Jumbotron @scroll="test"/>
          <WhatsHappening ref="events" />
          <BannerCards />
          <Features />
          <Amenities />
          <Contact />
      </div>
</template>

<script>
import Jumbotron from '@/components/Jumbotron'
import WhatsHappening from '@/components/WhatsHappening'
import BannerCards from '@/components/BannerCards'
import Amenities from '@/components/Amenities'
import Contact from '@/components/Contact'
import Features from '@/components/Features'

export default {
  name: 'IndexPage',
  components: {
    Jumbotron,
    WhatsHappening,
    BannerCards,
    Amenities,
    Contact,
    Features
  },
  methods: {
    test() {

      this.$refs.events.$el.scrollIntoView({ behavior: "smooth" });
      
      console.log();
    }
  }
}
</script>

<template>
      <div>
          <Jumbotron />
          <WhatsHappening />
          <BannerCards />
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

export default {
  name: 'IndexPage',
  components: {
    Jumbotron,
    WhatsHappening,
    BannerCards,
    Amenities,
    Contact
  }
}
</script>

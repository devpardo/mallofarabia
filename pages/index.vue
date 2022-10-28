<template>
      <div>
          <Jumbotron />
          <WhatsHappening />
          <BannerCards />
          <Amenities />
      </div>
</template>

<script>
import Jumbotron from '@/components/Jumbotron'
import WhatsHappening from '@/components/WhatsHappening'
import BannerCards from '@/components/BannerCards'
import Amenities from '@/components/Amenities'
export default {
  name: 'IndexPage',
  components: {
    Jumbotron,
    WhatsHappening,
    BannerCards,
    Amenities
  }
}
</script>

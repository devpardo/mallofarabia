<template>
      <div>
          <Jumbotron />
          <WhatsHappening />
          <BannerCards />

      </div>
</template>

<script>
import Jumbotron from '@/components/Jumbotron'
import WhatsHappening from '@/components/WhatsHappening'
import BannerCards from '@/components/BannerCards'
export default {
  name: 'IndexPage',
  components: {
    Jumbotron,
    WhatsHappening,
    BannerCards
  }
}
</script>

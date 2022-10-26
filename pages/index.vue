<template>
      <div>
          <Jumbotron />
          <WhatsHappening />
      </div>
</template>

<script>
import Jumbotron from '@/components/Jumbotron'
import WhatsHappening from '@/components/WhatsHappening'
export default {
  name: 'IndexPage',
  components: {
    Jumbotron,
    WhatsHappening
  }
}
</script>

<template>
  <div>
    {{ movie }}
  </div>
</template>

<script>
export default {
    data() {
        return {
            movie: null
        }
    },
    mounted() {
        this.pull()
    },
    methods: {
        async pull() {
            let res = await this.$api.get(`/cinemas/${this.$route.params.id}`);
            this.movie = res.data.movie;
        }
    }
}
</script>

<style>

</style>
<template>
  <div>
    <v-row v-if="movie == null">
        <v-col>
            <v-container>
                <h3 class="text-center">Movie Details Not found</h3>
            </v-container>
        </v-col>
    </v-row>

    <v-row v-else>
        <v-col>{{ movie }}</v-col>
    </v-row>

    <v-row>
        <v-col>
            <v-container>
                <LatestMovies />
            </v-container>
        </v-col>
    </v-row>

  </div>
</template>

<script>
import LatestMovies from '@/components/LatestMovies'
export default {
    components: { LatestMovies },
    data() {
        return {
            movie: null,
            latest_movies: []
        }
    },
    mounted() {
        this.pull()
    },
    methods: {
        async pull() {
            try {
                let res = await this.$api.get(`/cinemas/${this.$route.params.id}`);
                this.movie = res.data.movie;
            } catch (error) {
                console.log(error)
            };
            
        }
    }
}
</script>

<style>

</style>
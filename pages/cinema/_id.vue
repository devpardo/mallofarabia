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
        <v-col>
            <div class="accent overflow-hidden" style="min-height: 600px; max-height: 600px">
                <v-img class="d-flex align-center justify-center" :src="movie.image_url" cover  height="600" gradient="to bottom, rgba(0, 35, 75, 1), rgba(0, 35, 75,.5)">
                    <div>
                        <v-container>
                            <v-row class="white--text">
                                <v-col cols="12" md="6">
                                    <h1 class="mb-3">{{ movie.title }}</h1>
                                    <p class="subtitle-1">{{ movie.content }}</p>
                                    <v-btn large color="secondary" @click="goPlay(movie.youtube_url)"><v-icon>mdi-play</v-icon>Play Trailer</v-btn>
                                </v-col>
                            </v-row>
                        </v-container>
                    </div>
                </v-img>
                
            </div>
        </v-col>
        <v-col cols="12">
            <v-container>
                <v-tabs>
                    <v-tab>Show times</v-tab>
                    <v-tab>About the movie</v-tab>

                    <v-tab-item>
                        <v-row class="mt-5">
                            <v-col>
                                <div v-if="movie.showtimes">
                                    <v-btn v-for="(time, index) in movie.showtimes" :key="index" 
                                        color="primary"
                                        large outlined class="elevation-0 mr-2 rounded-xl">
                                        {{  time }}
                                    </v-btn>
                                </div>
                            </v-col>
                        </v-row>
                    </v-tab-item>

                    <v-tab-item>
                        <v-row class="mt-5">
                            <v-col>
                                <div class="mb-10">
                                    <h3 class="mb-3">Summary</h3>
                                    <p>{{ movie.content }}</p>
                                     <v-btn v-for="(cat, index) in movie.category" :key="index" 
                                        color="primary"
                                        small class="elevation-0 mr-2 rounded-xl">
                                        {{  cat }}
                                    </v-btn>
                                </div>

                                <div class="mt-3">
                                    <h3>Actors</h3>
                                    <ul class="list-inline">
                                        <li  v-for="(actor, index) in movie.actors" :key="index">{{ actor }}</li>
                                    </ul>
                                </div>

                                <div class="mt-3">
                                    <h3>Writers</h3>
                                    <ul class="list-inline">
                                        <li  v-for="(writer, index) in movie.writers" :key="index">{{ writer }}</li>
                                    </ul>
                                </div>

                                 <div class="mt-3">
                                    <h3>Director</h3>
                                    <ul class="list-inline">
                                        <li>{{ movie.director }}</li>
                                    </ul>
                                </div>
                            </v-col>
                        </v-row>
                    </v-tab-item>
                </v-tabs>
            </v-container>
        </v-col>
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
        goPlay(param) {
            window.open(
                param,
                '_blank'
            );
        },
        async pull() {
            try {
                let head = {
                    headers: {
                        'x-locale': this.$i18n.locale
                    }
                }
                let res = await this.$api.get(`/cinemas/${this.$route.params.id}`, head);
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
<template>
    <div>
        <v-row>
            <v-col>
                <h2>You might also like..</h2>
                

                <v-slide-group
                    v-if="latest_movies.length"
                    class="pa-4"
                    show-arrows
                    center-active
                    v-model="selected"
                    @change="gotoMovie('latest_movies')"
                >
                    <v-slide-item v-for="(item, i) in latest_movies" :key="i" v-slot="{ active, toggle }" active-class="no-bg">
                        <v-card min-height="400" min-width="230" max-width="230" class="ma-2 elevation-0" @click="toggle" color="transparent">
                            <v-img
                                :src="item.image_url"
                                height="350"
                            ></v-img>

                            <v-card-title>
                                <h4>{{ item.name }}</h4>
                            </v-card-title>

                            <v-card-text class="d-flex align-start justify-space-between">
                                <div>
                                    <ul class="list-unstyled">
                                        <li v-for="(cat, i) in item.category" :key="i">
                                            {{cat}}
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <v-btn
                                        color="warning"
                                        depressed
                                        outlined
                                        small
                                    ><v-icon class="mr-3" small>mdi-star</v-icon>{{ item.rating }}</v-btn>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-slide-item>
                        
                </v-slide-group>

                <h3 v-else class="text-center">No available</h3>
            </v-col>
        </v-row>
        <Loading :loading="loading"/>
    </div>

    
</template>

<script>
import Loading from '@/components/Loading'
export default {
    components: {
        Loading
    },
    data() {
        return {
            latest_movies: [],
            selected: null,
            loading: false
        }
    },
    mounted() {
        this.pull();
    },
    methods: {
        gotoMovie(whichArray) {
            switch(whichArray) {
                case 'latest_movies':
                    this.movieInfo = this.latest_movies[this.selected];
                    this.$router.push(`/cinema/${this.movieInfo.id}`)
                    break;
            }
        },
        async pull() {
            try {
                this.loading = true;
                let res =  await this.$api.get('/cinemas');
                this.contents = {...res.data}

                this.latest_movies = this.contents?.latest_movies;

                this.latest_movies = this.latest_movies.filter(item => item.id != this.$route.params.id)


                this.loading = false;
            } catch (error) {
                console.log(error);
                this.loading = false;
            }
        }
    }
}
</script>

<style>

</style>
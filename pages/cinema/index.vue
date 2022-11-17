<template>
    <div>
        <PageHeader :pageBg="pageBg" :title="contents.page_label" :subtitle="contents.page_description"/>

        <v-row>
            <v-col>
                <v-container>
                    <v-row>
                        <v-col>
                            <h2>Latest Movies</h2>
                            <v-slide-group
                                v-if="latest_movies.length"
                                class="pa-4"
                                show-arrows
                                center-active
                                v-model="selected"
                                @change="test('latest_movies')"
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

                            <h3 v-else>No available</h3>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <h2>English Movies</h2>
                            
                            <v-slide-group
                                v-if="latest_movies.length"
                                class="pa-4"
                                show-arrows
                                center-active
                                v-model="selected"
                                @change="test('latest_movies')"
                            >
                                <v-slide-item v-for="(item, i) in english_movies" :key="i" v-slot="{ active, toggle }" active-class="no-bg">
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

                            <h3 v-else>No available</h3>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <h2>Arabic Movies</h2>
                            

                            <v-slide-group
                                v-if="latest_movies.length"
                                class="pa-4"
                                show-arrows
                                center-active
                                v-model="selected"
                                @change="test('latest_movies')"
                            >
                                <v-slide-item v-for="(item, i) in arabic_movies" :key="i" v-slot="{ active, toggle }" active-class="no-bg">
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

                            <h3 v-else>No available</h3>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>

        <v-dialog
            persistent
            v-if="selected != null"
            v-model="dialog"
            min-width="300"
            max-width="1000"
            >

            <v-card>
                {{ movieInfo }}

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                        color="primary"
                        text
                        @click="selected = null"
                    >
                        Close
                    </v-btn>
                </v-card-actions>
            </v-card>

            
        </v-dialog>
        

        <Loading :loading="loading"/>
    </div>
</template>

<script>

import PageHeader from '@/components/PageHeader'
import Loading from '@/components/Loading'

export default {
    components: {
        Loading,
        PageHeader
    },
    data() {
        return {
            whichArray: null,
            movieInfo: null,
            dialog: false,
            loading: false,
            selected: null,
            latest_movies: [],
            arabic_movies: [],
            english_movies: [],
            contents: {
                page_description:'',
                page_image: '',
                page_keywords:'',
                page_label: '',
                data: {}
            }
        }
    },
    computed: {
        pageBg() {
            return { 'background-image': `url(${this.contents?.page_image})` }
        },
    },
    methods: {
        test(whichArray) {
           

            switch(whichArray) {
                case 'latest_movies':
                    this.movieInfo = this.latest_movies[this.selected];
                    console.log(this.movieInfo);
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
                this.english_movies = this.contents?.english_movies;
                this.arabic_movies = this.contents?.arabic_movies;


                this.loading = false;
            } catch (error) {
                console.log(error);
                this.loading = false;
            }
        }
    },
    mounted() {
        this.pull();
    },
    watch: {
        selected(newVal, oldVal) {
            // if(newVal != null) {
            //     this.dialog = true;
            // }
        }
    }
}
</script>

<style lang="scss" scoped>
.no-bg {
    background-color: $primary !important;
    color: #fff;
}
</style>
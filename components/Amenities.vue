<template>
    <div class="amenities mb-10">
       <v-carousel class="amenities-carousel" 
            v-model="model" height="100%"
            hide-delimiter-background
            hide-delimiters
            :show-arrows="false"
            >
            <v-carousel-item
                v-for="(item, i) in items"
                :key="i"
                height="100%"
                reverse-transition="fade-transition"
                transition="fade-transition"
                >
                <v-sheet
                    width="100%"
                    height="100%"
                    tile
                >
                    <div class="fill-height ma-0 pa-5">
                        <v-container class="slide-container grey lighten-3 fill-height elevation-8">
                            <v-row no-gutters class="align-center">
                                <v-col sm="12" md="5">
                                    
                                    <div class="d-flex flex-column">
                                        <div class="mb-5 mt-10">
                                            <h1 class="accent--text">{{ item.title }}</h1>
                                        </div>


                                        <div class="mb-10" style="width: 80%">
                                            <p class="accent--text">{{ item.content }}</p>

                                            <a href="#" class="primary--text">More</a>
                                        </div>


                                        <div class="d-flex align-start justify-start">
                                            <v-btn elevation="6" :disabled="model == 0" height="50" width="50" small color="primary rounded-lg pa-2" class="mr-3" @click="prev(model)">
                                                <v-icon x-large>mdi-chevron-left</v-icon>
                                            </v-btn>

                                            <v-btn elevation="6" :disabled="model == items.length - 1" height="50" width="50" small color="primary rounded-lg pa-2" @click="next(model)">
                                                <v-icon x-large>mdi-chevron-right</v-icon>
                                            </v-btn>
                                        </div>
                                    </div>

                                </v-col>

                                <v-col sm="12" md="7">

                                    <div class="full-height d-flex overflow-hidden align-center justify-center">
                                        <v-card height="450" width="350" class="rounded-xl" style="z-index: 3" elevation="6">
                                            <v-img height="100%" :src="items[model].img" cover/>
                                        </v-card>

                                        <v-card height="400" width="300" class="rounded-xl" style="z-index: 2; margin-left: -200px">
                                            <v-img height="100%" :src="items[nextModel].img" cover/>
                                        </v-card>

                                        <v-card height="350" width="250" class="rounded-xl" style="z-index: 1; margin-left: -150px">
                                            <v-img height="100%" :src="items[prevModel].img" cover/>
                                        </v-card>
                                    </div>

                                </v-col>
                            </v-row>
                        </v-container>
                    </div>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
    </div>
</template>

<script>
export default {
    name: 'Cinema',
    data() {
        return {
            model: 0,
            nextModel: 1,
            prevModel: 2,
            items: [
                { 
                    title: 'Cinema',
                    content: 'Galaxy cinema at MOA offers the biggedst blockbusters using the best and the latest technology and comfort.',
                    img: 'https://i.pinimg.com/originals/2b/de/de/2bdede0647e3cdf75b44ea33723201d9.jpg'
                },
                { 
                    title: 'Train',
                    content: 'Galaxy cinema at MOA offers the biggedst blockbusters using the best and the latest technology and comfort.',
                    img: 'https://wallpaperaccess.com/full/1154341.jpg'
                },
                { 
                    title: 'Events and Offers',
                    content: 'Galaxy cinema at MOA offers the biggedst blockbusters using the best and the latest technology and comfort.',
                    img: 'https://images6.alphacoders.com/462/thumb-1920-462371.jpg'
                }
            ],
            colors: [
                'primary',
                'secondary',
                'yellow darken-2',
                'red',
                'orange',
            ],
        }
    },
    mounted() {
        
    },
    computed: {
        
    },
    methods: {
        next(param) {

            if(this.nextModel == this.items.length - 1) {
                this.nextModel = 0;
            } else {
                this.nextModel = this.nextModel + 1;
            }

            this.model = param + 1;
            this.prevModel = param;
        },
        prev(param) {

            if(param == 1) {
                this.prevModel = this.items.length - 1;
            } else {
                this.prevModel = this.prevModel - 1;
            }

            this.model = param - 1
            this.nextModel = param;
        },
        reset() {
            this.model = 0;
            this.nextModel = 1;
            this.prevModel = 2;
        }
    }
}
</script>

<style lang="scss" scoped>
.amenities {
    height: 600px;

    .amenities-carousel {
        width: 100%
    }

    .slide-container {
        padding: 5%;
        border-radius: 50px;
        background-image: url('../assets/images/ameneties.png'), linear-gradient(0deg, rgb(255, 221, 0) 0%, rgb(255, 255, 255) 35%, rgba(0,212,255,0) 100%);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
    }
}

.v-carousel .v-window-item {
  position: absolute;
  top: 0;
  width: 100%;
}
</style>
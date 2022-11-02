<template>
    <div class="mb-10">
        <v-container>
           <div class="slide-container">
            <v-carousel class="amenities-carousel" 
                v-model="model" :height="vb.smAndDown ? '800' : '450'" min-height="500"
                hide-delimiter-background
                hide-delimiters
                :show-arrows="false"
                >
                <v-carousel-item
                    v-for="(item, i) in items"
                    :key="i"
                    transition="fade-transition"
                    reverse-transition="fade-transition"
                    >
                    <div class="ma-0">
                        <v-container>
                            <v-row no-gutters class="align-center">
                                <v-col cols="12" sm="12" md="5" class="d-block d-md-none" style="position: relative">
                                    <v-card height="100" width="300" class="rounded-xl mx-auto next-img" elevation="6">
                                        <v-img height="100%" :src="items[nextModel].img" cover/>
                                    </v-card>

                                    <v-card height="450" width="350" class="rounded-xl mx-auto mt-10" elevation="6">
                                        <v-img height="100%" :src="items[model].img" cover/>
                                    </v-card>
                                </v-col>
                                
                                <v-col cols="12" sm="12" md="5">
                                    
                                    <div class="d-flex flex-column">
                                        <div dir="auto" class="mb-5 mt-10">
                                            <h1 class="accent--text">{{ $t(item.title_translate) }}</h1>
                                        </div>


                                        <div class="mb-10" style="width: 80%">
                                            <p class="accent--text">{{ item.content }}</p>

                                            <a href="#" class="primary--text">More</a>
                                        </div>


                                        <div class="d-flex align-start" :class="vb.mdAndDown ? 'justify-center' : 'justify-start'">
                                            <v-btn elevation="6" :disabled="model == 0" height="50" width="50" small color="primary rounded-lg pa-2" class="mr-3" @click="prev(model)">
                                                <v-icon x-large>mdi-chevron-left</v-icon>
                                            </v-btn>

                                            <v-btn elevation="6" :disabled="model == items.length - 1" height="50" width="50" small color="primary rounded-lg pa-2" @click="next(model)">
                                                <v-icon x-large>mdi-chevron-right</v-icon>
                                            </v-btn>
                                        </div>
                                    </div>

                                </v-col>

                                <v-col sm="12" md="7" class="d-none d-md-block">

                                    <div class="full-height d-flex overflow-hidden align-center justify-center">
                                        <v-card class="animate__animated animate__bounceInRight rounded-xl" height="450" width="350" style="z-index: 3" elevation="6">
                                            <v-img height="100%" :src="items[model].img" cover/>
                                        </v-card>

                                        <v-card class="animate__animated animate__bounceInLeft rounded-xl" height="400" width="300" style="z-index: 2; margin-left: -200px">
                                            <v-img height="100%" :src="items[nextModel].img" cover/>
                                        </v-card>

                                        <v-card class="animate__animated animate__bounceInLeft  rounded-xl" height="350" width="250" style="z-index: 1; margin-left: -150px">
                                            <v-img height="100%" :src="items[prevModel].img" cover/>
                                        </v-card>
                                    </div>

                                </v-col>
                            </v-row>
                        </v-container>
                    </div>
                </v-carousel-item>
            </v-carousel>
           </div>
        </v-container>
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
                    title_translate: 'cinema',
                    content: 'Galaxy cinema at MOA offers the biggedst blockbusters using the best and the latest technology and comfort.',
                    img: 'https://i.pinimg.com/originals/2b/de/de/2bdede0647e3cdf75b44ea33723201d9.jpg'
                },
                { 
                    title: 'Train',
                    title_translate: 'train',
                    content: 'Galaxy cinema at MOA offers the biggedst blockbusters using the best and the latest technology and comfort.',
                    img: 'https://wallpaperaccess.com/full/1154341.jpg'
                },
                { 
                    title: 'Events and Offers',
                    title_translate: 'events',
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
        vb() {
            return this.$vuetify.breakpoint
        }
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

.slide-container {
    padding: 5%;
    border-radius: 50px;
    background-image: url('../assets/images/ameneties.png'), linear-gradient(0deg, rgb(255, 221, 0) 0%, rgb(255, 255, 255) 35%, rgba(0,212,255,0) 100%);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    position: relative;

    .amenities-carousel {

        // .v-window__container {
        //     min-height: 500px !important;
        //     background-color: red;
        //     display: block;
        // }

        // .v-window-item {
        //     background-color: red;
        //     min-height: 500px;
        //     position: absolute;
        //     top: 0;
        //     width: 100%;
        // }
    }
}


.v-carousel .v-window-item {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
}

.next-img {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%);
}

// .v-carousel .v-window-item {
//   position: absolute;
//   top: 0;
//   width: 100%;
// }



</style>
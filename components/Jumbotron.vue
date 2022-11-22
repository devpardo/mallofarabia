<template>
    <v-container fluid class="jumbotron pa-0 mb-10">
        <v-row no-gutters class="ma-0">
            <v-col>
                <v-carousel v-model="model" height="600"
                    hide-delimiter-background hide-delimiters cycle :show-arrows="false">
                    <v-carousel-item
                        v-for="(slide, i) in slides"
                        :key="i"
                        :src="slide.image"
                        >

                        
                        <div :class="vb.smAndDown ? 'gradient' : 'main-slider-sheet'" class="mb-3 d-flex align-center justify-start" style="height: 100%">
                            <div class="slide-content animate__animated animate__backInDown">
                                <h3 class="text-h3 mb-7" :class="vb.smAndDown ? 'white--text' : ''">{{ slide.title }}</h3>
                                <p :class="vb.smAndDown ? 'white--text' : ''">{{ slide.description }}</p>
                            </div>
                        </div>
                        
                    </v-carousel-item>
                </v-carousel>


                <div class="controls-jumbotron">
                    <div class="d-flex align-center justify-center mb-10">
                
                        <span @click="scroll" class="slide-down d-flex flex-column flex-row align-center justify-center">

                            <span class="white--text caption">Scroll</span>
                            
                            <v-icon 
                                class="mb-2 white--text animate__animated animate__bounce animate__infinite animate__delay-2s">
                                $vuetify.icons.values.arrow_down
                            </v-icon>
                            
                        </span>
                        
                    </div>

                    <div class="d-flex align-center justify-center">
                        <v-btn v-for="(slide, i) in slides" :key="i" 
                            depressed
                            class="rounded-xl mr-3 d-inline-block" 
                            :class="i == model ? 'accent' : 'white'"
                            style="width: 50px; height: 5px; cursor: poiner" @click="goToSlide(i)">
                        </v-btn>
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Jumbotron',
    data() {
        return { 
            model: 0,
            slides: [],
            colors: [
                'primary',
                'secondary',
                'yellow darken-2',
                'red',
                'orange',
            ],
        }
    },
    computed: {
        vb() {
            return this.$vuetify.breakpoint
        }
    },
    mounted() {
       this.pull()
    },
    methods: {
        async pull() {
            console.log(this.$i18n.locale);
            console.log(localStorage.getItem('lang'));
            let head = {
                headers: {
                    'x-locale': this.$i18n.locale
                }
            }
            this.$api.get('/sliders', head).then(res => {
                this.slides = res.data.data;
            });
        },
        scroll() {
            this.$emit('scroll');
        },
        goToSlide(i) {
            this.model = i
        }

    }
}
</script>

<style lang="scss" scoped>
.jumbotron {
    height: 600px;
    position: relative;
    
    .controls-jumbotron {
        position: absolute;
        bottom: 10%;
        width: 100%;
    }

    .main-slider-sheet {
        background-image: url('../assets/images/slider-vector.png');
        background-repeat: no-repeat;
        background-position: left;
        background-size: cover;
    }

    .slide-content {
        margin-left: 10%;

        p {
            width: 50%;
        }
    }

    .slide-down {
        &:hover {
            cursor: pointer;
        }
    }
}

.gradient {
    background: linear-gradient(rgba(0, 72, 106, 0.5), rgb(0, 51, 74));
}
</style>

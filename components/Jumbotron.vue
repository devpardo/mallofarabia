<template>
    <v-container fluid class="jumbotron pa-0">
        <v-row no-gutters class="ma-0">
            <v-col>
                <v-carousel v-model="model" height="600"
                    hide-delimiter-background hide-delimiters>
                    <v-carousel-item
                    v-for="(color, i) in colors"
                    :key="color"
                    >
                    <v-sheet
                        :color="color"
                        height="100%"
                        tile
                    >
                        <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                        >
                        <div class="text-h2">
                            Slide {{ i + 1 }}
                        </div>
                        </v-row>
                    </v-sheet>
                    </v-carousel-item>
                </v-carousel>


                <div class="controls-jumbotron">
                    <div class="d-flex align-center justify-center">
                
                        <span @click="test" class="d-flex flex-column flex-row align-center justify-center">

                            <span class="white--text caption">Scroll</span>
                            
                            <v-icon 
                                class="mb-2 white--text animate__animated animate__bounce animate__infinite animate__delay-2s">
                                $vuetify.icons.values.arrow_down
                            </v-icon>
                            
                        </span>
                        
                    </div>

                    <div class="d-flex align-center justify-center">
                        <v-btn v-for="(slide, i) in colors" :key="i" 
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
            colors: [
                'primary',
                'secondary',
                'yellow darken-2',
                'red',
                'orange',
            ],
        }
    },
    methods: {
        test() {
            console.log('fads');
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
    background-color: #00b2e5;
    margin-bottom: 3em;
    background-image: url('../assets/images/homebanner.png');
    background-repeat: no-repeat;
    background-position: right;
    position: relative;
    
    .controls-jumbotron {
        position: absolute;
        bottom: 1em;
        width: 100%;
    }
}
</style>

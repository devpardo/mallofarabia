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

                        
                        <div class="main-slider-sheet d-flex align-center justify-start" style="height: 100%">
                            <div class="slide-content animate__animated animate__backInDown">
                                <h3 class="text-h3 mb-7">{{ slide.title }}</h3>
                                <p>{{ slide.description }}</p>
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
            slides: [
                { title: 'Mall of Arabia', description: 'The first unconventional mall of its kind, located in 6th of October, Mall of Arabia rolls out on a vast area of 621,401 sqm (147.95 acres) Introducing a distinctive retail world,', image: 'https://marakez.net/Content/Admin/Uploads/Project/7/7b734500-c27a-478a-9f5c-bf8e91c3ffe3.jpg' },
                { title: 'Mall of Arabia', description: 'The first unconventional mall of its kind, located in 6th of October, Mall of Arabia rolls out on a vast area of 621,401 sqm (147.95 acres) Introducing a distinctive retail world,', image: 'https://marakez.net/Content/Admin/Uploads/Project/7/7b734500-c27a-478a-9f5c-bf8e91c3ffe3.jpg' },
                { title: 'Mall of Arabia', description: 'The first unconventional mall of its kind, located in 6th of October, Mall of Arabia rolls out on a vast area of 621,401 sqm (147.95 acres) Introducing a distinctive retail world,', image: 'https://marakez.net/Content/Admin/Uploads/Project/7/7b734500-c27a-478a-9f5c-bf8e91c3ffe3.jpg' },
                { title: 'Mall of Arabia', description: 'The first unconventional mall of its kind, located in 6th of October, Mall of Arabia rolls out on a vast area of 621,401 sqm (147.95 acres) Introducing a distinctive retail world,', image: 'https://marakez.net/Content/Admin/Uploads/Project/7/7b734500-c27a-478a-9f5c-bf8e91c3ffe3.jpg' },
                { title: 'Mall of Arabia', description: 'The first unconventional mall of its kind, located in 6th of October, Mall of Arabia rolls out on a vast area of 621,401 sqm (147.95 acres) Introducing a distinctive retail world,', image: 'https://marakez.net/Content/Admin/Uploads/Project/7/7b734500-c27a-478a-9f5c-bf8e91c3ffe3.jpg' }
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
    methods: {
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
        bottom: 1em;
        width: 100%;
    }

    .main-slider-sheet {
        margin-bottom: 3em;
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
</style>

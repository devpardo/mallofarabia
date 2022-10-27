<template>
    <v-container class="mb-10">
        <h2>Whats Happening</h2>

        <div class="mt-10 text-center">
            <h2>MOA Summer Sale</h2>
            <p class="mt-3">Your summer just got a lot more exciting at MOA!</p>
        </div>

        <v-row no-gutters>
            <v-col cols="12" md="6" offset-md="3">
                <v-carousel
                    v-model="carousel"
                    ref="carousel"
                    @change="test"
                    cycle
                    show-arrows-on-hover
                    hide-delimiter-background
                    hide-delimiters
                    height="400"
                    class="elevation-10 rounded-xl white mb-5"
                >
                    <v-carousel-item
                        v-for="(slide, i) in slides"
                        :key="i"
                    >
                        <div class="white" style="height: 100%">
                            <v-img :src="require('../assets/images/homepage.png')" height="100%"/>
                        </div>
                    </v-carousel-item>
                </v-carousel>

                <div class="d-flex align-center justify-center">
                    <v-btn v-for="(slide, i) in slides" :key="i" 
                        depressed
                        class="rounded-xl mr-3 d-inline-block" 
                        :class="i == carousel ? 'primary' : 'grey'"
                        style="width: 50px; height: 5px; cursor: poiner" @click="changeSlide(i)">
                    </v-btn>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'WhatsHappening',
    data() {
        return {
            carousel: 0,
            colors: [
                'indigo',
                'warning',
                'pink darken-2',
                'red lighten-1',
                'deep-purple accent-4',
            ],
            slides: [
                'First',
                'Second',
                'Third',
                'Fourth',
                'Fifth',
            ],

        }
    },
    methods: {
        changeSlide(i) {
            this.carousel = i
        },
        test(e) {
            console.log(e);
        }
    }
}
</script>

<style>

</style>
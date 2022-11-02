<template>
    <v-container class="mb-10" ref="whatshappening">
        <h1 dir="auto"> {{ $t('title_event') }} </h1>

        <div class="mt-10 text-center">
            <h1>MOA Summer Sale</h1>
            <p class="mt-3">Your summer just got a lot more exciting at MOA!</p>
        </div>

        <v-row>
            <v-col cols="12" md="6" offset-md="3">
                <v-carousel
                    v-model="carousel"
                    ref="carousel"
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
                        style="width: 50px; height: 5px; cursor: poiner" @click="goToSlide(i)">
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
    mounted() {
        this.getItems();
    },
    methods: {
        async getItems() {
            await this.$api.get('/mall_events').then((res) => {
                console.log(res);
            })
        },
        goToSlide(i) {
            this.carousel = i
        }
    }
}
</script>

<style>

</style>
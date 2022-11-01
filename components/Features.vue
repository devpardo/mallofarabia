<template>
  <div class="mb-10 mt-10">
    <v-container>
        <v-row class="mb-10 mt-10">
            <v-col cols="12" md="3" class="d-flex align-start justify-start">
                <div>
                    <h2 dir="auto" class="mb-10">{{ $t('shop') }}</h2>
                    <p dir="auto">The ultimate shopping destination.</p>
                    <a href="#" class="more-text pa-0 px-1 text-capitalize font-weight-bold">
                        More <v-icon class="ml-2">$vuetify.icons.values.moa_arrow</v-icon>
                    </a>
                </div>
            </v-col>
            <v-col cols="12" md="9">
                <v-row no-gutters>
                    <FeatureCard v-for="(item, key) in items['shop']" :key="key" :title="item.title" :img="item.image" />
                </v-row>
            </v-col>
        </v-row>

        <v-row class="mb-10 mt-10">
            <v-col cols="12" md="9">
                <v-row no-gutters>
                    <FeatureCard v-for="(item, key) in items['dine']" :key="key" :title="item.title" :img="item.image" />
                </v-row>
            </v-col>
            <v-col cols="12" md="3" class="d-flex align-start justify-start" :order="vb.smAndDown ? 'first': 'last'">
                <div>
                    <h2 dir="auto" class="mb-10">{{ $t('dine') }}</h2>
                    <p dir="auto"> Discover and exciting seletion of dining options. Dine in style with more than 40 restaurants and cafes</p>
                    <a href="#" class="more-text pa-0 px-1 text-capitalize font-weight-bold">
                        More <v-icon class="ml-2">$vuetify.icons.values.moa_arrow</v-icon>
                    </a>
                </div>
            </v-col>
        </v-row>

         <v-row class="mb-10 mt-10">
            <v-col cols="12" md="3" class="d-flex align-start justify-start">
                <div>
                    <h2 dir="auto" class="mb-10">{{ $t('entertain') }}</h2>
                    <p dir="auto">Elevate your entertainment with MOA we've got so many ways to make everyone happy, both outdoors and indoors.</p>
                    <a href="#" class="more-text pa-0 px-1 text-capitalize font-weight-bold">
                        More <v-icon class="ml-2 white--text">$vuetify.icons.values.moa_arrow</v-icon>
                    </a>
                </div>
            </v-col>
            <v-col cols="12" md="9">
                <v-row no-gutters>
                    <FeatureCard v-for="(item, key) in items['entertainment']" :key="key" :title="item.title" :img="item.image" />
                </v-row>
            </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script>
import FeatureCard from '@/components/FeatureCard'

export default {
    name: 'Features',
    components: {
        FeatureCard
    },
    data() {
        return {
            items: {
                shop: [
                    { title: 'Accessories', image: 'https://wp.missmalini.com/wp-content/uploads/2019/09/BeFunky-collage-27-4.jpg' },
                    { title: 'Accessories', image: 'https://wp.missmalini.com/wp-content/uploads/2019/09/BeFunky-collage-27-4.jpg' },
                    { title: 'Accessories', image: 'https://wp.missmalini.com/wp-content/uploads/2019/09/BeFunky-collage-27-4.jpg' },
                    { title: 'Accessories', image: 'https://wp.missmalini.com/wp-content/uploads/2019/09/BeFunky-collage-27-4.jpg' }
                ],
                dine: [
                    { title: 'Food', image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg' },
                    { title: 'Food', image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg' },
                    { title: 'Food', image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg' },
                    { title: 'Food', image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg' }
                ],
                entertainment: [
                    { title: 'Show', image: 'https://media.wired.co.uk/photos/606d9ea06a2b7484dab92d37/master/w_1600,c_limit/wired-movie-industry.jpg' },
                    { title: 'Show', image: 'https://media.wired.co.uk/photos/606d9ea06a2b7484dab92d37/master/w_1600,c_limit/wired-movie-industry.jpg' },
                    { title: 'Show', image: 'https://media.wired.co.uk/photos/606d9ea06a2b7484dab92d37/master/w_1600,c_limit/wired-movie-industry.jpg' },
                    { title: 'Show', image: 'https://media.wired.co.uk/photos/606d9ea06a2b7484dab92d37/master/w_1600,c_limit/wired-movie-industry.jpg' }
                ]
            }
        }
    },
    computed: {
        vb() {
            return this.$vuetify.breakpoint
        },
        
    },
}
</script>

<style lang="scss" scoped>
.more-text {
    text-decoration: none;
    color: $primary
}
</style>
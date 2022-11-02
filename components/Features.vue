<template>
  <div class="mb-10 mt-10">
    <v-container>

        <v-row class="mb-10 mt-10" v-for="(section, index) in sections" :key="index">
            <v-col cols="12" md="3" class="d-flex align-start justify-start" :order="vb.smAndDown || index % 2 == 0 ? 'first': 'last'">
                <div>
                    <h2 dir="auto" class="mb-10">{{ $t(section.name.toLowerCase()) }}</h2>
                    <p dir="auto">{{ section.description }}</p>
                    <a href="#" class="more-text pa-0 px-1 text-capitalize font-weight-bold">
                        More <v-icon class="ml-2">$vuetify.icons.values.moa_arrow</v-icon>
                    </a>
                </div>
            </v-col>
            <v-col cols="12" md="9">
                <v-slide-group v-if="vb.smAndDown" :show-arrows="vb.smAndDown">
                    <FeatureCard v-for="(cat, key) in section.categories" :key="key" :title="cat.name" :img="cat.image" />
                </v-slide-group>

                <div class="d-flex flex-wrap" v-else>
                     <FeatureCard class="mb-2" v-for="(cat, key) in section.categories" :key="key" :title="cat.name" :img="cat.image" />
                </div>
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
            sections: [],
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
        }
    },
    mounted() {
        this.pull();
    },
    methods: {
        async pull() {
            await this.$api.get('/tenants_sections').then(res => {
                this.sections = res.data.data;
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.more-text {
    text-decoration: none;
    color: $primary
}
</style>
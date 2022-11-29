<template>
  <div class="mb-10 mt-10">
    <v-container>

        <v-row class="mb-10 mt-10" v-for="(section, index) in sections" :key="index">
            <v-col cols="12" md="3" class="d-flex align-start justify-start" :order="vb.smAndDown || index % 2 == 0 ? 'first': 'last'">
                <div>
                    <h2  class="mb-10">{{ $t(section.name.toLowerCase()) }}</h2>
                    <p >{{ section.description }}</p>
                    <a href="#" class="more-text pa-0 px-1 text-capitalize font-weight-bold">
                        More <v-icon class="ml-2">$vuetify.icons.values.moa_arrow</v-icon>
                    </a>
                </div>
            </v-col>
            <v-col cols="12" md="9">
                <v-slide-group v-if="section.categories.length > 4" :show-arrows="vb.smAndDown">
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
            let head = {
                headers: {
                    'x-locale': this.$i18n.locale
                }
            }
            await this.$api.get('/tenants_sections', head).then(res => {
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
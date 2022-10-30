<template>
  <div class="mb-10 mt-10">
    <v-container>
        <v-row class="mb-10 mt-10">
            <v-col cols="12" md="3" class="d-flex align-start justify-start">
                <div>
                    <h2 class="mb-10">Shop</h2>
                    <p>The ultimate shopping destination. fadsfasdfasdfasdf</p>
                </div>
            </v-col>
            <v-col cols="12" md="9">
                <v-row no-gutters>
                    <FeatureCard />
                    <FeatureCard />
                    <FeatureCard />
                    <FeatureCard />
                </v-row>
            </v-col>
        </v-row>

        <v-row class="mb-10 mt-10">
            <v-col cols="12" md="9">
                <v-row no-gutters>
                    <FeatureCard />
                    <FeatureCard />
                    <FeatureCard />
                    <FeatureCard />
                </v-row>
            </v-col>
            <v-col cols="12" md="3" class="d-flex align-start justify-start" :order="vb.smAndDown ? 'first': 'last'">
                <div>
                    <h2 class="mb-10">Dine</h2>
                    <p>Discover and exciting seletion of dining options. Dine in style with more than 40 restaurants and cafes</p>
                </div>
            </v-col>
        </v-row>

         <v-row class="mb-10 mt-10">
            <v-col cols="12" md="3" class="d-flex align-start justify-start">
                <div>
                    <h2 class="mb-10">Entertain</h2>
                    <p>Elevate your entertainment with MOA we've got so many ways to make everyone happy, both outdoors and indoors.</p>
                </div>
            </v-col>
            <v-col cols="12" md="9">
                <v-row no-gutters>
                    <FeatureCard />
                    <FeatureCard />
                    <FeatureCard />
                    <FeatureCard />
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
    computed: {
        vb() {
            return this.$vuetify.breakpoint
        }
    },
}
</script>

<style lang="scss" scoped>

</style>
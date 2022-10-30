<template>
    <v-col cols="6" sm="3" md="4" lg="3" class="d-flex justify-center align-center mb-5">
        <v-hover :disabled="vb.smAndDown" v-slot="{ hover }">
            <v-card :class="{ 'on-hover': hover && !vb.smAndDown }" class="feature-card d-flex justify-center align-center rounded-xl" height="200" width="200">
                <v-img
                    :src="img"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="200px"
                >
                <v-card-title class="caption font-weight-bold">{{ title }}</v-card-title>
                </v-img>
            </v-card>
        </v-hover>
    </v-col>
</template>

<script>
export default {
    name: 'FeatureCard',
    props: {
        title: {
            required: true,
            default: 'Title'
        },
        img: {
            required: true,
            default: 'https://www.iconpacks.net/icons/2/free-tiktok-logo-icon-4501-thumb.png'
        }
    },
    computed: {
        vb() {
            return this.$vuetify.breakpoint
        }
    },
}
</script>

<style lang="scss" scoped>
.feature-card {
    background-image: url('../assets/images/feature-card.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-color: $secondary !important;
    transition: opacity .4s ease-in-out;
}

.feature-card:not(.on-hover) {
  opacity: 0.6;
 }
</style>
<template>
    <v-row no-gutters class="page-header white--text primary" :class="$i18n.locale == 'en' ? 'bg-right' : 'bg-left'" :style="pageBg">
        <v-col :class="{
                'gradient' : vb.smAndDown,
                'page-header-banner': !vb.smAndDown,
                'bg-flipped': $i18n.locale == 'ar',
                'bg-unflipped': $i18n.locale == 'en'
            }" 
            class="d-flex align-center justify-center">
            <v-container>
                <div :dir="direction">
                    <h1>{{ title }}</h1>
                    <p>{{ subtitle }}</p>
                </div>
            </v-container>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'PageHeader',
    props: {
        pageBg: {
            required: true,
            type: Object
        },
        title: {
            required: true
        },
        subtitle: {
            required: true
        }
    },
    computed: {
        vb() {
            return this.$vuetify.breakpoint;
        },
        direction() {
            if(process.browser) {

                if(this.$i18n.locale == 'ar') {
                    return 'rtl'
                } else {
                    return 'ltr'
                }

                
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.page-header {
    height: 300px;
    background-repeat: no-repeat;
    background-size: cover;

    .page-header-banner {
        background-size: cover;
    }

    .gradient {
        background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    }
}

.bg-right {
    background-position: right;
}

.bg-left {
    background-position: left;
}

.bg-flipped {
    background-image: url('../assets/images/banner-ar.png');
    background-position: right;
}

.bg-unflipped {
    background-image: url('../assets/images/banner.png');
    background-position: -20vh;
}
</style>
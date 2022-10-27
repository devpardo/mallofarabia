<template>
   <div>
        <v-row no-gutters>
            <v-col cols="12">
                <div class="d-flex align-center justify-start">
                    <div class="logo pa-2">
                        <div class="d-flex align-center justify-center ">
                            <v-img block contain :src="require('../../assets/images/logo-en.png')"/>
                        </div>
                    </div>
                    <v-spacer></v-spacer>
                    <v-btn class="pa-0 mr-2 elevation-0" small color="primary" text tile>
                        <v-icon>mdi-globe</v-icon> EN
                    </v-btn>
                    <v-btn v-if="!menuShown" @click="menuShown = !menuShown" class="pa-0 elevation-0" color="primary" text tile>
                        <v-icon >mdi-menu</v-icon>
                    </v-btn>
                    <v-btn v-if="menuShown" @click="menuShown = !menuShown" class="pa-0 elevation-0" color="primary" text tile>
                        <v-icon >mdi-close</v-icon>
                    </v-btn>
                </div>
            </v-col>
        </v-row>

        <div class="mobile-menu white slide-y-transition" v-if="menuShown">
            adsfadsfadsf
        </div>
   </div>
</template>

<script>
export default {
    name: 'MobileMenu',
    props: {
        links: {
            type: Array,
            default: () => []
        },
        mainLinks: {
            type: Array,
            default: () => []
        },
    },
    data() {
        return {
            menuShown: false
        }
    },
    mounted() {
        window.addEventListener('resize', () => {
            this.menuShown = false;
        })
    },
    beforeUpdate() {
        window.removeEventListener('resize', () => {
            console.log('removed');
        })
    }
}
</script>

<style lang="scss" scoped>
.logo {
    width: 150px;
}

.toplink-item {
    padding: 20px 0;
    font-size: 14px;
}

.icon {
    font-size: 15px;
    color: $charcoal-grey;
}

.main-link {
    .link-item {
        font-size: 16px;
    }
}

.mobile-menu {
    width: 100%;
    position: absolute;
    left: 0;
    top: 70px;
    height: 100%;
    animation: fadeIn .5s;
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
</style>
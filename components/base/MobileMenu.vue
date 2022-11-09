<template>
   <div>
        <v-row no-gutters class="mb-4">
            <v-col cols="12">
                <div class="d-flex align-center justify-start">
                    <div class="logo pa-2">
                        <div @click="go('/')" class="d-flex align-center justify-center ">
                            <v-img block contain :src="siteSettings?.logo_en" v-if="$i18n.locale !== 'ar'"/>
                            <v-img block contain :src="siteSettings?.logo_ar" v-else/>
                        </div>
                    </div>
                    <v-spacer></v-spacer>
                    <div>
                        <nuxt-link
                            class="text-lowercase v-btn v-btn--text theme--light pa-0 px-1 caption v-btn--outlined mr-2"
                            tag="button"
                            v-if="$i18n.locale !== 'en'"
                            :to="switchLocalePath('en')"
                            >
                            en
                        </nuxt-link>

                        <nuxt-link
                            class="text-lowercase v-btn v-btn--text theme--light pa-0 px-1 caption v-btn--outlined mr-2"
                            tag="button"
                            v-if="$i18n.locale !== 'ar'"
                            :to="switchLocalePath('ar')"
                            >
                            عربى
                        </nuxt-link>
                    </div>
                    <v-btn v-if="!menuShown" @click="menuShown = !menuShown" class="pa-0 elevation-0" color="primary" large text icon tile>
                        <v-icon >mdi-menu</v-icon>
                    </v-btn>
                    <v-btn v-if="menuShown" @click="menuShown = !menuShown" class="pa-0 elevation-0" color="primary" large icon text tile>
                        <v-icon >mdi-close</v-icon>
                    </v-btn>
                </div>
            </v-col>
        </v-row>

        <div class="mobile-menu white overflow-auto" v-if="menuShown">
            <div class="pa-5">
                <v-list class="mb-10">
                    <div v-for="(item, index) in mainLinks" :key="index">
                        <v-list-group class="mb-2 rounded-lg pill-menu" v-if="item.children.length">
                            <template v-slot:activator>
                                <v-list-item-content>
                                    <v-list-item-title dir="auto">{{ $t(`links.${item.lang}`) }}</v-list-item-title>
                                </v-list-item-content>
                            </template>

                            <v-list-item
                                v-for="child in item.children"
                                :key="child.name"
                                @click="menuActionClick(item)"
                            >
                                <v-list-item-content>
                                    <v-list-item-title v-text="child.name" dir="auto"></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-group>

                        <v-list-item @click="menuActionClick(item)" class="mb-2 rounded-lg pill-menu" v-else>
                            <v-list-item-content>
                                <v-list-item-title dir="auto">{{ $t(`links.${item.lang}`) }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </div>
                </v-list>

                <v-divider></v-divider>

                <v-list class="mt-10 mb-10">
                    <v-list-item class="item-link mb-2" v-for="(item, index) in links" :key="index">
                        <v-list-item-content @click="go(item.to)">
                            <v-list-item-title class="item-link-title" dir="auto">
                                <v-icon class="mr-1 icon">{{ item.icon }}</v-icon> {{ $t(item.lang) }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </div>

            <div class="pa-2 grey lighten-3 text-center">
                Developed by FNDev
            </div>
        </div>
   </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
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
    computed: {
        ...mapGetters('settings', ['siteSettings'])
    },
    beforeUpdate() {
        window.removeEventListener('resize', () => {
            console.log('removed');
        })
    },
    methods: {
        menuActionClick(param) {
            this.go(param.to)
        },
        go(param) {
            this.$router.push(param);
            this.menuShown = false;
        }
    },
    watch: {
        menuShown(newVal) {
            console.log(newVal);
            if(newVal) {
                document.body.classList.add('menu-open');
            } else {
                document.body.classList.remove('menu-open');
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.logo {
    width: 150px;
}

.mobile-menu {
    width: 100%;
    position: absolute;
    left: 0;
    top: 70px;
    height: 100vh;
    z-index: 2;
    animation: fadeIn .5s;

    .pill-menu {
        border: 1px solid $charcoal-grey;
    }

    .v-list-item.v-list-item--active::before {
        display: none !important;
    }

    .v-list-item--active:focus::before {
        opacity: 1 !important;
    }

    .theme--light.v-list-item--active:focus::before {
        opacity: 0 !important;
    }

    .theme--light.v-list-item--active:hover::before, .theme--light.v-list-item--active::before {
        display: none !important;
    }

    .item-link {

        .item-link-title {
            font-size: 1em;
        }

        .icon {
            font-size: 1.2em;
        }
    }
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
</style>
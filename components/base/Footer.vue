<template>
<div class="mt-10">
    <div class="mb-6 mt-10">
        <v-container class="mt-10">
            <v-row class="mt-10">
                <v-col cols="12" md="4">
                    <div class="d-flex flex-column align-start justify-start " >


                        <v-img block contain max-width="150" class="mb-5" :src="siteSettings?.logo_en" v-if="$i18n.locale !== 'ar'"/>
                        <v-img block contain max-width="150" class="mb-5" :src="siteSettings?.logo_ar" v-else/>

                        <p class="caption">{{ siteSettings?.address }}</p>

                        <h2><v-icon>mdi-phone</v-icon> {{ siteSettings?.phone }}</h2>

                        <div class="d-flex mt-8" v-if="siteSettings?.social_links">
                            <v-btn
                                v-for="(item, i) in siteSettings.social_links" :key="i"
                                depressed
                                text
                                fab
                                dark
                                small
                                color="grey"
                                class="mr-1"
                                 @click="goLink(item.link_value)"
                            >
                                <v-icon>
                                    {{ sm_links[item.link_type]['icon'] }}
                                </v-icon>
                                <!-- <v-icon v-if="i == 'tiktok'" dark large>
                                    $vuetify.icons.values.tiktok
                                </v-icon>

                                <v-icon v-else dark large>
                                    {{ item.icon }}
                                </v-icon> -->
                            </v-btn>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" md="2" v-for="(field, key) in footer_links" :key="key">
                    <h3 class="text-capitalize mb-3" >{{ $t(key) }}</h3>
                    <div  v-for="(item, index) in footer_links[key]" :key="index" class="pa-0 flex-column">
                        <a href="#" class="footer-link d-block mb-2 py-2">{{ item.title }}</a>
                    </div>
                </v-col>
                
            </v-row>

            <v-divider class="mt-10"></v-divider>

            <v-row justify="space-between" class="mt-5"> 
                <v-col cols="12" sm="12" md="6" lg="3">
                    <div class="d-flex align-center justify-start">

                        <v-img block contain max-width="80" :src="siteSettings?.logo_en" v-if="$i18n.locale !== 'ar'"/>
                        <v-img block contain max-width="80" :src="siteSettings?.logo_ar" v-else/>

                        <div class="">
                            <v-menu offset-y content-class="elevation-0">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn

                                        class="text-capitalize"
                                        v-bind="attrs"
                                        v-on="on"
                                        text
                                        small
                                    >
                                        {{ $t('entity_group') }} <v-icon class="ml-3 text--primary" x-small>mdi-chevron-down</v-icon>
                                    </v-btn>
                                </template>
                                <v-list min-width="150">
                                    <v-list-item
                                        v-for="(item, idx) in group_entities" :key="idx"
                                    >
                                    <v-list-item-title v-if="$i18n.locale !== 'en'" @click="go(item.url)">{{ item.name_ar }}</v-list-item-title>
                                    <v-list-item-title v-if="$i18n.locale !== 'ar'" @click="go(item.url)">{{ item.name_en }}</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </div>
                    </div>
                </v-col>
                <v-col  cols="12" sm="12" md="6" lg="3" class="caption text-center text-sm-center"
                :class="$i18n.locale == 'en' ? ['text-md-left'] : ['text-md-right']">
                    <p>{{ $t('copyright') }}</p>
                    <a href="#"> {{ $t('privacy') }}</a>
                </v-col>
            </v-row>
        </v-container>
    </div>

    <div class="pa-2 grey lighten-3 text-center">
        Developed by FNDev
    </div>
</div>
</template>

<script>
import mixin from '@/components/mixins'
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'Footer',
    mixins: [mixin],
    data() {
        return {
            group_entities: [],
            social_links: [],
            sm_links: {
                facebook: {
                    icon: 'mdi-facebook',
                    to: ''
                },
                instagram: {
                    icon: 'mdi-instagram',
                    to: ''
                },
                twitter: {
                    icon: 'mdi-twitter',
                    to: ''
                },
                linkedin: {
                    icon: 'mdi-linkedin',
                    to: ''
                },
                tiktok: {
                    icon: '',
                    to: ''
                }
            },
            footer_links : {
                shop: [
                    { title: 'Book / Stationery / Toys / Games / Gifts', to: '/'},
                    { title: 'Electronics / Home Appliances / Computers / Mobiles', to: '/'}
                ],
                fashion: [
                    { title: 'Children & Maternity', to: '/'},
                    { title: 'Jewelery', to: '/'},
                    { title: 'Lingerie & Swimwear', to: '/'},
                    { title: 'Men', to: '/'},{ title: 'Optics', to: '/'},
                    { title: 'Sportswear & Goods', to: '/'},
                    { title: 'Unisex', to: '/'},
                    { title: 'Watches', to: '/'},
                    { title: 'Women', to: '/'}
                ],
                dine: [
                    { title: 'Fast Food', to: '/'},
                    { title: 'Cafes', to: '/'},
                    { title: 'Resturants', to: '/'},
                    { title: 'Specialty', to: '/'},
                ],
                other: [
                    { title: 'Specialty', to: '/'},
                    { title: 'Entertain', to: '/'},
                    { title: 'Cinema', to: '/'},
                    { title: 'Services', to: '/'},
                    { title: 'Events', to: '/'},
                    { title: 'Leasing', to: '/'},
                    { title: 'Advertising', to: '/'}
                ]
            }
        }
    },
    computed: {
        ...mapGetters('settings', ['siteSettings'])
    },
    mounted() {
        this.getEntites();
    },
    methods: {
        async getEntites() {
            let entities = await this.$api.get('/group_entities');

            this.group_entities = entities.data?.data;
        },
        go(param) {
            window.location.href = param;
        }
    }
}
</script>

<style lang="scss">
.footer-link {
    text-decoration: none;
    color: $charcoal-grey !important;
    font-size: .9em;
}
</style>
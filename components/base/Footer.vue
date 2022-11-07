<template>
<div class="mt-10">
    <div class="mb-6">
        <v-container>
            <v-row>
                <v-col cols="12" md="4">
                    <div class="d-flex flex-column align-start justify-start " dir="auto">
                        <v-img class="mb-5" max-width="150" block contain :src="require('../../assets/images/logo-en.png')"/>

                        <p class="caption">6th of October City, Juhaynah Square, Cairo</p>

                        <h2><v-icon>mdi-phone</v-icon> 16269</h2>

                        <div class="d-flex mt-8">
                            <v-btn
                                v-for="(item, i) in sm_links" :key="i"
                                depressed
                                text
                                fab
                                dark
                                small
                                color="grey"
                                class="mr-1"
                            >
                                <v-icon v-if="i == 'tiktok'" dark large>
                                    $vuetify.icons.values.tiktok
                                </v-icon>

                                <v-icon v-else dark large>
                                    {{ item.icon }}
                                </v-icon>
                            </v-btn>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" md="2" v-for="(field, key) in footer_links" :key="key">
                    <h3 class="text-capitalize mb-3" dir="auto">{{ $t(key) }}</h3>
                    <div dir="auto" v-for="(item, index) in footer_links[key]" :key="index" class="pa-0 flex-column">
                        <a href="#" class="footer-link d-block mb-2 py-2">{{ item.title }}</a>
                    </div>
                </v-col>
                
            </v-row>

            <v-divider class="mt-10"></v-divider>

            <v-row justify="space-between" class="mt-5"> 
                <v-col cols="12" sm="12" md="6" lg="3">
                    <div class="d-flex align-center justify-start">
                        <v-img class="mr-3" max-width="80" block contain :src="require('../../assets/images/marakez.png')"/>
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
                                        v-for="(child, idx) in 5" :key="idx"
                                    >
                                    <v-list-item-title>Name name name</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </div>
                    </div>
                </v-col>
                <v-col dir="auto" cols="12" sm="12" md="6" lg="3" class="caption text-center text-sm-center"
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
export default {
    name: 'Footer',
    data() {
        return {
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
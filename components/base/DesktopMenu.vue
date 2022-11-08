<template>
    <div>
        {{ siteSettings }}
        <v-row no-gutters dir="auto">
            <v-col cols="5">
                <div class="d-flex">
                    <div v-for="(item, index) in links.linksLeft" :key="index" class="text-center flex-grow-1 d-flex align-center justify-center">
                        <nuxt-link v-if="item.to" class="toplink-item" 
                            :to="localePath(item.to)">
                            <v-icon class="icon mx-1">{{item.icon}}</v-icon> {{ $t(item.lang) }} 
                        </nuxt-link>

                        <div v-else class="toplink-item" @click="goTo(item)">
                            <v-icon class="icon mx-1">{{item.icon}}</v-icon> {{ $t(item.lang) }} 
                        </div>
                    </div>
                </div>
            </v-col>
            <v-col cols="2" class="d-flex align-center justify-center">
                <div @click="go('/')" class="logo pa-2">
                    <div class="d-flex align-center justify-center">
                        <v-img block contain :src="siteSettings?.logo_en" v-if="$i18n.locale !== 'ar'"/>
                        <v-img block contain :src="siteSettings?.logo_ar" v-else/>
                    </div>
                </div>
            </v-col>
            <v-col cols="5">
                <div class="d-flex">
                    <div v-for="(item, index) in links.linksRight" :key="index" class="text-center flex-grow-1 d-flex align-center justify-center">
                        <nuxt-link v-if="item.to" class="toplink-item" 
                            :to="localePath(item.to)">
                            <v-icon class="icon mx-1">{{item.icon}}</v-icon> {{ $t(item.lang) }} 
                        </nuxt-link>

                        <div v-else class="toplink-item">
                            <v-icon class="icon mx-1">{{item.icon}}</v-icon> {{ $t(item.lang) }} 
                        </div>
                    </div>
                </div>
            </v-col>
        </v-row>

        <v-row class="mb-1">
            <v-container class="mt-0">
                <div class="main-links d-flex align-start justify-start" dir="auto">
                    <span v-for="(item, index) in mainLinks" :key="index" 
                        class="mr-3 text-capitalize link-item py-1">

                        <div v-if="item.children.length">
                            <v-menu offset-y content-class="elevation-0">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                        class="text-capitalize"
                                        v-bind="attrs"
                                        v-on="on"
                                        text
                                    >
                                        {{ $t(`links.${item.lang}`) }} <v-icon class="ml-3 text--primary" x-small>mdi-chevron-down</v-icon>
                                    </v-btn>
                                </template>
                                <v-list min-width="150">
                                    <v-list-item
                                        v-for="(child, idx) in item.children" :key="idx"
                                    >
                                    <v-list-item-title>{{ child.name }}</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </div>
                        

                        <nuxt-link v-else class="text-capitalize v-btn v-btn--text theme--light v-size--default" tag="button"
                            :to="localePath(item.to)">
                            {{ $t(`links.${item.lang}`) }}
                        </nuxt-link>
                                    
                    </span>

                    <!-- <a v-for="(item, index) in mainLinks" :key="index" class="mr-3 text-capitalize link-item px-3 py-1 text--primary" text>{{ item.name }}</a> -->
                    <v-spacer></v-spacer>

                    

                    <span class="mr-3 link-item py-1">
                       <nuxt-link
                            class="text-lowercase v-btn v-btn--text theme--light pa-0 px-1 caption v-btn--outlined mt-3 v-btn--outlined mt-3"
                            tag="button"
                            v-if="$i18n.locale !== 'en'"
                            :to="switchLocalePath('en')"
                            >
                            en
                        </nuxt-link>

                        <nuxt-link
                            class="text-lowercase v-btn v-btn--text theme--light pa-0 px-1 caption v-btn--outlined mt-3 v-btn--outlined mt-3"
                            tag="button"
                            v-if="$i18n.locale !== 'ar'"
                            :to="switchLocalePath('ar')"
                            >
                            عربى
                        </nuxt-link>
                    </span>
                </div>
            </v-container>
        </v-row>
    </div>
</template>

<script>
import mixin from '@/components/mixins'
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'DesktopMenu',
    mixins: [mixin],
    props: {
        links: {
            type: Object,
            default: () => {}
        },
        mainLinks: {
            type: Array,
            default: () => []
        }
    },
    computed: {
        ...mapGetters('settings', ['siteSettings'])
    },
    methods: {
        go(param) {
            this.$router.push(param);
        }
    }
}
</script>

<style lang="scss" scoped>
.toplink-item {
    padding: 30px 0;
    font-size: 12px;
    text-decoration: none;
    color: initial;
}

.icon {
    height: 10px !important;
    color: $charcoal-grey;
    font-size: 20px !important;
}

.logo {
    width: 80%;
}

.link-item {
    font-size: 1em;
}

.debug {
    border: 1px dashed red;
}
</style>
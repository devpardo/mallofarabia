<template>
   <div>
        <v-row no-gutters>
            <v-col cols="12">
                <div class="d-flex align-center justify-center mb-2">
                    <div  @click="go('/')" class="logo pa-2">
                        <div class="d-flex align-center justify-center">
                            <v-img block contain :src="siteSettings?.logo_en" v-if="$i18n.locale !== 'ar'"/>
                            <v-img block contain :src="siteSettings?.logo_ar" v-else/>
                        </div>
                    </div>
                </div>
                <div class="d-flex align-center justify-center" style="flex-wrap: wrap">
                    <div class="text-center d-flex align-center justify-center pa-3 text--primary" v-for="(item, index) in links" :key="index">
                        <nuxt-link v-if="item.to" :to="localePath(item.to)" class="toplink-item">
                            <v-icon class="icon mr-1">{{ item.icon }}</v-icon> {{ $t(item.lang) }} 
                        </nuxt-link>

                        <a href="#" v-else class="toplink-item">
                            <v-icon class="icon mr-1">{{ item.icon }}</v-icon> {{ $t(item.lang) }} 
                        </a>
                    </div>
                </div>
            </v-col>
        </v-row>

        <v-row class="mb-1">
            <v-container class="t-0">
                <div class="main-links d-flex align-start justify-start">
                    <span v-for="(item, index) in mainLinks" :key="index" 
                        class="mr-3 text-capitalize link-item py-1">

                        <!-- <div v-if="item?.children?.length">
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
                        </div> -->
                        

                        <nuxt-link active-class="secondary rounded" class="text-capitalize v-btn v-btn--text theme--light v-size--default" tag="button"
                            :to="localePath(item.to)">
                            {{ $t(`links.${item.lang}`) }}
                        </nuxt-link>
                                    
                    </span>

                    <!-- <a v-for="(item, index) in mainLinks" :key="index" class="mr-3 text-capitalize link-item px-3 py-1 text--primary" text>{{ item.name }}</a> -->
                    <v-spacer></v-spacer>

                    <span class="mr-3 link-item py-1">
                       <nuxt-link
                            class="text-lowercase v-btn v-btn--text theme--light pa-0 px-1 caption v-btn--outlined mt-1"
                            tag="button"
                            v-if="$i18n.locale !== 'en'"
                            :to="switchLocalePath('en')"
                            >
                            en
                        </nuxt-link>

                        <nuxt-link
                            class="text-lowercase v-btn v-btn--text theme--light pa-0 px-1 caption v-btn--outlined mt-1"
                            tag="button"
                            v-if="$i18n.locale !== 'ar'"
                            :to="switchLocalePath('ar')"
                            >
                            ????????
                        </nuxt-link>
                    </span>

                </div>
            </v-container>
        </v-row>
   </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'TabMenu',
    props: {
        links: {
            type: Array,
            default: () => []
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
.logo {
    width: 150px;
}

.toplink-item {
    font-size: 1em;
    color: inherit;
    text-decoration: none;
}

.icon {
    font-size: 15px;
    color: $charcoal-grey;
}

.main-links {
    .link-item {
        font-size: 1em;
    }
}
</style>
<template>
   <div>
        <v-row no-gutters>
            <v-col cols="12">
                <div class="d-flex align-center justify-center mb-2">
                    <div class="logo pa-2">
                        <div class="d-flex align-center justify-center">
                            <v-img block contain :src="require('../../assets/images/logo-en.png')"/>
                        </div>
                    </div>
                </div>
                <div class="d-flex align-center justify-center" style="flex-wrap: wrap">
                    <a class="toplink-item text-center d-flex align-center justify-center pa-3 text--primary" v-for="(item, index) in links" :key="index">
                        <v-icon class="icon mr-1">{{ item.icon }}</v-icon> {{ $t(item.lang) }} 
                    </a>
                </div>
            </v-col>
        </v-row>

        <v-row>
            <v-container class="t-0">
                <div class="main-links d-flex align-start justify-start">
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
                        

                        <v-btn
                            v-else 
                            class="text-capitalize"
                            text
                        >
                            {{ $t(`links.${item.lang}`) }}
                        </v-btn>
                                    
                    </span>

                    <!-- <a v-for="(item, index) in mainLinks" :key="index" class="mr-3 text-capitalize link-item px-3 py-1 text--primary" text>{{ item.name }}</a> -->
                    <v-spacer></v-spacer>

                    <span class="mr-3 link-item py-1">
                       <nuxt-link
                            class="text-capitalize v-btn v-btn--text theme--light v-size--default"
                            tag="button"
                            v-if="$i18n.locale !== 'en'"
                            :to="switchLocalePath('en')"
                            >
                            <v-icon small color="accent" class="mx-1">mdi-web</v-icon> English
                        </nuxt-link>

                        <nuxt-link
                            class="text-capitalize v-btn v-btn--text theme--light v-size--default"
                            tag="button"
                            v-if="$i18n.locale !== 'ar'"
                            :to="switchLocalePath('ar')"
                            >
                            <v-icon small color="accent" class="mx-1">mdi-web</v-icon> عربى
                        </nuxt-link>
                    </span>

                </div>
            </v-container>
        </v-row>
   </div>
</template>

<script>
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
    }
}
</script>

<style lang="scss" scoped>
.logo {
    width: 150px;
}

.toplink-item {
    font-size: 1em;
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

.debug {
    border: 1px solid red;
}
</style>
<template>
    <div>
        <v-row no-gutters>
            <v-col cols="5">
                <div class="d-flex">
                    <div class="toplink-item text-center flex-grow-1 d-flex align-center justify-center" v-for="(item, index) in links.linksLeft" :key="index">
                        <v-icon class="icon mr-1">{{ item.icon }}</v-icon> {{ item.name }} 
                    </div>
                </div>
            </v-col>
            <v-col cols="2" class="d-flex align-center justify-center">
                <div class="logo pa-2">
                    <div class="d-flex align-center justify-center ">
                        <v-img block contain :src="require('../../assets/images/logo-en.png')"/>
                    </div>
                </div>
            </v-col>
            <v-col cols="5">
                <div class="d-flex">
                    <div class="toplink-item text-center flex-grow-1 d-flex align-center justify-center" v-for="(item, index) in links.linksRight" :key="index">
                        <v-icon class="icon mr-1">{{ item.icon }}</v-icon> {{ item.name }} 
                    </div>
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
                                        {{ item.name }} <v-icon class="ml-3 text--primary" x-small>mdi-chevron-down</v-icon>
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
                            {{ item.name }}
                        </v-btn>
                                    
                    </span>

                    <!-- <a v-for="(item, index) in mainLinks" :key="index" class="mr-3 text-capitalize link-item px-3 py-1 text--primary" text>{{ item.name }}</a> -->
                    <v-spacer></v-spacer>
                    <v-btn class="text-capitalize link-item" text><v-icon>mdi-globe</v-icon> EN</v-btn>
                </div>
            </v-container>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'DesktopMenu',
    props: ['on', ],
    props: {
        links: {
            type: Object,
            default: () => {}
        },
        mainLinks: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="scss" scoped>
.toplink-item {
    padding: 30px 0;
    font-size: 12px;
}

.icon {
    font-size: 15px;
    color: $charcoal-grey;
}

.logo {
    width: 80%;
}

.main-link {
    .link-item {
        font-size: 16px;
    }
}
</style>
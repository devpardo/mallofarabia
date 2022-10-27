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
                        class="mr-3 text-capitalize link-item px-3 py-1">
                        
                        <a v-if="item.children.length" class="d-block text--primary">{{ item.name }}</a>
                        <a v-else class="d-block text--primary">{{ item.name }}</a>
                                    
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
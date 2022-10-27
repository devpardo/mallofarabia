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

                    <div>
                        <v-icon>mdi-mail</v-icon>
                    </div>
                </div>
            </v-col>
        </v-row>

        <v-row>
            <v-container class="t-0">
                <div class="main-links d-flex align-start justify-start">
                    <span v-for="(item, index) in mainLinks" :key="index" 
                        class="mr-3 text-capitalize link-item px-3 py-1">
                        
                        <a class="text--primary">{{ item.name }}</a>
                                    
                    </span>
                    
                    <v-btn class="ml-auto text-capitalize link-item" text><v-icon>mdi-globe</v-icon> EN</v-btn>
                </div>
            </v-container>
        </v-row>
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
</style>
<template>
    <v-sheet class="top-nav">
        <v-container fluid>
            <v-row no-gutters>
                <v-col cols="5" class="text-center">
                    <div class="d-flex">
                        <div class="toplink-item text-center flex-grow-1 d-flex align-center justify-center" v-for="(item, index) in linksLeft" :key="index">
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
                <v-col cols="5" class="text-center">
                    <div class="d-flex">
                        <div class="toplink-item text-center flex-grow-1 d-flex align-center justify-center" v-for="(item, index) in linksRight" :key="index">
                            <v-icon class="icon mr-1">{{ item.icon }}</v-icon> {{ item.name }} 
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>

        <v-container fluid class="px-5">
            <div class="main-links d-flex align-start justify-start">
                <v-btn v-for="(item, index) in mainLinks" :key="index" class="mr-3 text-capitalize link-item" text>{{ item.name }}</v-btn>
                <v-btn class="ml-auto text-capitalize link-item" text>EN</v-btn>
            </div>
        </v-container>
    </v-sheet>
</template>

<script>
export default {
    name: 'AppNavbar',
    data() {
        return {
            linksLeft: [
                { name: 'Opening Hours', icon: 'mdi-clock-time-three'},
                { name: 'Careers', icon: 'mdi-briefcase'},
                { name: '16269', icon: 'mdi-phone'},
                { name: 'Al Giza Desert, Giza Governorate', icon: 'mdi-map-marker'},
            ],
            linksRight: [
                { name: 'Contact Us', icon: 'mdi-send'},
                { name: 'About Us', icon: 'mdi-help'},
                { name: 'Advertising', icon: 'mdi-bullhorn'},
                { name: 'Leasing', icon: 'mdi-key-variant'},
                { name: 'Mall Map', icon: 'mdi-map'},
            ],
            mainLinks: [
                { name: 'Shop', children: [] },
                { name: 'Dine', children: [] },
                { name: 'Entertain', children: [] },
                { name: 'Cinema', children: [] },
                { name: 'Train', children: [] },
                { name: 'Events', children: [] },
                { name: 'Services', children: [] },
                { name: 'Offers', children: [] }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

.top-nav {
    min-height: 113px;

    .toplink-item {
        padding: 50px 0;
        font-size: 14px;

        .icon {
            font-size: 15px;
            color: $charcoal-grey;
        }
    }

    .logo {
        width: 100%;
    }
    
    .main-link {
        .link-item {
            font-size: 16px;
        }
    }
}

</style>
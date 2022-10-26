<template>
    <v-sheet class="top-nav">
        <v-container class="desktop-menu">
            <DesktopMenu :links="{linksLeft, linksRight}" />
        </v-container>

        <v-container class="tab-menu"> 
            <TabMenu :links="allLinks" />
        </v-container>

        <v-container class="t-0">
            <div class="main-links d-flex align-start justify-start">
                <a v-for="(item, index) in mainLinks" :key="index" class="mr-3 text-capitalize link-item px-3 py-1 text--primary" text>{{ item.name }}</a>
                <v-btn class="ml-auto text-capitalize link-item" text><v-icon>mdi-globe</v-icon> EN</v-btn>
            </div>
        </v-container>
    </v-sheet>
</template>

<script>
import DesktopMenu from '@/components/base/DesktopMenu'
import TabMenu from '@/components/base/TabMenu'

export default {
    name: 'AppNavbar',
    components: {
        DesktopMenu,
        TabMenu
    },
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
    },
    computed: {
        vb() {
            return this.$vuetify.breakpoint;
        },
        allLinks() {
            return [...this.linksLeft, ...this.linksRight]
        }
    }
}
</script>

<style lang="scss" scoped>

.top-nav {
    min-height: 113px;
}

@media (min-width: 320px) {
    .desktop-menu {
        display: none
    }

    .tab-menu {
        display: none;
    }
}

@media (min-width: 480px) {
    
}


@media (min-width: 600px) {
    
}

@media (min-width: 768px) {
   
}

@media (min-width: 960px) {
     .desktop-menu {
        display: none
    }

    .tab-menu {
        display: block;
    }

    .container {
        max-width: 940px;
    }
}

@media (min-width: 1024px) {
    
    .container {
        max-width: 1185px;
    }
    
}

@media (min-width: 1200px) {
    .desktop-menu {
        display: block
    }

    .tab-menu {
        display: none;
    }

    .container {
        max-width: 1185px;
    }
}
</style>
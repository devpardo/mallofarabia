<template>
    <v-sheet class="top-nav">
        <v-container class="desktop-menu" v-if="vb.mdAndUp">
            <DesktopMenu :links="{linksLeft, linksRight}" :main-links="mainLinks"/>
        </v-container>

        <v-container class="tab-menu" v-if="vb.mdAndDown"> 
            <TabMenu :links="allLinks" :main-links="mainLinks"/>
        </v-container>

        <v-container class="mobile-menu" v-if="vb.smAndDown"> 
            <MobileMenu :links="allLinks" :main-links="mainLinks"/>
        </v-container>
    </v-sheet>
</template>

<script>
import DesktopMenu from '@/components/base/DesktopMenu'
import TabMenu from '@/components/base/TabMenu'
import MobileMenu from '@/components/base/MobileMenu'

export default {
    name: 'AppNavbar',
    components: {
        DesktopMenu,
        TabMenu,
        MobileMenu
    },
    data() {
        return {
            linksLeft: [
                { name: 'Opening Hours', lang: 'opening_hours', icon: 'mdi-clock-time-three'},
                { name: 'Careers', lang: 'careers', icon: 'mdi-briefcase'},
                { name: '16269', lang: 'phone', icon: 'mdi-phone'},
                { name: 'Al Giza Desert, Giza Governorate', lang: 'address', icon: 'mdi-map-marker'},
            ],
            linksRight: [
                { name: 'Contact Us', lang: 'contact', icon: 'mdi-send'},
                { name: 'About Us', lang: 'about', icon: 'mdi-help'},
                { name: 'Advertising', lang: 'advertising', icon: 'mdi-bullhorn'},
                { name: 'Leasing', lang: 'leasing', icon: 'mdi-key-variant'},
                { name: 'Mall Map', lang: 'mall_map', icon: 'mdi-map'},
            ],
            mainLinks: [
                { name: 'Shop', lang: 'shop', children: [
                    { name: 'Shop 1' },
                    { name: 'Shop 2' },
                    { name: 'Shop 3' },
                    { name: 'Shop 4' }
                ] },
                { name: 'Dine', lang: 'dine', children: [
                    { name: 'Dine 1' },
                    { name: 'Dine 2' },
                    { name: 'Dine 3' },
                    { name: 'Dine 4' }
                ] },
                { name: 'Entertain', lang: 'entertain', children: [] },
                { name: 'Cinema', lang: 'cinema', children: [] },
                { name: 'Train', lang: 'train', children: [] },
                { name: 'Events', lang: 'events', children: [] },
                { name: 'Services', lang: 'services', children: [] },
                { name: 'Offers', lang: 'offers', children: [] }
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

<style lang="scss">
.main-links {
    font-size: 1.2em;

    .link-item {
        
    }
}

</style>

<style lang="scss" scoped>

@media (min-width: 320px) {
    .container {
        width: 95%;
    }
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
   .mobile-menu {
        display: block;
    }

    .top-nav {
        min-height: 80px;
    }
}

@media (min-width: 960px) {
    .mobile-menu {
        display: none;
    }

     .desktop-menu {
        display: none
    }

    .tab-menu {
        display: block;
    }

    .top-nav {
        min-height: 113px;
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
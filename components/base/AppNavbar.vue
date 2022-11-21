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
import { mapActions, mapGetters } from 'vuex'

let test = 'test';

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
                { name: 'Opening Hours', lang: 'opening_hours', icon: '$vuetify.icons.values.hours_icon', to: '/opening-hours'}, 
                { name: 'Careers', lang: 'careers', icon: '$vuetify.icons.values.careers_icon', to: '/careers'},
                { name: '16269', lang: 'phone', icon: '$vuetify.icons.values.telephone_icon', type: 'phone'},
                { name: 'Al Giza Desert, Giza Governorate', lang: 'address', icon: '$vuetify.icons.values.location_icon', type: 'location'},
            ],
            linksRight: [
                { name: 'Contact Us', lang: 'contact', icon: '$vuetify.icons.values.contact_icon', to: '/contact'},
                { name: 'About Us', lang: 'about', icon: '$vuetify.icons.values.about_icon', to: '/about-us'},
                { name: 'Advertising', lang: 'advertising', icon: '$vuetify.icons.values.advertising', to: '/advertising'},
                { name: 'Leasing', lang: 'leasing', icon: '$vuetify.icons.values.leasing', to: '/leasing'},
                { name: 'Mall Map', lang: 'mall_map', icon: '$vuetify.icons.values.mall_map', to: '/mall-map'},
            ],
            mainLinks: [
                { name: 'Shop', lang: 'shop', to: '/shops' },
                { name: 'Dine', lang: 'dine', to: '/dine' },
                { name: 'Entertain', lang: 'entertain', children: [], to: '/entertain' },
                { name: 'Cinema', lang: 'cinema', children: [], to: '/cinema' },
                { name: 'Train', lang: 'train', children: [], to: '/train' },
                { name: 'Events', lang: 'events', children: [], to: '/events' },
                { name: 'Services', lang: 'services', children: [], to: '/services' },
                { name: 'Offers', lang: 'offers', children: [], to: '/offers' },
                { name: 'Blog', lang: 'blog', to: '/blog' }
            ]
        }
    },
    computed: {
        ...mapGetters('settings', ['siteSettings']),
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
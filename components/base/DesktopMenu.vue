<template>
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
</template>

<script>
export default {
    name: 'DesktopMenu',
    props: {
        links: {
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style lang="scss" scoped>
.toplink-item {
    padding: 50px 0;
    font-size: 14px;
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
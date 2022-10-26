<template>
   <v-row no-gutters>
        <v-col cols="12">
            <div class="d-flex align-center justify-start">
                <div class="logo pa-2">
                    <div class="d-flex align-center justify-center ">
                        <v-img block contain :src="require('../../assets/images/logo-en.png')"/>
                    </div>
                </div>
            </div>
            <div class="d-flex">
                <div class="toplink-item text-center flex-grow-1 d-flex align-center justify-center" v-for="(item, index) in links" :key="index">
                    <v-icon class="icon mr-1">{{ item.icon }}</v-icon> {{ item.name }} 
                </div>
            </div>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'TabMenu',
    props: {
        links: {
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
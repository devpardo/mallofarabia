<template>
<div>
    <div class="mb-6">
        <v-container>
            <v-row>
                <v-col cols="12" md="4">
                    <div class="d-flex flex-column align-start justify-start ">
                        <v-img class="mb-5" max-width="150" block contain :src="require('../../assets/images/logo-en.png')"/>

                        <p class="caption">6th of October City, Juhaynah Square, Cairo</p>

                        <h2><v-icon>mdi-phone</v-icon> 16269</h2>

                        <div class="d-flex mt-8">
                            <v-btn
                                v-for="(icon, i) in 5" :key="i"
                                depressed
                                text
                                fab
                                dark
                                small
                                color="grey"
                                class="mr-1"
                            >
                                <v-icon dark large>
                                    mdi-facebook
                                </v-icon>
                            </v-btn>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" md="2">
                    <h3>Shop</h3>
                    <v-list-item v-for="(item, index) in 6" :key="index" class="pa-0">
                        <v-list-item-content>
                            <v-list-item-title class="caption">Single-line item</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col cols="12" md="2">
                    <h3>Fashion</h3>
                    <v-list-item v-for="(item, index) in 6" :key="index" class="pa-0">
                        <v-list-item-content>
                            <v-list-item-title class="caption">Single-line item</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col cols="12" md="2">
                    <h3>Dine</h3>
                    <v-list-item v-for="(item, index) in 6" :key="index" class="pa-0">
                        <v-list-item-content>
                            <v-list-item-title class="caption">Single-line item</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col cols="12" md="2">
                    <h3>Other</h3>
                    <v-list-item v-for="(item, index) in 6" :key="index" class="pa-0">
                        <v-list-item-content>
                            <v-list-item-title class="caption">Single-line item</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                
            </v-row>

            <v-divider class="mt-10"></v-divider>

            <v-row justify="space-between" class="mt-5"> 
                <v-col cols="12" sm="12" md="6" lg="3">
                    <div class="d-flex align-center justify-start">
                        <v-img class="mr-3" max-width="80" block contain :src="require('../../assets/images/marakez.png')"/>
                        <div class="">
                            <v-menu offset-y content-class="elevation-0">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                        class="text-capitalize"
                                        v-bind="attrs"
                                        v-on="on"
                                        text
                                        small
                                    >
                                        View All Group Entries <v-icon class="ml-3 text--primary" x-small>mdi-chevron-down</v-icon>
                                    </v-btn>
                                </template>
                                <v-list min-width="150">
                                    <v-list-item
                                        v-for="(child, idx) in 5" :key="idx"
                                    >
                                    <v-list-item-title>Name name name</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="3" class="caption text-center text-sm-center text-md-left">
                    <p>© Copyright Marakez 2020. All Rights Reserved.</p>
                    <a href="#">Privacy Policy</a>
                </v-col>
            </v-row>
        </v-container>
    </div>

    <div class="pa-2 grey lighten-3 text-center">
        Developed by FNDev
    </div>
</div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>

</style>
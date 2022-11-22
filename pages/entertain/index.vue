<template>
    <div>
        <PageHeader :pageBg="pageBg" :title="contents.page_name" :subtitle="contents.page_description"/>

        <v-row>
            <v-col>
                <v-container>
                    <v-row>
                        <v-col v-if="!contents.data.length">
                            <h2>No Data Available</h2>
                        </v-col>
                        <v-col v-else>
                            <v-row>
                                <v-col cols="12" v-for="(content, i) in contents.data" :key="i">
                                    <v-img :src="content.cover" class="rounded-xl d-flex align-center justify-center" height="300" @click="seeMore(content)">
                                        <div class="text-center white--text mx-auto" style="width: 80%">
                                            <h1>{{ content.name }}</h1>
                                            <p class="body-1">{{ content.description }}</p>

                                            <v-btn color="secondary" small @click="seeMore(content)">See more</v-btn>
                                        </div>
                                    </v-img>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>

        <v-dialog
            persistent
            v-model="dialog"
            min-width="300"
            max-width="1000"
            >
            <v-card v-if="selected != null" class="pa-5 rounded-xl">
                <v-card-title class="mb-10">
                    <v-row>
                        <v-col cols="12" md="2">
                            <v-img :src="selected.logo_en" width="200" contain></v-img>
                        </v-col>
                        <v-col cols="12" md="5">
                                <h3>{{ selected.name }}</h3>
                                <p class="caption">{{ selected.description }}</p>
                        </v-col>
                        <v-col cols="12" md="5">
                            <h3>Social Links</h3>
                        </v-col>
                    </v-row>
                </v-card-title>

                <v-card-text>
                    <v-row>
                        <v-col cols="6" md="4">
                            <div class="text-center">
                                <h3><v-icon small class="mr-3" color="primary">mdi-clock</v-icon>Working Hours</h3>
                                <p>{{ selected.working_hours }}</p>
                            </div>
                        </v-col>
                        <v-col cols="6" md="4">
                            <div class="text-center">
                                <h3><v-icon small class="mr-3" color="primary">mdi-phone</v-icon> Store Numbers</h3>
                                <ul class="list-unstyled">
                                    <li v-for="(phone, i) in selected.phones" :key="i">
                                        {{ phone }}
                                    </li>
                                </ul>
                            </div>
                        </v-col>
                        <v-col cols="6" md="4">
                            <div class="text-center">
                                <h3><v-icon small class="mr-3" color="primary">mdi-map-marker</v-icon>Nearest Gates</h3>
                                <ul class="list-unstyled">
                                    <li v-for="(gate, i) in selected.gates" :key="i">
                                        {{ gate.number }}
                                    </li>
                                </ul>
                            </div>
                        </v-col>
                    </v-row>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                        color="primary"
                        text
                        @click="dialog = false"
                    >
                        Close
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        

        <Loading :loading="loading"/>
    </div>
</template>

<script>

import PageHeader from '@/components/PageHeader'
import Loading from '@/components/Loading'

export default {
    components: {
        Loading,
        PageHeader
    },
    data() {
        return {
            loading: false,
            selected: null,
            dialog: false,
            contents: {
                page_description:'',
                page_image: '',
                page_keywords:'',
                page_name: '',
                data: {}
            }
        }
    },
    computed: {
        pageBg() {
            return { 'background-image': `url(${this.contents?.page_image})` }
        }
    },
    methods: {
        seeMore(item) {
            this.dialog = true;
            this.selected = {...item}
        },
        close() {
            this.dialog = false;
        },
        async pull() {
            try {
                let head = {
                    headers: {
                        'x-locale': this.$i18n.locale
                    }
                }
                this.loading = true;
                let res =  await this.$api.get('/entertain', head);
                this.contents = {...res.data}

                console.log(res);
                this.loading = false;
            } catch (error) {
                console.log(error);
                this.loading = false;
            }
        }
    },
    mounted() {
        this.pull();
    }
}
</script>

<style lang="scss" scoped>

</style>
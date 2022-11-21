<template>
    <div>
        <PageHeader :pageBg="pageBg" :title="contents?.page_name" :subtitle="contents?.page_description"/>

        <v-row>
            <v-col>
                <v-container>
                    <v-col v-if="!contents.data.length">
                            <h2>No Data Available</h2>
                    </v-col>
                    <v-col v-else>
                        <v-row>
                            <v-col cols="12" md="6">
                                <v-row>
                                    <v-col cols="4" v-for="(item, index) in contents.data" :key="index">
                                        <v-card class="pt-3 rounded-xl d-flex align-center justify-center" height="150">
                                            <div class="rounded-xl services" @click="test(`tab-${item.id}`)">
                                                <v-img width="30" max-height="50" class="mx-auto" :src="item.image"></v-img>
                                            
                                                <v-card-text>
                                                    <h3 class="text-center">{{ item.name }} </h3>
                                                </v-card-text>
                                            </div>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-tabs-items v-model="model">
                                    <v-tab-item
                                        v-for="(item, index) in contents.data"
                                        :key="index"
                                        :id="`tab-${item.id}`"
                                    >
                                       <v-card color="accent" class="rounded-xl" outlined height="400">
                                            <v-card-title class="white mb-10">
                                                <div class="d-flex align-center">
                                                    <v-img :src="item.image" width="20" class="mr-3"></v-img>
                                                    <h3>{{ item.name }}</h3>
                                                </div>
                                            </v-card-title>
                                            <v-card-text>
                                                <div class="body-2 white--text font-weight-bold" v-html="item.description"></div>
                                            </v-card-text>
                                       </v-card>
                                    </v-tab-item>
                                </v-tabs-items>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-container>
            </v-col>
        </v-row>
        

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
            model: 'tab-1',
            contents: {
                page_description:'',
                page_image: '',
                page_keywords:'',
                page_label: '',
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
        test(param) {
            this.model = param;
        },
        async pull() {
            try {
                this.loading = true;
                let res =  await this.$api.get('/services');
                this.contents = {...res.data}
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

<style lang="scss">
.services:hover {
    cursor: pointer !important;
}
</style>
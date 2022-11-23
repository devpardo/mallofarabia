<template>
    <div>
        <PageHeader :pageBg="pageBg" :title="contents.page_label" :subtitle="contents.page_description"/>

        <v-row>
            <v-col>
                <v-container>
                    <v-row>
                        <v-col v-if="!contents.data">
                            <h2>No Data Available</h2>
                        </v-col>
                        <v-col v-else>
                            <v-row>
                                <v-col cols="12">
                                    <v-row dir="auto">
                                        <v-tabs
                                            @change="pull()"
                                            v-model="model"
                                            background-color="transparent"
                                            class="mb-10"
                                            >
                                            <v-tab
                                                v-for="(item, idx) in [ $t('available'), $t('previous')]"
                                                :key="idx"
                                            >
                                                {{ item }}
                                            </v-tab>
                                        </v-tabs>

                                        <v-tabs-items v-model="model">
                                            <v-tab-item v-for="(item, idx) in [$t('available'), $t('previous')]" :key="idx">
                                                <v-col cols="12" md="6" v-for="(content, index) in contents.data" :key="index">
                                                    <v-card class="mb-3 pb-3 px-3 pt-5 rounded-xl">
                                                        <v-card-text>
                                                            <v-img :src="content.image"></v-img>
                                                        </v-card-text>
                                                        <v-card-text>
                                                            <div>
                                                                <h2>{{ content.name }}</h2>
                                                                <p class="caption">{{ content.sample_description }}</p>
                                                            </div>
                                                        </v-card-text>
                                                        <v-card-text>
                                                            <v-row>
                                                                <v-col cols="12">
                                                                    <v-row>
                                                                        <v-col cols="6" md="6">
                                                                            <div class="text-center">
                                                                                <h3><v-icon small class="mr-3" color="primary">mdi-clock</v-icon>Dates</h3>
                                                                                <p>From {{ getDate(content.date_from) }} to {{ getDate(content.date_to) }}</p>
                                                                            </div>
                                                                        </v-col>
                                                                        <v-col cols="6" md="6">
                                                                            <div class="text-center">
                                                                                <h3><v-icon small class="mr-3" color="primary">mdi-map-marker</v-icon>Nearest Gates</h3>
                                                                                <ul class="list-unstyled">
                                                                                    <li>
                                                                                        {{ content.nearest_gate }}
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </v-col>
                                                                    </v-row>
                                                                </v-col>
                                                            </v-row>
                                                        </v-card-text>
                                                    </v-card>
                                                </v-col>
                                            </v-tab-item>
                                        </v-tabs-items>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
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
            model: 0,
            contents: {
                page_description:'',
                page_image: '',
                page_keywords:'',
                page_label: '',
                data: {}
            },
            status: 'available'
        }
    },
    computed: {
        pageBg() {
            return { 'background-image': `url(${this.contents?.page_image})` }
        }
    },
    methods: {
        test() {
            console.log(this.model);
        },
        getDate(date) {
            let cDate = new Date(date).toLocaleDateString();
            return cDate;
        },
        async pull() {
            try {
                let type = 'previous'
                if(this.model == 0) {
                    type = 'available'
                }

                let head = {
                    headers: {
                        'x-locale': this.$i18n.locale
                    },
                    params: { filter: type }
                }
                this.loading = true;
                let res =  await this.$api.get('/mall_events', head);
                this.contents = {...res.data}
                this.loading = false;
            } catch (error) {
                console.log(error);
                this.loading = false;
            }
        }
    },
    mounted() {
        this.pull(this.status);
    }
}
</script>

<style lang="scss" scoped>

</style>
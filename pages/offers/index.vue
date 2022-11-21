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
                            <v-col cols="12" md="6" v-for="(content, index) in contents.data" :key="index">
                                <v-card class="mb-3 pb-3 px-3 pt-5 rounded-xl">
                                    <v-card-title>
                                        <h3>{{ content.title }}</h3>
                                    </v-card-title>

                                    <v-card-subtitle>
                                        <p class="caption">{{ content.description }}</p>
                                    </v-card-subtitle>

                                    <v-card-text>
                                        <div>
                                            <v-carousel v-if="content.gallery.length" :show-arrows="content.gallery.length > 2" hide-delimiter-background hide-delimiters height="400">
                                                <v-carousel-item
                                                    v-for="(item,i) in content.gallery"
                                                    :key="i"
                                                    :src="item.path"
                                                    reverse-transition="fade-transition"
                                                    transition="fade-transition"
                                                ></v-carousel-item>
                                            </v-carousel>
                                        </div>

                                        <div class="mt-5">
                                            <p class="ma-0">Offer Starts {{ content.start_date }}</p>
                                            <p class="ma-0">Offer Ends {{ content.end_date }}</p>
                                        </div>
                                    </v-card-text>

                                    <v-card-text class="accent white--text">
                                        <div>
                                            <v-row>
                                                <v-col cols="6" md="3">
                                                    <v-img block contain max-width="150" class="mb-5" :src="content.logo_en" v-if="$i18n.locale !== 'ar'"/>
                                                    <v-img block contain max-width="150" class="mb-5" :src="content.logo_ar" v-else/>
                                                </v-col>
                                                <v-col cols="6" md="9">
                                                    <h4>{{ content.tenant_name }}</h4>
                                                    <p>{{ content.tenant_description }}</p>
                                                </v-col>
                                            </v-row>
                                        </div>

                                        <div>
                                            <v-row>
                                                <v-col cols="6" md="4">
                                                    <div class="text-center">
                                                        <h3><v-icon small class="mr-3" color="primary">mdi-map-marker</v-icon>Nearest Gates</h3>
                                                        <ul class="list-unstyled">
                                                            <li>{{ content.gate_number || 'None' }}</li>
                                                        </ul>
                                                    </div>
                                                </v-col>

                                                <v-col cols="6" md="4">
                                                    <div class="text-center">
                                                        <h3><v-icon small class="mr-3" color="primary">mdi-phone</v-icon>Phones</h3>
                                                        <ul class="list-unstyled">
                                                            <li>{{ 'None' }}</li>
                                                        </ul>
                                                    </div>
                                                </v-col>

                                                <v-col cols="6" md="4">
                                                    <div class="text-center">
                                                        <h3><v-icon small class="mr-3" color="primary">mdi-phone</v-icon>Social Links</h3>
                                                        <ul class="list-unstyled">
                                                            <li>{{ 'None' }}</li>
                                                        </ul>
                                                    </div>
                                                </v-col>
                                            </v-row>
                                        </div>
                                    </v-card-text>


                                    
                                </v-card>
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
        async pull() {
            try {
                this.loading = true;
                let res =  await this.$api.get('/offers');
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

<style lang="scss" scoped>

</style>
<template>
    <div>
        <PageHeader :pageBg="pageBg" :title="contents.page_label" :subtitle="contents.page_description"/>

        <v-row>
            <v-col>
                <v-container>
                    <v-row>
                        <v-col cols="4" v-for="(content, index) in contents.data" :key="index">
                            <v-card class="rounded-xl">
                                <v-img
                                    height="250"
                                    :src="content.image"
                                ></v-img>

                                <v-card-title>{{ content.name }}</v-card-title>

                                <v-card-text>
                                    <div class="my-4 text-subtitle-1">
                                        {{ content.description }}
                                    </div>
                                    <div class="caption">
                                        Quantity: {{ content.quantity }}
                                    </div>
                                </v-card-text>

                                <v-divider class="mx-4"></v-divider>

                                <v-card-title>Dimensions</v-card-title>
                                <v-card-text>
                                    <v-chip-group
                                        active-class="deep-purple accent-4 white--text"
                                        column
                                    >
                                        <v-chip  v-for="(dimension, i) in content.dimensions" :key="i">

                                            <span v-if="$i18n.locale !== 'en'">{{ dimension.dimension_ar }}</span>
                                            <span v-else>{{ dimension.dimension_en }}</span>

                                        </v-chip>
                                    </v-chip-group>
                                </v-card-text>

                                <v-divider class="mx-4"></v-divider>

                                <v-card-title>Prices</v-card-title>
                                <v-card-text>
                                    <div class="my-4 text-subtitle-1">
                                        <p v-for="(price, i) in content.prices" :key="i">
                                            <span v-if="$i18n.locale !== 'en'">{{ price.price_ar }}</span>
                                            <span v-else>{{ price.price_en }}</span>
                                        </p>
                                    </div>
                                </v-card-text>
                            </v-card>
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
                let res =  await this.$api.get('/posters');
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
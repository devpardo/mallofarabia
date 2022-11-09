<template>
    <div>
        <PageHeader :pageBg="pageBg" :title="contents.page_label" :subtitle="contents.page_description"/>
        <v-row>
            <v-col>
                <v-container>
                    <v-row>
                        <v-col cols="8">
                            <v-card class="rounded-xl">
                                <v-card-title class="h1">Leasing Request</v-card-title>
                                <v-divider class="mx-4"></v-divider>
                                <v-card-text>
                                    form will be here
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col cols="4">
                            <v-card class="rounded-xl">
                                <v-card-title>Email</v-card-title>
                                <v-divider class="mx-4"></v-divider>
                                <v-card-text>
                                    <div class="mb-3">{{ siteSettings?.leasing_email }}</div>
                                </v-card-text>

                                <v-card-title>Keep in touch</v-card-title>
                                <v-divider class="mx-4"></v-divider>
                                <v-card-text>
                                    <div class="mb-3">
                                        <div class="d-flex" v-if="siteSettings?.social_links">
                                            <v-btn
                                                v-for="(item, i) in siteSettings.social_links" :key="i"
                                                depressed
                                                text
                                                fab
                                                dark
                                                small
                                                color="grey"
                                                class="mr-1"
                                                @click="goLink(item.link_value)"
                                            >
                                                <v-icon>
                                                    {{ sm_links[item.link_type]['icon'] }}
                                                </v-icon>
                                            </v-btn>
                                        </div>
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
import { mapGetters } from 'vuex'
import mixin from '@/components/mixins'

export default {
    components: {
        Loading,
        PageHeader
    },
    mixins: [mixin],
    data() {
        return {
            loading: false,
            contents: {
                page_description:'',
                page_image: '',
                page_keywords:'',
                page_label: '',
                data: {}
            },
            sm_links: {
                facebook: {
                    icon: 'mdi-facebook',
                    to: ''
                },
                instagram: {
                    icon: 'mdi-instagram',
                    to: ''
                },
                twitter: {
                    icon: 'mdi-twitter',
                    to: ''
                },
                linkedin: {
                    icon: 'mdi-linkedin',
                    to: ''
                },
                tiktok: {
                    icon: '',
                    to: ''
                }
            }
        }
    },
    computed: {
        ...mapGetters('settings', ['siteSettings']),
        pageBg() {
            return { 'background-image': `url(${this.contents?.page_image})` }
        }
    },
    methods: {
        async pull() {
            try {
                this.loading = true;
                let res =  await this.$api.get('/leasing');
                this.contents = {...res.data?.data}
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
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
                                <v-card-text class="mt-6">
                                    <div>
                                        <v-form ref="form" class="">

                                            <v-alert :class="vb.smAndDown ? 'pa-2' : ''" type="success" v-if="success" dismissible @input="closeAlert()">Sent</v-alert>

                                            <v-text-field
                                                v-model="form.name"
                                                :rules="rules.name"
                                                class="rounded-lg mb-5"
                                                :label="$t('full_name')"
                                                
                                            ></v-text-field>  

                                            <v-text-field
                                                v-model="form.brand_name"
                                                :rules="rules.brand_name"
                                                class="rounded-lg mb-5"
                                                :label="$t('brand_name')"
                                                
                                            >
                                            </v-text-field>

                                            <v-text-field
                                                type="number"
                                                v-model="form.mobile"
                                                :rules="rules.mobile"
                                                class="rounded-lg mb-5"
                                                :label="$t('mobile_number')"
                                                
                                            ></v-text-field>

                                            <v-text-field
                                                v-model="form.email"
                                                :rules="rules.email"
                                                class="rounded-lg mb-5"
                                                type="email"
                                                :label="$t('email')"
                                                
                                            ></v-text-field>

                                            <v-textarea
                                                v-model="form.message"
                                                :rules="rules.message"
                                                
                                                class="rounded-lg mb-5"
                                                name="input-7-4"
                                                :label="$t('message')"
                                                value=""
                                            ></v-textarea>

                                            <div class="d-flex" :class="$i18n.locale == 'en' ? ['align-end justify-end'] : ['align-start justify-start']">
                                                <v-btn class="text-capitalize" width="30%" color="primary" large @click="send">
                                                    {{ $t('send') }} <v-icon class="ml-2">$vuetify.icons.values.moa_arrow_white</v-icon>
                                                </v-btn>
                                            </div>
                                        </v-form>
                                    </div>
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
            },
            form: {
                name: '',
                mobile: '',
                email: '',
                brand_name: '',
                message: ''
            },
            success: false,
            rules: {
                name: [value => !!value || 'Required.'],
                mobile: [
                    value => !!value || 'Required.',
                    value => (value || '').length == 11 || 'Max 11 characters'],
                email: [
                    value => !!value || 'Required.',
                    value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'Invalid e-mail.'
                    }
                ],
                brand_name: [value => !!value || 'Required.'],
                message: [value => !!value || 'Required.']
            }
        }
    },
    computed: {
        ...mapGetters('settings', ['siteSettings']),
        pageBg() {
            return { 'background-image': `url(${this.contents?.page_image})` }
        },
        vb() {
            return this.$vuetify.breakpoint
        }
    },
    methods: {
        async pull() {
            try {
                let head = {
                    headers: {
                        'x-locale': this.$i18n.locale
                    }
                }
                this.loading = true;
                let res =  await this.$api.get('/leasing', head);
                this.contents = {...res.data?.data}
                this.loading = false;
            } catch (error) {
                console.log(error);
                this.loading = false;
            }
        },
        closeAlert() {
            this.success = false
        },
        send() {

            let valid = this.$refs.form.validate();

            if(!valid) {
                return
            }
            
            this.$api.post('/apply_leasing', this.form).then(res => {
                this.success = true;
                this.reset();
            }).catch(err => {
                console.log(err.response.data.errors);
            })
        },
        reset() {
            this.$refs.form.reset();
            this.$refs.form.resetValidation();
        }
    },
    mounted() {
        this.pull();
    }
}
</script>

<style lang="scss" scoped>

</style>
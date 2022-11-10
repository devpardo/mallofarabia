<template>
    <div>
        <PageHeader :pageBg="pageBg" :title="contents.page_label" :subtitle="contents.page_description"/>

        <v-row>
            <v-col>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <h1>Vacancies</h1>
                            <v-divider class="my-3"></v-divider>
                        </v-col>
                        <v-col cols="12" sm="6" md="4" v-for="(content, index) in contents.data" :key="index">
                            <v-card class="rounded-xl">
                                <v-card-title class="p">
                                    {{ content.name }}
                                </v-card-title>
                                
                                <v-card-text>
                                    <span class="caption">Created at: {{ content.created_at }}</span>
                                </v-card-text>

                                <v-divider class="my-1"></v-divider>

                                <v-card-text>
                                    <p class="ma-0" v-html="content.description"></p>
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
                let res =  await this.$api.get('/careers');
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
<template>
    <div>
        <PageHeader :pageBg="pageBg" :title="'Opening Hours'" :subtitle="contents.page_description"/>

        <v-row>
            <v-col>
                <v-container>
                    <v-row>
                        <v-col cols="12" md="3" v-for="(content, index) in contents.data" :key="index">
                            <v-card class="rounded-xl">
                                <v-card-title>{{ content.name }}</v-card-title>
                                <v-divider class="mx-4"></v-divider>
                                <v-card-text>
                                    <div class="mb-3">Working Hours</div>
                                    <div class="text--primary">
                                        <span class="d-block" v-for="(hours, index) in content.working_hours" :key="index">
                                            From: {{ hours.from }} to To: {{ hours.to }}
                                        </span>
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
                let res =  await this.$api.get('/opening_hours');
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
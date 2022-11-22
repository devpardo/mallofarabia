<template>
    <div>
        <PageHeader :pageBg="pageBg" :title="contents.page_label" :subtitle="contents.page_description"/>

        <v-row>
            <v-col>
                <v-container>
                    <v-row>
                        <v-col v-if="!contents.data">
                            <h2>No Posts Available</h2>
                        </v-col>
                        <v-col v-else cols="12" v-for="(content, index) in contents.data" :key="index" class="my-10">
                            <v-card class="pa-10 rounded-lg" @click="goTo(content)">
                                <v-img height="200" :src="content.image" class="pt-3 rounded-lg"></v-img>
                                <v-card-text>
                                    <h2 class="mt-2 mb-2">{{ content.title }}</h2>
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
                data: null
            }
        }
    },
    computed: {
        pageBg() {
            return { 'background-image': `url(${this.contents?.page_image})` }
        }
    },
    methods: {
        goTo(param) {
            this.$router.push(`/blog/${param.slug}`)
        },
        async pull() {
            try {
                let head = {
                    headers: {
                        'x-locale': this.$i18n.locale
                    }
                }
                this.loading = true;
                let res =  await this.$api.get('/blog_posts', head);
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
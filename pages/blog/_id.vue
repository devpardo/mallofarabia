<template>
    <div>
        <PageHeader :pageBg="pageBg" :title="contents.page_label" :subtitle="contents.page_description"/>

        <v-row>
            <v-col>
                <v-container v-if="contents">
                    <v-row>
                        <v-col cols="12">
                            <ul class="list-unstyled breadcrumb">
                                <li><nuxt-link to="/blog">Blog List</nuxt-link> > </li>
                                <li>{{ contents.title }}</li>
                            </ul>
                        </v-col>
                        <v-col cols="12">
                            <div>
                                <v-img height="200" :src="contents.image" class="pt-3 mb-3 rounded-lg"></v-img>
                                <h3>{{ contents.title }}</h3>
                                <span class="caption">Post Date: {{ contents.post_date }}</span>
                                <div class="mt-10" v-html="contents.content"></div>
                            </div>
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
        test(param) {
            this.$router.push(`/blog/${param.slug}`)
        },
        async pull() {
            try {
                this.loading = true;
                let res =  await this.$api.get(`/blog_posts/${this.$route.params.id}`);
                this.contents = {...res.data.data}

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

<style lang="scss">
.breadcrumb {
    display: flex;
}
.breadcrumb > li{
    margin-right: .5em;
}
</style>
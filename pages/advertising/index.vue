<template>
    <div>
        <PageHeader :pageBg="pageBg" :title="contents.page_label" :subtitle="contents.page_description"/>

        <v-row>
            <v-col>
                <v-container>
                    {{ contents }}
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
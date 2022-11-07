<template>
    <v-row class="page-header white--text primary" :style="pageBg">
        <v-col class="d-flex align-center justify-center">
            <v-container class="text-center">
                <h1>{{ title }}</h1>
                <p>{{ subtitle }}</p>
            </v-container>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'PageHeader',
    props: {
        pageBg: {
            required: true,
            type: Object
        },
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.page-header {
    height: 300px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
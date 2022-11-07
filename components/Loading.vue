<template>
    <v-overlay opacity="1" color="white" :value="loading">

        <v-img :src="require('../assets/images/loading.gif')"/>

        <!-- <v-progress-circular
            indeterminate
            color="primary"
            size="64"
        ></v-progress-circular> -->
    </v-overlay>
</template>

<script>
export default {
    name: 'Loading',
    props: {
        loading: {
            required: true,
            default: false
        }
    }
}
</script>

<style>

</style>
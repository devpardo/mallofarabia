<template>
    <v-overlay :value="loading">

        <v-icon>mdi-send</v-icon>

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
<template>
    <v-container class="mb-10">
        <v-row>
            <v-col cols="12" md="6">
                <v-card color="red" class="rounded-xl">
                    <v-img
                        height="200"
                        :src="require('../assets/images/advertising.png')"
                        class="white--text d-flex align-center justify-center"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    >
                        <div class="text-left mx-auto" style="width: 300px">
                            <h2>Advertising</h2>
                            <p>Mall of Tanta offers your business unlimited media options to advertise and promote your brand</p>
                        </div> 
                    </v-img>
                </v-card>
            </v-col>

            <v-col cols="12" md="6">
                <v-card color="red" class="rounded-xl">
                    <v-img
                        height="200"
                        :src="require('../assets/images/leasing.png')"
                        class="white--text d-flex align-center justify-center"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    >
                        <div class="text-left mx-auto" style="width: 300px">
                            <h2>Leasing</h2>
                            <p>Connect to submit your leasing interest in our shopping malls.</p>
                        </div> 
                    </v-img>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'BannerCards',
    data() {
        return {
            image: 'https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ'
        }
    }
}
</script>

<style>

</style>
<template>
    <v-container class="mb-10">
        <v-row>
            <v-col cols="12" md="6">
                <v-hover>
                    <template v-slot:default="{ hover }">
                        <v-card color="primary" class="rounded-xl">
                            <v-img
                                height="200"
                                :src="require('../assets/images/advertising.png')"
                                class="white--text d-flex align-center justify-center"
                                gradient="to bottom, rgba(0, 35, 75,.1), rgba(0, 35, 75,.5)"
                            >
                                <div class="text-left mx-auto" style="width: 300px">
                                    <h2>Advertising</h2>
                                    <p>Mall of Tanta offers your business unlimited media options to advertise and promote your brand</p>
                                </div> 

                                <v-fade-transition>
                                    <v-overlay
                                        v-if="hover"
                                        absolute
                                        color="accent"
                                    >
                                    </v-overlay>
                                </v-fade-transition>
                            </v-img>
                        </v-card>
                    </template>
                </v-hover>
            </v-col>

            <v-col cols="12" md="6">
                <v-hover>
                    <template v-slot:default="{ hover }">
                        <v-card color="primary" class="rounded-xl">
                            <v-img
                                height="200"
                                :src="require('../assets/images/leasing.png')"
                                class="white--text d-flex align-center justify-center"
                                gradient="to bottom, rgba(0, 35, 75,.1), rgba(0, 35, 75,.5)"
                            >
                                <div class="text-left mx-auto" style="width: 300px">
                                    <h2>Leasing</h2>
                                    <p>Connect to submit your leasing interest in our shopping malls.</p>
                                </div> 

                                <v-fade-transition>
                                    <v-overlay
                                        v-if="hover"
                                        absolute
                                        color="accent"
                                    >
                                    </v-overlay>
                                </v-fade-transition>
                            </v-img>
                        </v-card>
                    </template>
                </v-hover>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'BannerCards',
    data() {
        return {
            hover: false
        }
    }
}
</script>

<style>

</style>
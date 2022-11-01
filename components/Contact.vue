<template>
  <div class="contact mb-10">
    <v-container>
        <div class="contact-container pa-0 overflow-auto">
            <v-img
                min-height="500" max-height="800"
                :src="require('../assets/images/contact-form.jpeg')"
                class="white--text"
                gradient="to bottom, rgba(0, 35, 75,.3), rgba(0, 35, 75, 1)"
            >

            <v-row class="pa-10">
                <v-col cols="12" md="6" :order="$i18n.locale == 'en' ? 'first': 'last'">
                    <div class="d-flex align-center justify-start fill-height pa-5">
                        <div class="d-flex flex-column" style="width: 100%">
                            <h1 dir="auto" class="text-uppercase">{{ $t('contact_us') }}</h1>
                            <p dir="auto">{{ $t('contact_tagline')}}</p>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" md="6">
                    <div class="contact-form">
                        <v-text-field
                            v-model="form.name"
                            color="white"
                            class="custom-input rounded-lg mb-5 white--text"
                            :label="$t('full_name')"
                            outlined dense hide-details="true"
                        ></v-text-field>  

                        <v-text-field
                            v-model="form.mobile"
                            color="white"
                            class="custom-input rounded-lg mb-5 white--text"
                            :label="$t('mobile_number')"
                            outlined dense hide-details="true"
                        ></v-text-field>

                        <v-text-field
                            v-model="form.email"
                            color="white"
                            class="custom-input rounded-lg mb-5 white--text"
                            type="email"
                            :label="$t('email')"
                            outlined dense hide-details="true"
                        ></v-text-field>

                        <v-text-field
                            v-model="form.subject"
                            color="white"
                            class="custom-input rounded-lg mb-5 white--text"
                            :label="$t('subject')"
                            outlined dense hide-details="true"
                        ></v-text-field>

                        <v-textarea
                            v-model="form.message"
                            outlined dense hide-details="true"
                            class="custom-input rounded-lg mb-5 white--text"
                            name="input-7-4"
                            :label="$t('message')"
                            value=""
                        ></v-textarea>

                        <div class="d-flex" :class="$i18n.locale == 'en' ? ['align-end justify-end'] : ['align-start justify-start']">
                            <v-btn class="text-capitalize" width="30%" color="primary" large>
                                {{ $t('send') }} 
                            </v-btn>
                        </div>
                    </div>
                </v-col>
            </v-row>

            </v-img>
        </div>
    </v-container>
    
  </div>
</template>

<script>
export default {
    name: 'Contact',
    data() {
        return {
            form: {
                name: '',
                mobile: '',
                email: '',
                subject: '',
                message: ''
            }
        }
    }
}
</script>

<style lang="scss">
.contact-container {
    padding: 10px;
    border-radius: 50px;
    min-height: 300px;
    background-color: $accent;

    .contact-form {
        padding: 1em;
    }

    .v-responsive__sizer {
        padding-bottom: 0 !important
    }
    
}

.custom-input.v-text-field--outlined.v-input--dense .v-label{
    color: #fff !important;
}

.custom-input.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state) > .v-input__control > .v-input__slot fieldset {
    border-color: #fff !important;
}

.custom-input.v-text-field--outlined.v-input--is-focused fieldset, .v-text-field--outlined.v-input--has-state fieldset {
  border: 2px solid #fff;
  color: #fff !important;
}

.custom-input.v-input input,
.custom-input.v-input textarea{
    color: #fff !important;
    font-size: .9em;
}

.custom-input .v-label {
    color: #fff !important;
    opacity: 1;
    font-size: .9em;
}


</style>
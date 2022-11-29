<template>
    <div>
        <PageHeader :pageBg="pageBg" :title="contents?.page_name" :subtitle="contents?.page_description"/>

        <v-row>
            <v-col>
                <v-container>
                    <v-row>
                        <v-col v-if="!contents.data.length">
                            <h2>No Data Available</h2>
                        </v-col>
                        <v-col v-else>
                            <v-row no-gutters>
                                <v-col cols="12" md="3" :order="!vb.smAndDown ? 'first': 'last'">
                                    <v-list>
                                        <h2 class="mb-3">Categories</h2> 

                                        <v-list-item @click="test(-1)">
                                            <v-list-item-content>
                                                <v-list-item-title>All</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-divider></v-divider>

                                        <div v-for="(item, i) in categories" :key="i">
                                            <v-list-item v-if="!item.sub_categories.length" @click="test(i)">
                                                <v-list-item-content>
                                                    <v-list-item-title>{{ item.name }} ({{ item.tenants_count }})</v-list-item-title>
                                                </v-list-item-content>
                                            </v-list-item>
                                            

                                            <v-list-group v-else
                                                :value="true">

                                                <template v-slot:activator>
                                                    <v-list-item-title>{{ item.name }} ({{ item.tenants_count }})</v-list-item-title>
                                                </template>

                                                <v-list-item  v-for="(sub, idx) in item.sub_categories" :key="idx">
                                                    {{ sub.name }} ({{ sub.tenants_count }})
                                                </v-list-item>

                                            </v-list-group>

                                            <v-divider></v-divider>
                                        </div>
                                    </v-list>
                                </v-col>
                                <v-col cols="12" md="9" class="pa-5">
                                    <v-card class="mb-3 pb-3 px-3 pt-5" v-for="(content, index) in contents.data" :key="index" >
                                        <v-card-title class="d-flex justify-space-between align-center" >
                                            <div>
                                                 <v-img v-if="$i18n.locale !== 'ar'" :src="content.logo_en" contain width="100"></v-img>
                                                 <v-img v-else :src="content.logo_ar" contain width="100"></v-img>
                                            </div>

                                            <div style="width: 80%">
                                                <h3>{{ content.name }}</h3>
                                                <p class="caption">{{ content.description }}</p>
                                            </div>
                                        </v-card-title>
                                        <v-card-text>
                                            <div>
                                                <v-carousel v-if="content.images.length" hide-delimiter-background hide-delimiters height="200">
                                                    <v-carousel-item
                                                        v-for="(item,i) in content.images"
                                                        :key="i"
                                                        :src="item.path"
                                                        reverse-transition="fade-transition"
                                                        transition="fade-transition"
                                                    ></v-carousel-item>
                                                </v-carousel>
                                            </div>
                                        </v-card-text>
                                        <v-card-text>
                                            <v-row>
                                                <v-col cols="12" md="8">
                                                    <v-row>
                                                        <v-col cols="6" md="4">
                                                            <div class="text-center">
                                                                <h3><v-icon small class="mr-3" color="primary">mdi-clock</v-icon>Working Hours</h3>
                                                                <p>{{ content.working_hours }}</p>
                                                            </div>
                                                        </v-col>
                                                        <v-col cols="6" md="4">
                                                            <div class="text-center">
                                                                <h3><v-icon small class="mr-3" color="primary">mdi-phone</v-icon> Store Numbers</h3>
                                                                <ul class="list-unstyled">
                                                                    <li v-for="(phone, i) in content.phones" :key="i">
                                                                        {{ phone }}
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </v-col>
                                                        <v-col cols="6" md="4">
                                                            <div class="text-center">
                                                                <h3><v-icon small class="mr-3" color="primary">mdi-map-marker</v-icon>Nearest Gates</h3>
                                                                <ul class="list-unstyled">
                                                                    <li v-for="(gate, i) in content.gates" :key="i">
                                                                        {{ gate.number }}
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </v-col>
                                                        <v-col cols="12">
                                                            <!-- <v-btn
                                                                v-for="(item, i) in content.social_links" :key="i"
                                                                depressed
                                                                text
                                                                fab
                                                                dark
                                                                small
                                                                color="grey"
                                                                class="mr-1"
                                                                @click="goLink(item.link_value)"
                                                            >
                                                                <v-icon>
                                                                    {{ sm_links[item.link_type]['icon'] }}
                                                                </v-icon>
                                                            </v-btn> -->
                                                            
                                                        </v-col>
                                                    </v-row>
                                                </v-col>
                                            </v-row>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
        

        <Loading :loading="loading"/>
    </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import Loading from "@/components/Loading";

export default {
  components: {
    Loading,
    PageHeader,
  },
  data() {
    return {
      loading: false,
      selected: "",
      categories: [],
      contents: {
        page_description: "",
        page_image: "",
        page_keywords: "",
        page_label: "",
        data: {},
      },
      sm_links: {
        facebook: {
            icon: 'mdi-facebook',
            to: ''
        },
        instagram: {
            icon: 'mdi-instagram',
            to: ''
        },
        twitter: {
            icon: 'mdi-twitter',
            to: ''
        },
        linkedin: {
            icon: 'mdi-linkedin',
            to: ''
        },
        tiktok: {
            icon: '',
            to: ''
        }
    },
    };
  },
  computed: {
    pageBg() {
      return { "background-image": `url(${this.contents?.page_image})` };
    },
    vb() {
        return this.$vuetify.breakpoint
    }
  },
  methods: {
    test(param) {
      console.log(param);
    },
    async pull() {
      try {
        let head = {
            headers: {
                'x-locale': this.$i18n.locale
            }
        }
        this.loading = true;
        let res = await this.$api.get("/shops", head);
        this.contents = { ...res.data };

        let categories = await this.$api.get("/section_categories");
        this.categories = categories.data.data;

        this.loading = false;
      } catch (error) {
        console.log(error);
        this.loading = false;
      }
    },
  },
  mounted() {
    this.pull();
  },
};
</script>

<style lang="scss" scoped>
</style>
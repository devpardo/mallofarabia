const state = () => ({
    settings: null,
    loading: true,
    lang: 'en'
})
  
const getters = {
    siteSettings(state) {
        return state.settings
    },
    isLoading() {
        return state.loading
    },
    lang() {
        return state.lang
    }
}
  
const mutations = {
    setSettings(state, payload) {
        state.settings = payload
    },
    setLoading(state, payload) {
        state.loading = payload
    },
    setLang(state, payload) {
        state.lang = payload
    },
}
  
const actions = {
    async setSettings({commit}) {
        commit('setLoading', true);
        
        let settings = await this.$api.get('/settings');
        
        commit('setSettings', settings.data.data);
        localStorage.setItem('settings', JSON.stringify(settings.data.data));
        commit('setLoading', false);
    },
    setLang({commit}, value) {
        //localStorage.setItem('lang', value);

        console.log('---------');
        console.log(localStorage.getItem('lang'));
        commit('setLang', value);
    }
}

export default {
    state, getters, mutations, actions
}
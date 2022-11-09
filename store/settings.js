const state = () => ({
    settings: null,
    loading: true
})
  
const getters = {
    siteSettings(state) {
        return state.settings
    },
    isLoading() {
        return state.loading
    }
}
  
const mutations = {
    setSettings(state, payload) {
        state.settings = payload
    },
    setLoading(state, payload) {
        state.loading = payload
    }
}
  
const actions = {
    async setSettings({commit}) {
        commit('setLoading', true);
        
        let settings = await this.$api.get('/settings');
        
        commit('setSettings', settings.data.data);
        window.localStorage.setItem('settings', JSON.stringify(settings.data.data));
        commit('setLoading', false);
    }
}

export default {
    state, getters, mutations, actions
}
export const state = () => ({
    settings: null
})
  
export const getters = {
    siteSettings(state) {
        return state.settings
    }
}
  
export const mutations = {
    setSettings(state, payload) {
        state.settings = payload
    }
}
  
export const actions = {
    async setSettings({commit}) {
        let settings = await this.$api.get('/settings');
        console.log(settings)
        commit('setSettings', settings.data.data);
    }
}
export const mutations = {
    setData(state, payload) {
        Object.entries(
            Object.entries(payload)
                .reduce((accu, [key, value]) => ({
                    ...accu,
                    ...Object.keys(accu).includes(key) && { [key]: value },
                }), { ...state }),
        )
            .forEach(([key, value]) => { if (state[key] !== value) state[key] = value })
    },
}

export const actions = {
    setData({ commit }, data) {
        commit('setData', data)
    },
}

export const getters = {
    data(s) {
        return s
    },
}

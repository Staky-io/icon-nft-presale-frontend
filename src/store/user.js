import { modelUser } from '~/assets/scripts/utils/firebase'

import {
    mutations as modelMutations,
    actions as modelActions,
    getters as modelGetters,
} from '~/assets/scripts/utils/store'

export const state = () => ({
    ...modelUser,
    isLoggedIn: false,
})

export const mutations = {
    ...modelMutations,
}

export const actions = {
    ...modelActions,
}

export const getters = {
    ...modelGetters,
}

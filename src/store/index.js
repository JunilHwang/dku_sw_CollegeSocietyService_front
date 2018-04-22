import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        isMember: false,
        isAdmin: false,
        member: {},
        isHeader: true,
        isFooter: true
    },
    mutations: {
        signed () { }
    }
})

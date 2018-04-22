import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const member = sessionStorage.getItem('member') ? JSON.parse(sessionStorage.getItem('member')) : {}
const isMember = sessionStorage.getItem('member') !== null

export const store = new Vuex.Store({
    state: {
        isMember: isMember,
        isAdmin: false,
        isHeader: true,
        isFooter: true,
        member: member
    },
    mutations: {
        login (state, data) {
            state.isMember = true
            state.member = data
            sessionStorage.setItem('member', JSON.stringify(data))
        },
        logout (state) {
            state.isMember = false
            state.member = {}
            sessionStorage.clear()
        },
        memberUpdate (state, changeData) {
            state.member.name = changeData.name
            state.member.nickname = changeData.nickname
            state.member.email = changeData.email
            sessionStorage.setItem('member', JSON.stringify(state.member))
        },
        memberPwUpdate (state, changeData) {
            state.member.pw = changeData.pw
            sessionStorage.setItem('member', JSON.stringify(state.member))
        }
    }
})

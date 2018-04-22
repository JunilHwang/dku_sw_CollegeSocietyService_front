import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Login from '@/components/login'
import Register from '@/components/register'
import Mypage from '@/components/mypage'
import MypageInfo from '@/components/mypage_info'
import MypagePw from '@/components/mypage_pw'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/mypage',
            name: 'Mypage',
            component: Mypage
        },
        {
            path: '/mypage/info',
            name: 'MypageInfo',
            component: MypageInfo
        },
        {
            path: '/mypage/pw',
            name: 'MypagePw',
            component: MypagePw
        }
    ]
})

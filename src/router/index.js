import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Login from '@/components/login'
import Register from '@/components/register'
import Mypage from '@/components/mypage/index'
import MypageInfo from '@/components/mypage/info'
import MypagePw from '@/components/mypage/pw'
import Board from '@/components/board/index'
import BoardList from '@/components/board/list'
import BoardView from '@/components/board/view'
import BoardWrite from '@/components/board/write'

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
        },
        {
            path: '/board/',
            name: 'Board',
            component: Board,
            children: [
                {
                    path: '',
                    name: 'BoardList',
                    component: BoardList
                },
                {
                    path: 'list/:category',
                    name: 'BoardList',
                    component: BoardList
                },
                {
                    path: 'view/:category/:idx',
                    name: 'BoardView',
                    component: BoardView
                },
                {
                    path: 'write/:category',
                    name: 'BoardWrite',
                    component: BoardWrite
                },
                {
                    path: 'write/:category/:idx',
                    name: 'BoardWrite',
                    component: BoardWrite
                }
            ]
        }
    ]
})

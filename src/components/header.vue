<template>
    <header id="header">
        <div class="content">
            <div class="util">
                <template v-if="$store.state.isMember">
                    <a href="#" @click="logout">로그아웃</a>
                    <router-link to="/mypage">마이페이지</router-link>
                </template>
                <template v-else>
                    <router-link to="/login">로그인</router-link>
                    <router-link to="/register">회원가입</router-link>
                </template>
            </div>
            <h3 class="logo"><router-link to="/">College Society Service</router-link></h3>
            <nav class="gnb">
                <ul>
                    <li><a href="#">학과소개</a></li>
                    <li><router-link to="/board/" @click.native="$router.push('/board/list/1')">커뮤니티</router-link></li>
                    <li><a href="#">학생회 활동 내역</a></li>
                    <li v-if="$store.state.isAdmin"><a href="#">관리자</a></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>

export default {
    name: 'siteHeader',
    methods: {
        logout () {
            this.$store.commit('logout')
            this.$router.push('/')
            alert('로그아웃 되었습니다.')
        }
    }
}

</script>

<style lang="scss" scoped>
    @import "@/styles/_base.scss";
    #header{background:#fff;border-bottom:1px solid #ddd;
        >div{@extend %auto-center;position:relative;display:flex;justify-content:space-between;align-items:center;height:100px;}
    }
    .logo{color:$color1-2;font-size:25px;
        a{text-decoration:none;}
    }
    .util{position:absolute;right:0;top:0;line-height:20px;font-size:11px;@include clr();
        a{float:left;line-height:30px;
            +a:before{content:"";width:1px;height:10px;margin:0 10px;background:#aaa;display:inline-block;vertical-align:middle;}
        }
    }
    .gnb{
        ul{display:flex;}
        a{display:block;font-size:17px;padding:0 40px;transition:.3s;text-decoration:none;position:relative;
            &:before{content:"";display:block;position:absolute;bottom:-10px;$size:50%;left:$size;right:$size;background:$color1;height:2px;transition:.3s;}
            &:hover,
            &.router-link-active{color:$color1;
                &:before{$size:40%;left:$size;right:$size;}
            }
        }
    }
</style>

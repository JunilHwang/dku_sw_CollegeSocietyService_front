<template>
    <div class="login_wrap">
        <h2 class="content-title">로그인</h2>
        <form action="" method="post" @submit="memberLogin">
            <section class="login">
                <p>
                    <label>
                        <input type="text" name="id" id="login_id" size="80" placeholder="아이디" class="input fullSize" required autofocus>
                    </label>
                </p>
                <p>
                    <label>
                        <input type="password" name="pw" id="login_pw" size="80" placeholder="비밀번호" class="input fullSize" required>
                    </label>
                </p>
                <p>
                    <button type="submit" class="btn submit fullSize">로그인</button>
                </p>
                <p>
                    <router-link to="/register" tag="button" class="btn info fullSize">회원가입</router-link>
                </p>
            </section>
        </form>
    </div>
</template>

<script>
export default {
    name: 'login',
    data () {
        return { }
    },
    created () {
        if (this.$store.state.isMember) {
            alert('회원은 이용할 수 없습니다.')
            this.$router.go(-1)
        }
    },
    mounted () {
        $('#login_id').focus()
    },
    methods: {
        memberLogin (event) {
            const frm = $(event.target)
            const _this = this
            this.postData('/login', frm.serialize(), function (data) {
                if (data !== 'null') {
                    _this.$store.commit('login', JSON.parse(data))
                    alert('로그인 되었습니다.')
                    _this.$router.push('/')
                } else {
                    alert('아이디 또는 비밀번호가 일치하지 않습니다.')
                    frm[0].id.focus()
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "@/styles/_base.scss";
    .login {
        width: 350px;
        margin: 0 auto;
        border-radius: 3px;
        label {
            display:block;
            cursor: pointer;
        }
        p {
            margin-bottom: 10px;
        }
    }
    .title {
        font-size: 25px;
        margin-bottom: 20px;
        text-align: center;
        color: $color1;
    }
</style>

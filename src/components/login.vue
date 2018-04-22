<template>
    <div class="login_wrap">
        <form action="" method="post">
            <section class="login">
                <h2 class="title">College Society Service</h2>
                <p>
                    <label>
                        <input type="text" name="id" id="login_id" size="80" placeholder="아이디" class="input fullSize" required autofocus>
                    </label>
                </p>
                <p>
                    <label>
                        <input type="password" name="pwd" id="login_pw" size="80" placeholder="비밀번호" class="input fullSize" required>
                    </label>
                </p>
                <p>
                    <button type="submit" class="btn submit full">로그인</button>
                </p>
                <p>
                    <button type="button" class="btn info full">회원가입</button>
                </p>
                <footer class="copyright">
                    Copyright (C) 2018 <em>po-fect</em> All Right Reserved.
                </footer>
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
        $('#login_id').focus()
    }
}
</script>

<style lang="scss" scoped>
    @import "@/styles/_base.scss";
    .login_wrap{
        background: #f5f5f5;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .login {
        max-width: 350px;
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
    .copyright {
        font-size: 11px;
        color: #aaa;
        text-align: center;
        margin-top: 20px;
        em {
            color: #666
        }
    }
</style>

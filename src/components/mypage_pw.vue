<template>
    <div class="register">
        <h2 class="content-title">마이페이지</h2>
        <div class="frm_type_column">
            <form action="" method="post" @submit="memberUpdate">
                <fieldset>
                    <legend class="legend">비밀번호 변경</legend>
                    <ul>
                        <li>
                            <label>
                                <strong>현재 비밀번호 확인</strong>
                                <input type="password" name="pw_before" class="input fullSize" placeholder="현재 비밀번호를 입력해주세요" required>
                            </label>
                        </li>
                        <li>
                            <label>
                                <strong>새 비밀번호</strong>
                                <input type="password" name="pw" class="input fullSize" placeholder="현재 비밀번호를 입력해주세요" required>
                            </label>
                        </li>
                        <li>
                            <label>
                                <strong>새 비밀번호 확인</strong>
                                <input type="password" name="pw_re" class="input fullSize" placeholder="현재 비밀번호를 입력해주세요" required>
                            </label>
                        </li>
                    </ul>
                    <div class="btn_group">
                        <button type="submit" class="btn submit">작성완료</button>
                        <router-link to="/mypage" tag="button" class="btn default">뒤로가기</router-link>
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MypagePw',
    data () {
        return {
            member: {}
        }
    },
    created () {
        this.member = this.$store.state.member
    },
    mounted () {
        document.forms[0].pw_before.focus()
    },
    methods: {
        memberUpdate (event) {
            const _this = this
            if (this.member.pw !== event.target.pw_before.value) {
                alert('현재 비밀번호가 일치하지 않습니다.')
                return
            }
            this.putData(`/member/${this.member.idx}`, {pw: event.target.pw.value}, function (data) {
                if (data === 'true') {
                    alert('완료되었습니다')
                    const changeData = {
                        pw: event.target.pw.value
                    }
                    _this.$store.commit('memberPwUpdate', changeData)
                    _this.$router.push('/mypage')
                } else {
                    alert('에러')
                    console.log(data)
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "@/styles/_base.scss";
   .register{width:600px;margin:0 auto;}
</style>

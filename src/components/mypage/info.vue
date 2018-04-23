<template>
    <div class="register">
        <h2 class="content-title">마이페이지</h2>
        <div class="frm_type_column">
            <form action="" method="post" @submit="memberUpdate">
                <fieldset>
                    <legend class="legend">회원정보 변경</legend>
                    <ul>
                        <li>
                            <label>
                                <strong>성명</strong>
                                <input type="text" name="name" :value="member.name || null" class="input fullSize" placeholder="이름을 입력해주세요." required>
                            </label>
                        </li>
                        <li>
                            <label>
                                <strong>닉네임</strong>
                                <input type="text" name="nickname" :value="member.nickname || null" class="input fullSize" placeholder="닉네임을 입력해주세요." required>
                            </label>
                        </li>
                        <li>
                            <label>
                                <strong>이메일</strong>
                                <input type="text" name="email" :value="member.email || null" class="input fullSize" placeholder="이메일을 입력해주세요." required>
                            </label>
                        </li>
                        <li>
                            <label>
                                <strong>현재 비밀번호 확인</strong>
                                <input type="password" name="pw" class="input fullSize" placeholder="현재 비밀번호를 입력해주세요" required>
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
    name: 'MypageInfo',
    data () {
        return {
            member: {}
        }
    },
    created () {
        this.member = this.$store.state.member
    },
    mounted () {
        document.forms[0].name.focus()
    },
    methods: {
        memberUpdate (event) {
            const _this = this
            if (this.member.pw !== event.target.pw.value) {
                alert('비밀번호가 일치하지 않습니다.')
                return
            }
            this.putData(`/member/${this.member.idx}`, $(event.target).serialize(), function (data) {
                if (data === 'true') {
                    alert('완료되었습니다')
                    const changeData = {
                        name: event.target.name.value,
                        nickname: event.target.nickname.value,
                        email: event.target.email.value
                    }
                    _this.$store.commit('memberUpdate', changeData)
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

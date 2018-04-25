<template>
    <div class="board-write">
        <h3 class="board-title">게시물 등록</h3>
        <form action="" method="post" @submit="boardInsert">
            <fieldset>
                <div class="frm_type_column">
                    <input type="hidden" name="writer" :value="$store.state.member.name">
                    <input type="hidden" name="idx" v-if="$route.params.idx" :value="$route.params.idx">
                    <ul>
                        <li>
                            <label>
                                <strong>제목</strong>
                                <input type="text" name="subject" size="80" placeholder="제목을 입력해주세요" class="input fullSize" :value="boardData.subject" autofocus>
                            </label>
                        </li>
                        <li>
                            <label>
                                <strong>내용</strong>
                                <textarea name="content" placeholder="내용을 입력해주세요" class="fullSize" cols="80" rows="10" v-html="boardData.content"></textarea>
                            </label>
                        </li>
                    </ul>
                    <div class="btn_group">
                        <a href="#" class="btn default" @click="$router.push(-1)">목록</a>
                        <button type="submit" class="btn submit">전송</button>
                    </div>
                </div>
            </fieldset>
        </form>
    </div>
</template>

<script>
export default {
    name: 'BoardWrite',
    data: function () {
        return {
            boardData: {
                subject: null,
                content: null
            }
        }
    },
    created () {
        if (this.$route.params.idx) {
            const _this = this
            this.getJsonData(`/board/${this.$route.params.idx}`, function (data) {
                _this.boardData = data
            })
        }
    },
    methods: {
        boardInsert (event) {
            const _this = this
            if (_this.$route.params.idx) {
                this.putData(`/board/${this.$route.params.idx}`, $(event.target).serialize(), function (data) {
                    if (data === 'true') {
                        alert('수정되었습니다')
                        _this.$router.push(`/board/view/${_this.$route.params.category}/${_this.$route.params.idx}`)
                    } else {
                        alert('오류!')
                        console.log(data)
                    }
                })
            } else {
                this.postData(`/board/${this.$route.params.category}`, $(event.target).serialize(), function (data) {
                    alert('추가되었습니다')
                    _this.$router.push(`/board/list/${_this.$route.params.category}`)
                })
            }
        }
    }
}
</script>

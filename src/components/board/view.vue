<template>
    <div class="board-view">
        <h3>게시물 조회</h3>
        <div class="view_type_column">
            <ul>
                <li>
                    <strong class="lbl">작성자</strong>
                    <div class="desc" v-html="boardData.writerName" />
                </li>
                <li>
                    <strong class="lbl">제목</strong>
                    <div class="desc" v-html="boardData.subject" />
                </li>
                <li>
                    <strong class="lbl">작성일</strong>
                    <div class="desc" v-html="getDateFormat(boardData.date)" />
                </li>
                <li class="content">
                    <div v-html="getContent()" />
                </li>
            </ul>
            <div class="btn_group">
                <router-link :to="`/board/list/${$route.params.category}`" class="btn default">목록</router-link>
                <template v-if="$store.state.member.idx === boardData.writer">
                    <router-link :to="`/board/write/${$route.params.category}/${$route.params.idx}`" class="btn submit">수정</router-link>
                    <a href="#" class="btn submit" @click="boardDelete">삭제</a>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BoardView',
    data: function () {
        return {
            boardData: {
                writer: '',
                subject: '',
                date: '',
                content: ''
            }
        }
    },
    methods: {
        boardDelete () {
            if (!confirm('정말로 삭제하시겠습니까?')) {
                return false
            }
            const idx = this.$route.params.idx
            const _this = this
            this.deleteData(`/board/${idx}`, function (data) {
                alert('삭제 되었습니다.')
                _this.$router.push('/board/list/' + _this.$route.params.category)
            })
        },
        getContent () {
            return this.boardData.content.replace(/\n/g, '<br />')
        }
    },
    created () {
        const _this = this
        this.getJsonData(`/board/${this.$route.params.idx}`, function (data) {
            _this.boardData = data
        })
    }
}
</script>

<style lang="scss" scoped>
    .view_type_column{border-top:2px solid #666;margin-top:15px;}
    .content{min-height:200px;padding:20px}
</style>

<template>
    <div class="board-list">
        <h3 class="board-title">게시물 목록</h3>
        <ul v-if="boardList.length">
            <li v-for="data in boardList" :key="data.idx">
                <strong class="subject" v-html="data.subject" />
                <p class="desc" v-html="data.content" />
                <p class="date" v-html="data.date" />
            </li>
        </ul>
        <p v-else>
            게시물이 없습니다.
        </p>
        <div class="btn_group right" v-if="$store.state.isMember">
            <router-link :to="'/board/write/'+$route.params.category" class="btn default">글작성</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BoardList',
    data: function () {
        return {
            boardList: []
        }
    },
    created () {
        const _this = this
        this.getJsonData('/boardList/' + this.$route.params.category, function (data) {
            _this.boardList = data
        })
    }
}
</script>

<style lang="scss" scoped>
    .board-title{font-size:17px;border-bottom:1px solid #ddd;margin-bottom:15px;padding-bottom:15px;}
</style>

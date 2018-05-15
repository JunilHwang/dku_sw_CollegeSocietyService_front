<template>
    <div class="board-list">
        <ul v-if="boardList.length">
            <li v-for="data in boardList" :key="data.idx">
                <strong class="subject"><router-link :to="getLink(data.idx)" v-html="data.subject" /></strong>
                <p class="desc" v-html="data.content" />
                <p class="date" v-html="getDateFormat(data.reg_date)" />
            </li>
        </ul>
        <p v-else>
            게시물이 없습니다.
        </p>
        <div class="btn_group right" v-show="$store.state.isMember">
            <router-link :to="'/board/write/'+categoryId" class="btn default">글작성</router-link>
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
    computed: {
        categoryId () {
            this.getList()
            return this.$route.params.category
        }
    },
    created () {
        this.getList()
    },
    methods: {
        getList () {
            const _this = this
            const url = '/boardList/' + this.$route.params.category
            console.log(url)
            this.getJsonData(url, function (data) {
                _this.boardList = data
            })
        },
        getLink (index) {
            return `/board/view/${this.$route.params.category}/${index}`
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "@/styles/_base.scss";
    .board-list{
        li{border-bottom:1px dotted #ddd;padding:20px 0}
        .subject a{font-size:19px;color:$color1-2;}
        .desc{padding: 5px 0;line-height:160%;color:#666;}
        .date{font-size:12px; color:#999;}
    }
</style>

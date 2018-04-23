<template>
    <div class="board">
        <h2 class="content-title">커뮤니티</h2>
        <div class="board-wrap">
            <div class="category">
                <strong class="category-title">카테고리</strong>
                <ul>
                    <li v-for="(data,index) in categoryList" :key="data.idx">
                        <router-link :to="`/board/list/${data.idx}`" v-html="data.name" @click.native="setCategory(index)" :class="$route.params.category == data.idx ? 'router-link-active' : ''"></router-link>
                    </li>
                </ul>
            </div>
            <div class="board-content">
                <h3 class="legend" v-html="category_name"></h3>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Board',
    data: function () {
        return {
            categoryList: [],
            category_name: '공지사항'
        }
    },
    methods: {
        setCategory (index) {
            this.category_name = this.categoryList[index].name
        }
    },
    created () {
        const _this = this
        this.getJsonData('/categoryList', function (data) {
            _this.categoryList = data
        })
    }
}
</script>

<style lang="scss" scoped>
    @import '@/styles/_base.scss';
    .board-wrap{display:flex;justify-content:space-between;
        .category{width:240px;border:1px solid #ddd;box-sizing:border-box;padding:20px;}
        .category-title{font-size:21px;color:$color1;display:block;margin-bottom:20px}
        a{display:block;padding:0 10px;border-bottom:1px dotted #ddd;line-height:40px;transition:.3s;text-decoration:none;
            &:hover,
            &.router-link-active{background:$color3;color:#fff;}
        }
        .board-content{width:calc(100% - 280px);}
    }
</style>

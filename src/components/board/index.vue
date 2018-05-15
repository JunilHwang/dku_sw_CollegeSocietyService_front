<template>
    <div class="board">
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
                <h2 class="content-title">커뮤니티</h2>
                <h3 class="legend" v-html="category_name"></h3>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Board',
    computed: {
        categoryList () {
            return this.$store.state.categoryList
        },
        category_name () {
            let name = '공지사항'
            if (this.categoryList.length) name = this.categoryList[this.$store.state.nowCategory].name
            return name
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/styles/_base.scss';
    .board{position:relative;padding-left:260px;}
    .board-wrap{background:#fff;}
    .category{width:240px;border:1px solid #ddd;box-sizing:border-box;padding:20px;height:350px;position:absolute;left:0;top:0;background:#fff;box-shadow:1px 1px 3px #ddd;}
    .category-title{font-size:21px;color:$color1;display:block;margin-bottom:20px}
    a{display:block;padding:0 10px;border-bottom:1px dotted #ddd;line-height:40px;transition:.3s;text-decoration:none;
        &:hover,
        &.router-link-active{background:$color3;color:#fff;}
    }
    .board-content{border:1px solid #ddd;padding:50px;min-height:350px;box-shadow:1px 1px 3px #ddd;}
</style>

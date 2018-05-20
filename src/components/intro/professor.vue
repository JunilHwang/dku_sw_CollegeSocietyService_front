<template>
    <div class="professor">
        <h2 class="content-title">교수소개</h2>
        <ul v-if="list.length > 0">
            <li v-for="data in list" :key="data.idx">
                <div class="img_wrap">
                    <img :src="require(`@/assets/upload/professor/${data.file_name}`)" :alt="data.file_name" />
                </div>
                <div class="info">
                    <p class="name">{{data.name}}</p>
                    <p class="course"><i class="fas fa-graduation-cap"></i> {{data.course}}</p>
                    <p class="email"><i class="fas fa-envelope"></i> {{data.email}}</p>
                    <p class="phone" v-if="data.tel.length > 0"><i class="fas fa-phone"></i> {{data.tel}}</p>
                    <p class="url" v-if="data.url.length > 0"><i class="fas fa-link"></i> {{data.url}}</p>
                    <p class="btm"><router-link class="btn default mini" :to="`./2/${data.idx}`">상세보기</router-link></p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'IntroProfessor',
    data () {
        return {
            list: []
        }
    },
    created () {
        const _this = this
        const url = '/professor'
        console.log(url)
        this.getJsonData(url, function (data) {
            _this.list = data
            console.log(data)
        })
    }
}
</script>

<style lang="scss" scoped>
    @import '@/styles/_base.scss';
    .professor{
        li{display:flex;border-bottom:1px dashed #ddd;padding:20px 0;position:relative;}
        p{line-height:200%}
        .info{padding-left:20px;}
        .fas{color:$color2-1;width:20px;text-align:center;display:inline-block;}
        .name{font-size:21px}
        .btm{margin-top:10px;position:absolute;right:0;bottom:20px;}
        .img_wrap img{width:120px;height:160px}
    }
</style>

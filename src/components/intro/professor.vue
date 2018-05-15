<template>
    <div class="professor">
        <h3 class="legend">교수소개</h3>
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
                    <p class="btm"><router-link class="btn default mini" :to="`./professorDetail/${data.idx}`">상세보기</router-link></p>
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
        li{display:flex;border-bottom:1px dashed #ddd;padding:20px 0;}
        p{line-height:200%}
        .fas{color:$color2-1;}
        .name{font-size:21px}
        .btm{margin-top:10px}
        .img_wrap{width:150px;padding-right:10px;}
    }
</style>

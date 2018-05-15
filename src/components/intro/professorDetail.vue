<template>
    <div class="professor">
        <h2 class="content-title">교수소개</h2>
        <div v-if="state !== 0">
            <div class="info_wrap">
                <div class="img_wrap">
                    <img :src="require(`@/assets/upload/professor/${data.file_name}`)" :alt="data.file_name" />
                </div>
                <div class="info">
                    <p class="name">{{data.name}}</p>
                    <p class="course"><i class="fas fa-graduation-cap"></i> {{data.course}}</p>
                    <p class="email"><i class="fas fa-envelope"></i> {{data.email}}</p>
                    <p class="phone" v-if="data.tel.length > 0"><i class="fas fa-phone"></i> {{data.tel}}</p>
                    <p class="url" v-if="data.url.length > 0"><i class="fas fa-link"></i> {{data.url}}</p>
                    <p class="btm">
                        <a href="#" class="btn default mini" @click="$router.go(-1)">목록</a>
                    </p>
                </div>
            </div>
            <div class="detail-text" v-html="data.content" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'IntroProfessorDetail',
    data () {
        return {
            state: 0,
            data: {}
        }
    },
    created () {
        const _this = this
        const url = `/professor/${this.$route.params.idx}`
        console.log(url)
        this.getJsonData(url, function (data) {
            _this.state = 1
            _this.data = data
            console.log(data)
        })
    }
}
</script>

<style lang="scss">
    @import '@/styles/_base.scss';
    .professor{
        .info_wrap{display:flex;border-bottom:1px dashed #ddd;padding:20px 0;align-items:center;position:relative;
            p+p{padding-top:15px;}
            .fas{color:$color2-1;}
            .name{font-size:21px}
            .img_wrap{width:120px;padding-right:10px;}
            .btm{position:absolute;right:0;bottom:20px}
        }
        .list{padding-top:30px;
            strong{font-size:19px;color:$color1;display:block;margin-bottom:10px;}
            p{line-height:200%;padding-left:20px}
        }
    }
</style>

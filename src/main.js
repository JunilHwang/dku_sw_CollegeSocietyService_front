// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store'
import $ from 'jquery'
import moment from 'moment'

Vue.config.productionTip = false
const restUrl = 'http://220.149.235.59:5000'

Vue.mixin({
    methods: {
        getJsonData (url, fun) {
            url = `${restUrl}${url}`
            $.ajax({
                url: url,
                dataType: 'json'
            }).done(fun)
        },
        postData (url, data, fun) {
            url = `${restUrl}${url}`
            $.post(url, data).done(fun)
        },
        putData (url, data, fun) {
            url = `${restUrl}${url}`
            $.ajax({
                type: 'put',
                url: url,
                data: data
            }).done(fun)
        },
        deleteData (url, fun) {
            url = `${restUrl}${url}`
            $.ajax({
                type: 'delete',
                url: url
            }).done(fun)
        },
        setCategory (index) {
            this.$store.commit('activeCategory', index)
        },
        getDateFormat (date) {
            const now = moment(date)
            return now.format('YYYY-MM-DD HH:mm:ss')
        }
    },
    mounted () {
        if ($('[autofocus]').length) {
            $('[autofocus]').focus()
        }
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    router,
    store,
    template: '<App />',
    created () {
        const _this = this
        const storageList = sessionStorage.getItem('categoryList')
        if (storageList) {
            _this.$store.commit('setCategory', JSON.parse(storageList))
            return
        }
        this.getJsonData('/categoryList', function (data) {
            _this.$store.commit('setCategory', data)
        })
    }
})

$(document)
    .on('click', 'a[href="#"]', function () { return false })
    .on('submit', 'form', function () { return false })

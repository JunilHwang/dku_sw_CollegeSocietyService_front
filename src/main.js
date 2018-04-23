// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store'
import $ from 'jquery'

Vue.config.productionTip = false
const restUrl = 'http://127.0.0.1:5000'

function getJsonData (url, fun) {
    url = `${restUrl}${url}`
    $.ajax({
        url: url,
        dataType: 'json',
        success: fun
    })
}

function postData (url, data, fun) {
    url = `${restUrl}${url}`
    $.post(url, data).done(fun)
}

function putData (url, data, fun) {
    url = `${restUrl}${url}`
    $.ajax({
        type: 'put',
        url: url,
        data: data
    }).done(fun)
}

function deleteData (url, fun) {
    url = `${restUrl}${url}`
    $.ajax({
        type: 'delete',
        url: url
    }).done(fun)
}

Vue.mixin({
    methods: {
        getJsonData: getJsonData,
        postData: postData,
        putData: putData,
        deleteData: deleteData
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    router,
    store,
    template: '<App />'
})

$(document)
    .on('click', 'a[href="#"]', function () { return false })
    .on('submit', 'form', function () { return false })

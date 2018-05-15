<template>
    <div id="app">
        <siteHeader v-if="this.$store.state.isHeader" />
        <div :class="'site-content'+siteContentCustom">
            <router-view/>
        </div>
        <siteFooter v-if="this.$store.state.isFooter" />
    </div>
</template>
<script>

import siteHeader from '@/components/header'
import siteFooter from '@/components/footer'
export default {
    name: 'App',
    computed: {
        siteContentCustom () {
            let className = ''
            if (this.$route.path.indexOf('board') !== -1) {
                className = ' type2'
            }
            return className
        }
    },
    components: {
        siteHeader,
        siteFooter
    }
}

</script>
<style lang="scss" src="@/styles/common.scss"></style>

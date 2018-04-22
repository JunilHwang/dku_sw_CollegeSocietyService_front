<template>
    <div id="app">
        <siteHeader v-if="this.$store.state.isHeader" />
        <div class="site-content">
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
    components: {
        siteHeader,
        siteFooter
    }
}

</script>
<style lang="scss" src="@/styles/common.scss"></style>

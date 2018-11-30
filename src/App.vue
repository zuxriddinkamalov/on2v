<template>
  <div id="app">
    <VHeader />
    <router-view />
    <VFooter />
    <div class="loading" v-if="loading">
      <Diamond size="60px" />
    </div>
  </div>
</template>
<script>
import { Diamond } from 'vue-loading-spinner'
import { mapState } from 'vuex'
import VHeader from '@/components/VHeader'
import VFooter from '@/components/VFooter'

export default {
  name: 'App',
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'on2v',
    // all titles will be injected into this template
    titleTemplate: '%s | 홈 · ON2V'
  },
  mounted () {
    let self = this
    if (!this.$store.getters['auth/check'] && this.$store.getters['auth/token']) {
      self.$ploading()
      this.$store.dispatch('auth/fetchUser').then(resolve => {
        self.$ploading(false)
      }, reject => {
        self.$ploading(false)
      })
    }
  },
  computed: {
    ...mapState({
      loading: state => state.loading
    })
  },
  components: {
    VHeader,
    VFooter,
    Diamond
  }
}
</script>

<style lang="sass" scoped>
  .loading
    position: fixed
    top: 0
    width: 100%
    height: 100%
    display: flex
    align-items: center
    justify-content: center
    background: rgba(0, 0, 0, 0.6)
    z-index: 1
  #app
    display: flex
    overflow: hidden
    min-height: 100vh
    flex-direction: column
</style>

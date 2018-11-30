import Vue from 'vue'
/* ============
 * Plugins
 * ============
 *
 * Import plugins.
 */
import './plugins/vuex'
import './plugins/axios'
import './plugins/font-awesome'
import './plugins/element-ui'
import './plugins/vue-ramda'
import './plugins/vue-meta'
import './plugins/vuex-router-sync'

import { i18n } from './plugins/i18n'
import store from './store'
import { router } from './plugins/vue-router'

/* ============
 * Main App
 * ============
 *
 * Last but not least, we import the main application.
 */
import App from './App.vue'
import GlobalMixin from '@/mixins/global'

Vue.config.productionTip = false
window.api =
  window.config.env === 'local' ? 'http://127.0.0.1:8800' : window.config.api
window.storage =
  window.config.env === 'local'
    ? 'http://127.0.0.1:8800'
    : window.config.storage

Vue.mixin(GlobalMixin)

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')

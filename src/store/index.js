/* ============
 * Vuex Store
 * ============
 *
 * The store of the application.
 *
 * http://vuex.vuejs.org/en/index.html
 */

import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

// Modules
import main from './modules/main'
import auth from './modules/auth'
import lang from './modules/lang'

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  ...main,
  /**
   * Assign the modules to the store.
   */

  modules: {
    auth,
    lang
  },

  /**
   * If strict mode should be enabled.
   */
  strict: debug,

  /**
   * Plugins used in the store.
   */
  plugins: debug ? [createLogger()] : []
})

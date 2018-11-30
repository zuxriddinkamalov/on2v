/* ============
 * Mutations for the lang module
 * ============
 *
 * The mutations that are available on the
 * lang module.
 */

import { SET_LOCALE } from './mutation-types'

/* eslint-disable no-param-reassign */
export default {
  [SET_LOCALE] (state, { locale }) {
    state.locale = locale
  }
}

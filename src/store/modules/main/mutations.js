/* ============
 * Mutations for the main state
 * ============
 *
 * The mutations that are available on the
 * main state.
 */

/* eslint-disable no-param-reassign */
import { SET_LOADING } from './mutation-types'

/* eslint-disable no-param-reassign */
export default {
  [SET_LOADING] (state, status) {
    state.loading = status
  }
}
